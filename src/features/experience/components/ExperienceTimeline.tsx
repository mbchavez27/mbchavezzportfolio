import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import TagList from "@/components/molecules/TagList";
import WhenMeta from "./WhenMeta";

export type PositionEntry = {
  readonly when: string;
  readonly role: string;
  readonly organization: string;
  readonly employmentType: string;
  readonly location: string;
  readonly isOngoing: boolean;
  readonly highlights: readonly string[];
  readonly skills: readonly string[];
};

export default function ExperienceTimeline({ entries }: { entries: readonly PositionEntry[] }) {
  return (
    <EntryList className="border-t border-primary/15">
      {entries.map((entry, i) => (
        <EntryRow
          key={`${entry.role}@${entry.organization}`}
          position={i}
          meta={<WhenMeta when={entry.when} isOngoing={entry.isOngoing} />}
          title={entry.role}
          subtitle={
            <>
              <span className="text-primary">@</span> {entry.organization} · {entry.employmentType}
              <span className="block text-xs text-zinc-400 mt-0.5">{entry.location}</span>
            </>
          }
        >
          {entry.highlights.length > 0 && (
            <ul className="flex flex-col gap-2">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="font-body font-light flex gap-3 text-sm text-zinc-500 leading-relaxed">
                  <span className="text-primary mt-0.5 shrink-0">—</span>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
          {entry.skills.length > 0 && (
            <div className={entry.highlights.length > 0 ? "mt-4" : ""}>
              <TagList tags={entry.skills} variant="light" />
            </div>
          )}
        </EntryRow>
      ))}
    </EntryList>
  );
}
