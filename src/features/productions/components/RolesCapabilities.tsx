import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import type { Capability } from "../domain/productions.domain";

export default function RolesCapabilities({ capabilities }: { capabilities: readonly Capability[] }) {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800 py-24 px-10 md:px-24 lg:px-32">
      <motion.div {...revealOnScroll()} className="mb-16">
        <p className="font-body text-xs text-zinc-600 tracking-[0.2em] uppercase mb-5">Roles & Capabilities</p>
      </motion.div>

      <div className="flex flex-col divide-y divide-zinc-800">
        {capabilities.map((capability, i) => (
          <motion.div
            key={capability.label}
            {...revealOnScroll({ y: 16, delay: i * 0.1, duration: 0.45 })}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-4 py-8"
          >
            <p className="font-display text-sm font-semibold text-white">{capability.label}</p>
            <p className="font-body text-sm text-zinc-400">{capability.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
