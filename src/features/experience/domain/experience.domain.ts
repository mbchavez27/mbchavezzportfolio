import type { Tenure } from "./tenure.domain";

export type Position = {
  readonly role: string;
  readonly organization: string;
  readonly employmentType: string;
  readonly tenure: Tenure;
  readonly location: string;
  readonly highlights: readonly string[];
  readonly skills: readonly string[];
};

export type Schooling = {
  readonly school: string;
  readonly program: string;
  readonly tenure: Tenure;
  readonly location: string;
  readonly honors?: string;
};
