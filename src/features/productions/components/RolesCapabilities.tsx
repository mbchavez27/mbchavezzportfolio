import AcademicTable from "@/components/molecules/AcademicTable";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Capability } from "../domain/productions.domain";

export default function RolesCapabilities({ capabilities }: { capabilities: readonly Capability[] }) {
  return (
    <section className="page-container pb-16">
      <SectionHeading number="2" title="Roles & Capabilities" />
      <AcademicTable
        number={2}
        caption="Production roles and responsibilities"
        abstract="The roles I take on during live productions and what each one involves on the day of a show."
        columns={["role", "responsibility"]}
        rows={capabilities.map((capability) => ({ label: capability.label, value: capability.description }))}
      />
    </section>
  );
}
