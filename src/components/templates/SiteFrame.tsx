import type { ReactNode } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import redGradient from "@/assets/background/red-gradient.jpg";
import Navbar from "@/components/organisms/Navbar";
import { BackdropContext } from "@/lib/backdrop";

/**
 * The site's frame: a fixed backdrop behind one centered column that holds the navbar and page.
 * The backdrop is black while a dark band (the home hero or contact) is on stage and red in between.
 * It is a fixed element rather than `background-attachment: fixed`, which iOS Safari ignores.
 */
export default function SiteFrame({ children }: { children: ReactNode }) {
  const top = useMotionValue(0);
  const bottom = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const rawRedOpacity = useTransform([top, bottom], ([t = 0, b = 0]: number[]) => 1 - Math.max(t, b));
  const smoothRedOpacity = useSpring(rawRedOpacity, { stiffness: 220, damping: 40, restDelta: 0.001 });
  const redOpacity = prefersReducedMotion ? rawRedOpacity : smoothRedOpacity;

  return (
    <BackdropContext value={{ top, bottom }}>
      <div aria-hidden className="fixed inset-0 -z-10 bg-zinc-950">
        <motion.div style={{ opacity: redOpacity }} className="absolute inset-0">
          <img src={redGradient} alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <div className="relative mx-auto max-w-6xl min-h-screen bg-white text-foreground overflow-clip lg:mb-10 lg:shadow-2xl">
        <Navbar />
        <main>{children}</main>
      </div>
    </BackdropContext>
  );
}
