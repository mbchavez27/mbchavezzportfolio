import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { useLocation } from "react-router";

/** A thin red line that sweeps across just under the navbar whenever the page (path) changes; skipped on first load. */
export default function RouteProgress() {
  const { pathname } = useLocation();
  const previousPathRef = useRef(pathname);
  const [sweep, setSweep] = useState(0);

  useEffect(() => {
    if (previousPathRef.current === pathname) return;
    previousPathRef.current = pathname;
    setSweep((count) => count + 1);
  }, [pathname]);

  if (sweep === 0) return null;

  return (
    <motion.div
      key={sweep}
      aria-hidden
      initial={{ scaleX: 0, opacity: 1 }}
      animate={{ scaleX: 1, opacity: [1, 1, 0] }}
      transition={{ scaleX: { duration: 0.6, ease: "easeInOut" }, opacity: { duration: 0.9, times: [0, 0.7, 1] } }}
      className="fixed top-14 left-0 right-0 z-[60] h-px bg-primary origin-left pointer-events-none"
    />
  );
}
