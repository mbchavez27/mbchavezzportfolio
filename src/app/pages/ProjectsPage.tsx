import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "../components/Navbar";
import groupifyImg from "@/imports/image-7.png";
import panaToolsImg from "@/imports/image-8.png";
import lscsLinksImg from "@/imports/image-9.png";
import leapImg from "@/imports/image-10.png";
import arwImg from "@/imports/image-11.png";
import lscsWebsiteImg from "@/imports/image-12.png";

const stats = [
  { value: "5+", label: "Projects Built" },
  { value: "3", label: "Domains Explored" },
  { value: "3+", label: "Technologies Used" },
];

const domains = ["Frontend", "Backend", "Artificial Intelligence"];

const projects = [
  {
    index: "01",
    title: "Pana Tools",
    role: "Project Head: Product Owner & Scrum Master",
    subtitle: "Directed the end-to-end development of a DLSU application directory by managing 3 developers through Agile sprints, bridging core system design and TypeScript development to deliver a centralized directory featuring 20+ Lasallian app submissions.",
    domain: "Software Engineering",
    tags: ["TypeScript", "Agile", "Scrum", "Product Management"],
    href: null,
    image: panaToolsImg,
  },
  {
    index: "02",
    title: "La Salle Computer Society Website",
    role: "Lead Engineer",
    subtitle: "Co-led frontend development of the LSCS website, delivering a modern, mobile-responsive platform to showcase initiatives, events, and projects with a scalable, intuitive UI.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    href: null,
    image: lscsWebsiteImg,
  },
  {
    index: "03",
    title: "Annual Recruitment Week 2025 Website",
    role: "Co-Lead Frontend Engineer",
    subtitle: "Co-led the frontend of DLSU's Annual Recruitment Week 2025 platform, driving 22,000+ student registrations across 40+ organizations with a scalable, secure, mobile-first experience under tight deadlines.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "22k+ Users"],
    href: null,
    image: arwImg,
  },
  {
    index: "04",
    title: "Groupify",
    role: "Machine Learning Engineer",
    subtitle: "Developed Groupify, an interest-based matchmaking app that extracts and cleans user keywords, generates MPNet embeddings, clusters them with K-Means, and uses a greedy algorithm to match 800+ users in under 20 seconds.",
    domain: "Artificial Intelligence",
    tags: ["Python", "MPNet", "K-Means", "Matchmaking"],
    href: null,
    image: groupifyImg,
  },
  {
    index: "05",
    title: "LEAP 2025 Website",
    role: "Senior Frontend Engineer",
    subtitle: "Led the frontend of a high-traffic registration platform serving 22,000+ DLSU students, delivering a scalable, secure, and mobile-first enrollment experience under tight timelines.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "22k+ Students"],
    href: null,
    image: leapImg,
  },
  {
    index: "06",
    title: "LSCS Links",
    role: "Senior Frontend Engineer",
    subtitle: "Built a custom link management platform for 100+ LSCS officers, improving link management efficiency by 40%, enabling near-instant link creation, and supporting consistent branding across 10+ events.",
    domain: "Software Engineering",
    tags: ["Next.js", "TypeScript", "Link Management"],
    href: null,
    image: lscsLinksImg,
  },
];

function FeaturedProjects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white border-t border-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
        className="px-10 md:px-24 lg:px-32 pt-20 pb-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Featured Projects
        </h2>
        <p className="text-sm text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Things I've Built
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200">
        {projects.map((project, i) => (
          <motion.div
            key={project.index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative overflow-hidden border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0"
          >
            <Link
              to={project.href ?? `/case-study/coming-soon?project=${encodeURIComponent(project.title)}`}
              target={project.href ? "_blank" : undefined}
              rel="noreferrer"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              className="block relative text-left overflow-hidden group min-h-96 w-full bg-zinc-950"
            >
              {/* Background image or grid texture */}
              {project.image ? (
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center" />
              ) : (
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
                />
              )}
              <div className="absolute inset-0 bg-zinc-950/65 group-hover:bg-zinc-950/80 transition-colors duration-500" />

              <div className="relative z-10 flex flex-col justify-end h-full min-h-96 p-8">
                <span className="block text-xs tracking-widest mb-4 text-zinc-600" style={{ fontFamily: "'DM Sans', sans-serif" }}>{project.index}</span>
                <h3 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{project.title}</h3>
                <p className="text-xs text-zinc-500 mb-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>{project.role}</p>
                <p className="text-xs tracking-widest uppercase text-zinc-600 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  <span className="text-primary">@</span> {project.domain}
                </p>
                <div className="overflow-hidden max-h-0 group-hover:max-h-48 transition-all duration-500">
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 border border-zinc-700 text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
                    ))}
                  </div>
                </div>
                {project.href ? (
                  <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors duration-300 mt-5">
                    <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>View Case Study</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-zinc-500 group-hover:text-white transition-colors duration-300 mt-5">
                    <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>View Case Study</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 h-px bg-white/20 w-0 group-hover:w-full transition-all duration-500" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const stackCategories = [
  {
    label: "Languages & Databases",
    items: ["Python", "TypeScript", "Java", "Go", "SQL", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "AI & Data Systems",
    items: ["PyTorch", "Hugging Face Transformers", "Scikit-learn", "NLP", "LLMs", "Embeddings", "Sentiment Analysis", "Pandas", "NumPy"],
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

function TechnicalStack() {
  return (
    <section className="bg-zinc-950 border-t border-zinc-800 py-24 px-10 md:px-24 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs text-zinc-600 tracking-[0.2em] uppercase mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Technical Stack
        </p>
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
          The technologies and tools I use to build<br />software systems, intelligent applications,<br />and data-driven solutions.
        </h2>
      </motion.div>

      <div className="flex flex-col divide-y divide-zinc-800">
        {stackCategories.map((cat, i) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 py-8"
          >
            <p className="text-xs text-zinc-500 tracking-wide uppercase pt-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {cat.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="text-sm text-zinc-300 border border-zinc-800 px-3 py-1 hover:border-primary hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main className="pt-28 pb-32">

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20 px-10 md:px-24 lg:px-32"
        >
          <p
            className="text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Engineering
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A collection of systems, applications,<br />and solutions built through engineering.
          </h1>
        </motion.div>

        {/* Projects at a Glance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="border-t border-b border-zinc-100 mb-20 relative overflow-hidden"
        >
          <div className="h-0.5 w-full bg-primary" />

          <div className="px-10 md:px-24 lg:px-32 pt-16 pb-5 border-b border-zinc-100">
            <p className="text-xs text-zinc-400 tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Projects at a Glance
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-zinc-100">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-10 md:px-24 lg:px-32 py-10"
              >
                <p className="text-4xl font-semibold text-zinc-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {s.value}
                </p>
                <p className="text-xs text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {s.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="px-10 md:px-24 lg:px-32 py-5 border-t border-zinc-100 flex flex-wrap items-center gap-2">
            <p className="text-xs text-zinc-400 tracking-wide mr-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Domains
            </p>
            {domains.map((d) => (
              <span key={d} className="text-xs border border-zinc-200 text-zinc-500 px-2 py-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {d}
              </span>
            ))}
          </div>
        </motion.div>

        <FeaturedProjects />
        <TechnicalStack />

      </main>
    </div>
  );
}
