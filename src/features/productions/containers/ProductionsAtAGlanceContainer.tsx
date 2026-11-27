import AtAGlance from "@/components/organisms/AtAGlance";
import { productionDisciplines, productionEventTypes, productions } from "../data/productions.data";
import { firstYear } from "../domain/productions.domain";

export default function ProductionsAtAGlanceContainer() {
  return (
    <AtAGlance
      title="Productions at a glance"
      stats={[
        { value: productions.length, label: "Productions" },
        { value: productionDisciplines.length, label: "Disciplines" },
        { value: firstYear(productions), label: "Active since" },
      ]}
      tagGroups={[
        { label: "Disciplines", tags: productionDisciplines },
        { label: "Event types", tags: productionEventTypes },
      ]}
    />
  );
}
