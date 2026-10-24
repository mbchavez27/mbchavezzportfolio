import { FileText, Mail } from "lucide-react";
import { Github, Linkedin } from "@/components/shared/brand-icons";
import aiResearcherImg from "@/assets/home/ai-researcher.jpg";
import softwareEngineerImg from "@/assets/home/software-engineer.jpg";
import technicalOperatorImg from "@/assets/home/technical-operator.jpg";
import { profileLinks } from "@/config/links";
import type { ContactLink, Hat, Highlight } from "../domain/home.domain";

export const hats: readonly Hat[] = [
  {
    role: "AI Researcher",
    description:
      "Transformer-based NLP research across sentiment analysis, emotion detection, and code-switched text — contributing to 3 accepted conference papers and 1 IEEE full paper.",
    tags: ["NLP", "Transformers", "Research", "IEEE"],
    image: aiResearcherImg,
    to: "/papers",
  },
  {
    role: "Software Engineer",
    description:
      "Leading frontend engineering across 3+ teams, architecting Next.js platforms serving 22,000+ students and building internal tooling that cut project setup time by 50%.",
    tags: ["Next.js", "TypeScript", "Architecture", "Tooling"],
    image: softwareEngineerImg,
    to: "/projects",
  },
  {
    role: "Technical Operator",
    description:
      "On-the-ground technical operations for university-wide events — sound design, lighting, and live multi-camera switching.",
    tags: ["Audio", "Lighting", "Live Switching", "AV"],
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
