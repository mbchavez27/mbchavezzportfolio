import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import AccentRule from "@/components/atoms/AccentRule";
import Tag from "@/components/atoms/Tag";
import { CARD_LIGHT, GRID_GAP } from "@/components/atoms/surfaces";

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

/** Summary at the top of a page: headline-number cards plus a card of labelled tag rows. */
export default function AtAGlance({ title, stats, tagGroups }: Props) {
  return (
    <motion.div {...revealOnScroll()} className="page-container mb-20">
      <AccentRule />

      <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase pt-10 pb-6">{title}</p>

      <div className={`grid grid-cols-1 ${statColumns[stats.length] ?? "sm:grid-cols-3"} ${GRID_GAP}`}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            {...revealOnScroll({ y: 16, delay: i * 0.1, duration: 0.5 })}
            className={`p-8 ${CARD_LIGHT}`}
          >
            <p className="font-display text-4xl md:text-5xl font-semibold text-zinc-900 mb-1">{stat.value}</p>
            <p className="font-body font-light text-xs text-zinc-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {tagGroups.length > 0 && (
        <div className={`mt-4 md:mt-5 px-8 py-2 ${CARD_LIGHT} divide-y divide-primary/10`}>
          {tagGroups.map((group) => (
            <div key={group.label} className="py-4 flex flex-wrap items-center gap-2">
              <p className="font-body font-light text-xs text-zinc-400 tracking-wide mr-2">{group.label}</p>
              {group.tags.map((tag) => (
                <Tag key={tag} label={tag} variant="light" />
              ))}
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
