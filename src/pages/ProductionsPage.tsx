import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import {
  FeaturedProductionsContainer,
  ProductionsAtAGlanceContainer,
  RolesCapabilitiesContainer,
} from "@/features/productions";

export default function ProductionsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Productions">
        A collection of live events, <br className="hidden md:inline" />technical experiences, and productions I've supported.
      </PageHero>
      <ProductionsAtAGlanceContainer />
      <FeaturedProductionsContainer />
      <RolesCapabilitiesContainer />
    </PageShell>
  );
}
