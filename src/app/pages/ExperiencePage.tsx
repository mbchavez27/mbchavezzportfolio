import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";

const experiences = [
  {
    role: "Undergraduate Student Researcher",
    org: "Center for ICT for Development",
    type: "Full-time",
    period: "Feb 2026 – Present",
    duration: "6 mos",
    location: "Manila, NCR, Philippines · Hybrid",
    bullets: [
      "Conduct research in Natural Language Processing (NLP), developing transformer-based models for sentiment analysis, emotion detection, and multilingual/code-switched text.",
      "Analyze and model 10,000+ text samples, contributing to 3 accepted conference papers, including 2 oral presentations at AILRIC 2026 and 1 accepted IEEE full paper.",
    ],
    skills: ["Machine Learning", "Natural Language Processing (NLP)"],
  },
  {
    role: "Technical Operator",
    org: "DLSU Green Media Group",
    type: "Full-time",
    period: "Aug 2025 – Present",
    duration: "1 yr",
    location: "Manila, NCR, Philippines · On-site",
    bullets: [
      "Gained hands-on experience in technical operations, including sound design, lighting design, and live camera switching for university-wide events, learning how to mix audio for bands and manage visuals.",
      "Assisted in setting up and managing equipment to ensure clear sound, proper lighting, and smooth multi-camera event coverage.",
    ],
    skills: ["Logistics Management", "Audio Visual (AV) Systems"],
  },
  {
    role: "Lead Software Engineer, Frontend",
    org: "La Salle Computer Society",
    type: "Full-time",
    period: "Sep 2024 – Present",
    duration: "1 yr 11 mos",
    location: "Philippines · Hybrid",
    bullets: [
      "Led frontend engineering across 3+ teams, managing 8 engineers, defining development standards, and creating internal tooling such as npx create-lscs-app that reduced project setup time by 50%.",
      "Architected scalable web applications using Next.js and TypeScript, driving frontend architecture decisions, code quality practices, and delivery of platforms serving 22,000+ students.",
    ],
    skills: ["Next.js", "TypeScript", "Frontend Architecture"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main className="pt-28 pb-32 px-10 md:px-24 lg:px-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p
            className="text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Experience
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Experience spanning research,<br />engineering, and live production.
          </h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200" />

          <div className="flex flex-col gap-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />

                {/* Period */}
                <p
                  className="text-xs text-zinc-400 tracking-wide mb-3"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {exp.period} · {exp.duration}
                </p>

                {/* Role */}
                <h2
                  className="text-xl md:text-2xl font-semibold text-zinc-900 mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {exp.role}
                </h2>

                {/* Org + type */}
                <p
                  className="text-sm text-zinc-500 mb-1"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  <span className="text-primary">@</span> {exp.org} · {exp.type}
                </p>

                {/* Location */}
                <p
                  className="text-xs text-zinc-400 mb-5"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  {exp.location}
                </p>

                {/* Bullets */}
                <ul className="flex flex-col gap-2 mb-5">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm text-zinc-500 leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="text-primary mt-1.5 shrink-0">—</span>
                      {b}
                    </li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs border border-zinc-200 text-zinc-400 px-2 py-0.5"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mt-24 pt-16 border-t border-zinc-100"
        >
          <p
            className="text-xs text-zinc-400 tracking-[0.2em] uppercase mb-10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Education
          </p>

          <div className="flex flex-col gap-12 relative">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-zinc-200" />

          <div className="relative pl-10">
            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-primary" />

            <p
              className="text-xs text-zinc-400 tracking-wide mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Sep 2024 – Jun 2028
            </p>

            <h2
              className="text-xl md:text-2xl font-semibold text-zinc-900 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              De La Salle University
            </h2>

            <p
              className="text-sm text-zinc-500 mb-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Bachelor of Science in Computer Science, Major in Software Technology
            </p>

            <p
              className="text-xs text-zinc-400"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Manila, Philippines
            </p>
          </div>

          <div className="relative pl-10">
            <div className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-300" />

            <p
              className="text-xs text-zinc-400 tracking-wide mb-3"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Aug 2021 – Jun 2023
            </p>

            <h2
              className="text-xl md:text-2xl font-semibold text-zinc-900 mb-1"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Asia Pacific College
            </h2>

            <p
              className="text-sm text-zinc-500 mb-1"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Senior High School · STEM
            </p>

            <p
              className="text-xs text-zinc-400 mb-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Philippines
            </p>

            <span
              className="text-xs border border-zinc-200 text-zinc-400 px-2 py-0.5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Graduated with High Honors
            </span>
          </div>

          </div>
        </motion.div>

      </main>
    </div>
  );
}
