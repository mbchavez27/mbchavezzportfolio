import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";

type Props = {
  title: ReactNode;
  eyebrow?: string;
  subtitle?: ReactNode;
  /** Heading level; sections use h2, groups inside a section (e.g. a venue) use h3. */
  as?: "h2" | "h3";
  /** Draw the hairline above; off for a section that directly follows a dark band. */
  divider?: boolean;
  className?: string;
};

/** The quiet section header used across the site: a faint maroon hairline, an optional eyebrow, a title. */
export default function SectionHeading({ title, eyebrow, subtitle, as: Heading = "h2", divider = true, className = "" }: Props) {
  return (
    <motion.div {...revealOnScroll()} className={`${divider ? "border-t border-primary/15" : ""} pt-14 pb-6 ${className}`}>
      {eyebrow && (
        <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-3">{eyebrow}</p>
      )}
      <Heading
        className={`font-display font-semibold text-zinc-900 ${Heading === "h2" ? "text-xl md:text-2xl" : "text-lg"}`}
      >
        {title}
      </Heading>
      {subtitle && <p className="font-body font-light text-sm text-zinc-400 mt-2">{subtitle}</p>}
    </motion.div>
  );
}
