import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import redGradient from "@/assets/background/red-gradient.jpg";
import Navbar from "@/components/organisms/Navbar";
import { BackdropContext } from "@/lib/backdrop";

/**
 * The site's frame: a fixed backdrop behind one centered column that holds the navbar and page.
 * The backdrop is black while the home hero is on stage; once you scroll past it, red panels slide
 * in from both screen edges like curtains closing behind the column.
 * It is a fixed element rather than `background-attachment: fixed`, which iOS Safari ignores.
 */
export default function SiteFrame({ children }: { children: ReactNode }) {
  const darkness = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const rawRedAmount = useTransform(darkness, (value) => 1 - value);
  const smoothRedAmount = useSpring(rawRedAmount, { stiffness: 420, damping: 46, mass: 0.5, restDelta: 0.001 });
  const redAmount = prefersReducedMotion ? rawRedAmount : smoothRedAmount;
  const leftCurtainX = useTransform(redAmount, [0, 1], ["-100%", "0%"]);
  const rightCurtainX = useTransform(redAmount, [0, 1], ["100%", "0%"]);

  return (
    <BackdropContext value={darkness}>
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-zinc-950">
        {/* Each curtain shows its own half of the full-screen image and carries it as it slides. */}
        <motion.div style={{ x: leftCurtainX }} className="absolute inset-y-0 left-0 w-1/2 overflow-hidden will-change-transform">
          <img src={redGradient} alt="" className="absolute inset-y-0 left-0 w-screen h-full max-w-none object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
        <motion.div style={{ x: rightCurtainX }} className="absolute inset-y-0 right-0 w-1/2 overflow-hidden will-change-transform">
          <img src={redGradient} alt="" className="absolute inset-y-0 right-0 w-screen h-full max-w-none object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-3xl min-h-screen bg-white text-foreground overflow-clip lg:shadow-2xl">
        <Navbar />
        <main>{children}</main>
      </div>
    </BackdropContext>
  );
}
