import { motion } from "motion/react";
import Summary from "@/components/atoms/Summary";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { StackCategory } from "../domain/projects.domain";

/** The technical stack as a CV-style skills matrix: categories side by side, tools listed under each. */
export default function TechnicalStack({ categories }: { categories: readonly StackCategory[] }) {
  return (
    <section className="page-container pb-16">
      <SectionHeading number="2" title="Technical Stack" />
      <Summary>
        The technologies and tools I use to build software systems, intelligent applications, and data-driven
        solutions, grouped by where they sit in the stack.
      </Summary>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 border-t-2 border-zinc-900 border-b border-b-zinc-300 py-6">
        {categories.map((category, i) => (
          <motion.div
            key={category.label}
            {...revealOnScroll({ y: 12, delay: i * 0.06, duration: 0.45 })}
            className="border-l border-primary/20 pl-4"
          >
            <h3 className="font-body font-semibold text-zinc-900 [font-variant:small-caps] tracking-wide mb-2">
              {category.label.toLowerCase()}
              <sup className="ml-1 text-primary tabular-nums font-normal">{category.items.length}</sup>
            </h3>
            <ul>
              {category.items.map((item) => (
                <li
                  key={item}
                  className="font-body font-light text-sm text-zinc-600 leading-7 hover:text-primary transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
