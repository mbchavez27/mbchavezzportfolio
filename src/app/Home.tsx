import { useState } from "react";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { Link } from "react-router";
import { Navbar } from "./components/Navbar";
import portfolioPic from "@/imports/max.jpg";
import aiResearchImg from "@/imports/ai_research.jpg";
import lscsImg from "@/imports/lscs.jpg";
import techImg from "@/imports/tech.jpg";
const resumePdf = "https://animo.li/mbchavez-resume";
import { motion } from "motion/react";

const hats = [
  {
    index: "01",
    role: "AI Researcher",
    image: aiResearchImg,
    org: "Center for ICT for Development",
    description: "Transformer-based NLP research across sentiment analysis, emotion detection, and code-switched text — contributing to 3 accepted conference papers and 1 IEEE full paper.",
    tags: ["NLP", "Transformers", "Research", "IEEE"],
    href: "/papers",
  },
  {
    index: "02",
    role: "Software Engineer",
    image: lscsImg,
    org: "La Salle Computer Society",
    description: "Leading frontend engineering across 3+ teams, architecting Next.js platforms serving 22,000+ students and building internal tooling that cut project setup time by 50%.",
    tags: ["Next.js", "TypeScript", "Architecture", "Tooling"],
    href: "/projects",
  },
  {
    index: "03",
    role: "Technical Operator",
    image: techImg,
    org: "Green Media Group",
    description: "On-the-ground technical operations for university-wide events — sound design, lighting, and live multi-camera switching.",
    tags: ["Audio", "Lighting", "Live Switching", "AV"],
    href: "/productions",
  },
];

function Introduction() {
  return (
    <section className="pt-14 min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-64 md:min-h-full bg-zinc-900 overflow-hidden">
        <img
          src={portfolioPic}
          alt="Max Benedict Chavez"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="bg-zinc-950 relative flex flex-col px-10 md:px-16 py-20 md:py-0 gap-5 justify-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 text-xl md:text-2xl leading-relaxed mb-1"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          AI researcher, software engineer,<br />and technical operator.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
          className="text-white text-2xl md:text-3xl font-semibold leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Building intelligent systems, scalable software, and unforgettable experiences.
        </motion.h1>

        <motion.div initial={{ width: 0 }} animate={{ width: 32 }} transition={{ duration: 0.5, delay: 0.45 }} className="h-px bg-primary" />

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.55 }}
          className="text-zinc-500 text-sm tracking-[0.18em] uppercase"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Max Benedict Chavez
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.65 }}
          className="flex items-center gap-5"
        >
          <a href="https://github.com/mbchavezz" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 group">
            <Github size={14} />
            <span className="text-xs tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/mbchavezz" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 group">
            <Linkedin size={14} />
            <span className="text-xs tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>LinkedIn</span>
          </a>
          <a href={resumePdf} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200 group">
            <FileText size={14} />
            <span className="text-xs tracking-wide" style={{ fontFamily: "'DM Sans', sans-serif" }}>Resume</span>
          </a>
        </motion.div>

        <div className="absolute bottom-10 left-10 md:left-16 flex flex-col items-start gap-2">
          <span className="text-zinc-700 text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}

