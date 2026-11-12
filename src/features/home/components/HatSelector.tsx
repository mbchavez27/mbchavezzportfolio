import EntryRow, { EntryList } from "@/components/molecules/EntryRow";
import SectionHeading from "@/components/molecules/SectionHeading";
import TagList from "@/components/molecules/TagList";
import { formatIndex } from "@/lib/format";
import type { Hat } from "../domain/home.domain";

export const HAT_SELECTOR_ID = "three-hats";

export default function HatSelector({ hats }: { hats: readonly Hat[] }) {
  return (
    <section id={HAT_SELECTOR_ID} className="page-container pb-6 scroll-mt-14">
      <SectionHeading
        title="Three hats. One portfolio."
        subtitle="Choose the lens that best matches what you're looking for."
      />
      <EntryList>
        {hats.map((hat, i) => (
          <EntryRow key={hat.role} position={i} meta={formatIndex(i)} title={hat.role} to={hat.to} summary={hat.description}>
            <TagList tags={hat.tags} variant="light" />
          </EntryRow>
        ))}
      </EntryList>
    </section>
  );
}
