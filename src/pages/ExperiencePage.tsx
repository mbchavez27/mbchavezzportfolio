import PageHero from "@/components/shared/PageHero";
import PageShell from "@/components/shared/PageShell";
import { currentYearMonth, EducationTimeline, ExperienceTimeline, positions, schooling } from "@/features/experience";

export default function ExperiencePage() {
  const today = currentYearMonth();

  return (
    <PageShell>
      <PageHero eyebrow="Experience">
        Experience spanning research,<br />engineering, and live production.
      </PageHero>
      <div className="px-10 md:px-24 lg:px-32">
        <ExperienceTimeline positions={positions} today={today} />
        <EducationTimeline schooling={schooling} today={today} />
      </div>
    </PageShell>
  );
}
