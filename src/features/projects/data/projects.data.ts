import arwImg from "@/assets/projects/arw-2025.png";
import groupifyImg from "@/assets/projects/groupify.png";
import leapImg from "@/assets/projects/leap-2025.png";
import lscsLinksImg from "@/assets/projects/lscs-links.png";
import lscsWebsiteImg from "@/assets/projects/lscs-website.png";
import panaToolsImg from "@/assets/projects/pana-tools.png";
import type { Stat } from "@/components/organisms/AtAGlance";
import type { Project, StackCategory } from "../domain/projects.domain";

export const projectStats: readonly Stat[] = [
  { value: "5+", label: "Projects Built" },
  { value: "3", label: "Domains Explored" },
  { value: "3+", label: "Technologies Used" },
];

export const projectDomains: readonly string[] = ["Frontend", "Backend", "Artificial Intelligence"];

export const projectFocus: readonly string[] = ["Scalable Systems", "TypeScript", "Python", "Java"];

export const projects: readonly Project[] = [
  {
    title: "Pana Tools",
    role: "Project Head: Product Owner & Scrum Master",
    summary:
      "Directed the end-to-end development of a DLSU application directory by managing 3 developers through Agile sprints, bridging core system design and TypeScript development to deliver a centralized directory featuring 20+ Lasallian app submissions.",
    domain: "Software Engineering",
    tags: ["TypeScript", "Agile", "Scrum", "Product Management"],
    image: panaToolsImg,
  },
  {
    title: "La Salle Computer Society Website",
    role: "Lead Engineer",
    summary:
      "Co-led frontend development of the LSCS website, delivering a modern, mobile-responsive platform to showcase initiatives, events, and projects with a scalable, intuitive UI.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: lscsWebsiteImg,
  },
  {
    title: "Annual Recruitment Week 2025 Website",
    role: "Co-Lead Frontend Engineer",
    summary:
      "Co-led the frontend of DLSU's Annual Recruitment Week 2025 platform, driving 22,000+ student registrations across 40+ organizations with a scalable, secure, mobile-first experience under tight deadlines.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "22k+ Users"],
    image: arwImg,
  },
  {
    title: "Groupify",
    role: "Machine Learning Engineer",
    summary:
      "Developed Groupify, an interest-based matchmaking app that extracts and cleans user keywords, generates MPNet embeddings, clusters them with K-Means, and uses a greedy algorithm to match 800+ users in under 20 seconds.",
    domain: "Artificial Intelligence",
    tags: ["Python", "MPNet", "K-Means", "Matchmaking"],
    image: groupifyImg,
  },
  {
    title: "LEAP 2025 Website",
    role: "Senior Frontend Engineer",
    summary:
      "Led the frontend of a high-traffic registration platform serving 22,000+ DLSU students, delivering a scalable, secure, and mobile-first enrollment experience under tight timelines.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "22k+ Students"],
    image: leapImg,
  },
  {
    title: "LSCS Links",
    role: "Senior Frontend Engineer",
    summary:
      "Built a custom link management platform for 100+ LSCS officers, improving link management efficiency by 40%, enabling near-instant link creation, and supporting consistent branding across 10+ events.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Link Management"],
    image: lscsLinksImg,
  },
];

export const stackCategories: readonly StackCategory[] = [
  {
    label: "Languages & Databases",
    items: ["Python", "TypeScript", "Java", "Go", "SQL", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "AI & Data Systems",
    items: [
      "PyTorch",
      "Hugging Face Transformers",
      "Scikit-learn",
      "NLP",
      "LLMs",
      "Embeddings",
      "Sentiment Analysis",
      "Pandas",
      "NumPy",
    ],
  },
  {
    label: "Software Engineering",
    items: ["Next.js", "React", "Express.js", "Tailwind CSS", "REST APIs", "System Design"],
  },
  {
    label: "Tools & Infrastructure",
    items: ["Git", "Docker", "Linux"],
  },
];
