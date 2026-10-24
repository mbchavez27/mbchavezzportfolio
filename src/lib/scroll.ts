/** Smooth scrolling, unless the visitor's system asks for reduced motion. */
export function preferredScrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
}
