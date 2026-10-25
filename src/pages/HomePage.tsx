import Navbar from "@/components/organisms/Navbar";
import {
  ContactContainer,
  HatSelectorContainer,
  HighlightsContainer,
  IntroductionContainer,
} from "@/features/home";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <IntroductionContainer />
        <HatSelectorContainer />
        <HighlightsContainer />
        <ContactContainer />
      </main>
    </div>
  );
}
