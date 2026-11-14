import type { CSSProperties } from "react";

type Reveal = {
  readonly x?: number;
  readonly y?: number;
  readonly delay?: number;
  readonly duration?: number;
};

/** Fades and slides an element in every time it scrolls into view. */
export function revealOnScroll({ x = 0, y = 20, delay = 0, duration = 0.6 }: Reveal = {}) {
  return {
    initial: { opacity: 0, x, y },
    whileInView: { opacity: 1, x: 0, y: 0 },
    viewport: { once: false },
    transition: { duration, delay },
  } as const;
}

/*
 * The on-load animations below are plain CSS (keyframes in src/styles/tailwind.css) rather than
 * motion props, so they play as soon as the prerendered HTML is parsed, before any JavaScript runs.
 * Spread the result onto a plain element: <p {...revealOnLoad({ y: 16 })}>.
 */
type LoadAnimation = { readonly style: CSSProperties };

function onLoad(name: string, { y = 0, delay = 0, duration = 0.6 }: Omit<Reveal, "x">): LoadAnimation {
  return {
    style: {
      "--load-y": `${y}px`,
      animation: `${name} ${duration}s cubic-bezier(0.25, 0.1, 0.25, 1) ${delay}s both`,
    } as CSSProperties,
  };
}

/** Fades and slides an element in once, on first render. */
export function revealOnLoad(options: Omit<Reveal, "x"> = {}): LoadAnimation {
  return onLoad("reveal-on-load", options);
}

/**
 * Slides an element up into place once, on first render, without fading it. For the page's largest
 * image: the browser only counts an element as painted once an opacity fade finishes, so a fade
 * would hold back the largest paint.
 */
export function settleOnLoad(options: Omit<Reveal, "x"> = {}): LoadAnimation {
  return onLoad("settle-on-load", options);
}

/** Draws the short maroon accent rule from zero width. */
export function drawRule(delay: number): LoadAnimation {
  return onLoad("draw-rule", { delay, duration: 0.5 });
}
