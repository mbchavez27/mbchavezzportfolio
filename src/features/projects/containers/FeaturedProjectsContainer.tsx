import { caseStudyPath } from "@/features/case-study";
import FeaturedProjects from "../components/FeaturedProjects";
import { projects } from "../data/projects.data";

export default function FeaturedProjectsContainer() {
  const items = projects.map((project) => ({ project, caseStudyHref: caseStudyPath(project.title) }));
  return <FeaturedProjects items={items} />;
}
