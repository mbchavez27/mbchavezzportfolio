import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
const navLinks = [
  { label: "Experience", href: "/experience" },
  { label: "Papers", href: "/papers" },
  { label: "Engineering", href: "/projects" },
  { label: "Productions", href: "/productions" },
  { label: "Resume", href: "https://animo.li/mbchavez-resume", external: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-white hover:text-primary transition-colors duration-200"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-primary">@</span>mbchavezz
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.external ? (
              <Link
                key={link.label}
                to={link.href}
                className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-200" />
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="relative text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 group"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary group-hover:w-full transition-all duration-200" />
              </a>
            )
          )}
        </nav>

        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.external ? (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {link.label}
              </a>
            )
          )}
        </div>
      )}
    </header>
  );
}
