import { motion } from "motion/react";
import TagList from "@/components/molecules/TagList";
import { formatIndex } from "@/lib/format";
import { revealOnScroll } from "@/lib/motion";
import type { Highlight } from "../domain/home.domain";

export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="bg-white border-t border-zinc-100 py-24">
      <div className="px-6 sm:px-10 md:px-16 mb-16">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900">
          A showcase of my work across three disciplines.
        </h2>
      </div>

      <div className="flex flex-col divide-y divide-zinc-100">
        {highlights.map((highlight, i) => (
          <motion.div
            key={highlight.title}
            {...revealOnScroll({ x: -24, y: 0, delay: i * 0.1, duration: 0.5 })}
            className="group grid grid-cols-1 md:grid-cols-[160px_1fr_120px] gap-8 py-10 px-6 sm:px-10 md:px-16 hover:bg-zinc-50 transition-colors duration-200"
          >
            <div className="flex flex-col justify-center">
              <span className="font-body font-light block text-xs text-zinc-300 mb-3">{formatIndex(i)}</span>
              <p className="font-body font-light text-xs text-zinc-400 tracking-wide uppercase">{highlight.category}</p>
            </div>

            <div>
              <p className="font-display text-base font-semibold text-zinc-900 mb-2 leading-snug">{highlight.title}</p>
              <p className="font-body font-light text-sm text-zinc-400 leading-relaxed mb-4">{highlight.description}</p>
              <TagList tags={highlight.tags} variant="light" />
            </div>

            <div className="flex flex-col items-end justify-center">
              <p className="font-display text-3xl font-semibold text-zinc-900">{highlight.metric.value}</p>
              <p className="font-body font-light text-xs text-zinc-400 text-right">{highlight.metric.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
