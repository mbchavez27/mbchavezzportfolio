import portraitImg from "@/assets/home/portrait.jpg";
import { preferredScrollBehavior } from "@/lib/scroll";
import { HAT_SELECTOR_ID } from "../components/HatSelector";
import Introduction from "../components/Introduction";
import { heroCallToAction, socialLinks } from "../data/home.data";

export default function IntroductionContainer() {
  const scrollToHats = () =>
    document.getElementById(HAT_SELECTOR_ID)?.scrollIntoView({ behavior: preferredScrollBehavior() });

  return <Introduction
      portraitSrc={portraitImg}
      callToAction={heroCallToAction}
      socialLinks={socialLinks}
      onScrollDown={scrollToHats}
    />;
}
