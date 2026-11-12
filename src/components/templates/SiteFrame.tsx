import { useState, type ReactNode } from "react";
import redGradient from "@/assets/background/red-gradient.jpg";
import FullBleedBand from "@/components/molecules/FullBleedBand";
import Navbar from "@/components/organisms/Navbar";
import { FullBleedContext } from "@/lib/full-bleed";

/**
 * The site's frame: a fixed, dimmed backdrop behind one centered column that holds the navbar and page.
 * The backdrop is a fixed element rather than `background-attachment: fixed`, which iOS Safari ignores.
 */
export default function SiteFrame({ children }: { children: ReactNode }) {
  const [navbarExpanded, setNavbarExpanded] = useState(false);

  return (
    <FullBleedContext value={{ navbarExpanded, setNavbarExpanded }}>
      <div aria-hidden className="fixed inset-0 -z-10 bg-zinc-900">
        <img src={redGradient} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative mx-auto max-w-6xl min-h-screen bg-white text-foreground lg:mb-10 lg:shadow-2xl">
        <Navbar />
        <main>{children}</main>
        <FullBleedBand as="footer" className="py-6" layerClassName="border-t border-zinc-800">
          <p className="page-container font-body font-light text-xs text-zinc-600">
            Background photo by James Lee on{" "}
            <a
              href="https://unsplash.com/photos/YpDkIh137ws"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-zinc-300 transition-colors duration-200"
            >
              Unsplash
            </a>
          </p>
        </FullBleedBand>
      </div>
    </FullBleedContext>
  );
}
