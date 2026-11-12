import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import TagList from "@/components/molecules/TagList";
import type { Project } from "../domain/projects.domain";

export type ProjectCardItem = {
  readonly project: Project;
  readonly caseStudyHref: string;
};

export default function FeaturedProjects({ items }: { items: readonly ProjectCardItem[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading title="Featured Projects" subtitle="Things I've built." />
      <EntryList>
        {items.map(({ project, caseStudyHref }, i) => (
          <EntryRow
            key={project.title}
            position={i}
            meta={<span className="uppercase">{project.domain}</span>}
            title={project.title}
            to={caseStudyHref}
            subtitle={project.role}
            summary={project.summary}
            thumbnail={project.image}
          >
            <TagList tags={project.tags} variant="light" />
          </EntryRow>
        ))}
      </EntryList>
    </section>
  );
}
