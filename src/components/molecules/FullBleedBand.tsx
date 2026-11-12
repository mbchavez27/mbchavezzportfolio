import { useEffect, useRef, type ReactNode } from "react";
import { useInView } from "motion/react";
import { bleedLayerClass, useFullBleed } from "@/lib/full-bleed";

type Props = {
  /** The landmark element to render; the site footer uses "footer". */
  as?: "section" | "footer";
  className?: string;
  /** Extra classes for the widening background layer, e.g. a border. */
  layerClassName?: string;
  /** Also widen the navbar while this band is expanded (for a band directly under it). */
  extendsNavbar?: boolean;
  children: ReactNode;
};

/**
 * A dark section (or the footer) whose background widens from the site column to the full screen while it is
 * mostly in view, and narrows back as you scroll away. The content stays in the column.
 */
export default function FullBleedBand({ as: Tag = "section", className = "", layerClassName = "", extendsNavbar = false, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const expanded = useInView(ref, { amount: 0.6 });
  const { setNavbarExpanded } = useFullBleed();

  useEffect(() => {
    if (!extendsNavbar) return;
    setNavbarExpanded(expanded);
    return () => setNavbarExpanded(false);
  }, [extendsNavbar, expanded, setNavbarExpanded]);

  return (
    <Tag ref={ref} className={`relative isolate ${className}`}>
      <div aria-hidden className={`${bleedLayerClass(expanded)} bg-zinc-950 ${layerClassName}`} />
      {children}
    </Tag>
  );
}
