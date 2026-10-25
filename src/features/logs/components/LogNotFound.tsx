import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

export default function LogNotFound({ backHref }: { backHref: string }) {
  return (
    <section className="px-6 sm:px-10 md:px-24 lg:px-32 pb-32">
      <p className="font-body font-light text-xs text-zinc-400 tracking-[0.2em] uppercase mb-4">Logs</p>
      <h1 className="font-display text-3xl md:text-4xl font-semibold text-zinc-900 leading-snug mb-8">
        This log doesn't exist.
      </h1>
      <Link
        to={backHref}
        className="font-body font-light inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-zinc-900 tracking-widest uppercase transition-colors duration-200"
      >
        <ArrowLeft size={12} />
        All logs
      </Link>
    </section>
  );
}
