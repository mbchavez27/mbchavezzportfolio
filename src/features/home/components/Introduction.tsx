import { motion } from "motion/react";
import { Link } from "react-router";
import { drawRule, revealOnLoad } from "@/lib/motion";
import type { CallToAction, ContactLink } from "../domain/home.domain";

type Props = {
  portraitSrc: string;
  callToAction: CallToAction;
  socialLinks: readonly ContactLink[];
  onScrollDown: () => void;
};

export default function Introduction({ portraitSrc, callToAction, socialLinks, onScrollDown }: Props) {
  return (
    <section className="pt-14 min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="relative min-h-64 md:min-h-full bg-zinc-900 overflow-hidden">
        <img
          src={portraitSrc}
          alt="Max Benedict Chavez"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="bg-zinc-950 relative flex flex-col px-6 sm:px-10 md:px-16 py-20 md:py-0 gap-5 justify-center">
        <motion.p
          {...revealOnLoad({ y: 16, delay: 0.1 })}
          className="font-body font-light text-zinc-400 text-xl md:text-2xl leading-relaxed mb-1"
        >
          AI researcher, software engineer, <br className="hidden lg:inline" />and technical operator.
        </motion.p>

        <motion.h1
          {...revealOnLoad({ y: 16, delay: 0.25 })}
          className="font-display text-white text-2xl md:text-3xl font-semibold leading-snug"
        >
          Building intelligent systems, scalable software, and unforgettable experiences.
        </motion.h1>

        <motion.div {...drawRule(0.45)} className="h-px bg-primary" />

        <motion.p
          {...revealOnLoad({ delay: 0.55, duration: 0.5 })}
          className="font-body font-light text-zinc-500 text-sm tracking-[0.18em] uppercase"
        >
          Max Benedict Chavez
        </motion.p>

        <motion.div {...revealOnLoad({ delay: 0.65, duration: 0.5 })} className="flex flex-wrap items-center gap-x-5 gap-y-3">
          <Link
            to={callToAction.to}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200"
          >
            <callToAction.Icon size={14} />
            <span className="font-body font-light text-xs tracking-wide">{callToAction.label}</span>
          </Link>
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200"
            >
              <Icon size={14} />
              <span className="font-body font-light text-xs tracking-wide">{label}</span>
            </a>
          ))}
        </motion.div>

        <button
          type="button"
          onClick={onScrollDown}
          aria-label="Scroll down"
          className="group mt-4 self-start flex flex-col items-start gap-2 cursor-pointer md:mt-0 md:absolute md:bottom-10 md:left-16"
        >
          <span className="font-body font-light text-zinc-700 group-hover:text-zinc-400 text-xs tracking-widest uppercase transition-colors duration-200">
            Scroll
          </span>
          <span className="block w-px h-12 bg-gradient-to-b from-primary to-transparent origin-top group-hover:scale-y-125 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
}
