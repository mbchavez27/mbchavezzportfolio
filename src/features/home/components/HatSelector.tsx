import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import type { Hat } from "../domain/home.domain";
import { GRID_GAP } from "@/components/atoms/surfaces";
import HatCard from "./HatCard";

export const HAT_SELECTOR_ID = "three-hats";

export default function HatSelector({ hats }: { hats: readonly Hat[] }) {
  return (
    <section id={HAT_SELECTOR_ID} className="bg-white border-t border-zinc-100 pb-24 scroll-mt-14">
      <motion.div {...revealOnScroll()} className="page-container pt-24 pb-12">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 mb-3">
          Three hats. One portfolio.
        </h2>
        <p className="font-body font-light text-sm text-zinc-400">Choose the lens that best matches what you're looking for.</p>
      </motion.div>

      {/* Bento: the first hat is a tall card, the other two stack beside it. */}
      <div className={`page-container grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 ${GRID_GAP}`}>
        {hats.map((hat, i) => (
          <HatCard key={hat.role} hat={hat} position={i} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}
