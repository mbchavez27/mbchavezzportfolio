export type Production = {
  readonly title: string;
  readonly role: string;
  readonly responsibilities: readonly string[];
  readonly organization: string;
  readonly date: string;
  readonly image: string;
};

export type Capability = {
  readonly label: string;
  readonly description: string;
};

/** The earliest year among the productions' dates ("July 2026"). Throws on a date with no year. */
export function firstYear(productions: readonly Production[]): number {
  if (productions.length === 0) throw new Error("firstYear needs at least one production");
  return Math.min(
    ...productions.map(({ title, date }) => {
      const year = Number(date.match(/\b(\d{4})\b/)?.[1]);
      if (!Number.isInteger(year)) throw new Error(`production "${title}" has no year in its date: ${date}`);
      return year;
    }),
  );
}
