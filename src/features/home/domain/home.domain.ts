import type { LucideIcon } from "lucide-react";

export type Hat = {
  readonly role: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly image: string;
  readonly to: string;
};

export type Highlight = {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly tags: readonly string[];
  readonly metric: { readonly value: string; readonly label: string };
};

export type CallToAction = {
  readonly label: string;
  readonly to: string;
  readonly Icon: LucideIcon;
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
