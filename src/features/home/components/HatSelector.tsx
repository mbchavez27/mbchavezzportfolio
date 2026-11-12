import SectionHeading from "@/components/molecules/SectionHeading";
import type { Hat } from "../domain/home.domain";
import { GRID_GAP } from "@/components/atoms/surfaces";
import HatCard from "./HatCard";

export const HAT_SELECTOR_ID = "three-hats";

export default function HatSelector({ hats }: { hats: readonly Hat[] }) {
  return (
    <section id={HAT_SELECTOR_ID} className="page-container pb-6 scroll-mt-14">
      <SectionHeading
        title="Three hats. One portfolio."
        subtitle="Choose the lens that best matches what you're looking for."
      />
      {/* Bento: the first hat is a tall card, the other two stack beside it. */}
      <div className={`grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 ${GRID_GAP}`}>
        {hats.map((hat, i) => (
          <HatCard key={hat.role} hat={hat} position={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
