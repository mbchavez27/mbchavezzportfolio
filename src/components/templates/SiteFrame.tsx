import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import redGradient from "@/assets/background/red-gradient.jpg";
import Navbar from "@/components/organisms/Navbar";
import { BackdropContext } from "@/lib/backdrop";

/**
 * The site's frame: a fixed backdrop behind one centered column that holds the navbar and page.
 * The backdrop is black while a dark band (the home hero or contact) is on stage and red in between.
 * It is a fixed element rather than `background-attachment: fixed`, which iOS Safari ignores.
 * While the backdrop is red, the column lifts off it like a card: slightly smaller, with a deeper shadow.
 */
export default function SiteFrame({ children }: { children: ReactNode }) {
  const top = useMotionValue(0);
  const bottom = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const rawRedOpacity = useTransform([top, bottom], ([t = 0, b = 0]: number[]) => 1 - Math.max(t, b));
  const smoothRedOpacity = useSpring(rawRedOpacity, { stiffness: 220, damping: 40, restDelta: 0.001 });
  const redOpacity = prefersReducedMotion ? rawRedOpacity : smoothRedOpacity;

  const liftScale = useTransform(redOpacity, [0, 1], [1, 0.98]);
  const liftShadow = useTransform(
    redOpacity,
    [0, 1],
    ["0px 0px 0px -20px rgba(0,0,0,0)", "0px 40px 80px -20px rgba(0,0,0,0.6)"],
  );
  // The column is page-tall, so scale around the middle of the screen; otherwise the text being read would drift.
  const { scrollY } = useScroll();
  const liftOrigin = useTransform(scrollY, (y) => `50% ${y + window.innerHeight / 2}px`);

  return (
    <BackdropContext value={{ top, bottom }}>
      <div aria-hidden className="fixed inset-0 -z-10 bg-zinc-950">
        <motion.div style={{ opacity: redOpacity }} className="absolute inset-0">
          <img src={redGradient} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <motion.div
        style={
          prefersReducedMotion
            ? { boxShadow: liftShadow }
            : { scale: liftScale, boxShadow: liftShadow, transformOrigin: liftOrigin }
        }
        className="relative mx-auto max-w-6xl min-h-screen bg-white text-foreground overflow-clip will-change-transform lg:mb-10"
      >
        <Navbar />
        <main>{children}</main>
      </motion.div>
    </BackdropContext>
  );
}
