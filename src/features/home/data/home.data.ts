import { BriefcaseBusiness, FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/atoms/brand-icons";
import aiResearcherImg from "@/assets/home/ai-researcher.jpg";
import softwareEngineerImg from "@/assets/home/software-engineer.jpg";
import technicalOperatorImg from "@/assets/home/technical-operator.jpg";
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

/** The research metric is the accepted-paper count from the papers feature, so HighlightsContainer supplies it. */
export function selectedWork(acceptedPapers: number): readonly Highlight[] {
  return [
    {
      hat: "AI Researcher",
      metric: { value: String(acceptedPapers), label: acceptedPapers === 1 ? "accepted paper" : "accepted papers" },
      title: "A Machine-Proposed, Human-Validated Taglish–English Parallel Corpus for E-Commerce Alignment Analysis.",
      description: "Chavez, M.B., Lee, H., Sadiarin Jr., E., & Gonda, R. Oral presentation, AILRIC 2026.",
    },
    {
      hat: "Software Engineer",
      metric: { value: "22,000+", label: "students served" },
      title: "LEAP 2025 Registration Platform.",
      description: "Led frontend development in Next.js and TypeScript for DLSU student registration, 2025.",
    },
    {
      hat: "Technical Operator",
      metric: { value: "5+", label: "events produced" },
      title: "Animo Christmas Live Broadcast.",
      description: "Live camera switching to the campus big screen for 2,000+ students, DLSU.",
    },
  ];
}

const github: ContactLink = { label: "GitHub", value: "github.com/mbchavezz", href: profileLinks.github, Icon: Github };
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
