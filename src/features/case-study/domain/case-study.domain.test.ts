import { describe, expect, it } from "vitest";
import { caseStudyPath, parseProjectTitle } from "./case-study.domain";

describe("caseStudyPath", () => {
  it("encodes the project title as a query param", () =>
    expect(caseStudyPath("LEAP 2025 Website")).toBe("/case-study/coming-soon?project=LEAP%202025%20Website"));
});

describe("parseProjectTitle", () => {
  const paramsFor = (path: string) => new URL(path, "https://example.com").searchParams;

  it("round-trips a title built by caseStudyPath", () =>
    expect(parseProjectTitle(paramsFor(caseStudyPath("Pana Tools & Co")))).toBe("Pana Tools & Co"));
  it("is undefined when the param is missing", () => expect(parseProjectTitle(paramsFor("/"))).toBeUndefined());
  it("is undefined for a blank title", () => expect(parseProjectTitle(paramsFor("/?project=%20%20"))).toBeUndefined());
  it("is undefined for an absurdly long title", () =>
    expect(parseProjectTitle(paramsFor(`/?project=${"a".repeat(121)}`))).toBeUndefined());
});
