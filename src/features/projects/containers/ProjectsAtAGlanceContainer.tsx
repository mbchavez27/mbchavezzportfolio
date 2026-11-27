import AtAGlance from "@/components/organisms/AtAGlance";
import { projectDomains, projectFocus, projects } from "../data/projects.data";
import { countUniqueTags } from "../domain/projects.domain";

export default function ProjectsAtAGlanceContainer() {
  return (
    <AtAGlance
      title="Projects at a glance"
      stats={[
        { value: projects.length, label: "Projects" },
        { value: projectDomains.length, label: "Domains" },
        { value: countUniqueTags(projects), label: "Tools & practices" },
      ]}
      tagGroups={[
        { label: "Focus", tags: projectFocus },
        { label: "Domains", tags: projectDomains },
      ]}
    />
  );
}
