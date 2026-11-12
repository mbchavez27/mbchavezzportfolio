import AccentRule from "@/components/atoms/AccentRule";
import PageHero from "@/components/molecules/PageHero";
import PageShell from "@/components/templates/PageShell";
import { LogListContainer } from "@/features/logs";

export default function LogsPage() {
  return (
    <PageShell>
      <PageHero title="Logs" />
      <div className="page-container">
        <AccentRule />
      </div>
      <LogListContainer />
    </PageShell>
  );
}
