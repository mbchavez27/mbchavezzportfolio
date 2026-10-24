import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import { FeaturedProjectsContainer, ProjectsAtAGlanceContainer, TechnicalStackContainer } from "@/features/projects";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Engineering">
        A collection of systems, applications, <br className="hidden md:inline" />and solutions built through engineering.
      </PageHero>
      <ProjectsAtAGlanceContainer />
      <FeaturedProjectsContainer />
      <TechnicalStackContainer />
    </PageShell>
  );
}
