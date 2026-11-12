import Figure, { FigureGrid } from "@/components/molecules/Figure";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Production } from "../domain/productions.domain";

export default function FeaturedProductions({ productions }: { productions: readonly Production[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading title="Featured Productions" subtitle="Selected productions and live events I've supported." />
      <FigureGrid>
        {productions.map((production, i) => (
          <Figure
            key={production.title}
            number={i + 1}
            position={i}
            image={production.image}
            title={`${production.title}.`}
            details={
              <>
                {production.role}, {production.organization} ({production.date}).{" "}
                {production.responsibilities.join("; ")}.
              </>
            }
          />
        ))}
      </FigureGrid>
    </section>
  );
}
