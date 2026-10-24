import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import type { VenueGroup } from "../domain/papers.domain";
import PaperEntry from "./PaperEntry";

export default function ResearchWork({ venueGroups }: { venueGroups: readonly VenueGroup[] }) {
  return (
    <div className="px-6 sm:px-10 md:px-24 lg:px-32">
      <motion.div {...revealOnScroll()} className="mb-14">
        <p className="font-body text-xs text-zinc-400 tracking-[0.2em] uppercase mb-3">Featured Contributions</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900">Research Work</h2>
      </motion.div>

      {venueGroups.map(({ venue, papers: venuePapers }) => (
        <motion.div key={venue.name} {...revealOnScroll()} className="mb-16 last:mb-0">
          <div className="mb-8">
            <h2 className="font-display text-lg font-semibold text-zinc-900">{venue.name}</h2>
            <p className="font-body text-xs text-zinc-400 mt-0.5">{venue.acceptance}</p>
          </div>

          <div className="flex flex-col divide-y divide-zinc-100">
            {venuePapers.map((paper, i) => (
              <PaperEntry key={paper.title} paper={paper} position={i} />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
