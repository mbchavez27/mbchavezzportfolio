import type { ReactNode } from "react";
import Navbar from "@/components/organisms/Navbar";

/** Layout for the content pages: fixed navbar plus main offset below it. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main className="pt-28">{children}</main>
    </div>
  );
}
