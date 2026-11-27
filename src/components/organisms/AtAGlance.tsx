import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";

type Props = {
  /** Names the block for screen readers; it is not shown. */
  title: string;
  /** One sentence, like the opening line of an abstract, with its numbers set in <Num> or <Count>. */
  children: ReactNode;
  keywords: readonly string[];
};

/** A number set in the abstract sentence's accent. */
export function Num({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-primary tabular-nums">{children}</strong>;
}

/** A number with the word it counts: "6 projects", "1 project". */
export function Count({ value, one, many }: { value: number | string; one: string; many: string }) {
  return (
    <>
      <Num>{value}</Num> {value === 1 ? one : many}
    </>
  );
}

/** The summary at the top of a page, set like a paper's abstract: one sentence, then its keywords. */
export default function AtAGlance({ title, children, keywords }: Props) {
  return (
    <motion.section {...revealOnScroll()} aria-label={title} className="page-container mt-4 mb-10">
      <p className="font-display text-lg md:text-xl text-zinc-800 leading-snug max-w-2xl">{children}</p>
      <p className="font-body font-light text-sm text-zinc-500 leading-relaxed mt-3 max-w-2xl">
        <span className="font-medium text-zinc-700">Keywords</span> — {[...new Set(keywords)].join(", ")}
      </p>
    </motion.section>
  );
}
