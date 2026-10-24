import { motion } from "motion/react";
import { Link } from "react-router";
import Tag from "@/components/atoms/Tag";
import { revealOnScroll } from "@/lib/motion";

export type LogListEntry = {
  readonly slug: string;
  readonly href: string;
  readonly title: string;
  readonly dateLabel: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly draft: boolean;
};

export default function LogList({ entries }: { entries: readonly LogListEntry[] }) {
  return (
    <section className="px-6 sm:px-10 md:px-24 lg:px-32 pt-16 pb-32">
      {entries.length === 0 ? (
        <p className="font-body inline-flex text-sm border border-dashed border-zinc-200 text-zinc-400 px-4 py-3">
          No logs yet. The first one is on its way.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-zinc-100">
          {entries.map((entry, i) => (
            <motion.li key={entry.slug} {...revealOnScroll({ x: -16, y: 0, delay: i * 0.08, duration: 0.5 })}>
              <Link to={entry.href} className="group block py-8">
                <p className="font-body text-xs text-zinc-400 tracking-wide mb-3">
                  {entry.dateLabel}
                  {entry.draft && <span className="ml-2 text-primary uppercase tracking-widest">Draft</span>}
                </p>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-zinc-900 group-hover:text-primary transition-colors duration-200 mb-2">
                  {entry.title}
                </h2>
                <p className="font-body text-sm text-zinc-500 leading-relaxed mb-4">{entry.summary}</p>
                {entry.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.map((tag) => (
                      <Tag key={tag} label={tag} variant="light" />
                    ))}
                  </div>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
}
