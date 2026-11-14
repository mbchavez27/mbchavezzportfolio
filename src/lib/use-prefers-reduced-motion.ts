import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void): () => void {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getPreference = () => window.matchMedia(QUERY).matches;
const getServerPreference = () => false;

/**
 * Whether the visitor asks for reduced motion. Unlike motion's useReducedMotion, it reports false
 * at build time and while hydrating, then the real preference, so prerendered markup always matches.
 * Use it wherever the preference changes what is rendered.
 */
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getPreference, getServerPreference);
}
