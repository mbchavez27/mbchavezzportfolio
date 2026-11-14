// Turns Lighthouse result files into a Markdown summary for the GitHub Actions run page.
// Usage: node scripts/lighthouse-summary.mjs <results-dir>
// Appends to $GITHUB_STEP_SUMMARY when set, otherwise prints to stdout.
import { appendFileSync, readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const dir = process.argv[2] ?? ".lighthouseci";

const runs = readdirSync(dir)
  .filter((file) => file.endsWith(".json"))
  .map((file) => JSON.parse(readFileSync(path.join(dir, file), "utf8")))
  .filter((result) => result.categories && result.audits);

if (runs.length === 0) {
  console.error(`No Lighthouse results found in ${dir}`);
  process.exit(1);
}

const score = (result, id) => Math.round((result.categories[id]?.score ?? 0) * 100);
// Lighthouse CI judges budgets on the median run, so the summary shows that one.
const byPerformance = runs.toSorted((a, b) => score(a, "performance") - score(b, "performance"));
const median = byPerformance[Math.floor(byPerformance.length / 2)];

const badge = (value) => (value >= 90 ? "🟢" : value >= 50 ? "🟠" : "🔴");
const CATEGORIES = [
  ["performance", "Performance"],
  ["accessibility", "Accessibility"],
  ["best-practices", "Best practices"],
  ["seo", "SEO"],
];
const METRICS = [
  ["first-contentful-paint", "First Contentful Paint"],
  ["largest-contentful-paint", "Largest Contentful Paint"],
  ["total-blocking-time", "Total Blocking Time"],
  ["cumulative-layout-shift", "Cumulative Layout Shift"],
  ["speed-index", "Speed Index"],
];

const lines = [
  "## Lighthouse",
  "",
  `Median of ${runs.length} run(s) on \`${new URL(median.finalDisplayedUrl ?? median.requestedUrl).pathname}\`, simulated mobile.`,
  "",
  "| Category | Score |",
  "| --- | --- |",
  ...CATEGORIES.map(([id, label]) => `| ${label} | ${badge(score(median, id))} ${score(median, id)} |`),
  "",
  "| Metric | Value |",
  "| --- | --- |",
  ...METRICS.map(([id, label]) => {
    const audit = median.audits[id];
    return `| ${label} | ${badge(Math.round((audit?.score ?? 0) * 100))} ${audit?.displayValue ?? "n/a"} |`;
  }),
  "",
  `Performance per run: ${runs.map((result) => score(result, "performance")).join(", ")}`,
  "",
  "The full HTML reports are in this run's **lighthouse-results** artifact.",
  "",
];

const markdown = lines.join("\n");
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown);
else console.log(markdown);
