import AtAGlance from "@/components/shared/AtAGlance";
import { researchAreas, textSamplesAnalyzed } from "../data/papers.data";
import { summarizePapers, type Paper } from "../domain/papers.domain";

export default function ResearchAtAGlance({ papers }: { papers: readonly Paper[] }) {
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
