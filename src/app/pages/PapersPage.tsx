import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { ExternalLink, BookOpen, FileText, Link } from "lucide-react";

type PaperLink = { label: string; icon: React.ReactNode; href: string };
type Paper = { title: string; authors: string; desc: string; areas: string[]; links: PaperLink[] };

const stats = [
  { value: "3", label: "Accepted Papers" },
  { value: "2", label: "Oral Presentations" },
  { value: "10k+", label: "Text Samples Analyzed" },
];

const areas = ["NLP", "Sentiment Analysis", "LLMs", "Social Computing"];

export default function PapersPage() {
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
            Papers
          </p>
          <h1
            className="text-3xl md:text-4xl font-semibold text-zinc-900 leading-snug"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            A collection of research contributions<br />in AI, machine learning, and language technologies.
          </h1>
        </motion.div>

        {/* Research at a glance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="border-t border-b border-zinc-100 mb-20 relative overflow-hidden"
        >
          {/* Top maroon accent bar */}
          <div className="h-0.5 w-full bg-primary" />

          {/* Label */}
          <div className="px-10 md:px-24 lg:px-32 pt-16 pb-5 border-b border-zinc-100">
            <p className="text-xs text-zinc-400 tracking-[0.2em] uppercase" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Research at a glance
            </p>
          </div>

          {/* Stats */}
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

          {/* Research areas */}
          <div className="px-10 md:px-24 lg:px-32 py-5 border-t border-zinc-100 flex flex-wrap items-center gap-2">
            <p className="text-xs text-zinc-400 tracking-wide mr-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Research Areas
            </p>
            {areas.map((a) => (
              <span key={a} className="text-xs border border-zinc-200 text-zinc-500 px-2 py-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {a}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Featured Publications */}
        <div className="px-10 md:px-24 lg:px-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-xs text-zinc-400 tracking-[0.2em] uppercase mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              Featured Contributions
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>
              Research Work
            </h2>
          </motion.div>

          {/* AILRIC 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>AILRIC 2026</h2>
                <p className="text-xs text-zinc-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Accepted for Oral Presentation</p>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-zinc-100">
              {([
                {
                  title: "A Machine Proposed Human-Validated Taglish-English Parallel Corpus for E-Commerce Alignment Analysis",
                  authors: "Chavez, M.B., Lee, H., Sadiarin Jr., E., & Gonda, R.",
                  desc: "Development and validation of a Taglish-English parallel corpus for improving multilingual NLP analysis in e-commerce contexts.",
                  areas: ["NLP", "Machine Translation", "Dataset Creation"],
                  links: [
                    { label: "View Paper", icon: <ExternalLink size={12} />, href: "#" },
                    { label: "Conference", icon: <BookOpen size={12} />, href: "#" },
                    { label: "DOI", icon: <Link size={12} />, href: "#" },
                    { label: "PDF", icon: <FileText size={12} />, href: "#" },
                  ],
                },
                {
                  title: "Audience Bias and Sentiment in Korean Cinema: A Cross-Cultural Text Mining Analysis",
                  authors: "Chavez, M.B., Lee, H., Sadiarin Jr., E., Gonda, R., & Park, J.",
                  desc: "Analyzing audience sentiment and cultural bias patterns in Korean cinema using multilingual text mining approaches.",
                  areas: ["Sentiment Analysis", "XLM-R", "Cross-Cultural NLP"],
                  links: [
                    { label: "View Paper", icon: <ExternalLink size={12} />, href: "#" },
                    { label: "Conference", icon: <BookOpen size={12} />, href: "#" },
                    { label: "DOI", icon: <Link size={12} />, href: "#" },
                    { label: "PDF", icon: <FileText size={12} />, href: "#" },
                  ],
                },
              ] as Paper[]).map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="py-8"
                >
                  <h3 className="text-base font-semibold text-zinc-900 leading-snug mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{p.title}</h3>
                  <p className="text-xs text-zinc-400 italic mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.authors}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed mb-5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    <span className="text-xs text-zinc-400 mr-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Research Areas</span>
                    {p.areas.map((a) => (
                      <span key={a} className="text-xs border border-zinc-200 text-zinc-400 px-2 py-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{a}</span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs border border-dashed border-zinc-200 text-zinc-400 px-3 py-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    Links available upon publication
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* IEEE FMLDS 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div>
                <h2 className="text-lg font-semibold text-zinc-900" style={{ fontFamily: "'Playfair Display', serif" }}>IEEE FMLDS 2026</h2>
                <p className="text-xs text-zinc-400 mt-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>Accepted Full Paper</p>
              </div>
            </div>

            <div className="flex flex-col divide-y divide-zinc-100">
              <motion.div
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false }} transition={{ duration: 0.5 }}
                className="py-8"
              >
                <h3 className="text-base font-semibold text-zinc-900 leading-snug mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  The Dynamics of Cancel Culture: A Social Network and Sentiment Trajectory Analysis of Influencer Apology Videos in South Korea
                </h3>
                <p className="text-xs text-zinc-400 italic mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>Chavez, M.B., Lee, H., Sadiarin Jr., E., & Gonda, R.</p>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Examining the lifecycle and sentiment trajectories of cancel culture events on social media, with a focus on influencer apology responses in the South Korean digital landscape.
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-xs text-zinc-400 mr-1" style={{ fontFamily: "'DM Sans', sans-serif" }}>Research Areas</span>
                  {["Social Computing", "NLP", "Data Mining"].map((a) => (
                    <span key={a} className="text-xs border border-zinc-200 text-zinc-400 px-2 py-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>{a}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs border border-dashed border-zinc-200 text-zinc-400 px-3 py-1.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  Links available upon publication
                </span>
              </motion.div>
            </div>
          </motion.div>

        </div>

      </main>
    </div>
  );
}
