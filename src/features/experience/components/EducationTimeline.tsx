import Tag from "@/components/atoms/Tag";
import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import CurrentLabel from "./CurrentLabel";

export type SchoolingEntry = {
  readonly when: string;
  readonly school: string;
  readonly program: string;
  readonly location: string;
  readonly isOngoing: boolean;
  readonly honors?: string;
};

export default function EducationTimeline({ entries }: { entries: readonly SchoolingEntry[] }) {
  return (
    <section className="mt-10">
      <SectionHeading number="2" title="Education" />
      <EntryList>
        {entries.map((entry, i) => (
          <EntryRow
            key={entry.school}
            position={i}
            meta={entry.when}
            title={<>{entry.school}{entry.isOngoing && <CurrentLabel />}</>}
            subtitle={
              <>
                {entry.program}
                <span className="block text-xs text-zinc-400 mt-0.5">{entry.location}</span>
              </>
            }
          >
            {entry.honors && <Tag label={entry.honors} variant="light" />}
          </EntryRow>
        ))}
      </EntryList>
    </section>
  );
}
