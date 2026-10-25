import { BriefcaseBusiness, FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/atoms/brand-icons";
import aiResearcherImg from "@/assets/home/ai-researcher.jpg";
import softwareEngineerImg from "@/assets/home/software-engineer.jpg";
import technicalOperatorImg from "@/assets/home/technical-operator.jpg";
import { profileLinks } from "@/config/links";
import type { CallToAction, ContactLink, Hat, Highlight } from "../domain/home.domain";

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
      "Building scalable systems with TypeScript, Python, and Java. Retail Tech Intern at ING Hubs Philippines; previously led frontend engineering across 3+ teams at LSCS, shipping platforms for 22,000+ students.",
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

/** The research metric is derived from the papers feature, so it is added by HighlightsContainer. */
export const researchHighlight: Omit<Highlight, "metric"> = {
  category: "Publications & Conference Presentations",
  title: "A Machine Proposed Human-Validated Taglish-English Parallel Corpus for E-Commerce Alignment Analysis.",
  description:
    "Chavez, M.B., Lee, H., Sadiarin Jr., E., & Gonda, R. — Accepted for Oral Presentation at AILRIC 2026. Research on building a machine-proposed, human-validated parallel corpus for Taglish-English e-commerce text alignment.",
  tags: ["AILRIC 2026", "Corpus Linguistics", "NLP", "Taglish"],
};

export const otherHighlights: readonly Highlight[] = [
  {
    category: "Software Projects",
    title: "LEAP 2025 Registration Platform.",
    description:
      "Led frontend development of a high-traffic registration platform in Next.js and TypeScript serving 22,000+ DLSU students — delivering a scalable, secure, and mobile-first enrollment experience under tight timelines.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Apr–Jun 2025"],
    metric: { value: "29k+", label: "Students Served" },
  },
  {
    category: "Production Experiences",
    title: "Animo Christmas — Live Broadcast Switcher.",
    description:
      "Operated live camera switching and broadcast output to the campus big screen for DLSU's Animo Christmas event, watched by at least 2,000 students on-site.",
    tags: ["Live Switching", "Broadcast", "Camera", "2k+ Audience"],
    metric: { value: "5+", label: "Events Produced" },
  },
];

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
