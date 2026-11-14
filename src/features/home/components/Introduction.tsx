import { Link } from "react-router";
import DarkBand from "@/components/molecules/DarkBand";
import { ageOn } from "@/lib/format";
import { drawRule, revealOnLoad, settleOnLoad } from "@/lib/motion";
import { useNow } from "@/lib/now";
import GlitchPortrait from "./GlitchPortrait";
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
  const age = ageOn(BIRTH_DATE, useNow());

  return (
    <DarkBand>
      <div className="page-container min-h-[calc(100svh-3.5rem)] flex flex-col items-center justify-center text-center gap-5 py-16 md:py-24">
        <div
          {...settleOnLoad({ y: 16 })}
          className="relative w-44 sm:w-52 md:w-60 aspect-square rounded-2xl bg-zinc-900 overflow-hidden mb-2"
        >
          <GlitchPortrait frontSrc={portraitSrc} backSrc={hoverPortraitSrc} alt="Max Benedict Chavez" />
        </div>

        <p
          {...revealOnLoad({ y: 16, delay: 0.2 })}
          className="font-body font-light text-zinc-400 text-sm md:text-base tracking-wide -mb-2"
        >
          Est. {BIRTH_DATE.getFullYear()} &middot; {age} years in
        </p>

        <h1
          {...revealOnLoad({ y: 16, delay: 0.3 })}
          className="font-display text-white text-3xl md:text-5xl font-semibold leading-snug"
        >
          <RotatingRoles />
        </h1>

        <div {...drawRule(0.55)} className="h-px bg-primary mx-auto" />

        <p
          {...revealOnLoad({ delay: 0.65, duration: 0.5 })}
          className="font-body font-light text-zinc-400 text-sm md:text-base tracking-[0.18em] uppercase"
        >
          Max Benedict Chavez
        </p>

        <div {...revealOnLoad({ delay: 0.75, duration: 0.5 })} className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          <Link
            to={callToAction.to}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
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
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <Icon size={14} />
              <span className="font-body font-light text-sm tracking-wide">{label}</span>
            </a>
          ))}
        </div>
      </div>
    </DarkBand>
  );
}
