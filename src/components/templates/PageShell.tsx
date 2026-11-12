import type { ReactNode } from "react";
import SiteFrame from "./SiteFrame";

/** Layout for the content pages: the site frame with breathing room below the navbar. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <SiteFrame>
      <div className="pt-14">{children}</div>
    </SiteFrame>
  );
}
