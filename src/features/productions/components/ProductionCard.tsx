import { motion } from "motion/react";
import { CARD_MEDIA } from "@/components/atoms/surfaces";
import { formatIndex } from "@/lib/format";
import { revealOnScroll } from "@/lib/motion";
import type { Production } from "../domain/productions.domain";

type Props = {
  production: Production;
  position: number;
  /** Bento span classes from the grid. */
  className?: string;
};

export default function ProductionCard({ production, position, className = "" }: Props) {
  return (
    <motion.div
      {...revealOnScroll({ y: 24, delay: (position % 2) * 0.1, duration: 0.5 })}
      className={`relative group min-h-64 ${CARD_MEDIA} ${className}`}
    >
      <img src={production.image} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-zinc-950/65 group-hover:bg-zinc-950/80 transition-colors duration-500" />

      <div className="relative z-10 flex flex-col justify-between gap-6 h-full p-6">
        <div className="flex items-start justify-between gap-4">
          <span className="font-body font-light text-xs text-zinc-500">{formatIndex(position)}</span>
          <span className="font-body font-light text-xs text-zinc-400 tracking-wide">{production.date}</span>
        </div>

        <div>
          <p className="font-display text-lg md:text-xl font-semibold text-white mb-1">{production.title}</p>
          <p className="font-body font-light text-sm text-zinc-400 mb-3">
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
      </div>

      <div className="absolute bottom-0 left-0 h-px bg-white/20 w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
