import AtAGlance from "@/components/shared/AtAGlance";
import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/shared/PageShell";
import {
  capabilities,
  FeaturedProductions,
  productions,
  productionStats,
  productionTagGroups,
  RolesCapabilities,
} from "@/features/productions";

export default function ProductionsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Productions">
        A collection of live events,<br />technical experiences, and productions I've supported.
      </PageHero>
      <AtAGlance title="Production Highlights" stats={productionStats} tagGroups={productionTagGroups} />
      <FeaturedProductions productions={productions} />
      <RolesCapabilities capabilities={capabilities} />
    </PageShell>
  );
}
