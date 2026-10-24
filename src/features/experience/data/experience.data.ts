import type { Position, Schooling } from "../domain/experience.domain";
import { yearMonth } from "../domain/tenure.domain";

export const positions: readonly Position[] = [
  {
    role: "Undergraduate Student Researcher",
    organization: "Center for ICT for Development",
    employmentType: "Full-time",
    tenure: { start: yearMonth(2026, 2) },
    location: "Manila, NCR, Philippines · Hybrid",
    highlights: [
      "Conduct research in Natural Language Processing (NLP), developing transformer-based models for sentiment analysis, emotion detection, and multilingual/code-switched text.",
      "Analyze and model 10,000+ text samples, contributing to 3 accepted conference papers, including 2 oral presentations at AILRIC 2026 and 1 accepted IEEE full paper.",
    ],
    skills: ["Machine Learning", "Natural Language Processing (NLP)"],
  },
  {
    role: "Technical Operator",
    organization: "DLSU Green Media Group",
    employmentType: "Full-time",
    tenure: { start: yearMonth(2025, 8) },
    location: "Manila, NCR, Philippines · On-site",
    highlights: [
      "Gained hands-on experience in technical operations, including sound design, lighting design, and live camera switching for university-wide events, learning how to mix audio for bands and manage visuals.",
      "Assisted in setting up and managing equipment to ensure clear sound, proper lighting, and smooth multi-camera event coverage.",
    ],
    skills: ["Logistics Management", "Audio Visual (AV) Systems"],
  },
  {
    role: "Lead Software Engineer, Frontend",
    organization: "La Salle Computer Society",
    employmentType: "Full-time",
    tenure: { start: yearMonth(2024, 9) },
    location: "Philippines · Hybrid",
    highlights: [
      "Led frontend engineering across 3+ teams, managing 8 engineers, defining development standards, and creating internal tooling such as npx create-lscs-app that reduced project setup time by 50%.",
      "Architected scalable web applications using Next.js and TypeScript, driving frontend architecture decisions, code quality practices, and delivery of platforms serving 22,000+ students.",
    ],
    skills: ["Next.js", "TypeScript", "Frontend Architecture"],
  },
];

export const schooling: readonly Schooling[] = [
  {
    school: "De La Salle University",
    program: "Bachelor of Science in Computer Science, Major in Software Technology",
    tenure: { start: yearMonth(2024, 9), end: yearMonth(2028, 6) },
    location: "Manila, Philippines",
  },
  {
    school: "Asia Pacific College",
    program: "Senior High School · STEM",
    tenure: { start: yearMonth(2021, 8), end: yearMonth(2023, 6) },
    location: "Philippines",
    honors: "Graduated with High Honors",
  },
];
