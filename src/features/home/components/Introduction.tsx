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
};

export default function Introduction({ portraitSrc, hoverPortraitSrc, callToAction, socialLinks }: Props) {
  // Touch screens have no hover, so a tap flips between the two portraits instead.
  const [showHoverPortrait, setShowHoverPortrait] = useState(false);

  return (
    <section className="bg-zinc-950">
      <div className="page-container min-h-[calc(100svh-3.5rem)] lg:min-h-[calc(100svh-6rem)] flex flex-col items-center justify-center text-center gap-5 py-16 md:py-24">
        <motion.div
          {...revealOnLoad({ y: 16 })}
          onPointerUp={(event) => event.pointerType !== "mouse" && setShowHoverPortrait((shown) => !shown)}
          className="group relative w-44 sm:w-52 md:w-60 aspect-square rounded-2xl bg-zinc-900 overflow-hidden mb-2"
        >
          <img
            src={portraitSrc}
            alt="Max Benedict Chavez"
            className="absolute inset-0 w-full h-full object-cover object-[center_70%]"
          />
          <img
            src={hoverPortraitSrc}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover object-[center_70%] group-hover:opacity-100 transition-opacity duration-700 ${showHoverPortrait ? "opacity-100" : "opacity-0"}`}
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>

        <motion.p
          {...revealOnLoad({ y: 16, delay: 0.2 })}
          className="font-body font-light text-zinc-500 text-sm md:text-base tracking-wide -mb-2"
        >
          Est. {BIRTH_DATE.getFullYear()} &middot; {ageOn(BIRTH_DATE, new Date())} years in
        </motion.p>

        <motion.h1
          {...revealOnLoad({ y: 16, delay: 0.3 })}
          className="font-display text-white text-3xl md:text-5xl font-semibold leading-snug"
        >
          <RotatingRoles />
        </motion.h1>

        <motion.div {...drawRule(0.55)} className="h-px bg-primary mx-auto" />

        <motion.p
          {...revealOnLoad({ delay: 0.65, duration: 0.5 })}
          className="font-body font-light text-zinc-500 text-sm md:text-base tracking-[0.18em] uppercase"
        >
          Max Benedict Chavez
        </motion.p>

        <motion.div {...revealOnLoad({ delay: 0.75, duration: 0.5 })} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link
            to={callToAction.to}
            className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors duration-200"
          >
            <callToAction.Icon size={14} />
            <span className="font-body font-light text-sm tracking-wide">{callToAction.label}</span>
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
              <span className="font-body font-light text-sm tracking-wide">{label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
