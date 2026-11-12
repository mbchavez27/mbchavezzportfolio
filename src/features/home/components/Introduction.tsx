import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ageOn } from "@/lib/format";
import { drawRule, revealOnLoad } from "@/lib/motion";
import RotatingRoles from "./RotatingRoles";
import type { CallToAction, ContactLink } from "../domain/home.domain";

const BIRTH_DATE = new Date(2005, 3, 23); // April 23, 2005 (months are 0-based)

type Props = {
  portraitSrc: string;
  hoverPortraitSrc: string;
  callToAction: CallToAction;
  socialLinks: readonly ContactLink[];
  onScrollDown: () => void;
};

export default function Introduction({ portraitSrc, hoverPortraitSrc, callToAction, socialLinks, onScrollDown }: Props) {
  // Touch screens have no hover, so a tap flips between the two portraits instead.
  const [showHoverPortrait, setShowHoverPortrait] = useState(false);

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div
        onPointerUp={(event) => event.pointerType !== "mouse" && setShowHoverPortrait((shown) => !shown)}
        className="group relative min-h-64 md:min-h-full bg-zinc-900 overflow-hidden"
      >
        <img
          src={portraitSrc}
          alt="Max Benedict Chavez"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <img
          src={hoverPortraitSrc}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-center group-hover:opacity-100 transition-opacity duration-700 ${showHoverPortrait ? "opacity-100" : "opacity-0"}`}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="bg-zinc-950 relative flex flex-col px-6 sm:px-10 md:px-16 py-20 md:py-0 gap-5 justify-center">
        <motion.p
          {...revealOnLoad({ y: 16, delay: 0.1 })}
          className="font-body font-light text-zinc-500 text-sm tracking-wide -mb-2"
        >
          Est. {BIRTH_DATE.getFullYear()} &middot; {ageOn(BIRTH_DATE, new Date())} years in
        </motion.p>

        <motion.h1
          {...revealOnLoad({ y: 16, delay: 0.2 })}
          className="font-display text-white text-3xl md:text-4xl font-semibold leading-snug"
        >
          <RotatingRoles />
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
