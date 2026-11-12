import Figure, { FigureGrid } from "@/components/molecules/Figure";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Hat } from "../domain/home.domain";

export const HAT_SELECTOR_ID = "three-hats";

export default function HatSelector({ hats }: { hats: readonly Hat[] }) {
  return (
    <section id={HAT_SELECTOR_ID} className="page-container pb-6 scroll-mt-14">
      <SectionHeading
        title="Three hats. One portfolio."
        subtitle="Choose the lens that best matches what you're looking for."
      />
      <FigureGrid>
        {hats.map((hat, i) => (
          <Figure
            key={hat.role}
            number={i + 1}
            position={i}
            image={hat.image}
            title={`${hat.role}.`}
            to={hat.to}
            details={
              <>
                {hat.description}
                <span className="block mt-1.5 text-xs text-zinc-400">{hat.tags.join(" · ")}</span>
              </>
            }
            links={[{ label: "explore", to: hat.to }]}
          />
        ))}
      </FigureGrid>
    </section>
  );
}
