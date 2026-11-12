import { createContext, useContext } from "react";
import { motionValue, type MotionValue } from "motion/react";

/**
 * How much the home hero is "on stage", 0–1. The site backdrop is black at 1, so the hero blends
 * into it and reads as full width, and the red curtains slide in as it drops toward 0.
 */
export const BackdropContext = createContext<MotionValue<number>>(motionValue(0));

export const useBackdropDarkness = () => useContext(BackdropContext);
