import type { ReactNode } from "react";
import { motion } from "motion/react";
import { revealOnLoad } from "@/lib/motion";

type Props = {
  eyebrow: string;
  /** A tagline under the page name. Omit it on pages whose summary already introduces them; the name becomes the title. */
  children?: ReactNode;
};

export default function PageHero({ eyebrow, children }: Props) {
  return (
    <motion.div {...revealOnLoad({ y: 20 })} className="mb-10 page-container">
      {children ? (
        <>
          <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">{eyebrow}</p>
          <h1 className="font-display text-2xl font-semibold text-zinc-900 leading-snug">{children}</h1>
        </>
      ) : (
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 leading-snug">{eyebrow}</h1>
      )}
    </motion.div>
  );
}
