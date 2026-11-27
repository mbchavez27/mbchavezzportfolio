export type Project = {
  readonly title: string;
  readonly role: string;
  readonly summary: string;
  readonly domain: string;
  readonly tags: readonly string[];
  readonly image: string;
};

export type StackCategory = {
  readonly label: string;
  readonly items: readonly string[];
};

/** How many distinct tools and practices the projects' tags name between them. */
export function countUniqueTags(projects: readonly Project[]): number {
  return new Set(projects.flatMap((project) => project.tags)).size;
}
