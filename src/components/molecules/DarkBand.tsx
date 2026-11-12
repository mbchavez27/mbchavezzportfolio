import { useEffect, useRef, type ReactNode } from "react";
import { easeInOut, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useBackdropDarkness } from "@/lib/backdrop";

/**
 * Where the band sits on the page, which decides how scrolling drives the backdrop:
 * - "top": the backdrop is black at the very top of the page and fades to red from the first pixel
 *   scrolled down, until the band has scrolled up under the navbar.
 * - "bottom": the backdrop fades back to black from the moment the band peeks in at the bottom of
 *   the screen, and is fully black at the page bottom.
 */
type Anchor = "top" | "bottom";

// The navbar is 3.5rem (56px) tall and sticky, so the hero sits that far below the top of the screen.
const OFFSETS = {
  top: ["start 56px", "end 56px"],
  bottom: ["start end", "end end"],
} as const;

type Props = {
  anchor: Anchor;
  className?: string;
  children: ReactNode;
};

/** A dark section that turns the site backdrop black while it is on screen (see `Anchor`). */
export default function DarkBand({ anchor, className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const darkness = useBackdropDarkness()[anchor];

  const { scrollYProgress } = useScroll({ target: ref, offset: [...OFFSETS[anchor]] });
  // Finish within the first ~25% of the band's scroll so the change feels quick, eased at both ends.
  const amount = useTransform(
    scrollYProgress,
    [0, 0.25],
    anchor === "top" ? [1, 0] : [0, 1],
    { ease: easeInOut },
  );

  useMotionValueEvent(amount, "change", (value) => darkness.set(value));

  useEffect(() => {
    darkness.set(amount.get());
    return () => darkness.set(0);
  }, [amount, darkness]);

  return (
    <section ref={ref} className={`bg-zinc-950 ${className}`}>
      {children}
    </section>
  );
}
