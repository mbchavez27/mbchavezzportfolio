import { createContext, useContext } from "react";
import { motionValue, type MotionValue } from "motion/react";

/**
 * How much the dark bands at the top and bottom of the page (the home hero and contact) are
 * "on stage", each 0–1. The site backdrop fades from red to black as either approaches 1, so the
 * band blends into the backdrop and reads as full width.
 */
export type BackdropDarkness = {
  readonly top: MotionValue<number>;
  readonly bottom: MotionValue<number>;
};

export const BackdropContext = createContext<BackdropDarkness>({ top: motionValue(0), bottom: motionValue(0) });

export const useBackdropDarkness = () => useContext(BackdropContext);
