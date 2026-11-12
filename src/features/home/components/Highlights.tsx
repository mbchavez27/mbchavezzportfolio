import { motion } from "motion/react";
import Summary from "@/components/atoms/Summary";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { Highlight } from "../domain/home.domain";

/** Selected highlights as a paper-style contributions list, each item led by its headline number. */
export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading number="3" title="A showcase of my work across three disciplines." />
      <Summary>My contributions span three disciplines:</Summary>

      <ol className="max-w-4xl space-y-5">
        {highlights.map((highlight, i) => (
          <motion.li
            key={highlight.title}
            {...revealOnScroll({ y: 10, delay: i * 0.07, duration: 0.45 })}
            className="grid grid-cols-[1.75rem_1fr]"
          >
            <span className="font-display font-semibold text-primary tabular-nums">{i + 1}.</span>
            <div>
              <p className="font-body font-light text-sm leading-relaxed text-zinc-600">
                <strong className="font-display font-semibold text-base text-zinc-900">
                  {highlight.metric.value} {highlight.metric.label.toLowerCase()}
                </strong>
                <span className="text-zinc-400"> — </span>
                <span className="font-display font-semibold text-zinc-900">{highlight.title}</span> {highlight.description}
              </p>
              <p className="font-body font-light text-xs text-zinc-400 mt-1.5">
                <span className="[font-variant:small-caps] tracking-wide">{highlight.category.toLowerCase()}</span>
                {highlight.tags.map((tag) => (
                  <span key={tag}> · {tag}</span>
                ))}
              </p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
