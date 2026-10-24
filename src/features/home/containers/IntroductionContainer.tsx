import portraitImg from "@/assets/home/portrait.jpg";
import Introduction from "../components/Introduction";
import { socialLinks } from "../data/home.data";

export default function IntroductionContainer() {
  return <Introduction portraitSrc={portraitImg} socialLinks={socialLinks} />;
}
