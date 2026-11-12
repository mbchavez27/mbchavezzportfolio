import type { ReactNode } from "react";

/**
 * Collapsed until the parent `group` is hovered or keyboard-focused, then grows to fit its content.
 * Always open on touch screens, which can't hover.
 */
export default function RevealOnHover({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] group-focus-visible:grid-rows-[1fr] pointer-coarse:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}
