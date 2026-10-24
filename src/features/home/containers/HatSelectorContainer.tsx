import { papers, summarizePapers } from "@/features/papers";
import HatSelector from "../components/HatSelector";
import { otherHats, researcherHat } from "../data/home.data";

export default function HatSelectorContainer() {
  const { accepted } = summarizePapers(papers);
  return <HatSelector hats={[researcherHat(accepted), ...otherHats]} />;
}
