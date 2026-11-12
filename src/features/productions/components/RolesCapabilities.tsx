import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Capability } from "../domain/productions.domain";

export default function RolesCapabilities({ capabilities }: { capabilities: readonly Capability[] }) {
  return (
    <section className="page-container pb-16">
      <SectionHeading number="2" title="Roles & Capabilities" />
      <EntryList>
        {capabilities.map((capability, i) => (
          <EntryRow
            key={capability.label}
            position={i}
            meta={<span className="uppercase">{capability.label}</span>}
            summary={capability.description}
          />
        ))}
      </EntryList>
    </section>
  );
}
