import { motion } from "motion/react";
import TagList from "@/components/shared/TagList";
import { revealOnScroll } from "@/lib/motion";
import TimelineEntry from "./TimelineEntry";

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
    <div className="relative">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200" />

      <div className="flex flex-col gap-16">
        {entries.map((entry, i) => (
          <motion.div
            key={`${entry.role}@${entry.organization}`}
            {...revealOnScroll({ x: -20, y: 0, delay: i * 0.1, duration: 0.5 })}
          >
            <TimelineEntry
              when={entry.when}
              title={entry.role}
              subtitle={
                <>
                  <span className="text-primary">@</span> {entry.organization} · {entry.employmentType}
                </>
              }
              location={entry.location}
              isOngoing={entry.isOngoing}
            >
              <ul className="flex flex-col gap-2 mt-5 mb-5">
                {entry.highlights.map((highlight) => (
                  <li key={highlight} className="font-body flex gap-3 text-sm text-zinc-500 leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <TagList tags={entry.skills} variant="light" />
            </TimelineEntry>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
