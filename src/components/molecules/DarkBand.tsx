import { useEffect, useRef, type ReactNode } from "react";
import { easeInOut, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useBackdropDarkness } from "@/lib/backdrop";

type Props = {
  className?: string;
  children: ReactNode;
};

/**
 * A dark section at the very top of a page (the home hero). The site backdrop is black while it is
 * fully on screen, and the red curtains slide in from the first pixel scrolled down.
 */
export default function DarkBand({ className = "", children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const darkness = useBackdropDarkness();

  // The navbar is 3.5rem (56px) tall and sticky, so the band sits that far below the top of the screen.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 56px", "end 56px"] });
  // Finish within the first ~25% of the band's scroll so the change feels quick, eased at both ends.
  const amount = useTransform(scrollYProgress, [0, 0.25], [1, 0], { ease: easeInOut });

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
