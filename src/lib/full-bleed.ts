import { createContext, useContext } from "react";
import { motionValue, useTransform, type MotionValue } from "motion/react";

/**
 * How far the navbar's background is widened, from 0 (column width) to 1 (full screen).
 * The home hero drives it so the two widen together.
 */
export const FullBleedContext = createContext<MotionValue<number>>(motionValue(0));

export const useNavbarBleed = () => useContext(FullBleedContext);

/** Classes for a background layer behind a band's content; its parent must be `relative isolate`. */
export const BLEED_LAYER_CLASS = "absolute inset-y-0 -z-10";

/**
 * Maps a 0–1 bleed amount to the layer's `left`/`right` inset: 0 matches the column,
 * 1 reaches the edges of the screen.
 */
export function useBleedInset(bleed: MotionValue<number>): MotionValue<string> {
  return useTransform(bleed, (amount) => `calc((50% - 50vw) * ${amount})`);
}
