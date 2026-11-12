import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { StackCategory } from "../domain/projects.domain";

export default function TechnicalStack({ categories }: { categories: readonly StackCategory[] }) {
  return (
    <section className="page-container pb-16">
      <SectionHeading
        number="2"
        eyebrow="Technical Stack"
        title="The technologies and tools I use to build software systems, intelligent applications, and data-driven solutions."
      />
      <EntryList>
        {categories.map((category, i) => (
          <EntryRow key={category.label} position={i} meta={<span className="uppercase">{category.label}</span>}>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <span
                  key={item}
                  className="font-body font-light text-sm text-zinc-600 border border-primary/15 rounded-full px-3 py-0.5 hover:border-primary hover:text-zinc-900 transition-colors duration-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </EntryRow>
        ))}
      </EntryList>
    </section>
  );
}
