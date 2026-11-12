import AtAGlance from "@/components/organisms/AtAGlance";
import { papers, researchAreas, textSamplesAnalyzed } from "../data/papers.data";
import { summarizePapers } from "../domain/papers.domain";

export default function ResearchAtAGlanceContainer() {
  const { accepted, oralPresentations } = summarizePapers(papers);

  return (
    <AtAGlance
      title="Research at a glance"
      summary="An overview of my research output so far: peer-reviewed papers on multilingual NLP and computational social science, how many were selected for oral presentation, and the scale of the text data analysed across these studies, alongside the areas the work spans."
      stats={[
        { value: String(accepted), label: "Accepted Papers" },
        { value: String(oralPresentations), label: "Oral Presentations" },
        { value: textSamplesAnalyzed, label: "Text Samples Analyzed" },
      ]}
      tagGroups={[{ label: "Research Areas", tags: researchAreas }]}
    />
  );
}
