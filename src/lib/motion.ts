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

/** Draws the short maroon accent rule from zero width. */
export function drawRule(delay: number) {
  return {
    initial: { width: 0 },
    animate: { width: 32 },
    transition: { duration: 0.5, delay },
  } as const;
}

/**
 * Fades and lifts a page's content in when its route mounts. Applied to <main>, never to a wrapper
 * around the fixed navbar: a transformed ancestor would break the navbar's fixed positioning.
 */
export function pageEnter() {
  return {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, ease: "easeOut" },
  } as const;
}
