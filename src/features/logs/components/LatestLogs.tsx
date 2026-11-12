import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { revealOnScroll } from "@/lib/motion";
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
    <section className="bg-white border-t border-zinc-100 pt-8 pb-10">
      <motion.div {...revealOnScroll()} className="page-container mb-6">
        <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">Logs</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900">
          Notes from the work in progress.
        </h2>
      </motion.div>

      <ul className="flex flex-col divide-y divide-zinc-100 border-y border-zinc-100">
        {entries.map((entry, i) => (
          <motion.li key={entry.slug} {...revealOnScroll({ x: -24, y: 0, delay: i * 0.08, duration: 0.5 })}>
            <Link
              to={entry.href}
              className="group block py-5 hover:bg-zinc-50 transition-colors duration-200"
            >
              <div className="page-container grid grid-cols-1 md:grid-cols-[160px_1fr_auto] gap-2 md:gap-8 items-center">
                <p className="font-body font-light text-xs text-zinc-400 tracking-wide">
                  {entry.dateLabel}
                  {entry.draft && <span className="ml-2 text-primary uppercase tracking-widest">Draft</span>}
                </p>
                <h3 className="font-display text-lg md:text-xl font-semibold text-zinc-900 group-hover:text-primary transition-colors duration-200">
                  {entry.title}
                </h3>
                <ArrowRight
                  size={16}
                  className="hidden md:block text-zinc-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                />
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>

      <div className="page-container mt-6 flex justify-end">
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
