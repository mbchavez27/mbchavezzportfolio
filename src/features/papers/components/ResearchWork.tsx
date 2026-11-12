import Tag from "@/components/atoms/Tag";
import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Paper, VenueGroup } from "../domain/papers.domain";
import PaperLinks from "./PaperLinks";

const PRESENTATION_LABEL: Record<Paper["presentation"], string> = {
  oral: "Oral",
  "full-paper": "Full paper",
};

export default function ResearchWork({ venueGroups }: { venueGroups: readonly VenueGroup[] }) {
  return (
    <div className="page-container">
      <SectionHeading eyebrow="Featured Contributions" title="Research Work" />

      {venueGroups.map(({ venue, papers }) => (
        <section key={venue.name}>
          <SectionHeading as="h3" title={venue.name} subtitle={venue.acceptance} className="pt-8 pb-2" />
          <EntryList>
            {papers.map((paper, i) => (
              <EntryRow
                key={paper.title}
                position={i}
                meta={<span className="uppercase">{PRESENTATION_LABEL[paper.presentation]}</span>}
                title={paper.title}
                subtitle={<span className="italic text-xs text-zinc-400">{paper.authors}</span>}
                summary={paper.description}
              >
                <div className="flex flex-wrap items-center gap-2">
                  {paper.areas.map((area) => (
                    <Tag key={area} label={area} variant="light" />
                  ))}
                </div>
                <div className="mt-3">
                  {paper.links.length > 0 ? (
                    <PaperLinks links={paper.links} />
                  ) : (
                    <span className="font-body font-light text-xs text-zinc-400">Links available upon publication</span>
                  )}
                </div>
              </EntryRow>
            ))}
          </EntryList>
        </section>
      ))}
    </div>
  );
}
