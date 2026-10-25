import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "motion/react";

const ROLES = ["AI researcher", "Software engineer", "Technical operator"] as const;
const ROLE_DURATION_MS = 3600;
const SCRAMBLE_DURATION_MS = 1100;
const GLYPH_REFRESH_MS = 45;
const GLYPHS = "!<>-_/[]{}=+*^?#%&$";

function randomGlyph(): string {
  return GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
}

/**
 * Returns `target`, but when it changes the text decodes into it: each character flickers
 * through random glyphs and settles roughly left to right.
 */
function useScrambledText(target: string): string {
  const [display, setDisplay] = useState(target);
  // Only advanced once a scramble finishes, so an interrupted run (or StrictMode's re-run) restarts from settled text.
  const settledRef = useRef(target);

  useEffect(() => {
    const from = settledRef.current;
    if (from === target) return;

    const length = Math.max(from.length, target.length);
    const revealAt = Array.from({ length }, (_, i) => (i / length) * 0.65 + Math.random() * 0.35);
    const start = performance.now();
    let lastRefresh = -Infinity;
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / SCRAMBLE_DURATION_MS, 1);
      if (now - lastRefresh >= GLYPH_REFRESH_MS || progress === 1) {
        lastRefresh = now;
        const text = revealAt.map((revealPoint, i) => {
          const settledChar = target.charAt(i);
          return progress >= revealPoint || settledChar === " " ? settledChar : randomGlyph();
        });
        setDisplay(text.join(""));
      }
      if (progress < 1) frame = requestAnimationFrame(tick);
      else settledRef.current = target;
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return display;
}

/**
 * Cycles through the roles one at a time. Screen readers get the full sentence once;
 * visitors who prefer reduced motion see that same sentence, static.
 */
export default function RotatingRoles() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const role = useScrambledText(ROLES[index] ?? ROLES[0]);

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
        {role}
        <span className="text-primary">.</span>
      </span>
    </>
  );
}
