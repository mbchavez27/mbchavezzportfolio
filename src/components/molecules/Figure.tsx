import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { revealOnScroll } from "@/lib/motion";

type FigureLink = { readonly label: string; readonly to: string };

type Props = {
  /** The figure's number on its page ("Fig. 3."). */
  number: number;
  image: string;
  title: ReactNode;
  /** Internal route the image and title link to. */
  to?: string;
  /** The caption body after the title. */
  details?: ReactNode;
  /** Bracketed caption links, e.g. [case study]. */
  links?: readonly FigureLink[];
  /** Position in its grid, for the staggered reveal. */
  position?: number;
};

/** Lays figures out in a tidy 1, 2 or 3 column grid. */
export function FigureGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">{children}</div>;
}

/** A paper-style figure: a clean image with a numbered caption underneath. */
export default function Figure({ number, image, title, to, details, links = [], position = 0 }: Props) {
  const img = (
    <img
      src={image}
      alt=""
      loading="lazy"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
    />
  );
  const frame = "group block aspect-[4/3] overflow-hidden rounded-md border border-primary/10";

  return (
    <motion.figure {...revealOnScroll({ y: 12, delay: (position % 3) * 0.06, duration: 0.45 })}>
      {to ? (
        <Link to={to} className={`${frame} hover:border-primary/40 transition-colors duration-300`} tabIndex={-1} aria-hidden>
          {img}
        </Link>
      ) : (
        <div className={frame}>{img}</div>
      )}

      <figcaption className="mt-3 font-body font-light text-sm leading-snug text-zinc-500">
        <span className="font-semibold text-primary">Fig. {number}.</span>{" "}
        {to ? (
          <Link to={to} className="font-semibold text-zinc-900 underline-offset-4 hover:underline hover:text-primary">
            {title}
          </Link>
        ) : (
          <span className="font-semibold text-zinc-900">{title}</span>
        )}
        {details && <> {details}</>}
        {links.length > 0 && (
          <span className="block mt-2 space-x-3">
            {links.map((link) => (
              <Link key={link.label} to={link.to} className="text-xs text-primary underline-offset-4 hover:underline">
                [{link.label}]
              </Link>
            ))}
          </span>
        )}
      </figcaption>
    </motion.figure>
  );
}
