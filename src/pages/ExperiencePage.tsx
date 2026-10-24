import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import { EducationTimelineContainer, ExperienceTimelineContainer } from "@/features/experience";

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero eyebrow="Experience">
        Experience spanning research,<br />engineering, and live production.
      </PageHero>
      <div className="px-10 md:px-24 lg:px-32 pb-32">
        <ExperienceTimelineContainer />
        <EducationTimelineContainer />
      </div>
    </PageShell>
  );
}
