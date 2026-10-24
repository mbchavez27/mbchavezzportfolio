import AtAGlance from "@/components/organisms/AtAGlance";
import { projectDomains, projectStats } from "../data/projects.data";

export default function ProjectsAtAGlanceContainer() {
  return (
    <AtAGlance title="Projects at a Glance" stats={projectStats} tagGroups={[{ label: "Domains", tags: projectDomains }]} />
  );
}
