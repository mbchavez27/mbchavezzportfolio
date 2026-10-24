export type Venue = {
  readonly name: string;
  readonly acceptance: string;
};

export type PaperLink = {
  readonly kind: "paper" | "conference" | "doi" | "pdf";
  readonly href: string;
};

export type Paper = {
  readonly title: string;
  readonly authors: string;
  readonly description: string;
  readonly areas: readonly string[];
  readonly venue: Venue;
  readonly presentation: "oral" | "full-paper";
  readonly links: readonly PaperLink[];
};

export type PapersSummary = {
  readonly accepted: number;
  readonly oralPresentations: number;
};

export type VenueGroup = {
  readonly venue: Venue;
  readonly papers: readonly Paper[];
};

export function summarizePapers(papers: readonly Paper[]): PapersSummary {
  return {
    accepted: papers.length,
    oralPresentations: papers.filter((paper) => paper.presentation === "oral").length,
  };
}

/** Groups papers under their venue, keeping venues in the order they first appear. */
export function groupByVenue(papers: readonly Paper[]): readonly VenueGroup[] {
  const groups = new Map<string, VenueGroup>();
  for (const paper of papers) {
    const existing = groups.get(paper.venue.name);
    groups.set(paper.venue.name, {
      venue: existing?.venue ?? paper.venue,
      papers: [...(existing?.papers ?? []), paper],
    });
  }
  return [...groups.values()];
}

export function hasPublishedLinks(paper: Paper): boolean {
  return paper.links.length > 0;
}
