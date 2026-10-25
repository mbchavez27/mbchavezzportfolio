import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";

const PAGE_TITLES: Readonly<Record<string, string>> = {
  "/": "Home",
  "/experience": "Experience",
  "/papers": "Papers",
  "/projects": "Engineering",
  "/productions": "Productions",
  "/logs": "Logs",
  "/case-study/coming-soon": "Case Study",
};

function pageTitle(pathname: string): string {
  if (pathname.startsWith("/logs/")) return "Log";
  return PAGE_TITLES[pathname] ?? "";
}

/**
 * Plays on every page (path) change, never on first load: a thin red line sweeps across the navbar's
 * bottom edge while a black panel flashes the page's name below it, then fades to reveal the page.
 * The title flash is skipped for visitors who prefer reduced motion.
 */
export default function RouteTransition() {
  const { pathname } = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const previousPathRef = useRef(pathname);
  const [transition, setTransition] = useState(0);

  useEffect(() => {
    if (previousPathRef.current === pathname) return;
    previousPathRef.current = pathname;
    setTransition((count) => count + 1);
  }, [pathname]);

  if (transition === 0) return null;
  const title = pageTitle(pathname);

  return (
    <>
      {!prefersReducedMotion && title && (
        // Below the navbar (z-50) so it stays visible; pointer-events-none so the page is usable at once.
        <motion.div
          key={`flash-${transition}`}
          aria-hidden
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 1, 0], transitionEnd: { display: "none" } }}
          transition={{ duration: 1, times: [0, 0.55, 1], ease: "easeInOut" }}
          className="fixed inset-0 top-14 z-40 flex items-center justify-center bg-black pointer-events-none"
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-display text-white text-4xl md:text-6xl font-semibold"
          >
            {title}
            <span className="text-primary">.</span>
          </motion.span>
        </motion.div>
      )}
      <motion.div
        key={`line-${transition}`}
        aria-hidden
        initial={{ scaleX: 0, opacity: 1 }}
        animate={{ scaleX: 1, opacity: [1, 1, 0] }}
        transition={{ scaleX: { duration: 0.6, ease: "easeInOut" }, opacity: { duration: 0.9, times: [0, 0.7, 1] } }}
        className="fixed top-14 left-0 right-0 z-[60] h-px bg-primary origin-left pointer-events-none"
      />
    </>
  );
}
