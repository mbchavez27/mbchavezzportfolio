import AtAGlance from "@/components/organisms/AtAGlance";
import { productionStats, productionTagGroups } from "../data/productions.data";

export default function ProductionsAtAGlanceContainer() {
  return (
    <AtAGlance
      title="Production Highlights"
      summary="A snapshot of my live production work: the events I have supported and how long I have been doing it, along with the technical disciplines I cover and the kinds of events they serve."
      stats={productionStats}
      tagGroups={productionTagGroups}
    />
  );
}
