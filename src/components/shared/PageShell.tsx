import type { ReactNode } from "react";
import Navbar from "./Navbar";

/** Layout for the white content pages: fixed navbar plus padded main. */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <Navbar />
      <main className="pt-28 pb-32">{children}</main>
    </div>
  );
}
