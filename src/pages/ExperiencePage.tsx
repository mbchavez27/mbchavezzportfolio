import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import { EducationTimelineContainer, ExperienceTimelineContainer } from "@/features/experience";

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHero title="Experience" />
      <div className="page-container pb-16">
        <ExperienceTimelineContainer />
        <EducationTimelineContainer />
      </div>
    </PageShell>
  );
}
