import AtAGlance from "@/components/organisms/AtAGlance";
import { papers, researchAreas, textSamplesAnalyzed } from "../data/papers.data";
import { summarizePapers } from "../domain/papers.domain";

export default function ResearchAtAGlanceContainer() {
  const { accepted, oralPresentations } = summarizePapers(papers);

  return (
    <AtAGlance
      title="Research at a glance"
      stats={[
        { value: accepted, label: "Accepted papers" },
        { value: oralPresentations, label: "Oral presentations" },
        { value: textSamplesAnalyzed, label: "Text samples analysed" },
      ]}
      tagGroups={[{ label: "Research areas", tags: researchAreas }]}
    />
  );
}
