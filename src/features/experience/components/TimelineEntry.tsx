import type { ReactNode } from "react";

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
    <div className="relative pl-10">
      <div
        className={`absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full ${isOngoing ? "bg-primary" : "bg-zinc-300"}`}
      />
      <p className="font-body text-xs text-zinc-400 tracking-wide mb-3">{when}</p>
      <h2 className="font-display text-xl md:text-2xl font-semibold text-zinc-900 mb-1">{title}</h2>
      <p className="font-body text-sm text-zinc-500 mb-1">{subtitle}</p>
      <p className="font-body text-xs text-zinc-400">{location}</p>
      {children}
    </div>
  );
}
