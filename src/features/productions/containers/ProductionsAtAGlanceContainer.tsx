import AtAGlance, { Count, Num } from "@/components/organisms/AtAGlance";
import { productionDisciplines, productionEventTypes, productions } from "../data/productions.data";
import { firstYear } from "../domain/productions.domain";

export default function ProductionsAtAGlanceContainer() {
  return (
    <AtAGlance title="Productions at a glance" keywords={[...productionDisciplines, ...productionEventTypes]}>
      <Count value={productions.length} one="production" many="productions" /> across{" "}
      <Count value={productionDisciplines.length} one="discipline" many="disciplines" />, since{" "}
      <Num>{firstYear(productions)}</Num>.
    </AtAGlance>
  );
}
