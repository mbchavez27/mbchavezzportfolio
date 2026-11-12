import portraitBackImg from "@/assets/home/portrait-back.jpg";
import portraitImg from "@/assets/home/portrait.jpg";
import Introduction from "../components/Introduction";
import { heroCallToAction, socialLinks } from "../data/home.data";

export default function IntroductionContainer() {
  return (
    <Introduction
      portraitSrc={portraitImg}
      hoverPortraitSrc={portraitBackImg}
      callToAction={heroCallToAction}
      socialLinks={socialLinks}
    />
  );
}
