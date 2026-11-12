/** The meta column for an experience or education row: its dates, with a maroon dot while ongoing. */
export default function WhenMeta({ when, isOngoing }: { when: string; isOngoing: boolean }) {
  return (
    <span className="flex items-start gap-2">
      <span className={`mt-1 shrink-0 w-1.5 h-1.5 rounded-full ${isOngoing ? "bg-primary" : "bg-zinc-300"}`} />
      {when}
    </span>
  );
}
