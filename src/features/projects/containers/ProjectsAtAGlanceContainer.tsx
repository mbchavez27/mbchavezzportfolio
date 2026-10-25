import AtAGlance from "@/components/organisms/AtAGlance";
import { projectDomains, projectFocus, projectStats } from "../data/projects.data";

export default function ProjectsAtAGlanceContainer() {
  return (
    <AtAGlance
      title="Projects at a Glance"
      stats={projectStats}
      tagGroups={[
        { label: "Focus", tags: projectFocus },
        { label: "Domains", tags: projectDomains },
      ]}
    />
  );
}
