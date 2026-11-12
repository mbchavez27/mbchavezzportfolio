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

/** Summary at the top of a page: an inline row of headline numbers plus labelled tag rows. */
export default function AtAGlance({ title, stats, tagGroups }: Props) {
  return (
    <motion.div {...revealOnScroll()} className="page-container mb-6">
      <AccentRule />

      <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase pt-8 pb-5">{title}</p>

      <div className="flex flex-wrap gap-y-4 divide-x divide-primary/15">
        {stats.map((stat) => (
          <div key={stat.label} className="pr-6 pl-6 first:pl-0">
            <p className="font-display text-3xl font-semibold text-zinc-900">{stat.value}</p>
            <p className="font-body font-light text-xs text-zinc-400 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {tagGroups.length > 0 && (
        <dl className="mt-8 divide-y divide-primary/10 border-t border-primary/10">
          {tagGroups.map((group) => (
            <div key={group.label} className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-6 gap-y-2 py-4">
              <dt className="font-body font-light text-xs text-zinc-400 tracking-wide sm:pt-1">{group.label}</dt>
              <dd className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <Tag key={tag} label={tag} variant="light" />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </motion.div>
  );
}
