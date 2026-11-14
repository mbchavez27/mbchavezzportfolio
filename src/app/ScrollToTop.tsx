import { useEffect } from "react";
import { useLocation } from "react-router";
import { preferredScrollBehavior } from "@/lib/scroll";

/** Scrolls back to the top whenever the page (path) changes; instant for reduced-motion users. */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  // pathname is the trigger, not a value the effect reads, so the "extra dependency" is intended.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: preferredScrollBehavior() });
    // oxlint-disable-next-line react/exhaustive-effect-dependencies
  }, [pathname]);

  return null;
}
