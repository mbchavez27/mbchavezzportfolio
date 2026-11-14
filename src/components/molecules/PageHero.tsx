import { revealOnLoad } from "@/lib/motion";

/** A page's title, sitting close to the content that introduces it. */
export default function PageHero({ title }: { title: string }) {
  return (
    <div {...revealOnLoad({ y: 20 })} className="page-container mb-3">
      <h1 className="font-display text-2xl md:text-3xl font-semibold text-zinc-900 leading-snug">{title}</h1>
    </div>
  );
}
