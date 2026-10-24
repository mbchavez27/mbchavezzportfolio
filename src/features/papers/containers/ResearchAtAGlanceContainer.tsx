import AtAGlance from "@/components/shared/AtAGlance";
import { papers, researchAreas, textSamplesAnalyzed } from "../data/papers.data";
import { summarizePapers } from "../domain/papers.domain";

export default function ResearchAtAGlanceContainer() {
  const { accepted, oralPresentations } = summarizePapers(papers);

  return (
    <AtAGlance
      title="Research at a glance"
      stats={[
        { value: String(accepted), label: "Accepted Papers" },
        { value: String(oralPresentations), label: "Oral Presentations" },
        { value: textSamplesAnalyzed, label: "Text Samples Analyzed" },
      ]}
      tagGroups={[{ label: "Research Areas", tags: researchAreas }]}
    />
  );
}
