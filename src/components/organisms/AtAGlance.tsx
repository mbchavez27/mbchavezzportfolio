import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import AccentRule from "@/components/atoms/AccentRule";
import Tag from "@/components/atoms/Tag";

export type Stat = { readonly value: string; readonly label: string };
export type TagGroup = { readonly label: string; readonly tags: readonly string[] };

type Props = {
  title: string;
  stats: readonly Stat[];
  tagGroups: readonly TagGroup[];
};

const statColumns: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

/** Summary band at the top of a page: headline numbers plus labelled tag rows. */
export default function AtAGlance({ title, stats, tagGroups }: Props) {
  return (
    <motion.div {...revealOnScroll()} className="border-t border-b border-zinc-100 mb-20 relative overflow-hidden">
      <AccentRule />

      <div className="px-6 sm:px-10 md:px-24 lg:px-32 pt-16 pb-5 border-b border-zinc-100">
        <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase">{title}</p>
      </div>

      <div
        className={`grid grid-cols-1 ${statColumns[stats.length] ?? "sm:grid-cols-3"} divide-y sm:divide-y-0 sm:divide-x divide-zinc-100`}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            {...revealOnScroll({ y: 16, delay: i * 0.1, duration: 0.5 })}
            className="px-6 sm:px-10 md:px-24 lg:px-32 py-10"
          >
            <p className="font-display text-4xl font-semibold text-zinc-900 mb-1">{stat.value}</p>
            <p className="font-body font-light text-xs text-zinc-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {tagGroups.map((group) => (
        <div
          key={group.label}
          className="px-6 sm:px-10 md:px-24 lg:px-32 py-5 border-t border-zinc-100 flex flex-wrap items-center gap-2"
        >
          <p className="font-body font-light text-xs text-zinc-400 tracking-wide mr-2">{group.label}</p>
          {group.tags.map((tag) => (
            <Tag key={tag} label={tag} variant="light" />
          ))}
        </div>
      ))}
    </motion.div>
  );
}
