import AtAGlance from "@/components/shared/AtAGlance";
import { productionStats, productionTagGroups } from "../data/productions.data";

export default function ProductionsAtAGlanceContainer() {
  return <AtAGlance title="Production Highlights" stats={productionStats} tagGroups={productionTagGroups} />;
}
