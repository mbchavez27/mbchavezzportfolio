import AtAGlance from "@/components/organisms/AtAGlance";
import { projectDomains, projectFocus, projectStats } from "../data/projects.data";

export default function ProjectsAtAGlanceContainer() {
  return (
    <AtAGlance
      title="Projects at a Glance"
      summary="A summary of the software I have built: the number of projects shipped, the engineering domains they cover from frontend to AI, and the languages and focus areas that recur across them."
      stats={projectStats}
      tagGroups={[
        { label: "Focus", tags: projectFocus },
        { label: "Domains", tags: projectDomains },
      ]}
    />
  );
}
