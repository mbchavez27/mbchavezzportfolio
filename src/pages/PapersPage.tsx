import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/shared/PageShell";
import { ResearchAtAGlanceContainer, ResearchWorkContainer } from "@/features/papers";

export default function PapersPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Papers">
        A collection of research contributions<br />in AI, machine learning, and language technologies.
      </PageHero>
      <ResearchAtAGlanceContainer />
      <div className="pb-32">
        <ResearchWorkContainer />
      </div>
    </PageShell>
  );
}
