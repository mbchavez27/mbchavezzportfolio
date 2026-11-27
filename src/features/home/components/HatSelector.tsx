import Figure, { FigureGrid } from "@/components/molecules/Figure";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Hat } from "../domain/home.domain";

export const HAT_SELECTOR_ID = "three-hats";

export default function HatSelector({ hats }: { hats: readonly Hat[] }) {
  return (
    <section id={HAT_SELECTOR_ID} className="page-container pb-6 scroll-mt-14">
      <SectionHeading number="2" title="What I Do" />
      <FigureGrid>
        {hats.map((hat, i) => (
          <Figure
            key={hat.role}
            position={i}
            image={hat.image}
            title={hat.role}
            to={hat.to}
            description={hat.description}
          />
        ))}
      </FigureGrid>
    </section>
  );
}
