import SectionIntro from "@/components/molecules/SectionIntro";
import ProjectCard, { type ProjectCardItem } from "./ProjectCard";
import { GRID_GAP } from "@/components/atoms/surfaces";

// Bento spans by position: a wide feature card, two rows of three, then a full-width closer.
const SPANS = ["md:col-span-2", "", "", "", "", "md:col-span-3"] as const;

export default function FeaturedProjects({ items }: { items: readonly ProjectCardItem[] }) {
  return (
    <section className="bg-white border-t border-zinc-100">
      <SectionIntro title="Featured Projects" subtitle="Things I've Built" />
      <div className={`page-container pb-24 grid grid-cols-1 md:grid-cols-3 md:auto-rows-[26rem] ${GRID_GAP}`}>
        {items.map((item, i) => (
          <ProjectCard key={item.project.title} {...item} position={i} className={SPANS[i] ?? ""} />
        ))}
      </div>
    </section>
  );
}
