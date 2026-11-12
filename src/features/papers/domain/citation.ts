/** The portfolio owner's name as it appears in author lists, bolded in citations. */
export const OWNER_AUTHOR = "Chavez, M.B.";

/** Splits an author list around the owner's name so it can be emphasised. */
export function splitAuthors(authors: string, owner: string = OWNER_AUTHOR) {
  const at = authors.indexOf(owner);
  if (at === -1) return { before: authors, owner: "", after: "" };
  return { before: authors.slice(0, at), owner, after: authors.slice(at + owner.length) };
}

/** The four-digit year in a venue name ("AILRIC 2026" → "2026"), or "n.d." when it has none. */
export function venueYear(venueName: string): string {
  return venueName.match(/\d{4}/)?.[0] ?? "n.d.";
}
