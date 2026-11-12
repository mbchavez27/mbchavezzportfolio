import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import MoreLink from "@/components/molecules/MoreLink";
import SectionHeading from "@/components/molecules/SectionHeading";

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
            meta={
              <span className="flex items-center gap-2 uppercase">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-primary opacity-75 animate-ping" />
                  <span className="relative w-2 h-2 rounded-full bg-primary" />
                </span>
                Now · {entry.duration}
              </span>
            }
            title={entry.role}
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
