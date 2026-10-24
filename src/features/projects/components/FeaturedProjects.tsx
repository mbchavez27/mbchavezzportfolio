import SectionIntro from "@/components/shared/SectionIntro";
import type { Project } from "../domain/projects.domain";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects({ projects }: { projects: readonly Project[] }) {
  return (
    <section className="bg-white border-t border-zinc-100">
      <SectionIntro title="Featured Projects" subtitle="Things I've Built" />
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} position={i} />
        ))}
      </div>
    </section>
  );
}
