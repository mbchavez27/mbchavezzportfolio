import { useEffect, useRef } from "react";
import { randomGlyph } from "@/lib/glyphs";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

type Props = {
  /** The vocabulary the field draws from; each word appears at most once. */
  words: readonly string[];
};

type Particle = {
  text: string;
  /** Resting position, as a fraction of the field's width and height, so resizes keep the layout. */
  fx: number;
  fy: number;
  /** Depth from 0.3 (far) to 1 (near): drives size, brightness, drift speed and parallax. */
  z: number;
  /** Slow drift, in fractions of the field per second. */
  vx: number;
  vy: number;
  /** Offset from the resting position while the cursor pushes the word away; springs back to 0. */
  ox: number;
  oy: number;
  /** 0 = settled text, 1 = fully scrambled; eases down so the word decodes left to right. */
  scramble: number;
  display: string;
  lastGlyphAt: number;
  tinted: boolean;
};

type Ripple = { x: number; y: number; start: number };

const PUSH_RADIUS = 140;
const PUSH_STRENGTH = 26;
const PARALLAX_PX = 14;
const RIPPLE_MS = 1100;
const RIPPLE_SPEED = 0.7; // px per ms
const RIPPLE_BAND = 28;
const GLYPH_REFRESH_MS = 55;
const FONT = "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
const MAX_DPR = 2;

function particleCount(width: number, height: number): number {
  return Math.max(20, Math.min(60, Math.round((width * height) / 16000)));
}

function makeParticles(words: readonly string[], count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => {
    const text = words[i % words.length] ?? "";
    const z = 0.3 + Math.random() * 0.7;
    return {
      text,
      fx: Math.random(),
      fy: Math.random(),
      z,
      vx: (Math.random() - 0.5) * 0.006,
      vy: -(0.003 + Math.random() * 0.006),
      ox: 0,
      oy: 0,
      scramble: 0,
      display: text,
      lastGlyphAt: 0,
      tinted: Math.random() < 0.13,
    };
  });
}

/** Characters settle left to right as `scramble` falls: the leftmost needs the most scramble to stay garbled. */
function scrambledText(text: string, scramble: number): string {
  if (scramble < 0.02) return text;
  const length = text.length;
  let out = "";
  for (let i = 0; i < length; i++) {
    const char = text.charAt(i);
    out += char !== " " && scramble > (1 - i / length) * 0.9 ? randomGlyph() : char;
  }
  return out;
}

/**
 * The hero's backdrop: words from the three hats drifting at different depths. Near the cursor they
 * scramble into glyphs and drift aside; a click or tap sends a ring outward that garbles the words it
 * passes. It reads pointer events from its parent, so the content above stays fully clickable, runs
 * only while on screen, starts after the page is idle, and holds still for reduced-motion visitors.
 */
