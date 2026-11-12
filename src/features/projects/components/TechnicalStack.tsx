import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import { CARD_DARK, GRID_GAP } from "@/components/atoms/surfaces";
import type { StackCategory } from "../domain/projects.domain";

export default function TechnicalStack({ categories }: { categories: readonly StackCategory[] }) {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800 py-24">
      <div className="page-container">
        <motion.div {...revealOnScroll()} className="mb-12">
          <p className="font-body font-light text-xs text-zinc-600 tracking-[0.2em] uppercase mb-5">Technical Stack</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-4">
            The technologies and tools I use to build <br className="hidden md:inline" />software systems, intelligent applications, <br className="hidden md:inline" />and data-driven solutions.
          </h2>
        </motion.div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${GRID_GAP}`}>
          {categories.map((category, i) => (
            <motion.div
              key={category.label}
              {...revealOnScroll({ y: 16, delay: i * 0.1, duration: 0.45 })}
              className={`flex flex-col gap-5 p-6 md:p-8 md:odd:last:col-span-2 ${CARD_DARK}`}
            >
              <p className="font-body font-light text-xs text-zinc-500 tracking-wide uppercase">{category.label}</p>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-body font-light text-sm text-zinc-300 border border-zinc-700 rounded-full px-3 py-1 hover:border-primary hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
