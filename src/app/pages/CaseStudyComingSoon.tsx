import { motion } from "motion/react";
import { Link, useSearchParams } from "react-router";
import { ArrowLeft } from "lucide-react";

export default function CaseStudyComingSoon() {
  const [params] = useSearchParams();
  const title = params.get("project");

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-8 relative overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Maroon glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 text-center max-w-xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs text-primary tracking-[0.3em] uppercase mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Case Study
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-semibold text-white leading-tight mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Coming Soon.
        </motion.h1>

        {title && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm text-zinc-500 mb-3"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {title}
          </motion.p>
        )}

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-px bg-primary mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-zinc-500 text-sm leading-relaxed mb-12"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          This case study is currently being written. Check back soon for a full breakdown of the process, decisions, and outcomes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors duration-200 tracking-widest uppercase"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <ArrowLeft size={12} />
            Back to Engineering
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