export default function WordField({ words }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !host || !ctx || words.length === 0) return;

    const primary = getComputedStyle(document.documentElement).getPropertyValue("--primary").trim() || "#c80000";
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const ripples: Ripple[] = [];
    let pointer: { x: number; y: number } | null = null;
    // The field leans gently against the pointer; eased so it glides rather than snaps.
    const lean = { x: 0, y: 0 };
    let frame = 0;
    let lastTime = 0;
    let onScreen = true;
    let started = false;

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(particleCount(width, height), words.length);
      if (particles.length !== count) particles = makeParticles(words, count);
      if (prefersReducedMotion) draw(performance.now());
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.textBaseline = "middle";

      for (const ripple of ripples) {
        const age = now - ripple.start;
        const progress = age / RIPPLE_MS;
        ctx.globalAlpha = (1 - progress) * 0.35;
        ctx.strokeStyle = primary;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, age * RIPPLE_SPEED, 0, Math.PI * 2);
        ctx.stroke();
      }

      for (const p of particles) {
        const x = p.fx * width + p.ox + lean.x * p.z;
        const y = p.fy * height + p.oy + lean.y * p.z;
        const size = 10 + p.z * 5;
        ctx.font = `${size.toFixed(1)}px ${FONT}`;
        ctx.fillStyle = p.tinted || p.scramble > 0.5 ? primary : "#ffffff";
        ctx.globalAlpha = Math.min(0.75, 0.04 + ((p.z - 0.3) / 0.7) * 0.12 + p.scramble * 0.55);
        ctx.fillText(p.display, x, y);
      }
      ctx.globalAlpha = 1;
    };

    const step = (now: number) => {
      const dt = Math.min((now - (lastTime || now)) / 1000, 0.05);
      lastTime = now;

      const targetLean = pointer
        ? { x: -((pointer.x / width) * 2 - 1) * PARALLAX_PX, y: -((pointer.y / height) * 2 - 1) * PARALLAX_PX }
        : { x: 0, y: 0 };
      lean.x += (targetLean.x - lean.x) * Math.min(1, dt * 3);
      lean.y += (targetLean.y - lean.y) * Math.min(1, dt * 3);

      while (ripples.length > 0 && now - (ripples[0]?.start ?? now) > RIPPLE_MS) ripples.shift();

      for (const p of particles) {
        // Drift, wrapping around the edges with a margin so words never pop in or out on screen.
        p.fx += p.vx * p.z * dt;
        p.fy += p.vy * p.z * dt;
        if (p.fy < -0.05) p.fy = 1.05;
        if (p.fx < -0.15) p.fx = 1.05;
        if (p.fx > 1.15) p.fx = -0.05;

        const x = p.fx * width + p.ox;
        const y = p.fy * height + p.oy;
        let target = 0;

        if (pointer) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < PUSH_RADIUS) {
            const force = (1 - dist / PUSH_RADIUS) ** 2;
            p.ox += (dx / dist) * force * PUSH_STRENGTH * dt * 6;
            p.oy += (dy / dist) * force * PUSH_STRENGTH * dt * 6;
            target = 1 - dist / PUSH_RADIUS;
          }
        }

        for (const ripple of ripples) {
          const radius = (now - ripple.start) * RIPPLE_SPEED;
          if (Math.abs(Math.hypot(x - ripple.x, y - ripple.y) - radius) < RIPPLE_BAND) target = Math.max(target, 0.95);
        }

        // Spring back to rest, and let the scramble fade so the word decodes.
        const spring = Math.min(1, dt * 2.2);
        p.ox -= p.ox * spring;
        p.oy -= p.oy * spring;
        p.scramble = target > p.scramble ? target : Math.max(0, p.scramble - dt * 1.1);

        if (p.scramble < 0.02) p.display = p.text;
        else if (now - p.lastGlyphAt > GLYPH_REFRESH_MS) {
          p.display = scrambledText(p.text, p.scramble);
          p.lastGlyphAt = now;
        }
      }

      draw(now);
      frame = requestAnimationFrame(step);
    };

    const run = () => {
      if (!started || !onScreen || document.hidden || frame) return;
      lastTime = 0;
      frame = requestAnimationFrame(step);
    };
    const pause = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };
    const sync = () => (onScreen && !document.hidden ? run() : pause());

    const local = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      return { x: event.clientX - rect.left, y: event.clientY - rect.top };
    };
    // Touch has no hover: a finger dragging is a scroll, so only mouse and pen push words around.
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "touch") pointer = local(event);
    };
    const onLeave = () => {
      pointer = null;
    };
    const onDown = (event: PointerEvent) => {
      ripples.push({ ...local(event), start: performance.now() });
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
    resize();

    if (prefersReducedMotion) {
      canvas.style.opacity = "1";
      return () => resizeObserver.disconnect();
    }

    const visibility = new IntersectionObserver(([entry]) => {
      onScreen = entry?.isIntersecting ?? true;
      sync();
    });
    visibility.observe(canvas);
    document.addEventListener("visibilitychange", sync);
    host.addEventListener("pointermove", onMove);
    host.addEventListener("pointerleave", onLeave);
    host.addEventListener("pointerdown", onDown);

    // Start once the page is idle, so the field never competes with the first paint or hydration.
    const begin = () => {
      started = true;
      canvas.style.opacity = "1";
      run();
    };
    // Safari has no requestIdleCallback, so it gets a short timeout instead.
    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle ? window.requestIdleCallback(begin, { timeout: 1500 }) : setTimeout(begin, 400);

    return () => {
      if (hasIdle) window.cancelIdleCallback(idle as number);
      else clearTimeout(idle);
      pause();
      resizeObserver.disconnect();
      visibility.disconnect();
      document.removeEventListener("visibilitychange", sync);
      host.removeEventListener("pointermove", onMove);
      host.removeEventListener("pointerleave", onLeave);
      host.removeEventListener("pointerdown", onDown);
    };
  }, [words, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="absolute inset-0 h-full w-full pointer-events-none opacity-0 transition-opacity duration-1000"
    />
  );
}
