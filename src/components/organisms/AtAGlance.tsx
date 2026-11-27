import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";

export type Stat = { readonly value: string | number; readonly label: string };
export type TagGroup = { readonly label: string; readonly tags: readonly string[] };

type Props = {
  /** Names the block for screen readers; it is not shown. */
  title: string;
  stats: readonly Stat[];
  tagGroups: readonly TagGroup[];
};

/** The summary at the top of a page: a row of headline numbers, then one line per group of tags. */
export default function AtAGlance({ title, stats, tagGroups }: Props) {
  return (
    <motion.section {...revealOnScroll()} aria-label={title} className="page-container mt-5 mb-6">
      <dl className="grid grid-cols-3 gap-4 sm:gap-6 border-t-2 border-zinc-900 py-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse justify-end gap-1">
            <dt className="font-body text-xs uppercase tracking-wide text-zinc-500">{stat.label}</dt>
            <dd className="font-display text-2xl sm:text-3xl font-semibold tabular-nums text-zinc-900">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <dl>
        {tagGroups.map((group) => (
          <div
            key={group.label}
            className="grid grid-cols-1 sm:grid-cols-[8rem_1fr] gap-x-6 gap-y-0.5 border-t border-zinc-200 py-2.5"
          >
            <dt className="font-body text-xs uppercase tracking-wide text-primary sm:pt-0.5">{group.label}</dt>
            <dd className="font-body font-light text-sm text-zinc-600">{group.tags.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </motion.section>
  );
}
