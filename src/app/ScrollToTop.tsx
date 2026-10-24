import { useEffect } from "react";
import { useLocation } from "react-router";

/** Scrolls back to the top whenever the page (path) changes; instant for reduced-motion users. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "instant" : "smooth" });
  }, [pathname]);

  return null;
}
