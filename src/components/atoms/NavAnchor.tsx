import type { ReactNode } from "react";
import { Link } from "react-router";
import type { NavLink } from "@/config/links";

type Props = {
  link: NavLink;
  className: string;
  onNavigate?: () => void;
  children: ReactNode;
};

/** Renders a nav link as a router Link or, for external targets, an anchor opening a new tab. */
export default function NavAnchor({ link, className, onNavigate, children }: Props) {
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
