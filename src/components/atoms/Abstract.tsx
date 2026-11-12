/** A paper-style abstract line: a small-caps "abstract" label, an em dash, then the text. */
export default function Abstract({ children, className = "" }: { children: string; className?: string }) {
  return (
    <p className={`font-body font-light text-sm text-zinc-600 leading-relaxed mb-5 ${className}`}>
      <span className="font-semibold text-zinc-900 [font-variant:small-caps] tracking-wide">abstract</span>
      <span className="text-zinc-400"> — </span>
      {children}
    </p>
  );
}
