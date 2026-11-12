import type { ReactNode } from "react";
import Tag from "@/components/atoms/Tag";
import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";

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
    <section className="page-container pb-16">
      <SectionHeading number="1" title="Entries" divider={false} className="pt-8" />

      {controls}

      {entries.length === 0 ? (
        <p className="font-body font-light text-sm text-zinc-400 py-5">No logs yet. The first one is on its way.</p>
      ) : (
        <EntryList className="border-t border-primary/15">
          {entries.map((entry, i) => (
            <EntryRow
              key={entry.slug}
              position={i}
              meta={
                <>
                  {entry.dateLabel}
                  {entry.draft && <span className="block text-primary uppercase tracking-widest">Draft</span>}
                </>
              }
              title={entry.title}
              to={entry.href}
              summary={entry.summary}
            >
              {entry.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <Tag key={tag} label={tag} variant="light" />
                  ))}
                </div>
              )}
            </EntryRow>
          ))}
        </EntryList>
      )}
    </section>
  );
}
