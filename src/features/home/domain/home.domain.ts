import type { LucideIcon } from "lucide-react";

export type Hat = {
  readonly role: string;
  readonly description: string;
  readonly image: string;
  readonly to: string;
};

/** One line in the home page's "Selected work" list: the hat it comes from, a short title and one fact. */
export type Highlight = {
  readonly hat: string;
  readonly title: string;
  readonly fact: string;
  /** The page for the hat this work belongs to. */
  readonly to: string;
};

export type CallToAction = {
  readonly label: string;
  readonly to: string;
  readonly Icon: LucideIcon;
};

/** Who to write to, shown like the author block on a paper. */
export type Correspondent = {
  readonly name: string;
  readonly affiliation: string;
  readonly location: string;
};

export type ContactLink = {
  readonly label: string;
  readonly value: string;
  readonly href: string;
  readonly Icon: LucideIcon;
};

/** Web links open in a new tab; mailto links hand off to the mail client. */
export function opensInNewTab(link: ContactLink): boolean {
  return link.href.startsWith("http");
}
