import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import MoreLink from "@/components/molecules/MoreLink";
import SectionHeading from "@/components/molecules/SectionHeading";
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
    <section className="page-container">
      <SectionHeading number="4" title="Notes from the work in progress." />
      <EntryList>
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
          />
        ))}
      </EntryList>
      <MoreLink to={LOGS_PATH} label="All logs" />
    </section>
  );
}
