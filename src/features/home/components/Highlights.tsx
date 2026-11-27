import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { Highlight } from "../domain/home.domain";

/** Selected work, one line each: the hat on the left, the linked title, and one fact on the right. */
export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="page-container pb-16 md:pb-20">
      <SectionHeading number="3" title="Selected Work" />

      <EntryList>
        {highlights.map((highlight, i) => (
          <motion.li
            key={highlight.title}
            {...revealOnScroll({ y: 12, delay: i * 0.05, duration: 0.45 })}
            className="grid grid-cols-1 sm:grid-cols-[8rem_1fr_auto] items-baseline gap-x-6 gap-y-1 py-3.5"
          >
            <span className="font-body font-light text-xs text-zinc-400 tracking-wide">{highlight.hat}</span>
            <Link
              to={highlight.to}
              className="group justify-self-start inline-flex items-baseline gap-1.5 font-display text-[15px] md:text-base font-semibold text-zinc-900 leading-snug hover:text-primary transition-colors duration-200"
            >
              {highlight.title}
              <ArrowRight
                size={14}
                className="shrink-0 self-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
              />
            </Link>
            <span className="font-body font-light text-sm text-zinc-500 tabular-nums sm:text-right">{highlight.fact}</span>
          </motion.li>
        ))}
      </EntryList>
    </section>
  );
}
