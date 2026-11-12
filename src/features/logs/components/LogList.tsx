import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import Tag from "@/components/atoms/Tag";
import { CARD_LIGHT, CARD_LIGHT_HOVER, GRID_GAP } from "@/components/atoms/surfaces";
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

type Props = {
  entries: readonly LogListEntry[];
  /** Filter and sort controls, rendered under the heading. */
  controls: ReactNode;
};

export default function LogList({ entries, controls }: Props) {
  return (
    <section className="page-container pt-16 pb-32">
      <motion.h2
        {...revealOnScroll()}
        className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 mb-6"
      >
        Entries
      </motion.h2>

      {controls}

      {entries.length === 0 ? (
        <p className="font-body font-light inline-flex text-sm border border-dashed border-zinc-200 text-zinc-400 px-4 py-3">
          No logs yet. The first one is on its way.
        </p>
      ) : (
        <ul className={`grid grid-cols-1 md:grid-cols-2 ${GRID_GAP}`}>
          {entries.map((entry, i) => (
            <motion.li key={entry.slug} {...revealOnScroll({ y: 20, delay: (i % 2) * 0.08, duration: 0.5 })}>
              <Link to={entry.href} className={`group flex flex-col h-full p-6 md:p-8 ${CARD_LIGHT} ${CARD_LIGHT_HOVER}`}>
                <p className="font-body font-light text-xs text-zinc-400 tracking-wide mb-3">
                  {entry.dateLabel}
                  {entry.draft && <span className="ml-2 text-primary uppercase tracking-widest">Draft</span>}
                </p>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-zinc-900 group-hover:text-primary transition-colors duration-200 mb-2">
                  {entry.title}
                </h3>
                <p className="font-body font-light text-sm text-zinc-500 leading-relaxed mb-5 grow">{entry.summary}</p>
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
