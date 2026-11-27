import portraitBackImg from "@/assets/home/portrait-back.webp";
import portraitImg from "@/assets/home/portrait.webp";
import { papers, researchAreas } from "@/features/papers";
import { productionDisciplines, productions } from "@/features/productions";
import { projectFocus, projects } from "@/features/projects";
import Introduction from "../components/Introduction";
import { heroCallToAction, socialLinks } from "../data/home.data";

/** Only terms from your own work: what you built, produced, published and study. */
const fieldWords: readonly string[] = [
  ...new Set([
    ...projects.map((project) => project.title),
    ...productions.map((production) => production.title),
    ...papers.map((paper) => paper.venue.name),
    ...researchAreas,
    ...projectFocus,
    ...productionDisciplines,
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
