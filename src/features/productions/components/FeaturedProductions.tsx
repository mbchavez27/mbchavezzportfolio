import SectionIntro from "@/components/molecules/SectionIntro";
import type { Production } from "../domain/productions.domain";
import ProductionRow from "./ProductionRow";

export default function FeaturedProductions({ productions }: { productions: readonly Production[] }) {
  return (
    <section className="bg-white border-t border-zinc-100">
      <SectionIntro title="Featured Productions" subtitle="Selected productions and live events I've supported." />
      <div className="flex flex-col divide-y divide-zinc-800 border-t border-zinc-200">
        {productions.map((production, i) => (
          <ProductionRow key={production.title} production={production} position={i} />
        ))}
      </div>
    </section>
  );
}
