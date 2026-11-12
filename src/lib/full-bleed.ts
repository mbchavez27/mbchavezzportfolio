import { createContext, useContext } from "react";

type FullBleedState = {
  readonly navbarExpanded: boolean;
  readonly setNavbarExpanded: (expanded: boolean) => void;
};

/** Lets a full-bleed band (the home hero) widen the navbar together with itself. */
export const FullBleedContext = createContext<FullBleedState>({
  navbarExpanded: false,
  setNavbarExpanded: () => {},
});

export const useFullBleed = () => useContext(FullBleedContext);

/**
 * Classes for a background layer that sits behind a band's content and animates between the
 * column's width (collapsed) and the full viewport width (expanded). Its parent must be `relative isolate`.
 */
export function bleedLayerClass(expanded: boolean): string {
  const extent = expanded ? "left-[calc(50%-50vw)] right-[calc(50%-50vw)]" : "left-0 right-0";
  return `absolute inset-y-0 -z-10 ${extent} transition-[left,right] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none`;
}
