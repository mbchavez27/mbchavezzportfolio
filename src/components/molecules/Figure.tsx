import type { ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import ExpandableText from "@/components/atoms/ExpandableText";
import { revealOnScroll } from "@/lib/motion";

type Props = {
  image: string;
  title: string;
  /** Internal route the image and title link to. */
  to?: string;
  /** One gray line under the title, such as a role and date. */
  meta?: string;
  /** A short description; past three lines it is clipped and opens on hover. */
  description?: string;
  /** Position in its grid, for the staggered reveal. */
  position?: number;
};

/** Lays figures out in a tidy 1, 2 or 3 column grid. */
export function FigureGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">{children}</div>;
}

/** An image card: the linked title, an optional gray meta line and a short description. */
export default function Figure({ image, title, to, meta, description, position = 0 }: Props) {
  const img = (
    <img
      src={image}
      alt=""
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  );
  const frame = "group block aspect-[4/3] overflow-hidden rounded-md border border-primary/10";
  const titleClass = "font-display font-semibold text-zinc-900 leading-snug";

  return (
    <motion.figure {...revealOnScroll({ y: 12, delay: (position % 3) * 0.06, duration: 0.45 })}>
      {to ? (
        <Link to={to} className={`${frame} hover:border-primary/40 transition-colors duration-300`} tabIndex={-1} aria-hidden>
          {img}
        </Link>
      ) : (
        <div className={frame}>{img}</div>
      )}

      <figcaption className="mt-3">
        {to ? (
          <Link to={to} className={`group inline-flex items-baseline gap-1.5 ${titleClass} hover:text-primary transition-colors duration-200`}>
            {title}
            <ArrowRight
              size={14}
              className="shrink-0 self-center opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
            />
          </Link>
        ) : (
          <p className={titleClass}>{title}</p>
        )}
        {meta && (
          <p className="font-body text-xs text-zinc-400 mt-0.5 truncate" title={meta}>
            {meta}
          </p>
        )}
        {description && (
          <ExpandableText className={`font-body font-light text-sm text-zinc-500 leading-relaxed ${meta ? "mt-1.5" : "mt-1"}`}>
            {description}
          </ExpandableText>
        )}
      </figcaption>
    </motion.figure>
  );
}
