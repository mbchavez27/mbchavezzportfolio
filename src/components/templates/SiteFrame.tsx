import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform, type MotionStyle } from "motion/react";
import Navbar from "@/components/organisms/Navbar";
import { BackdropContext } from "@/lib/backdrop";

/**
 * The site's frame: a fixed backdrop behind one centered column that holds the navbar and page.
 * The backdrop is black while the home hero is on stage; once you scroll past it, red panels slide
 * in from both screen edges like curtains closing behind the column.
 * It is a fixed element rather than `background-attachment: fixed`, which iOS Safari ignores.
 */
type Props = {
  /** Start with the black backdrop, for pages that open on the dark hero, so the red curtains don't flash in and slide away on load. */
  startsDark?: boolean;
  children: ReactNode;
};

export default function SiteFrame({ startsDark = false, children }: Props) {
  const darkness = useMotionValue(startsDark ? 1 : 0);
  const prefersReducedMotion = useReducedMotion();
  const rawRedAmount = useTransform(darkness, (value) => 1 - value);
  const smoothRedAmount = useSpring(rawRedAmount, { stiffness: 420, damping: 46, mass: 0.5, restDelta: 0.001 });
  const redAmount = prefersReducedMotion ? rawRedAmount : smoothRedAmount;
  const leftCurtainX = useTransform(redAmount, [0, 1], ["-100%", "0%"]);
  const rightCurtainX = useTransform(redAmount, [0, 1], ["100%", "0%"]);
  // The column's shadow only reads against the red curtains; on the black backdrop it shows as a halo.
  const shadowColor = useTransform(redAmount, (value) => `rgb(0 0 0 / ${0.25 * value})`);
  const navDividerOpacity = useTransform(redAmount, (value) => 1 - value);

  return (
    <BackdropContext value={darkness}>
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-zinc-950">
        {/* The navbar divider, carried out to the screen edges on the black backdrop; the curtains cover it. */}
        <div className="absolute inset-x-0 top-14 h-px bg-zinc-800" />
        {/* Each curtain shows its own half of the full-screen gradient and carries it as it slides. */}
        <motion.div style={{ x: leftCurtainX }} className="absolute inset-y-0 left-0 w-1/2 overflow-hidden will-change-transform">
          <div className="absolute inset-y-0 left-0 w-screen bg-curtain" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        <motion.div style={{ x: rightCurtainX }} className="absolute inset-y-0 right-0 w-1/2 overflow-hidden will-change-transform">
          <div className="absolute inset-y-0 right-0 w-screen bg-curtain" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <motion.div
        style={{ "--tw-shadow-color": shadowColor } as MotionStyle}
        className="relative mx-auto max-w-6xl min-h-screen bg-white text-foreground overflow-clip lg:shadow-2xl"
      >
        <Navbar dividerOpacity={navDividerOpacity} />
        <main>{children}</main>
      </motion.div>
    </BackdropContext>
  );
}
