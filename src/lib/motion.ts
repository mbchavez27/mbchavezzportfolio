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

/** Fades and slides an element in once, on first render. */
export function revealOnLoad({ y = 0, delay = 0, duration = 0.6 }: Omit<Reveal, "x"> = {}) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration, delay },
  } as const;
}

/**
 * Slides an element up into place once, on first render, without fading it. For the page's largest
 * image: the browser only counts an element as painted once an opacity fade finishes, so a fade
 * would hold back the largest paint.
 */
export function settleOnLoad({ y = 0, delay = 0, duration = 0.6 }: Omit<Reveal, "x"> = {}) {
  return {
    initial: { y, scale: 0.97 },
    animate: { y: 0, scale: 1 },
    transition: { duration, delay, ease: "easeOut" },
  } as const;
}

/** Draws the short maroon accent rule from zero width. */
export function drawRule(delay: number) {
  return {
    initial: { width: 0 },
    animate: { width: 32 },
    transition: { duration: 0.5, delay },
  } as const;
}
