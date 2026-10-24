import AtAGlance from "@/components/organisms/AtAGlance";
import { productionStats, productionTagGroups } from "../data/productions.data";

export default function ProductionsAtAGlanceContainer() {
  return <AtAGlance title="Production Highlights" stats={productionStats} tagGroups={productionTagGroups} />;
}
