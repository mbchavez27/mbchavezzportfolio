export const LOGS_PATH = "/logs";

export function logPath(slug: string): string {
  return `${LOGS_PATH}/${encodeURIComponent(slug)}`;
}
