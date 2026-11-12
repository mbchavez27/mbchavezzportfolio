import type { ReactNode } from "react";
import { CARD_LIGHT } from "@/components/atoms/surfaces";

type Props = {
  when: string;
  title: string;
  subtitle: ReactNode;
  location: string;
  isOngoing: boolean;
  children?: ReactNode;
};

export default function TimelineEntry({ when, title, subtitle, location, isOngoing, children }: Props) {
  return (
    <div className="relative pl-8 md:pl-10">
      {/* The dot sits on the timeline, level with the card's first line. */}
      <div
        className={`absolute left-0 top-7 md:top-9 -translate-x-1/2 w-2 h-2 rounded-full ring-4 ring-white ${isOngoing ? "bg-primary" : "bg-zinc-300"}`}
      />
      <div className={`p-6 md:p-8 ${CARD_LIGHT}`}>
        <p className="font-body font-light text-xs text-zinc-400 tracking-wide mb-3">{when}</p>
        <h2 className="font-display text-xl md:text-2xl font-semibold text-zinc-900 mb-1">{title}</h2>
        <p className="font-body font-light text-sm text-zinc-500 mb-1">{subtitle}</p>
        <p className="font-body font-light text-xs text-zinc-400">{location}</p>
        {children}
      </div>
    </div>
  );
}
