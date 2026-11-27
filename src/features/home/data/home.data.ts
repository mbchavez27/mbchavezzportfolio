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

export const hats: readonly Hat[] = [
  {
    role: "AI Researcher",
    description: "Computational social science, LLMs, machine translation and text mining.",
    image: aiResearcherImg,
    to: "/papers",
  },
  {
    role: "Software Engineer",
    description: "Scalable systems in TypeScript, Python and Java, from ING Hubs to LSCS.",
    image: softwareEngineerImg,
    to: "/projects",
  },
  {
    role: "Technical Operator",
    description: "Live sound and audio-visual playback for university-wide events.",
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
