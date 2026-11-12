import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import type { Production } from "../domain/productions.domain";

export default function FeaturedProductions({ productions }: { productions: readonly Production[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading title="Featured Productions" subtitle="Selected productions and live events I've supported." />
      <EntryList>
        {productions.map((production, i) => (
          <EntryRow
            key={production.title}
            position={i}
            meta={production.date}
            title={production.title}
            subtitle={
              <>
                {production.role} <span className="text-zinc-400">· {production.organization}</span>
              </>
            }
            thumbnail={production.image}
          >
            <ul className="flex flex-col gap-1">
              {production.responsibilities.map((responsibility) => (
                <li key={responsibility} className="font-body font-light flex items-start gap-2 text-sm text-zinc-500">
                  <span className="text-primary shrink-0">•</span>
                  {responsibility}
                </li>
              ))}
            </ul>
          </EntryRow>
        ))}
      </EntryList>
    </section>
  );
}
