import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { revealOnScroll } from "@/lib/motion";
import type { ContactLink } from "../domain/home.domain";

export type ContactItem = ContactLink & { readonly opensInNewTab: boolean };

export default function Contact({ items }: { items: readonly ContactItem[] }) {
  return (
    <section className="bg-zinc-950 py-32 px-6 sm:px-10 md:px-16">
      <motion.div {...revealOnScroll({ y: 30 })} className="max-w-2xl">
        <p className="font-body font-light text-xs text-zinc-600 tracking-[0.2em] uppercase mb-6">Contact</p>
        <h2 className="font-display text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
          Let's Build Something Together
        </h2>
        <div className="w-8 h-px bg-primary mb-8" />
        <p className="font-body font-light text-zinc-400 text-base leading-relaxed mb-12">
          From AI research to software development and live productions, I'm always open to meaningful collaborations
          and new opportunities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-zinc-800/50">
          {items.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.opensInNewTab ? "_blank" : undefined}
              rel="noreferrer"
              className="flex flex-col gap-3 bg-zinc-950 px-6 py-8 hover:bg-zinc-900 transition-colors duration-200 group"
            >
              <div className="flex items-center justify-between text-zinc-600 group-hover:text-primary transition-colors duration-200">
                <link.Icon size={16} />
                <ArrowRight
                  size={12}
                  className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                />
              </div>
              <div>
                <p className="font-body font-light text-xs text-zinc-600 mb-1 tracking-wide uppercase">{link.label}</p>
                <p className="font-body font-light text-sm text-zinc-300 group-hover:text-white transition-colors duration-200 break-all">
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
