import { useEffect, useRef, useState, type PointerEvent } from "react";
import { useReducedMotion } from "motion/react";

const GLITCH_MS = 450;
const IMAGE_CLASS = "absolute inset-0 w-full h-full object-cover object-[center_70%]";
const SCANLINES = "repeating-linear-gradient(0deg, rgba(0,0,0,0.35) 0px, rgba(0,0,0,0.35) 1px, transparent 1px, transparent 3px)";

type Props = {
  frontSrc: string;
  backSrc: string;
  alt: string;
};

/**
 * The hero portrait. Hovering (or tapping, on touch screens) swaps to the back photo through a short
 * RGB-split, sliced, scanlined glitch, echoing the scrambling roles text. Fills its positioned parent.
 */
export default function GlitchPortrait({ frontSrc, backSrc, alt }: Props) {
  const prefersReducedMotion = useReducedMotion();
  const [showBack, setShowBack] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);
  const [glitching, setGlitching] = useState(false);
  const timeoutRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const show = (back: boolean) => {
    if (back === showBack) return;
    setShowBack(back);
    if (prefersReducedMotion) return;
    setGlitchKey((key) => key + 1);
    setGlitching(true);
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => setGlitching(false), GLITCH_MS);
  };

  const onMouse = (back: boolean) => (event: PointerEvent) => event.pointerType === "mouse" && show(back);
  // Touch screens have no hover, so a tap flips between the two portraits instead.
  const onTap = (event: PointerEvent) => event.pointerType !== "mouse" && show(!showBack);

  const target = showBack ? backSrc : frontSrc;
  // Instant swap under the glitch; a plain quick fade for reduced-motion visitors.
  const fade = prefersReducedMotion ? "transition-opacity duration-200" : "";

  return (
    <div
      onPointerEnter={onMouse(true)}
      onPointerLeave={onMouse(false)}
      onPointerUp={onTap}
      className="absolute inset-0"
    >
      {/* Both stay mounted so the back photo is loaded before the first hover. */}
      <img src={frontSrc} alt={alt} className={`${IMAGE_CLASS} ${fade} ${showBack ? "opacity-0" : "opacity-100"}`} />
      <img src={backSrc} alt="" className={`${IMAGE_CLASS} ${fade} ${showBack ? "opacity-100" : "opacity-0"}`} />

      {glitching && (
        <div key={glitchKey} aria-hidden className="absolute inset-0 pointer-events-none">
          <img
            src={target}
            alt=""
            className={`${IMAGE_CLASS} mix-blend-screen animate-glitch-a [filter:sepia(1)_saturate(6)_hue-rotate(-50deg)]`}
          />
          <img
            src={target}
            alt=""
            className={`${IMAGE_CLASS} mix-blend-screen animate-glitch-b [filter:sepia(1)_saturate(6)_hue-rotate(140deg)]`}
          />
          <div className="absolute inset-0 animate-glitch-flicker" style={{ backgroundImage: SCANLINES }} />
        </div>
      )}

      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}
