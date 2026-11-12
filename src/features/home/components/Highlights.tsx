import { motion } from "motion/react";
import { BookOpen, CodeXml, Sparkles, Video, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { Highlight } from "../domain/home.domain";

// One icon per discipline, in data order: research, software, production.
const DISCIPLINE_ICONS: readonly LucideIcon[] = [BookOpen, CodeXml, Video];

function Category({ highlight, Icon }: { highlight: Highlight; Icon: LucideIcon }) {
  return (
    <p className="flex items-center gap-2 font-body text-xs text-zinc-500 [font-variant:small-caps] tracking-wide mb-1.5">
      <Icon size={14} className="shrink-0 text-primary" />
      {highlight.category.toLowerCase()}
    </p>
  );
}

function Tags({ tags }: { tags: readonly string[] }) {
  return <p className="font-body font-light text-xs text-zinc-400 mt-1.5">{tags.join(" · ")}</p>;
}

/** Selected highlights as a numbered, paper-style contributions list with a discipline icon per item. */
export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading number="3" title="A showcase of my work across three disciplines." />

      <ol className="max-w-4xl space-y-5">
        {highlights.map((highlight, i) => {
          const Icon = DISCIPLINE_ICONS[i] ?? Sparkles;
          const metric = `${highlight.metric.value} ${highlight.metric.label.toLowerCase()}`;


          return (
            <motion.li
              key={highlight.title}
              {...revealOnScroll({ y: 10, delay: i * 0.07, duration: 0.45 })}
              className="grid grid-cols-[1.75rem_1fr]"
            >
              <span className="font-display font-semibold text-primary tabular-nums">{i + 1}.</span>
              <div>
                <Category highlight={highlight} Icon={Icon} />
                <p className="font-body font-light text-sm leading-relaxed text-zinc-600">
                  <strong className="font-display font-semibold text-base text-zinc-900">{metric}</strong>
                  <span className="text-zinc-400"> — </span>
                  <span className="font-display font-semibold text-zinc-900">{highlight.title}</span>{" "}
                  {highlight.description}
                </p>
                <Tags tags={highlight.tags} />
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
}
