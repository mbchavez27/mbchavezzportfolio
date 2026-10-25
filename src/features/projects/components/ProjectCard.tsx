import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import RevealOnHover from "@/components/molecules/RevealOnHover";
import TagList from "@/components/molecules/TagList";
import { formatIndex } from "@/lib/format";
import { revealOnScroll } from "@/lib/motion";
import type { Project } from "../domain/projects.domain";

export type ProjectCardItem = {
  readonly project: Project;
  readonly caseStudyHref: string;
};

type Props = ProjectCardItem & {
  position: number;
};

export default function ProjectCard({ project, caseStudyHref, position }: Props) {
  return (
    <motion.div
      {...revealOnScroll({ y: 40, delay: position * 0.12, duration: 0.5 })}
      className="relative overflow-hidden border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0"
    >
      <Link
        to={caseStudyHref}
        className="block relative text-left overflow-hidden group min-h-96 w-full bg-zinc-950"
      >
        <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/65 group-hover:bg-zinc-950/80 transition-colors duration-500" />

        <div className="relative z-10 flex flex-col justify-end h-full min-h-96 p-8">
          <span className="font-body font-light block text-xs tracking-widest mb-4 text-zinc-600">{formatIndex(position)}</span>
          <h3 className="font-display text-xl font-semibold text-white mb-1">{project.title}</h3>
          <p className="font-body font-light text-xs text-zinc-500 mb-1">{project.role}</p>
          <p className="font-body font-light text-xs tracking-widest uppercase text-zinc-600 mb-5">
            <span className="text-primary">@</span> {project.domain}
          </p>
          <RevealOnHover>
            <p className="font-body font-light text-sm text-zinc-400 leading-relaxed mb-4">{project.summary}</p>
            <TagList tags={project.tags} variant="dark" />
          </RevealOnHover>
          <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors duration-300 mt-5">
            <span className="font-body text-xs tracking-widest uppercase">View Case Study</span>
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 h-px bg-white/20 w-0 group-hover:w-full transition-all duration-500" />
      </Link>
    </motion.div>
  );
}
