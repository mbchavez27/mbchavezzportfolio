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
      <SectionHeading title="Featured Projects" subtitle="Things I've built." />
      <FigureGrid>
        {items.map(({ project, caseStudyHref }, i) => (
          <Figure
            key={project.title}
            number={i + 1}
            position={i}
            image={project.image}
            title={`${project.title}.`}
            to={caseStudyHref}
            details={
              <>
                {project.role} · <span className="text-primary">@</span>
                {project.domain}. {project.summary}
                <span className="block mt-1.5 text-xs text-zinc-400">{project.tags.join(" · ")}</span>
              </>
            }
            links={[{ label: "case study", to: caseStudyHref }]}
          />
        ))}
      </FigureGrid>
    </section>
  );
}
