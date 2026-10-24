import { describe, expect, it } from "vitest";
import { formatIndex } from "./format";

describe("formatIndex", () => {
  it("pads single digits", () => expect(formatIndex(0)).toBe("01"));
  it("leaves two digits alone", () => expect(formatIndex(11)).toBe("12"));
  it("rejects negative positions", () => expect(() => formatIndex(-1)).toThrow("-1"));
  it("rejects fractional positions", () => expect(() => formatIndex(1.5)).toThrow("1.5"));
});
