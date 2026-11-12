import type { PaperLink } from "../domain/papers.domain";

const LINK_LABEL: Record<PaperLink["kind"], string> = {
  paper: "Paper",
  conference: "Conference",
  doi: "DOI",
  pdf: "PDF",
};

/** Bracketed reference links, e.g. [Paper] [DOI]; a muted note until the paper is published. */
export default function PaperLinks({ links }: { links: readonly PaperLink[] }) {
  if (links.length === 0) {
    return <span className="font-body font-light text-xs text-zinc-400">[links upon publication]</span>;
  }

  return (
    <span className="flex flex-wrap gap-x-3 gap-y-1">
      {links.map((link) => (
        <a
          key={link.kind}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="font-body text-xs text-primary underline-offset-4 hover:underline"
        >
          [{LINK_LABEL[link.kind]}]
        </a>
      ))}
    </span>
  );
}
