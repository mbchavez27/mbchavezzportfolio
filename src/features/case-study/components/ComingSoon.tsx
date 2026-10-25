import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { drawRule, revealOnLoad } from "@/lib/motion";

export default function ComingSoon({ projectTitle }: { projectTitle?: string }) {
  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center px-8 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <main className="relative z-10 text-center max-w-xl">
        <motion.p
          {...revealOnLoad({ y: 12, duration: 0.5 })}
          className="font-body text-xs text-primary tracking-[0.3em] uppercase mb-8"
        >
          Case Study
        </motion.p>

        <motion.h1
          {...revealOnLoad({ y: 16, delay: 0.1 })}
          className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-4"
        >
          Coming Soon.
        </motion.h1>

        {projectTitle && (
          <motion.p {...revealOnLoad({ delay: 0.2, duration: 0.5 })} className="font-body font-light text-sm text-zinc-500 mb-3">
            {projectTitle}
          </motion.p>
        )}

        <motion.div {...drawRule(0.3)} className="h-px bg-primary mx-auto mb-8" />

        <motion.p
          {...revealOnLoad({ delay: 0.35, duration: 0.5 })}
          className="font-body font-light text-zinc-500 text-sm leading-relaxed mb-12"
        >
          This case study is currently being written. Check back soon for a full breakdown of the process, decisions,
          and outcomes.
        </motion.p>

        <motion.div {...revealOnLoad({ y: 8, delay: 0.45, duration: 0.5 })}>
          <Link
            to="/projects"
            className="font-body font-light inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-white transition-colors duration-200 tracking-widest uppercase"
          >
            <ArrowLeft size={12} />
            Back to Engineering
          </Link>
        </motion.div>
      </main>
    </div>
  );
}
