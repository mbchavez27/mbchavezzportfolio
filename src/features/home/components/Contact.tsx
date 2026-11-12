import { motion } from "motion/react";
import Summary from "@/components/atoms/Summary";
import SectionHeading from "@/components/molecules/SectionHeading";
import { revealOnScroll } from "@/lib/motion";
import type { ContactLink, Correspondent } from "../domain/home.domain";

export type ContactItem = ContactLink & { readonly opensInNewTab: boolean };

type Props = {
  correspondent: Correspondent;
  items: readonly ContactItem[];
};

/** The closing contact section, set like the correspondence block on a paper. */
export default function Contact({ correspondent, items }: Props) {
  return (
    <section className="page-container pb-16">
      <SectionHeading number="5" title="Contact" />
      <Summary>
        From AI research to software development and live productions, I'm always open to meaningful collaborations
        and new opportunities.
      </Summary>

      <motion.div
        {...revealOnScroll()}
        className="grid grid-cols-1 sm:grid-cols-[1fr_1.4fr] gap-x-10 gap-y-6 border-t-2 border-zinc-900 border-b border-b-zinc-300 py-5"
      >
        <address className="not-italic">
          <p className="font-display font-semibold text-zinc-900">{correspondent.name}</p>
          <p className="font-body font-light text-sm text-zinc-600 italic mt-1">{correspondent.affiliation}</p>
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
                  className="font-body font-light text-sm text-zinc-800 break-all underline-offset-4 hover:underline hover:text-primary transition-colors duration-200"
                >
                  {link.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </section>
  );
}
