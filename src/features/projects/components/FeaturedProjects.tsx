import Figure, { FigureGrid } from "@/components/molecules/Figure";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Project } from "../domain/projects.domain";

export type ProjectCardItem = {
  readonly project: Project;
  readonly caseStudyHref: string;
};

export default function FeaturedProjects({ items }: { items: readonly ProjectCardItem[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading number="1" title="Featured Projects" />
      <FigureGrid>
        {items.map(({ project, caseStudyHref }, i) => (
          <Figure
            key={project.title}
            position={i}
            image={project.image}
            title={project.title}
            to={caseStudyHref}
            description={project.role}
          />
        ))}
      </FigureGrid>
    </section>
  );
}
