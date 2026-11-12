import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { revealOnScroll } from "@/lib/motion";
import { CARD_LIGHT, CARD_LIGHT_HOVER, GRID_GAP } from "@/components/atoms/surfaces";
import { LOGS_PATH } from "../domain/log-paths";

export type LatestLogEntry = {
  readonly slug: string;
  readonly href: string;
  readonly title: string;
  readonly dateLabel: string;
  readonly draft: boolean;
};

export default function LatestLogs({ entries }: { entries: readonly LatestLogEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <section className="bg-white border-t border-zinc-100 py-24">
      <motion.div {...revealOnScroll()} className="page-container mb-12">
        <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">Logs</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900">
          Notes from the work in progress.
        </h2>
      </motion.div>

      <ul className={`page-container grid grid-cols-1 md:grid-cols-2 ${GRID_GAP}`}>
        {entries.map((entry, i) => (
          <motion.li key={entry.slug} {...revealOnScroll({ y: 24, delay: i * 0.08, duration: 0.5 })}>
            <Link
              to={entry.href}
              className={`group flex flex-col justify-between gap-8 h-full p-6 md:p-8 ${CARD_LIGHT} ${CARD_LIGHT_HOVER}`}
            >
              <p className="font-body font-light text-xs text-zinc-400 tracking-wide">
                {entry.dateLabel}
                {entry.draft && <span className="ml-2 text-primary uppercase tracking-widest">Draft</span>}
              </p>
              <div className="flex items-end justify-between gap-4">
                <h3 className="font-display text-lg md:text-xl font-semibold text-zinc-900 group-hover:text-primary transition-colors duration-200">
                  {entry.title}
                </h3>
                <ArrowRight
                  size={16}
                  className="shrink-0 mb-1 text-zinc-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="page-container mt-10 flex justify-end">
        <Link
          to={LOGS_PATH}
          className="group flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors duration-300"
        >
          <span className="font-body text-xs tracking-widest uppercase">All logs</span>
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
