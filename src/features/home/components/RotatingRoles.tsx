import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ageOn } from "@/lib/format";

const BIRTH_DATE = new Date(2005, 3, 23); // April 23, 2005 (months are 0-based)
const ROLES = ["AI researcher", "Software engineer", "Technical operator"] as const;
const LINE_DURATION_MS = 3600;

function headlineLines(today: Date): readonly string[] {
  return [`Est. ${BIRTH_DATE.getFullYear()}`, `${ageOn(BIRTH_DATE, today)} years in`, ...ROLES];
}

/**
 * Cycles through a short story line by line: birth year, age, then each role.
 * Screen readers get the full sentence once; visitors who prefer reduced motion see that same sentence, static.
 */
export default function RotatingRoles() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [lines] = useState(() => headlineLines(new Date()));

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => setIndex((current) => (current + 1) % lines.length), LINE_DURATION_MS);
    return () => clearInterval(timer);
  }, [prefersReducedMotion, lines.length]);

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
      {/* min-h holds one line of height so the content below never jumps between lines */}
      <span aria-hidden className="block min-h-[1.375em]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={lines[index]}
            initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -18, filter: "blur(6px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="inline-block"
          >
            {lines[index]}
            <span className="text-primary">.</span>
          </motion.span>
        </AnimatePresence>
      </span>
    </>
  );
}
