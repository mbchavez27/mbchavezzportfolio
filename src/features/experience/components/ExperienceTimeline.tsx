import { motion } from "motion/react";
import TagList from "@/components/shared/TagList";
import { revealOnScroll } from "@/lib/motion";
import type { Position } from "../domain/experience.domain";
import { formatDuration, formatPeriod, isOngoing, type YearMonth } from "../domain/tenure.domain";
import TimelineEntry from "./TimelineEntry";

type Props = {
  positions: readonly Position[];
  today: YearMonth;
};

export default function ExperienceTimeline({ positions, today }: Props) {
  return (
    <div className="relative">
      <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200" />

      <div className="flex flex-col gap-16">
        {positions.map((position, i) => (
          <motion.div
            key={`${position.role}@${position.organization}`}
            {...revealOnScroll({ x: -20, y: 0, delay: i * 0.1, duration: 0.5 })}
          >
            <TimelineEntry
              when={`${formatPeriod(position.tenure)} · ${formatDuration(position.tenure, today)}`}
              title={position.role}
              subtitle={
                <>
                  <span className="text-primary">@</span> {position.organization} · {position.employmentType}
                </>
              }
              location={position.location}
              isOngoing={isOngoing(position.tenure, today)}
            >
              <ul className="flex flex-col gap-2 mt-5 mb-5">
                {position.highlights.map((highlight) => (
                  <li key={highlight} className="font-body flex gap-3 text-sm text-zinc-500 leading-relaxed">
                    <span className="text-primary mt-1.5 shrink-0">—</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <TagList tags={position.skills} variant="light" />
            </TimelineEntry>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
