/** Shared card surfaces for the bento layout, so every card in the site column looks the same. */

/** A light card on the white column: no fill or border, just the card's shape and spacing. */
export const CARD_LIGHT = "rounded-2xl transition-colors duration-300";

/** Hover state for a light card that is a link (the title's colour change carries the hover). */
export const CARD_LIGHT_HOVER = "";

/** A card inside a dark band. */
export const CARD_DARK = "rounded-2xl border border-zinc-800 bg-zinc-900/60 transition-colors duration-300";

/** An image card (hats, projects, productions); the image and overlay fill it. */
export const CARD_MEDIA = "rounded-2xl overflow-hidden";

/** The gap between cards in a grid. */
export const GRID_GAP = "gap-4 md:gap-5";
