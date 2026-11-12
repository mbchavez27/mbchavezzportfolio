import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

/** A small "see everything" link that closes a section's list, aligned right. */
export default function MoreLink({ to, label }: { to: string; label: string }) {
  return (
    <div className="flex justify-end pt-2 pb-6">
      <Link to={to} className="group flex items-center gap-2 text-zinc-500 hover:text-primary transition-colors duration-300">
        <span className="font-body text-xs tracking-widest uppercase">{label}</span>
        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
}
