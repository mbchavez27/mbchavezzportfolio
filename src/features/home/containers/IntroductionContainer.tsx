import portraitBackImg from "@/assets/home/portrait-back.webp";
import portraitImg from "@/assets/home/portrait.webp";
import { researchAreas } from "@/features/papers";
import { productionDisciplines } from "@/features/productions";
import { stackCategories } from "@/features/projects";
import Introduction from "../components/Introduction";
import { fieldTokens, heroCallToAction, socialLinks } from "../data/home.data";

/** Every term from the three hats, shuffled together with the generic tokens and deduplicated. */
const fieldWords: readonly string[] = [
  ...new Set([
    ...researchAreas,
    ...stackCategories.flatMap((category) => category.items),
    ...productionDisciplines,
    ...fieldTokens,
  ]),
];

export default function IntroductionContainer() {
  return (
    <Introduction
      portraitSrc={portraitImg}
      hoverPortraitSrc={portraitBackImg}
      callToAction={heroCallToAction}
      socialLinks={socialLinks}
      fieldWords={fieldWords}
    />
  );
}
