import { BookOpen, ExternalLink, FileText, Link as LinkIcon } from "lucide-react";
import type { PaperLink } from "../domain/papers.domain";

const linkDisplay = {
  paper: { label: "View Paper", Icon: ExternalLink },
  conference: { label: "Conference", Icon: BookOpen },
  doi: { label: "DOI", Icon: LinkIcon },
  pdf: { label: "PDF", Icon: FileText },
} as const;

export default function PaperLinks({ links }: { links: readonly PaperLink[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => {
        const { label, Icon } = linkDisplay[link.kind];
        return (
          <a
            key={link.kind}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="font-body inline-flex items-center gap-1 text-xs text-primary underline-offset-4 hover:underline"
          >
            <Icon size={12} />
            {label}
          </a>
        );
      })}
    </div>
  );
}
