import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import { splitAuthors, venueYear } from "../domain/citation";
import type { Paper, VenueGroup } from "../domain/papers.domain";
import PaperLinks from "./PaperLinks";

const PRESENTATION_LABEL: Record<Paper["presentation"], string> = {
  oral: "Oral",
  "full-paper": "Full paper",
};

/** One paper as a reference: Authors (Year). Title. In Venue. */
function Citation({ paper }: { paper: Paper }) {
  const { before, owner, after } = splitAuthors(paper.authors);
  return (
    <p className="font-body text-sm text-zinc-700 leading-relaxed">
      {before}
      {owner && <strong className="font-semibold text-zinc-900">{owner}</strong>}
      {after} ({venueYear(paper.venue.name)}).{" "}
      <span className="font-display font-semibold text-zinc-900">{paper.title}</span>. In{" "}
      <em>{paper.venue.name}</em>.
    </p>
  );
}

export default function ResearchWork({ venueGroups }: { venueGroups: readonly VenueGroup[] }) {
  return (
    <div className="page-container">
      <SectionHeading number="1" title="Research Work" />

      {venueGroups.map(({ venue, papers }, v) => (
        <section key={venue.name}>
          <SectionHeading as="h3" number={`1.${v + 1}`} title={venue.name} subtitle={venue.acceptance} className="pt-8 pb-2" />
          <EntryList>
            {papers.map((paper, i) => (
              <EntryRow
                key={paper.title}
                position={i}
                meta={<span className="uppercase">{PRESENTATION_LABEL[paper.presentation]}</span>}
              >
                <Citation paper={paper} />
                <p className="font-body font-light text-sm text-zinc-500 leading-relaxed mt-1.5">{paper.description}</p>
                <p className="font-body font-light text-xs text-zinc-400 mt-2">Areas: {paper.areas.join(" · ")}</p>
                <div className="mt-2">
                  <PaperLinks links={paper.links} />
                </div>
              </EntryRow>
            ))}
          </EntryList>
        </section>
      ))}
    </div>
  );
}
