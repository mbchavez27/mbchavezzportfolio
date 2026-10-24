import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import NavAnchor from "@/components/atoms/NavAnchor";
import NavDropdown from "@/components/molecules/NavDropdown";
import { navItems } from "@/config/links";

const MOBILE_MENU_ID = "mobile-menu";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="font-display text-base font-semibold tracking-tight text-white hover:text-primary transition-colors duration-200"
        >
          <span className="text-primary">@</span>mbchavezz
        </Link>

        <nav aria-label="Main" className="hidden md:flex items-center gap-8">
          {navItems.map((item) =>
            item.kind === "group" ? (
              <NavDropdown key={item.label} group={item} />
            ) : (
              <NavAnchor
                key={item.label}
                link={item}
                className="font-body relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-200" />
              </NavAnchor>
            ),
          )}
        </nav>

        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls={MOBILE_MENU_ID}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id={MOBILE_MENU_ID}
          aria-label="Main"
          className="md:hidden border-t border-zinc-800 bg-black px-6 py-4 flex flex-col gap-4"
        >
          {navItems.map((item) =>
            item.kind === "group" ? (
              <div key={item.label} role="group" aria-labelledby={`${MOBILE_MENU_ID}-${item.label}`}>
                <p
                  id={`${MOBILE_MENU_ID}-${item.label}`}
                  className="font-body text-xs tracking-widest uppercase text-zinc-600"
                >
                  {item.label}
                </p>
                <div className="mt-3 pl-3 border-l border-zinc-800 flex flex-col gap-3">
                  {item.links.map((link) => (
                    <NavAnchor
                      key={link.label}
                      link={link}
                      onNavigate={closeMenu}
                      className="font-body text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </NavAnchor>
                  ))}
                </div>
              </div>
            ) : (
              <NavAnchor
                key={item.label}
                link={item}
                onNavigate={closeMenu}
                className="font-body text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item.label}
              </NavAnchor>
            ),
          )}
        </nav>
      )}
    </header>
  );
}
