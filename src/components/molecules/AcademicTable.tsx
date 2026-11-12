import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";

export type TableRow = { readonly label: string; readonly value: ReactNode };

type Props = {
  /** The table's number on its page ("Table 2."). */
  number: number;
  caption: string;
  /** A short paragraph describing what the table summarises, set above it like a paper's abstract. */
  abstract?: string;
  /** Header labels for the label and value columns, shown in small caps. */
  columns: readonly [string, string];
  rows: readonly TableRow[];
  valueAlign?: "left" | "right";
  /** Index of the row that starts a new group; a thin rule is drawn above it. */
  breakBefore?: number;
};

const CELL = "py-1.5 align-top";
const HEADER = "pb-1.5 pt-2 font-normal text-zinc-500 [font-variant:small-caps] tracking-wide";

/** A captioned, booktabs-style table: thick top and bottom rules, a thin rule under the header. */
export default function AcademicTable({ number, caption, abstract, columns, rows, valueAlign = "left", breakBefore }: Props) {
  const align = valueAlign === "right" ? "text-right" : "text-left";
  const lastIndex = rows.length - 1;

  return (
    <motion.div {...revealOnScroll()}>
      {abstract && (
        <p className="font-body font-light text-sm text-zinc-600 leading-relaxed mb-5">
          <span className="font-semibold text-zinc-900 [font-variant:small-caps] tracking-wide">abstract</span>
          <span className="text-zinc-400"> — </span>
          {abstract}
        </p>
      )}

      <table className="w-full border-collapse font-body text-sm">
        <caption className="caption-top text-left pb-2 text-zinc-700">
          <span className="font-semibold text-primary">Table {number}.</span> {caption}.
        </caption>

        <thead className="border-t-2 border-zinc-900">
          <tr className="border-b border-zinc-300">
            <th scope="col" className={`${HEADER} text-left sm:w-48`}>
              {columns[0]}
            </th>
            <th scope="col" className={`${HEADER} ${align}`}>
              {columns[1]}
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => {
            const rules = [
              i === breakBefore && i > 0 ? "border-t border-zinc-200" : "",
              i === lastIndex ? "border-b-2 border-zinc-900" : "",
            ];
            return (
              <tr key={row.label} className={rules.join(" ")}>
                <th scope="row" className={`${CELL} pr-6 text-left font-light text-zinc-700 sm:whitespace-nowrap`}>
                  {row.label}
                </th>
                <td className={`${CELL} ${align} font-light text-zinc-600`}>{row.value}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </motion.div>
  );
}
