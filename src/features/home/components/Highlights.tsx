import { motion } from "motion/react";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { Highlight } from "../domain/home.domain";

/**
 * Selected work as a numbered, paper-style list. Each item names the hat it comes from, a title and one
 * supporting line, with its metric set apart in a right-hand figure column like a table in a paper.
 */
export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="page-container pb-16 md:pb-20">
      <SectionHeading number="3" title="Selected work." />

      <ol className="max-w-4xl divide-y divide-zinc-100">
        {highlights.map((highlight, i) => (
          <motion.li
            key={highlight.title}
            {...revealOnScroll({ y: 10, delay: i * 0.07, duration: 0.45 })}
            className="grid grid-cols-[1.75rem_1fr] sm:grid-cols-[1.75rem_1fr_auto] py-4 first:pt-0 last:pb-0"
          >
            {/* The hat line sits above the title, so the number lines up with the title, not the hat. */}
            <p className="col-start-2 font-body text-xs text-primary mb-0.5">{highlight.hat}</p>
            {/* On phones the figure drops below the description; from sm up it gets its own right-hand column. */}
            <div className="col-start-2 row-start-4 mt-2 flex items-baseline gap-1.5 sm:col-start-3 sm:row-start-1 sm:row-span-3 sm:mt-0 sm:block sm:self-center sm:pl-6 sm:text-right">
              <p className="font-display font-semibold text-base sm:text-xl md:text-2xl text-zinc-900 tabular-nums leading-none">
                {highlight.metric.value}
              </p>
              <p className="font-body text-xs text-zinc-400 sm:mt-1 whitespace-nowrap">{highlight.metric.label}</p>
            </div>
            <span className="col-start-1 row-start-2 font-display font-semibold text-primary tabular-nums">{i + 1}.</span>
            <p className="col-start-2 row-start-2 font-display font-semibold text-zinc-900">{highlight.title}</p>
            <p className="col-start-2 row-start-3 font-body font-light text-sm leading-relaxed text-zinc-500 mt-0.5">
              {highlight.description}
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
