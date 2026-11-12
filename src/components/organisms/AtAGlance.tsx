import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";

export type Stat = { readonly value: string; readonly label: string };
export type TagGroup = { readonly label: string; readonly tags: readonly string[] };

type Props = {
  title: string;
  stats: readonly Stat[];
  tagGroups: readonly TagGroup[];
};

const CELL = "py-1.5 align-top";
const HEADER = "pb-1.5 pt-2 font-normal text-zinc-500 [font-variant:small-caps] tracking-wide";

/** Summary at the top of a page, set as a captioned academic (booktabs-style) table. */
export default function AtAGlance({ title, stats, tagGroups }: Props) {
  const lastIndex = stats.length + tagGroups.length - 1;
  const bottomRule = (index: number) => (index === lastIndex ? "border-b-2 border-zinc-900" : "");

  return (
    <motion.div {...revealOnScroll()} className="page-container mb-6">
      <table className="w-full max-w-3xl border-collapse font-body text-sm">
        <caption className="caption-top text-left pb-2 text-zinc-700">
          <span className="font-semibold text-primary">Table 1.</span> {title}.
        </caption>

        <thead className="border-t-2 border-zinc-900">
          <tr className="border-b border-zinc-300">
            <th scope="col" className={`${HEADER} text-left`}>
              metric
            </th>
            <th scope="col" className={`${HEADER} text-right`}>
              value
            </th>
          </tr>
        </thead>

        <tbody>
          {stats.map((stat, i) => (
            <tr key={stat.label} className={bottomRule(i)}>
              <th scope="row" className={`${CELL} pr-6 text-left font-light text-zinc-700`}>
                {stat.label}
              </th>
              <td className={`${CELL} text-right font-display font-semibold text-zinc-900 tabular-nums`}>{stat.value}</td>
            </tr>
          ))}

          {tagGroups.map((group, i) => {
            const separator = i === 0 && stats.length > 0 ? "border-t border-zinc-200" : "";
            return (
              <tr key={group.label} className={`${separator} ${bottomRule(stats.length + i)}`}>
                <th scope="row" className={`${CELL} pr-6 text-left font-light text-zinc-700 whitespace-nowrap`}>
                  {group.label}
                </th>
                <td className={`${CELL} text-right font-light text-zinc-600`}>{group.tags.join(", ")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
