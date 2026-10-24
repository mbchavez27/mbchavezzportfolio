import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import type { Hat } from "../domain/home.domain";
import HatCard from "./HatCard";

export const HAT_SELECTOR_ID = "three-hats";

export default function HatSelector({ hats }: { hats: readonly Hat[] }) {
  return (
    <section id={HAT_SELECTOR_ID} className="bg-white border-t border-zinc-100 scroll-mt-14">
      <motion.div {...revealOnScroll()} className="max-w-6xl mx-auto px-6 pt-20 pb-10">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 mb-3">
          Three hats. One portfolio.
        </h2>
        <p className="font-body text-sm text-zinc-400">Choose the lens that best matches what you're looking for.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200">
        {hats.map((hat, i) => (
          <HatCard key={hat.role} hat={hat} position={i} />
        ))}
      </div>
    </section>
  );
}
