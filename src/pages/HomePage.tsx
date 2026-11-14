import SiteFrame from "@/components/templates/SiteFrame";
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
    <SiteFrame startsDark>
      <IntroductionContainer />
      <CurrentRolesContainer />
      <HatSelectorContainer />
      <HighlightsContainer />
      <LatestLogsContainer />
      <ContactContainer />
    </SiteFrame>
  );
}
