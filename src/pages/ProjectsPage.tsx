import AtAGlance from "@/components/shared/AtAGlance";
import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/shared/PageShell";
import {
  FeaturedProjects,
  projectDomains,
  projects,
  projectStats,
  stackCategories,
  TechnicalStack,
} from "@/features/projects";

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Engineering">
        A collection of systems, applications,<br />and solutions built through engineering.
      </PageHero>
      <AtAGlance title="Projects at a Glance" stats={projectStats} tagGroups={[{ label: "Domains", tags: projectDomains }]} />
      <FeaturedProjects projects={projects} />
      <TechnicalStack categories={stackCategories} />
    </PageShell>
  );
}
