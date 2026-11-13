import { papers, summarizePapers } from "@/features/papers";
import Highlights from "../components/Highlights";
import { selectedWork } from "../data/home.data";

export default function HighlightsContainer() {
  const { accepted } = summarizePapers(papers);
  return <Highlights highlights={selectedWork(accepted)} />;
}