function HatSelector() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="bg-white border-t border-zinc-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 pt-20 pb-10"
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
          Three hats. One portfolio.
        </h2>
        <p className="text-sm text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Choose the lens that best matches what you're looking for.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 border-t border-zinc-200">
        {hats.map((hat, i) => (
          <motion.div
            key={hat.index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative overflow-hidden border-b md:border-b-0 md:border-r border-zinc-200 last:border-r-0"
          >
          <Link
            to={hat.href}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className="block relative text-left overflow-hidden group min-h-96 w-full"
          >
            <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center overflow-hidden">
              {hat.image ? (
                <img src={hat.image} alt={hat.role} className="w-full h-full object-cover object-center" />
              ) : (
                <svg viewBox="0 0 80 60" className="w-16 h-16 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="4" y="4" width="72" height="52" rx="2" />
                  <circle cx="28" cy="24" r="8" />
                  <path d="M4 44l18-14 14 10 12-8 28 18" />
                </svg>
              )}
            </div>
            <div className="absolute inset-0 bg-zinc-950/65 group-hover:bg-zinc-950/80 transition-colors duration-500" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-96 p-8">
              <span className="block text-xs tracking-widest mb-4 text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>{hat.index}</span>
              <h3 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{hat.role}</h3>
              <p className="text-xs tracking-widest uppercase text-zinc-500 mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                <span className="text-primary">@</span> {hat.org}
              </p>
              <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500">
                <p className="text-sm text-zinc-400 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{hat.description}</p>
                <div className="flex flex-wrap gap-2">
                  {hat.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-0.5 border border-zinc-600 text-zinc-400" style={{ fontFamily: "'DM Sans', sans-serif" }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors duration-300 mt-5">
                <span className="text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>Explore</span>
                <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-px bg-white/20 w-0 group-hover:w-full transition-all duration-500" />
          </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const metrics = [
  { value: "3", label: "Accepted Papers", hat: "AI Researcher" },
  { value: "29k+", label: "Students Served", hat: "Software Engineer" },
  { value: "5+", label: "Events Produced", hat: "Technical Operator" },
];

const works = [
  {
    index: "01",
    hat: "AI Researcher",
    org: "Center for ICT for Development",
    label: "Publications & Conference Presentations",
    title: "A Machine Proposed Human-Validated Taglish-English Parallel Corpus for E-Commerce Alignment Analysis.",
    desc: "Chavez, M.B., Lee, H., Sadiarin Jr., E., & Gonda, R. — Accepted for Oral Presentation at AILRIC 2026. Research on building a machine-proposed, human-validated parallel corpus for Taglish-English e-commerce text alignment.",
    tags: ["AILRIC 2026", "Corpus Linguistics", "NLP", "Taglish"],
    metric: { value: "3", label: "Accepted Papers" },
  },
  {
    index: "02",
    hat: "Software Engineer",
    org: "La Salle Computer Society",
    label: "Software Projects",
    title: "LEAP 2025 Registration Platform.",
    desc: "Led frontend development of a high-traffic registration platform in Next.js and TypeScript serving 22,000+ DLSU students — delivering a scalable, secure, and mobile-first enrollment experience under tight timelines.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Apr–Jun 2025"],
    metric: { value: "29k+", label: "Students Served" },
  },
  {
    index: "03",
    hat: "Technical Operator",
    org: "Green Media Group",
    label: "Production Experiences",
    title: "Animo Christmas — Live Broadcast Switcher.",
    desc: "Operated live camera switching and broadcast output to the campus big screen for DLSU's Animo Christmas event, watched by at least 2,000 students on-site.",
    tags: ["Live Switching", "Broadcast", "Camera", "2k+ Audience"],
    metric: { value: "5+", label: "Events Produced" },
  },
];

function Highlights() {
  return (
    <section className="bg-white border-t border-zinc-100 py-24">
      {/* Section header */}
      <div className="px-10 md:px-16 mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>
          A showcase of my work across three disciplines.
        </h2>
      </div>

      {/* Full-width cards */}
      <div className="flex flex-col divide-y divide-zinc-100">
        {works.map((w, i) => (
          <motion.div
            key={w.index}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group grid grid-cols-1 md:grid-cols-[160px_1fr_120px] gap-8 py-10 px-10 md:px-16 hover:bg-zinc-50 transition-colors duration-200"
          >

            {/* Left — category */}
            <div className="flex flex-col justify-center">
              <span className="block text-xs text-zinc-300 mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{w.index}</span>
              <p className="text-xs text-zinc-400 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>{w.label}</p>
            </div>

            {/* Middle — content */}
            <div>
              <p className="text-base font-semibold text-zinc-900 mb-2 leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>{w.title}</p>
              <p className="text-sm text-zinc-400 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>{w.desc}</p>
              <div className="flex flex-wrap gap-2">
                {w.tags.map((tag) => (
                  <span key={tag} className="text-xs border border-zinc-200 text-zinc-400 px-2 py-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — metric */}
            <div className="flex flex-col items-end justify-center">
              <p className="text-3xl font-semibold text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>{w.metric.value}</p>
              <p className="text-xs text-zinc-400 text-right" style={{ fontFamily: "'DM Sans', sans-serif" }}>{w.metric.label}</p>
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-zinc-950 py-32 px-10 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <p className="text-xs text-zinc-600 tracking-[0.2em] uppercase mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>Contact</p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
          Let's Build Something Together
        </h2>
        <div className="w-8 h-px bg-primary mb-8" />
        <p className="text-zinc-400 text-base leading-relaxed mb-12" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          From AI research to software development and live productions, I'm always open to meaningful collaborations and new opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/50">
          {[
            { icon: <Mail size={16} />, label: "Email", value: "maxbenedict.chavez@gmail.com", href: "mailto:maxbenedict.chavez@gmail.com" },
            { icon: <Linkedin size={16} />, label: "LinkedIn", value: "linkedin.com/in/mbchavezz", href: "https://linkedin.com/in/mbchavezz" },
            { icon: <Github size={16} />, label: "GitHub", value: "github.com/mbchavezz", href: "https://github.com/mbchavezz" },
            { icon: <FileText size={16} />, label: "Resume", value: "View full CV", href: resumePdf },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex flex-col gap-3 bg-zinc-950 px-6 py-8 hover:bg-zinc-900 transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between text-zinc-600 group-hover:text-primary transition-colors duration-200">
                {item.icon}
                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </div>
              <div>
                <p className="text-xs text-zinc-600 mb-1 tracking-wide uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.label}</p>
                <p className="text-sm text-zinc-300 group-hover:text-white transition-colors duration-200 break-all" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Introduction />
        <HatSelector />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}
