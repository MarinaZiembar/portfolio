"use client";

import { useEffect, useRef } from "react";
import { Shape } from "./ui";

const SHAPES = ["circle", "square", "triangle", "plus", "half", "ring"] as const;

/**
 * Cinta infinita que se acelera con la velocidad del scroll
 * y cambia de dirección según hacia dónde scrolleás.
 */
export default function Marquee({
  words,
  tone = "red",
  baseSpeed = 0.6,
}: {
  words: string[];
  tone?: "red" | "ink";
  baseSpeed?: number;
}) {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let x = 0;
    let dir = -1;
    let boost = 0;
    let lastY = window.scrollY;
    let raf = 0;

    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastY;
      lastY = y;
      if (dy !== 0) dir = dy > 0 ? -1 : 1;
      boost = Math.min(boost + Math.abs(dy) * 0.08, 14);
    };

    const loop = () => {
      const half = el.scrollWidth / 2;
      boost *= 0.92;
      x += dir * (baseSpeed + boost);
      if (half > 0) {
        if (x <= -half) x += half;
        if (x > 0) x -= half;
      }
      el.style.transform = `translate3d(${x}px,0,0)`;
      raf = requestAnimationFrame(loop);
    };
    if (!reduced) loop();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, [baseSpeed]);

  const items = [...words, ...words, ...words, ...words];

  return (
    <div className={`marquee marquee--${tone}`} aria-label={words.join(", ")}>
      <div className="marquee__track" ref={track} aria-hidden="true">
        {items.map((w, i) => (
          <span className="marquee__item" key={i}>
            {w}
            <Shape kind={SHAPES[(i % words.length) % SHAPES.length]} className="marquee__shape" />
          </span>
        ))}
      </div>
    </div>
  );
}
