import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { formatIndex } from "@/lib/format";
import { revealOnScroll } from "@/lib/motion";
import { CARD_LIGHT, CARD_LIGHT_HOVER, GRID_GAP } from "@/components/atoms/surfaces";

export type CurrentRoleEntry = {
  readonly role: string;
  readonly organization: string;
  readonly location: string;
  readonly duration: string;
};

const EXPERIENCE_PATH = "/experience";

export default function CurrentRoles({ entries }: { entries: readonly CurrentRoleEntry[] }) {
  if (entries.length === 0) return null;

  return (
    <section className="bg-white border-t border-zinc-100 py-24">
      <motion.div {...revealOnScroll()} className="page-container mb-12">
        <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">Currently</p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900">
          What Keeps Me Busy
        </h2>
      </motion.div>

      <div className={`page-container grid grid-cols-1 md:grid-cols-2 ${GRID_GAP}`}>
        {entries.map((entry, i) => (
          <motion.div
            key={`${entry.role}@${entry.organization}`}
            {...revealOnScroll({ y: 24, delay: i * 0.1, duration: 0.5 })}
            className="md:odd:last:col-span-2"
          >
            <Link
              to={EXPERIENCE_PATH}
              className={`group flex flex-col justify-between gap-10 h-full p-8 ${CARD_LIGHT} ${CARD_LIGHT_HOVER}`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 font-body font-light text-xs text-zinc-500 tracking-wide uppercase">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-primary opacity-75 animate-ping" />
                    <span className="relative w-2 h-2 rounded-full bg-primary" />
                  </span>
                  Now · {entry.duration}
                </span>
                <span className="font-body font-light text-xs text-zinc-300">{formatIndex(i)}</span>
              </div>

              <div>
                <h3 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 group-hover:text-primary transition-colors duration-200 mb-3">
                  {entry.role}
                </h3>
                <div className="flex items-end justify-between gap-4">
                  <p className="font-body font-light text-sm text-zinc-500">
                    <span className="text-primary">@</span> {entry.organization} · {entry.location}
                  </p>
                  <ArrowRight
                    size={20}
                    className="shrink-0 text-zinc-300 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="page-container mt-10 flex justify-end">
        <Link
          to={EXPERIENCE_PATH}
          className="group flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors duration-300"
        >
          <span className="font-body text-xs tracking-widest uppercase">View full experience</span>
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
}
