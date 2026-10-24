import { motion } from "motion/react";
import Tag from "@/components/shared/Tag";
import { revealOnScroll } from "@/lib/motion";
import type { Paper } from "../domain/papers.domain";
import PaperLinks from "./PaperLinks";

type Props = {
  paper: Paper;
  position: number;
};

export default function PaperEntry({ paper, position }: Props) {
  return (
    <motion.div {...revealOnScroll({ x: -16, y: 0, delay: position * 0.1, duration: 0.5 })} className="py-8">
      <h3 className="font-display text-base font-semibold text-zinc-900 leading-snug mb-2">{paper.title}</h3>
      <p className="font-body text-xs text-zinc-400 italic mb-3">{paper.authors}</p>
      <p className="font-body text-sm text-zinc-500 leading-relaxed mb-5">{paper.description}</p>
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span className="font-body text-xs text-zinc-400 mr-1">Research Areas</span>
        {paper.areas.map((area) => (
          <Tag key={area} label={area} variant="light" />
        ))}
      </div>
      {paper.links.length > 0 ? (
        <PaperLinks links={paper.links} />
      ) : (
        <span className="font-body inline-flex items-center gap-1.5 text-xs border border-dashed border-zinc-200 text-zinc-400 px-3 py-1.5">
          Links available upon publication
        </span>
      )}
    </motion.div>
  );
}
