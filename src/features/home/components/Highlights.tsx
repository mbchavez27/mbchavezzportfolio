import { motion } from "motion/react";
import { CARD_LIGHT, GRID_GAP } from "@/components/atoms/surfaces";
import TagList from "@/components/molecules/TagList";
import { formatIndex } from "@/lib/format";
import { revealOnScroll } from "@/lib/motion";
import type { Highlight } from "../domain/home.domain";

// Bento spans by position: a wide feature card, a square card, then a full-width card.
const SPANS = ["md:col-span-2", "", "md:col-span-3"] as const;

export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="bg-white border-t border-zinc-100 py-24">
      <div className="page-container mb-12">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900">
          A showcase of my work across three disciplines.
        </h2>
      </div>

      <div className={`page-container grid grid-cols-1 md:grid-cols-3 ${GRID_GAP}`}>
        {highlights.map((highlight, i) => (
          <motion.div
            key={highlight.title}
            {...revealOnScroll({ y: 24, delay: i * 0.1, duration: 0.5 })}
            className={`flex flex-col justify-between gap-10 p-8 ${CARD_LIGHT} ${SPANS[i] ?? ""}`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-display text-5xl font-semibold text-zinc-900">{highlight.metric.value}</p>
                <p className="font-body font-light text-xs text-zinc-400 mt-1">{highlight.metric.label}</p>
              </div>
              <span className="font-body font-light text-xs text-zinc-300">{formatIndex(i)}</span>
            </div>

            <div>
              <p className="font-body font-light text-xs text-primary tracking-wide uppercase mb-3">{highlight.category}</p>
              <p className="font-display text-lg font-semibold text-zinc-900 mb-2 leading-snug">{highlight.title}</p>
              <p className="font-body font-light text-sm text-zinc-500 leading-relaxed mb-5">{highlight.description}</p>
              <TagList tags={highlight.tags} variant="light" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
