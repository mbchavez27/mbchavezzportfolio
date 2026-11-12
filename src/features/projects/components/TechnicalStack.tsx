import AcademicTable from "@/components/molecules/AcademicTable";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { StackCategory } from "../domain/projects.domain";

export default function TechnicalStack({ categories }: { categories: readonly StackCategory[] }) {
  return (
    <section className="page-container pb-16">
      <SectionHeading number="2" title="Technical Stack" />
      <AcademicTable
        number={2}
        caption="Technical stack by category"
        abstract="The technologies and tools I use to build software systems, intelligent applications, and data-driven solutions, grouped by where they sit in the stack."
        columns={["category", "tools"]}
        rows={categories.map((category) => ({ label: category.label, value: category.items.join(", ") }))}
      />
    </section>
  );
}
