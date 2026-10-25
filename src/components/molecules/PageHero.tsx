import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealOnLoad } from "@/lib/motion";

type Props = {
  eyebrow: string;
  children: ReactNode;
};

export default function PageHero({ eyebrow, children }: Props) {
  return (
    <motion.div {...revealOnLoad({ y: 20 })} className="mb-20 px-6 sm:px-10 md:px-24 lg:px-32">
      <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 leading-snug">{children}</h1>
    </motion.div>
  );
}
