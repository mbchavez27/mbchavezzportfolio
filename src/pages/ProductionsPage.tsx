import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/shared/PageShell";
import {
  FeaturedProductionsContainer,
  ProductionsAtAGlanceContainer,
  RolesCapabilitiesContainer,
} from "@/features/productions";

export default function ProductionsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Productions">
        A collection of live events,<br />technical experiences, and productions I've supported.
      </PageHero>
      <ProductionsAtAGlanceContainer />
      <FeaturedProductionsContainer />
      <RolesCapabilitiesContainer />
    </PageShell>
  );
}
