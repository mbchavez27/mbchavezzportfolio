import ResearchWork from "../components/ResearchWork";
import { papers } from "../data/papers.data";
import { groupByVenue } from "../domain/papers.domain";

export default function ResearchWorkContainer() {
  return <ResearchWork venueGroups={groupByVenue(papers)} />;
}
