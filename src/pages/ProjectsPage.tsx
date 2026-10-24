import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/shared/PageShell";
import { FeaturedProjectsContainer, ProjectsAtAGlanceContainer, TechnicalStackContainer } from "@/features/projects";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Engineering">
        A collection of systems, applications,<br />and solutions built through engineering.
      </PageHero>
      <ProjectsAtAGlanceContainer />
      <FeaturedProjectsContainer />
      <TechnicalStackContainer />
    </PageShell>
  );
}
