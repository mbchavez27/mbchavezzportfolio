import { z } from "zod";

const COMING_SOON_PATH = "/case-study/coming-soon";
const PROJECT_PARAM = "project";

const projectTitleSchema = z.string().trim().min(1).max(120);

export function caseStudyPath(projectTitle: string): string {
  return `${COMING_SOON_PATH}?${PROJECT_PARAM}=${encodeURIComponent(projectTitle)}`;
}

/** Reads the project title from the URL; anything missing or malformed is treated as absent. */
export function parseProjectTitle(params: URLSearchParams): string | undefined {
  const result = projectTitleSchema.safeParse(params.get(PROJECT_PARAM));
  return result.success ? result.data : undefined;
}
