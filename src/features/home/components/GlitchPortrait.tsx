import { useEffect, useRef, useState, type PointerEvent } from "react";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

const GLITCH_MS = 650;
const IMAGE_CLASS = "absolute inset-0 w-full h-full object-cover object-[center_70%]";
const SCANLINES = "repeating-linear-gradient(0deg, rgba(0,0,0,0.45) 0px, rgba(0,0,0,0.45) 1px, transparent 1px, transparent 3px)";
// Two bright horizontal noise bars; the animation jumps them up and down via background-position.
const NOISE_BARS =
  "linear-gradient(transparent 0%, transparent 46%, rgba(255,255,255,0.85) 47%, rgba(255,255,255,0.85) 49%, transparent 50%, transparent 78%, rgba(255,60,60,0.7) 79%, rgba(255,60,60,0.7) 80%, transparent 81%)";

type Props = {
  frontSrc: string;
  backSrc: string;
  alt: string;
};

/**
 * The hero portrait. Hovering (or tapping, on touch screens) swaps to the back photo through a short
 * glitch (the old photo tearing away, RGB-split slices, a shake, a flash, noise bars and scanlines),
 * echoing the scrambling roles text. Fills its positioned parent.
 */
export default function GlitchPortrait({ frontSrc, backSrc, alt }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [showBack, setShowBack] = useState(false);
  const [glitchKey, setGlitchKey] = useState(0);
  const [glitching, setGlitching] = useState(false);
  // The back photo waits for the front one, so it never competes with the page's first paint.
  const [frontLoaded, setFrontLoaded] = useState(false);
  const frontRef = useRef<HTMLImageElement>(null);
  // On a prerendered page the front photo can finish loading before React hydrates, and React
  // does not replay that missed load event, so check once on mount as well.
  useEffect(() => {
    if (frontRef.current?.complete) setFrontLoaded(true);
  }, []);
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
  const previous = showBack ? frontSrc : backSrc;
  // Instant swap under the glitch; a plain quick fade for reduced-motion visitors.
  const fade = prefersReducedMotion ? "transition-opacity duration-200" : "";

  return (
    <div
      onPointerEnter={onMouse(true)}
      onPointerLeave={onMouse(false)}
      onPointerUp={onTap}
      className="absolute inset-0"
    >
      {/* The whole picture shakes and its colours jolt while glitching. */}
      <div key={`photos-${glitchKey}`} className={`absolute inset-0 ${glitching ? "animate-glitch-shake" : ""}`}>
        {/* Both stay mounted so the back photo is loaded before the first hover. */}
        <img
          src={frontSrc}
          alt={alt}
          ref={frontRef}
          onLoad={() => setFrontLoaded(true)}
          className={`${IMAGE_CLASS} ${fade} ${glitching ? "animate-glitch-jolt" : ""} ${showBack ? "opacity-0" : "opacity-100"}`}
        />
        {frontLoaded && (
          <img
            src={backSrc}
            alt=""
            className={`${IMAGE_CLASS} ${fade} ${glitching ? "animate-glitch-jolt" : ""} ${showBack ? "opacity-100" : "opacity-0"}`}
          />
        )}
      </div>

      {glitching && (
        <div key={glitchKey} aria-hidden className="absolute inset-0 pointer-events-none">
          <img src={previous} alt="" className={`${IMAGE_CLASS} animate-glitch-tear`} />
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
          <div
            className="absolute inset-0 mix-blend-screen animate-glitch-bars"
            style={{ backgroundImage: NOISE_BARS, backgroundSize: "100% 200%" }}
          />
          <div className="absolute inset-0 animate-glitch-flicker" style={{ backgroundImage: SCANLINES }} />
          <div className="absolute inset-0 bg-white animate-glitch-flash" />
        </div>
      )}

      <div className="absolute inset-0 bg-black/20 pointer-events-none" />
    </div>
  );
}
