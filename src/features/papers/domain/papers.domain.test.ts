import { describe, expect, it } from "vitest";
import { groupByVenue, hasPublishedLinks, summarizePapers, type Paper } from "./papers.domain";

const paper = (overrides: Partial<Paper>): Paper => ({
  title: "A paper",
  authors: "Chavez, M.B.",
  description: "About something.",
  areas: [],
  venue: { name: "AILRIC 2026", acceptance: "Accepted for Oral Presentation" },
  presentation: "oral",
  links: [],
  ...overrides,
});

describe("summarizePapers", () => {
  it("counts every paper as accepted and only orals as oral presentations", () => {
    const papers = [paper({ presentation: "oral" }), paper({ presentation: "oral" }), paper({ presentation: "full-paper" })];
    expect(summarizePapers(papers)).toEqual({ accepted: 3, oralPresentations: 2 });
  });

  it("returns zeros for no papers", () => {
    expect(summarizePapers([])).toEqual({ accepted: 0, oralPresentations: 0 });
  });
});

describe("groupByVenue", () => {
  const ailric = { name: "AILRIC 2026", acceptance: "Accepted for Oral Presentation" };
  const ieee = { name: "IEEE FMLDS 2026", acceptance: "Accepted Full Paper" };

  it("keeps venues in first-appearance order with their papers", () => {
    const a = paper({ title: "A", venue: ailric });
    const b = paper({ title: "B", venue: ieee });
    const c = paper({ title: "C", venue: ailric });

    expect(groupByVenue([a, b, c])).toEqual([
      { venue: ailric, papers: [a, c] },
      { venue: ieee, papers: [b] },
    ]);
  });

  it("does not mutate the input", () => {
    const papers = Object.freeze([paper({ venue: ieee }), paper({ venue: ailric })]);
    expect(() => groupByVenue(papers)).not.toThrow();
  });
});

describe("hasPublishedLinks", () => {
  it("is false until a link exists", () => expect(hasPublishedLinks(paper({ links: [] }))).toBe(false));
  it("is true once a link exists", () =>
    expect(hasPublishedLinks(paper({ links: [{ kind: "doi", href: "https://doi.org/x" }] }))).toBe(true));
});
