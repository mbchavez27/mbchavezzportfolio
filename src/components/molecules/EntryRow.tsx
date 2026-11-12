import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { revealOnScroll } from "@/lib/motion";

type Props = {
  /** The left column: a date, venue, category or status. Stacks above the content on mobile. */
  meta: ReactNode;
  title: ReactNode;
  /** Internal route the title links to. */
  to?: string;
  /** External URL the title links to (opens in a new tab). */
  href?: string;
  subtitle?: ReactNode;
  summary?: ReactNode;
  /** A small image shown to the right of the content on wider screens. */
  thumbnail?: string;
  /** Position in its list, for the staggered reveal. */
  position?: number;
  children?: ReactNode;
};

const TITLE_CLASS = "font-display text-base md:text-lg font-semibold text-zinc-900 leading-snug";

/** Wraps EntryRows in a list with faint maroon hairlines between them. */
export function EntryList({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <ul className={`divide-y divide-primary/10 ${className}`}>{children}</ul>;
}

/** The text-first list row used across the site: a meta column on the left, the entry on the right. */
export default function EntryRow({ meta, title, to, href, subtitle, summary, thumbnail, position = 0, children }: Props) {
  const linkClass = `group inline-flex items-baseline gap-1.5 ${TITLE_CLASS} hover:text-primary transition-colors duration-200`;
  const arrowClass = "shrink-0 self-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200";

  const heading = to ? (
    <Link to={to} className={linkClass}>
      {title}
      <ArrowRight size={14} className={arrowClass} />
    </Link>
  ) : href ? (
    <a href={href} target="_blank" rel="noreferrer" className={linkClass}>
      {title}
      <ArrowUpRight size={14} className={arrowClass} />
    </a>
  ) : (
    <span className={TITLE_CLASS}>{title}</span>
  );

  return (
    <motion.li
      {...revealOnScroll({ y: 12, delay: Math.min(position, 6) * 0.05, duration: 0.45 })}
      className="grid grid-cols-1 sm:grid-cols-[7rem_1fr] gap-x-6 gap-y-1 py-5"
    >
      <div className="font-body font-light text-xs text-zinc-400 tracking-wide sm:pt-1">{meta}</div>
      <div className="flex gap-5">
        <div className="min-w-0 flex-1">
          <h3>{heading}</h3>
          {subtitle && <p className="font-body font-light text-sm text-zinc-500 mt-1">{subtitle}</p>}
          {summary && <p className="font-body font-light text-sm text-zinc-500 leading-relaxed mt-2">{summary}</p>}
          {children && <div className="mt-3">{children}</div>}
        </div>
        {thumbnail && (
          <img
            src={thumbnail}
            alt=""
            loading="lazy"
            className="hidden sm:block shrink-0 w-28 aspect-[4/3] rounded-lg object-cover"
          />
        )}
      </div>
    </motion.li>
  );
}
