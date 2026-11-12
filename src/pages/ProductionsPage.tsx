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
      <PageHero eyebrow="Productions" />
      <ProductionsAtAGlanceContainer />
      <FeaturedProductionsContainer />
      <RolesCapabilitiesContainer />
    </PageShell>
  );
}
