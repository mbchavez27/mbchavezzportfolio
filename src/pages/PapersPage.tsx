import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/shared/PageShell";
import { papers, ResearchAtAGlance, ResearchWork } from "@/features/papers";

export default function PapersPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Papers">
        A collection of research contributions<br />in AI, machine learning, and language technologies.
      </PageHero>
      <ResearchAtAGlance papers={papers} />
      <div className="pb-32">
        <ResearchWork papers={papers} />
      </div>
    </PageShell>
  );
}
