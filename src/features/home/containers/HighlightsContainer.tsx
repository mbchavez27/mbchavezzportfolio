import Highlights from "../components/Highlights";
import { selectedWork } from "../data/home.data";

export default function HighlightsContainer() {
  return <Highlights highlights={selectedWork} />;
}
