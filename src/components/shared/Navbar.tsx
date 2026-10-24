import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import { navLinks, type NavLink } from "@/config/links";

const MOBILE_MENU_ID = "mobile-menu";

type NavItemProps = {
  link: NavLink;
  className: string;
  onNavigate?: () => void;
  children: ReactNode;
};

function NavItem({ link, className, onNavigate, children }: NavItemProps) {
  switch (link.kind) {
    case "internal":
      return (
        <Link to={link.to} onClick={onNavigate} className={className}>
          {children}
        </Link>
      );
    case "external":
      return (
        <a href={link.href} target="_blank" rel="noreferrer" onClick={onNavigate} className={className}>
          {children}
        </a>
      );
  }
}

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
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className="font-body relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 group"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-200" />
            </NavItem>
          ))}
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
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              onNavigate={closeMenu}
              className="font-body text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </NavItem>
          ))}
        </nav>
      )}
    </header>
  );
}
