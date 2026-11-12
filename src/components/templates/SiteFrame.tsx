import type { ReactNode } from "react";
import redGradient from "@/assets/background/red-gradient.jpg";
import Navbar from "@/components/organisms/Navbar";

/**
 * The site's frame: a fixed, dimmed backdrop behind one centered column that holds the navbar and page.
 * The backdrop is a fixed element rather than `background-attachment: fixed`, which iOS Safari ignores.
 */
export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-10 bg-zinc-900">
        <img src={redGradient} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-6xl min-h-screen bg-white text-foreground overflow-clip lg:mb-10 lg:shadow-2xl">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
