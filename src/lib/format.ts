/** Zero-padded, 1-based position used as a list marker: 0 -> "01". */
export function formatIndex(position: number): string {
  if (!Number.isInteger(position) || position < 0) {
    throw new Error(`position must be a non-negative integer, got ${position}`);
  }
  return String(position + 1).padStart(2, "0");
}

/** Whole years elapsed from `birthDate` to `today`, counting a year only once its anniversary has passed. */
export function ageOn(birthDate: Date, today: Date): number {
  const hadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
  return today.getFullYear() - birthDate.getFullYear() - (hadBirthdayThisYear ? 0 : 1);
}
