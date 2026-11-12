import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { BLEED_LAYER_CLASS, useBleedInset, useNavbarBleed } from "@/lib/full-bleed";

type Props = {
  className?: string;
  /** Also widen the navbar together with this band (for a band directly under it). */
  extendsNavbar?: boolean;
  children: ReactNode;
};

/**
 * A dark section whose background widens from the site column to the full screen as it scrolls
 * into the middle of the viewport, and narrows back as it scrolls away, tracking the scroll
 * position continuously. The content stays in the column.
 */
export default function FullBleedBand({ className = "", extendsNavbar = false, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const navbarBleed = useNavbarBleed();

  // 0 as the band's top enters the bottom of the screen, 1 once its bottom leaves the top.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Fully wide across the middle of that journey, easing open and closed at either end.
  const rawBleed = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0, 1, 1, 0]);
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
