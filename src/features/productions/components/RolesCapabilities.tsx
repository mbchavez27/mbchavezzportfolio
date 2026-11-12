import { motion } from "motion/react";
import Abstract from "@/components/atoms/Abstract";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { Capability } from "../domain/productions.domain";

/** Production roles as a numbered glossary: each term with its short definition. */
export default function RolesCapabilities({ capabilities }: { capabilities: readonly Capability[] }) {
  return (
    <section className="page-container pb-16">
      <SectionHeading number="2" title="Roles & Capabilities" />
      <Abstract>The roles I take on during live productions and what each one involves on the day of a show.</Abstract>

      <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
        {capabilities.map((capability, i) => (
          <motion.div
            key={capability.label}
            {...revealOnScroll({ y: 12, delay: (i % 2) * 0.06, duration: 0.45 })}
            className="border-t border-primary/10 py-4"
          >
            <dt className="flex items-baseline gap-3">
              <span className="font-body text-xs text-primary tabular-nums w-4 shrink-0">{i + 1}</span>
              <span className="font-display font-semibold text-zinc-900">{capability.label}</span>
            </dt>
            <dd className="font-body font-light text-sm text-zinc-500 leading-relaxed mt-1 pl-7">{capability.description}</dd>
          </motion.div>
        ))}
      </dl>
    </section>
  );
}
