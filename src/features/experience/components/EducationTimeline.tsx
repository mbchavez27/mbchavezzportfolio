import { motion } from "motion/react";
import Tag from "@/components/shared/Tag";
import { revealOnScroll } from "@/lib/motion";
import type { Schooling } from "../domain/experience.domain";
import { formatPeriod, isOngoing, type YearMonth } from "../domain/tenure.domain";
import TimelineEntry from "./TimelineEntry";

type Props = {
  schooling: readonly Schooling[];
  today: YearMonth;
};

export default function EducationTimeline({ schooling, today }: Props) {
  return (
    <motion.div {...revealOnScroll()} className="mt-24 pt-16 border-t border-zinc-100">
      <p className="font-body text-xs text-zinc-400 tracking-[0.2em] uppercase mb-10">Education</p>

      <div className="flex flex-col gap-12 relative">
        <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200" />

        {schooling.map((entry) => (
          <TimelineEntry
            key={entry.school}
            when={formatPeriod(entry.tenure)}
            title={entry.school}
            subtitle={entry.program}
            location={entry.location}
            isOngoing={isOngoing(entry.tenure, today)}
          >
            {entry.honors && (
              <div className="mt-2">
                <Tag label={entry.honors} variant="light" />
              </div>
            )}
          </TimelineEntry>
        ))}
      </div>
    </motion.div>
  );
}
