import { motion } from "motion/react";
import { formatIndex } from "@/lib/format";
import { revealOnScroll } from "@/lib/motion";
import type { Production } from "../domain/productions.domain";

type Props = {
  production: Production;
  position: number;
};

export default function ProductionRow({ production, position }: Props) {
  return (
    <motion.div
      {...revealOnScroll({ y: 24, delay: position * 0.1, duration: 0.5 })}
      className="relative overflow-hidden group min-h-64"
    >
      <img src={production.image} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-zinc-950/65 group-hover:bg-zinc-950/80 transition-colors duration-500" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[48px_1fr_auto] gap-6 px-6 sm:px-10 md:px-24 lg:px-32 py-12">
        <div className="flex items-start pt-1">
          <span className="font-body font-light text-xs text-zinc-500">{formatIndex(position)}</span>
        </div>

        <div>
          <p className="font-display text-xl font-semibold text-white mb-1">{production.title}</p>
          <p className="font-body font-light text-sm text-zinc-400 mb-5">
            {production.role} &mdash; <span className="text-zinc-500">{production.organization}</span>
          </p>
          <ul className="flex flex-col gap-1">
            {production.responsibilities.map((responsibility) => (
              <li key={responsibility} className="font-body font-light flex items-start gap-2 text-sm text-zinc-400">
                <span className="text-primary mt-1 shrink-0">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-start justify-end pt-1">
          <span className="font-body font-light text-xs text-zinc-500 tracking-wide">{production.date}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-px bg-white/10 w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
