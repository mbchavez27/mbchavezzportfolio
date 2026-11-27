import AtAGlance, { Count } from "@/components/organisms/AtAGlance";
import { papers, researchAreas, textSamplesAnalyzed } from "../data/papers.data";
import { summarizePapers } from "../domain/papers.domain";

export default function ResearchAtAGlanceContainer() {
  const { accepted, oralPresentations } = summarizePapers(papers);

  return (
    <AtAGlance title="Research at a glance" keywords={researchAreas}>
      <Count value={accepted} one="accepted paper" many="accepted papers" />,{" "}
      <Count value={oralPresentations} one="oral presentation" many="oral presentations" />, and{" "}
      <Count value={textSamplesAnalyzed} one="text sample" many="text samples" /> analysed.
    </AtAGlance>
  );
}
