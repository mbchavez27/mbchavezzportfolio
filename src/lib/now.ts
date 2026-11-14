import { useSyncExternalStore } from "react";

// Noon UTC, so the build's date reads as the same calendar day in (almost) every visitor's timezone.
const BUILD_DATE = new Date(import.meta.env.BUILD_DATE);
let clientNow: Date | undefined;

const subscribe = () => () => {};
const getClientNow = () => (clientNow ??= new Date());
const getBuildDate = () => BUILD_DATE;

/**
 * Today's date, safe for prerendered pages: the build date while rendering at build time and while
 * hydrating (so the markup matches), then the visitor's real date right after.
 */
export function useNow(): Date {
  return useSyncExternalStore(subscribe, getClientNow, getBuildDate);
}
