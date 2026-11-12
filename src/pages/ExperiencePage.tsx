import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import { EducationTimelineContainer, ExperienceTimelineContainer } from "@/features/experience";

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Experience">
        Experience spanning research, <br className="hidden md:inline" />engineering, and live production.
      </PageHero>
      <div className="page-container pb-16">
        <ExperienceTimelineContainer />
        <EducationTimelineContainer />
      </div>
    </PageShell>
  );
}
