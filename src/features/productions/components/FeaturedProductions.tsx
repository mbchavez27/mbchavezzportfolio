import SectionIntro from "@/components/molecules/SectionIntro";
import type { Production } from "../domain/productions.domain";
import { GRID_GAP } from "@/components/atoms/surfaces";
import ProductionCard from "./ProductionCard";

// Bento: the first production is a wide feature card, the rest sit in pairs.
const FEATURE_SPAN = "md:col-span-2";

export default function FeaturedProductions({ productions }: { productions: readonly Production[] }) {
  return (
    <section className="bg-white border-t border-zinc-100">
      <SectionIntro title="Featured Productions" subtitle="Selected productions and live events I've supported." />
      <div className={`page-container pb-24 grid grid-cols-1 md:grid-cols-2 ${GRID_GAP}`}>
        {productions.map((production, i) => (
          <ProductionCard
            key={production.title}
            production={production}
            position={i}
            className={i === 0 ? FEATURE_SPAN : ""}
          />
        ))}
      </div>
    </section>
  );
}
