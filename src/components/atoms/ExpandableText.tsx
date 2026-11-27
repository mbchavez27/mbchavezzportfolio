import { type CSSProperties, useEffect, useRef, useState } from "react";

type Props = {
  children: string;
  className?: string;
};

const LINES = 3;
// Three lines of text-sm at leading-relaxed (0.875rem × 1.625).
const COLLAPSED_HEIGHT = "4.27rem";

/**
 * Text clipped to three lines that eases open to its full length on hover, keyboard focus or a tap.
 * Only text that actually overflows gets the fade and the expand; shorter text renders as is.
 */
export default function ExpandableText({ children, className = "" }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [fullHeight, setFullHeight] = useState<number | null>(null);

  // Compares the text's full height with three lines, not with the element's current height, which
  // grows while it is open and would otherwise make open text look like it no longer overflows.
  const measure = () => {
    const el = ref.current;
    if (!el) return;
    const collapsed = parseFloat(getComputedStyle(el).lineHeight) * LINES;
    setFullHeight(el.scrollHeight > collapsed + 1 ? el.scrollHeight : null);
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    measure();
    // Web fonts can change how the text wraps after the first measure.
    void document.fonts.ready.then(measure);
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
    // measure only reads the ref, so running this once on mount is enough.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const overflows = fullHeight !== null;

  return (
    <p
      ref={ref}
      onMouseEnter={measure}
      onFocus={measure}
      tabIndex={overflows ? 0 : undefined}
      style={{ "--collapsed": COLLAPSED_HEIGHT, "--full": `${fullHeight ?? 0}px` } as CSSProperties}
      className={[
        "relative overflow-hidden max-h-(--collapsed) outline-none",
        "transition-[max-height] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] motion-reduce:transition-none",
        overflows
          ? [
              "cursor-default hover:max-h-(--full) focus:max-h-(--full)",
              // A soft fade over the last line hints there is more; it clears as the text opens.
              "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-6",
              "after:bg-linear-to-t after:from-white after:to-transparent",
              "after:transition-opacity after:duration-300 hover:after:opacity-0 focus:after:opacity-0",
            ].join(" ")
          : "",
        className,
      ].join(" ")}
    >
      {children}
    </p>
  );
}
