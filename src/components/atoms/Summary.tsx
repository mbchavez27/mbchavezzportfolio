/** A short paragraph introducing a section or table, set in muted body text. */
export default function Summary({ children, className = "" }: { children: string; className?: string }) {
  return <p className={`font-body font-light text-sm text-zinc-600 leading-relaxed mb-5 ${className}`}>{children}</p>;
}
