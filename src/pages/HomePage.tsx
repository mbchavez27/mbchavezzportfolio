import Navbar from "@/components/organisms/Navbar";
import { CurrentRolesContainer } from "@/features/experience";
import {
  ContactContainer,
  HatSelectorContainer,
  HighlightsContainer,
  IntroductionContainer,
} from "@/features/home";
import { LatestLogsContainer } from "@/features/logs";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <IntroductionContainer />
        <CurrentRolesContainer />
        <HatSelectorContainer />
        <HighlightsContainer />
        <LatestLogsContainer />
        <ContactContainer />
      </main>
    </div>
  );
}
