/** The characters text scrambles through before it settles, shared by the hero's scramble effects. */
export const GLYPHS = "!<>-_/[]{}=+*^?#%&$";

export function randomGlyph(): string {
  return GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
}
