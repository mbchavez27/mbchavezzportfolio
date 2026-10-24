import { parseLog, type Log } from "../domain/logs.domain";

// Every Markdown file in posts/ is a log; files starting with "_" (like the template) are skipped.
const files = import.meta.glob<string>(["../posts/*.md", "!../posts/_*.md"], {
  query: "?raw",
  import: "default",
  eager: true,
});

const slugFromPath = (path: string) => path.slice(path.lastIndexOf("/") + 1).replace(/\.md$/, "");

export const logs: readonly Log[] = Object.entries(files).map(([path, raw]) => parseLog(slugFromPath(path), raw));
