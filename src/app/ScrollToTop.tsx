import { useEffect } from "react";
import { useLocation } from "react-router";
import { preferredScrollBehavior } from "@/lib/scroll";

/** Scrolls back to the top whenever the page (path) changes; instant for reduced-motion users. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
  }, [pathname]);

  return null;
}
