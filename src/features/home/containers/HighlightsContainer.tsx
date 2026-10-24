import { papers, summarizePapers } from "@/features/papers";
import Highlights from "../components/Highlights";
import { otherHighlights, researchHighlight } from "../data/home.data";

export default function HighlightsContainer() {
  const { accepted } = summarizePapers(papers);
  const highlights = [
    { ...researchHighlight, metric: { value: String(accepted), label: "Accepted Papers" } },
    ...otherHighlights,
  ];

  return <Highlights highlights={highlights} />;
}
