import { BriefcaseBusiness, FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/atoms/brand-icons";
import aiResearcherImg from "@/assets/home/ai-researcher.webp";
import softwareEngineerImg from "@/assets/home/software-engineer.webp";
import technicalOperatorImg from "@/assets/home/technical-operator.webp";
import { profileLinks } from "@/config/links";
import type { CallToAction, ContactLink, Correspondent, Hat, Highlight } from "../domain/home.domain";

export const heroCallToAction: CallToAction = {
  label: "View my experience",
  to: "/experience",
  Icon: BriefcaseBusiness,
};

/** The accepted-paper count comes from the papers feature, so HatSelectorContainer supplies it. */
export function researcherHat(acceptedPapers: number): Hat {
  return {
    role: "AI Researcher",
    description: `Research in computational social science, large language models, machine translation, and text mining — with ${acceptedPapers} accepted conference ${acceptedPapers === 1 ? "paper" : "papers"}.`,
    tags: ["Computational Social Science", "LLMs", "Machine Translation", "Text Mining"],
    image: aiResearcherImg,
    to: "/papers",
  };
}

export const otherHats: readonly Hat[] = [
  {
    role: "Software Engineer",
    description:
      "Building scalable systems with TypeScript, Python, and Java. DevOps Engineer Intern at ING Hubs Philippines; previously led frontend engineering across 3+ teams at LSCS, shipping platforms for 22,000+ students.",
    tags: ["Scalable Systems", "TypeScript", "Python", "Java"],
    image: softwareEngineerImg,
    to: "/projects",
  },
  {
    role: "Technical Operator",
    description:
      "Audio and AVP operator for university-wide events — running live sound and audio-visual playback, with camera and live switching work along the way.",
    tags: ["Audio", "AVP", "Live Sound", "Live Switching"],
    image: technicalOperatorImg,
    to: "/productions",
  },
];

export const selectedWork: readonly Highlight[] = [
  { hat: "AI Researcher", title: "Taglish–English Parallel Corpus", fact: "Oral · AILRIC 2026", to: "/papers" },
  { hat: "Software Engineer", title: "LEAP 2025 Registration Platform", fact: "22,000+ students", to: "/projects" },
  { hat: "Technical Operator", title: "Animo Christmas Live Broadcast", fact: "2,000+ viewers", to: "/productions" },
];

const github: ContactLink = { label: "GitHub", value: "github.com/mbchavez27", href: profileLinks.github, Icon: Github };
const linkedin: ContactLink = {
  label: "LinkedIn",
  value: "linkedin.com/in/mbchavezz",
  href: profileLinks.linkedin,
  Icon: Linkedin,
};
const resume: ContactLink = { label: "Resume", value: "View full CV", href: profileLinks.resume, Icon: FileText };
const email: ContactLink = {
  label: "Email",
  value: profileLinks.email,
  href: `mailto:${profileLinks.email}`,
  Icon: Mail,
};

export const socialLinks: readonly ContactLink[] = [github, linkedin, resume];
export const contactLinks: readonly ContactLink[] = [email, linkedin, github, resume];

export const correspondent: Correspondent = {
  name: "Max Benedict Chavez",
  affiliation: "De La Salle University",
  location: "Manila, Philippines",
};
