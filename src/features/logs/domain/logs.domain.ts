import * as z from "zod/mini";

export type Log = {
  readonly slug: string;
  readonly title: string;
  /** ISO calendar date, e.g. "2026-10-25". */
  readonly date: string;
  readonly summary: string;
  readonly tags: readonly string[];
  readonly draft: boolean;
  readonly body: string;
};

const isoDate = z.string().check(
  z.regex(/^\d{4}-\d{2}-\d{2}$/, "must be YYYY-MM-DD"),
  // Round-trip so impossible dates like 2026-02-30 (which Date silently rolls over) are rejected.
  z.refine((value) => {
    const parsed = new Date(`${value}T00:00:00Z`);
    return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(value);
  }, "must be a real date"),
);

const frontmatterSchema = z.object({
  title: z.string().check(z.trim(), z.minLength(1)),
  date: isoDate,
  summary: z.string().check(z.trim(), z.minLength(1)),
  tags: z.optional(z.string()),
  draft: z.optional(z.enum(["true", "false"])),
});

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/;

/** Splits a "key: value" header block off the top of a Markdown file. */
function splitFrontmatter(slug: string, raw: string): { fields: Record<string, string>; body: string } {
  const match = FRONTMATTER.exec(raw);
  if (!match) throw new Error(`Log "${slug}" must start with a --- header block --- (title, date, summary)`);
  const [, header = "", body = ""] = match;

  const fields: Record<string, string> = {};
  for (const line of header.split(/\r?\n/)) {
    if (!line.trim()) continue;
    const separator = line.indexOf(":");
    if (separator === -1) throw new Error(`Log "${slug}" has a header line without "key: value": ${line}`);
    fields[line.slice(0, separator).trim()] = line.slice(separator + 1).trim();
  }
  return { fields, body: body.trim() };
}

/** Parses one Markdown log file, failing loudly with the file's slug if its header is invalid. */
export function parseLog(slug: string, raw: string): Log {
  const { fields, body } = splitFrontmatter(slug, raw);
  const result = frontmatterSchema.safeParse(fields);
  if (!result.success) {
    const problems = result.error.issues.map((issue) => `${issue.path.join(".")}: ${issue.message}`).join("; ");
    throw new Error(`Log "${slug}" has an invalid header — ${problems}`);
  }

  const { title, date, summary, tags, draft } = result.data;
  return {
    slug,
    title,
    date,
    summary,
    tags: tags ? tags.split(",").map((tag) => tag.trim()).filter(Boolean) : [],
    draft: draft === "true",
    body,
  };
}

export function newestFirst(logs: readonly Log[]): readonly Log[] {
  return logs.toSorted((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
}

/** Drafts are visible while developing locally and hidden from the published site. */
export function visibleLogs(logs: readonly Log[], showDrafts: boolean): readonly Log[] {
  return showDrafts ? logs : logs.filter((log) => !log.draft);
}

const dateFormat = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });

export function formatLogDate(date: string): string {
  return dateFormat.format(new Date(`${date}T00:00:00Z`));
}
