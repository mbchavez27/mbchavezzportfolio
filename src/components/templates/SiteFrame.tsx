import type { ReactNode } from "react";
import cityNight from "@/assets/background/city-night.jpg";
import Navbar from "@/components/organisms/Navbar";

/**
 * The site's frame: a fixed, dimmed backdrop behind one centered column that holds the navbar and page.
 * The backdrop is a fixed element rather than `background-attachment: fixed`, which iOS Safari ignores.
 */
export default function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <>
      <div aria-hidden className="fixed inset-0 -z-10 bg-zinc-900">
        <img src={cityNight} alt="" className="absolute inset-0 w-full h-full object-cover object-[center_70%]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-6xl min-h-screen bg-white text-foreground overflow-clip lg:my-10 lg:shadow-2xl">
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  );
}
