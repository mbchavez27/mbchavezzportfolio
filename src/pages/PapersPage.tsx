import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import { ResearchAtAGlanceContainer, ResearchWorkContainer } from "@/features/papers";

export default function PapersPage() {
  return (
    <PageShell>
      <PageHero title="Papers" />
      <ResearchAtAGlanceContainer />
      <div className="pb-16">
        <ResearchWorkContainer />
      </div>
    </PageShell>
  );
}
