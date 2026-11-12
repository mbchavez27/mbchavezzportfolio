import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { revealOnScroll } from "@/lib/motion";
import type { ContactLink } from "../domain/home.domain";

export type ContactItem = ContactLink & { readonly opensInNewTab: boolean };

export default function Contact({ items }: { items: readonly ContactItem[] }) {
  return (
    <section className="bg-zinc-950 py-16">
      <div className="page-container">
        <motion.div {...revealOnScroll({ y: 30 })} className="max-w-2xl">
          <p className="font-body font-light text-xs text-zinc-600 tracking-[0.2em] uppercase mb-6">Contact</p>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white leading-tight mb-4">
            Let's Build Something Together
          </h2>
          <div className="w-8 h-px bg-primary mb-6" />
          <p className="font-body font-light text-zinc-400 text-sm leading-relaxed mb-8">
            From AI research to software development and live productions, I'm always open to meaningful collaborations
            and new opportunities.
          </p>
        </motion.div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t border-zinc-800">
          {items.map((link, i) => (
            <motion.li
              key={link.label}
              {...revealOnScroll({ y: 12, delay: i * 0.06, duration: 0.45 })}
              className="border-b border-zinc-800"
            >
              <a
                href={link.href}
                target={link.opensInNewTab ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-4 py-3"
              >
                <link.Icon size={16} className="shrink-0 text-zinc-500 group-hover:text-primary transition-colors duration-200" />
                <span className="min-w-0 flex-1">
                  <span className="block font-body font-light text-xs text-zinc-500 tracking-wide uppercase">{link.label}</span>
                  <span className="block font-body font-light text-sm text-zinc-300 group-hover:text-white transition-colors duration-200 break-all">
                    {link.value}
                  </span>
                </span>
                <ArrowRight
                  size={14}
                  className="shrink-0 text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:text-primary transition-all duration-200"
                />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
