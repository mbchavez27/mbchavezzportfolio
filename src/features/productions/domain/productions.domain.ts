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
