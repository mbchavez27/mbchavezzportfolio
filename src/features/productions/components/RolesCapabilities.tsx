import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import { CARD_DARK, GRID_GAP } from "@/components/atoms/surfaces";
import type { Capability } from "../domain/productions.domain";

export default function RolesCapabilities({ capabilities }: { capabilities: readonly Capability[] }) {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800 py-24">
      <div className="page-container">
        <motion.div {...revealOnScroll()} className="mb-12">
          <p className="font-body font-light text-xs text-zinc-600 tracking-[0.2em] uppercase mb-5">Roles & Capabilities</p>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${GRID_GAP}`}>
          {capabilities.map((capability, i) => (
            <motion.div
              key={capability.label}
              {...revealOnScroll({ y: 16, delay: i * 0.1, duration: 0.45 })}
              className={`flex flex-col gap-3 p-6 md:p-8 md:odd:last:col-span-2 ${CARD_DARK}`}
            >
              <p className="font-display text-sm font-semibold text-white">{capability.label}</p>
              <p className="font-body font-light text-sm text-zinc-400">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
