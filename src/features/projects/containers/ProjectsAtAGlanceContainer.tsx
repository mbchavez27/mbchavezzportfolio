import AtAGlance, { Count } from "@/components/organisms/AtAGlance";
import { projectDomains, projectFocus, projects } from "../data/projects.data";
import { countUniqueTags } from "../domain/projects.domain";

export default function ProjectsAtAGlanceContainer() {
  return (
    <AtAGlance title="Projects at a glance" keywords={[...projectFocus, ...projectDomains]}>
      <Count value={projects.length} one="project" many="projects" /> across{" "}
      <Count value={projectDomains.length} one="domain" many="domains" />, built with{" "}
      <Count value={countUniqueTags(projects)} one="tool or practice" many="tools and practices" />.
    </AtAGlance>
  );
}
