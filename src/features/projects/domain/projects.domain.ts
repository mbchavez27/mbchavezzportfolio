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
