import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const ROLES = ["AI researcher", "Software engineer", "Technical operator"] as const;
const ROLE_DURATION_MS = 3600;

/**
 * Cycles through the roles one at a time. Screen readers get the full sentence once;
 * visitors who prefer reduced motion see that same sentence, static.
 */
export default function RotatingRoles() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % ROLES.length), ROLE_DURATION_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <>
        AI researcher, software engineer, <br className="hidden lg:inline" />
        and technical operator.
      </>
    );
  }

  return (
    <>
      <span className="sr-only">AI researcher, software engineer, and technical operator.</span>
      {/* min-h holds one line of height so the content below never jumps between roles */}
      <span aria-hidden className="block min-h-[1.375em]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={ROLES[index]}
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block"
          >
            {ROLES[index]}
            <span className="text-primary">.</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
