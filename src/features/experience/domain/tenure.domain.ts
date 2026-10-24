export type YearMonth = { readonly year: number; readonly month: number };

/** A span of months; no end means it is still going. */
export type Tenure = { readonly start: YearMonth; readonly end?: YearMonth };

const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"] as const;

export function yearMonth(year: number, month: number): YearMonth {
  if (!Number.isInteger(year)) throw new Error(`year must be an integer, got ${year}`);
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`month must be an integer from 1 to 12, got ${month}`);
  }
  return { year, month };
}

export function currentYearMonth(now: Date = new Date()): YearMonth {
  return yearMonth(now.getFullYear(), now.getMonth() + 1);
}

function monthsSinceEpoch({ year, month }: YearMonth): number {
  return year * 12 + (month - 1);
}

function formatYearMonth(value: YearMonth): string {
  return `${MONTH_NAMES[value.month - 1]} ${value.year}`;
}

function assertValid({ start, end }: Tenure): void {
  if (end && monthsSinceEpoch(end) < monthsSinceEpoch(start)) {
    throw new Error(`tenure ends before it starts: ${formatYearMonth(start)} – ${formatYearMonth(end)}`);
  }
}

export function formatPeriod(tenure: Tenure): string {
  assertValid(tenure);
  return `${formatYearMonth(tenure.start)} – ${tenure.end ? formatYearMonth(tenure.end) : "Present"}`;
}

/** Length in the LinkedIn style, counting the first and last months: "1 yr 11 mos". */
export function formatDuration(tenure: Tenure, today: YearMonth): string {
  assertValid(tenure);
  const last = tenure.end ?? today;
  const totalMonths = monthsSinceEpoch(last) - monthsSinceEpoch(tenure.start) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts = [
    years > 0 ? `${years} ${years === 1 ? "yr" : "yrs"}` : "",
    months > 0 ? `${months} ${months === 1 ? "mo" : "mos"}` : "",
  ];
  return parts.filter(Boolean).join(" ");
}

export function isOngoing(tenure: Tenure, today: YearMonth): boolean {
  assertValid(tenure);
  return !tenure.end || monthsSinceEpoch(tenure.end) >= monthsSinceEpoch(today);
}
