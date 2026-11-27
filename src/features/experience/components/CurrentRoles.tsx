import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import MoreLink from "@/components/molecules/MoreLink";
import SectionHeading from "@/components/molecules/SectionHeading";
import CurrentLabel from "./CurrentLabel";

export type CurrentRoleEntry = {
  readonly role: string;
  readonly organization: string;
  readonly location: string;
  readonly duration: string;
};

const EXPERIENCE_PATH = "/experience";

export default function CurrentRoles({ entries }: { entries: readonly CurrentRoleEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <section className="page-container">
      <SectionHeading number="1" title="What Keeps Me Busy" divider={false} />
      <EntryList>
        {entries.map((entry, i) => (
          <EntryRow
            key={`${entry.role}@${entry.organization}`}
            position={i}
            meta={entry.duration}
            title={<>{entry.role}<CurrentLabel /></>}
            to={EXPERIENCE_PATH}
            subtitle={
              <>
                <span className="text-primary">@</span> {entry.organization} · {entry.location}
              </>
            }
          />
        ))}
      </EntryList>
      <MoreLink to={EXPERIENCE_PATH} label="View full experience" />
    </section>
  );
}
