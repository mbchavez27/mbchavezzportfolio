import { motion } from "motion/react";
import { revealOnScroll } from "@/lib/motion";
import type { ContactLink, Correspondent } from "../domain/home.domain";

export type ContactItem = ContactLink & { readonly opensInNewTab: boolean };

type Props = {
  correspondent: Correspondent;
  items: readonly ContactItem[];
};

/** The closing contact band: a dark section set like the correspondence block on a paper. */
export default function Contact({ correspondent, items }: Props) {
  return (
    <section className="bg-zinc-950 py-16">
      <div className="page-container">
        <motion.div {...revealOnScroll()} className="pb-4">
          <h2 className="font-display font-semibold text-white text-lg md:text-xl">
            <span className="text-primary tabular-nums mr-2">5.</span>Contact
          </h2>
        </motion.div>
        <p className="font-body font-light text-sm text-zinc-400 leading-relaxed mb-5">
          From AI research to software development and live productions, I'm always open to meaningful collaborations
          and new opportunities.
        </p>

        <motion.div
          {...revealOnScroll()}
          className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-x-10 gap-y-6 border-t-2 border-zinc-200 border-b border-b-zinc-700 py-5"
        >
          <address className="not-italic">
            <p className="font-display font-semibold text-white">{correspondent.name}</p>
            <p className="font-body font-light text-sm text-zinc-300 italic mt-1">{correspondent.affiliation}</p>
            <p className="font-body font-light text-sm text-zinc-500">{correspondent.location}</p>
          </address>

          <dl className="grid grid-cols-[5.5rem_1fr] gap-x-4 gap-y-1.5">
            {items.map((link) => (
              <div key={link.label} className="contents">
                <dt className="font-body text-sm text-zinc-500 [font-variant:small-caps] tracking-wide">
                  {link.label.toLowerCase()}
                </dt>
                <dd className="min-w-0">
                  <a
                    href={link.href}
                    target={link.opensInNewTab ? "_blank" : undefined}
                    rel="noreferrer"
                    className="font-body font-light text-sm text-zinc-200 break-all underline-offset-4 hover:underline hover:text-white transition-colors duration-200"
                  >
                    {link.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
