import { motion } from "motion/react";
import Tag from "@/components/atoms/Tag";
import { revealOnScroll } from "@/lib/motion";
import TimelineEntry from "./TimelineEntry";

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
    <motion.div {...revealOnScroll()} className="mt-24 pt-16 border-t border-zinc-100">
      <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-10">Education</p>

      <div className="flex flex-col gap-12 relative">
        <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200" />

        {entries.map((entry) => (
          <TimelineEntry
            key={entry.school}
            when={entry.when}
            title={entry.school}
            subtitle={entry.program}
            location={entry.location}
            isOngoing={entry.isOngoing}
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
