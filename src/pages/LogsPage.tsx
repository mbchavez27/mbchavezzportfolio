import AccentRule from "@/components/atoms/AccentRule";
import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import { LogListContainer } from "@/features/logs";

export default function LogsPage() {
  return (
    <PageShell>
      <PageHero eyebrow="Logs">
        A collection of notes, reflections, <br className="hidden md:inline" />and things I've learned along the way.
      </PageHero>
      <AccentRule />
      <LogListContainer />
    </PageShell>
  );
}
