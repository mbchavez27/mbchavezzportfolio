import { motion } from "motion/react";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { Highlight } from "../domain/home.domain";

const PANEL_LABELS = ["a", "b", "c", "d"] as const;

/** Selected highlights as a multi-panel results figure: (a), (b), (c), each led by its headline number. */
export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading number="3" title="A showcase of my work across three disciplines." />

      <figure>
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/15 border-t-2 border-zinc-900 border-b border-b-zinc-300">
          {highlights.map((highlight, i) => (
            <motion.div
              key={highlight.title}
              {...revealOnScroll({ y: 12, delay: i * 0.08, duration: 0.45 })}
              className="py-6 md:px-6 md:first:pl-0 md:last:pr-0"
            >
              <p className="font-body text-sm text-zinc-500 [font-variant:small-caps] tracking-wide">
                <span className="text-primary tabular-nums mr-1.5">({PANEL_LABELS[i] ?? i + 1})</span>
                {highlight.category.toLowerCase()}
              </p>

              <p className="font-display text-4xl md:text-5xl font-semibold text-zinc-900 tabular-nums mt-4">
                {highlight.metric.value}
              </p>
              <p className="font-body font-light text-xs text-zinc-400 mt-1">{highlight.metric.label}</p>

              <h3 className="font-display font-semibold text-zinc-900 text-[15px] leading-snug mt-5">{highlight.title}</h3>
              <p className="font-body font-light text-sm text-zinc-500 leading-relaxed mt-1.5">{highlight.description}</p>
              <p className="font-body font-light text-xs text-zinc-400 mt-3">{highlight.tags.join(" · ")}</p>
            </motion.div>
          ))}
        </div>

        <figcaption className="mt-3 font-body font-light text-sm leading-snug text-zinc-500">
          <span className="font-semibold text-primary">Fig. 4.</span> Selected highlights: (a) research, (b) software
          engineering, (c) live production.
        </figcaption>
      </figure>
    </section>
  );
}
