import Figure, { FigureGrid } from "@/components/molecules/Figure";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Production } from "../domain/productions.domain";

export default function FeaturedProductions({ productions }: { productions: readonly Production[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading number="1" title="Featured Productions" />
      <FigureGrid>
        {productions.map((production, i) => (
          <Figure
            key={production.title}
            position={i}
            image={production.image}
            title={production.title}
            description={`${production.role} · ${production.date}`}
          />
        ))}
      </FigureGrid>
    </section>
  );
}
