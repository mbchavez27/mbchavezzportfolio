import SectionIntro from "@/components/shared/SectionIntro";
import ProjectCard, { type ProjectCardItem } from "./ProjectCard";

export default function FeaturedProjects({ items }: { items: readonly ProjectCardItem[] }) {
  return (
    <section className="bg-white border-t border-zinc-100">
      <SectionIntro title="Featured Projects" subtitle="Things I've Built" />
      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200">
        {items.map((item, i) => (
          <ProjectCard key={item.project.title} {...item} position={i} />
        ))}
      </div>
    </section>
  );
}
