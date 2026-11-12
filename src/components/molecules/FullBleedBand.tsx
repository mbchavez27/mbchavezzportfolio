import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { BLEED_LAYER_CLASS, useBleedInset, useNavbarBleed } from "@/lib/full-bleed";

/**
 * Where the band sits on the page, which decides how scrolling drives it:
 * - "top": full width at the very top of the page, narrowing from the first pixel scrolled down
 *   until the band has scrolled up under the navbar.
 * - "bottom": widening from the moment the band peeks in at the bottom of the screen until the
 *   page bottom, where it is full width.
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
  /** Also widen the navbar together with this band (for a band directly under it). */
  extendsNavbar?: boolean;
  children: ReactNode;
};

/**
 * A dark section whose background width follows the scroll position, between the site column and
 * the full screen (see `Anchor`). The content stays in the column.
 */
export default function FullBleedBand({ anchor, className = "", extendsNavbar = false, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const navbarBleed = useNavbarBleed();

  const { scrollYProgress } = useScroll({ target: ref, offset: [...OFFSETS[anchor]] });
  const rawBleed = useTransform(scrollYProgress, [0, 1], anchor === "top" ? [1, 0] : [0, 1]);
  const smoothBleed = useSpring(rawBleed, { stiffness: 220, damping: 40, restDelta: 0.001 });
  const bleed = prefersReducedMotion ? rawBleed : smoothBleed;
  const inset = useBleedInset(bleed);

  useMotionValueEvent(bleed, "change", (amount) => {
    if (extendsNavbar) navbarBleed.set(amount);
  });

  useEffect(() => {
    if (!extendsNavbar) return;
    navbarBleed.set(bleed.get());
    return () => navbarBleed.set(0);
  }, [extendsNavbar, bleed, navbarBleed]);

  return (
    <section ref={ref} className={`relative isolate ${className}`}>
      <motion.div aria-hidden style={{ left: inset, right: inset }} className={`${BLEED_LAYER_CLASS} bg-zinc-950`} />
      {children}
    </section>
  );
}
