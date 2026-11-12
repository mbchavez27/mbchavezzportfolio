import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";

type Props = {
  title: ReactNode;
  /** Paper-style section number, e.g. "2" or "1.1". */
  number?: string;
  eyebrow?: string;
  subtitle?: ReactNode;
  /** Heading level; sections use h2, groups inside a section (e.g. a venue) use h3. */
  as?: "h2" | "h3";
  /** Draw the hairline above; off for a section that directly follows a dark band. */
  divider?: boolean;
  className?: string;
};

/** The quiet section header used across the site: a faint maroon hairline, an optional eyebrow, a title. */
export default function SectionHeading({ title, number, eyebrow, subtitle, as: Heading = "h2", divider = true, className = "" }: Props) {
  return (
    <motion.div {...revealOnScroll()} className={`${divider ? "border-t border-primary/15" : ""} pt-10 pb-4 ${className}`}>
      {eyebrow && (
        <p className="font-body text-sm text-zinc-400 tracking-wide [font-variant:small-caps] mb-1">{eyebrow.toLowerCase()}</p>
      )}
      <Heading
        className={`font-display font-semibold text-zinc-900 ${Heading === "h2" ? "text-lg md:text-xl" : "text-base"}`}
      >
        {number && <span className="text-primary tabular-nums mr-2">{number}.</span>}
        {title}
      </Heading>
      {subtitle && <p className="font-body font-light text-sm text-zinc-400 mt-1">{subtitle}</p>}
    </motion.div>
  );
}
