import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import TagList from "@/components/molecules/TagList";
import type { Highlight } from "../domain/home.domain";

export default function Highlights({ highlights }: { highlights: readonly Highlight[] }) {
  return (
    <section className="page-container pb-6">
      <SectionHeading eyebrow="Selected work" title="A showcase of my work across three disciplines." />
      <EntryList>
        {highlights.map((highlight, i) => (
          <EntryRow
            key={highlight.title}
            position={i}
            meta={<span className="uppercase">{highlight.category}</span>}
            title={highlight.title}
            subtitle={
              <>
                <span className="font-semibold text-zinc-900">{highlight.metric.value}</span> {highlight.metric.label}
              </>
            }
            summary={highlight.description}
          >
            <TagList tags={highlight.tags} variant="light" />
          </EntryRow>
        ))}
      </EntryList>
    </section>
  );
}
