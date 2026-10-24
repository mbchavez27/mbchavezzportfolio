import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";

type Props = {
  title: string;
  subtitle: string;
};

export default function SectionIntro({ title, subtitle }: Props) {
  return (
    <motion.div {...revealOnScroll()} className="px-6 sm:px-10 md:px-24 lg:px-32 pt-20 pb-10">
      <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 mb-3">{title}</h2>
      <p className="font-body text-sm text-zinc-400">{subtitle}</p>
    </motion.div>
  );
}
