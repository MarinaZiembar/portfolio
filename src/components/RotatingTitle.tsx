"use client";

import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { Shape } from "./ui";

/**
 * Titular de dos líneas que va rotando entre roles.
 * Línea 1 (fina) + "+" rojo, línea 2 (regular).
 * Cada cambio: las letras salen hacia arriba y entran desde abajo, una por una,
 * y el "+" gira. Click en el titular o en los indicadores para cambiar a mano.
 */

const INTERVAL = 3200;
const INDICATORS = ["circle", "square", "triangle", "plus", "half", "ring"] as const;

function Letters({ text, offset = 0 }: { text: string; offset?: number }) {
  return (
    <>
      {Array.from(text).map((ch, i) => (
        <span className="rt__char" key={i} style={{ "--i": i + offset } as CSSProperties}>
          {ch === " " ? " " : ch}
        </span>
      ))}
    </>
  );
}

/** Contenedor que anima su ancho al de la palabra entrante, así el "+" se desliza en vez de saltar. */
function Slot({
  word,
  oldWord,
  wordKey,
  oldKey,
  className,
  offset = 0,
}: {
  word: string;
  oldWord: string | null;
  wordKey: string;
  oldKey: string;
  className: string;
  offset?: number;
}) {
  const inRef = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState<number>();

  useLayoutEffect(() => {
    const el = inRef.current;
    if (!el) return;
    const measure = () => setWidth(el.offsetWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [word]);

  return (
    <span className="rt__slot" style={width ? { width } : undefined}>
      <span className={`rt__word rt__word--in ${className}`} key={wordKey} ref={inRef}>
        <Letters text={word} offset={offset} />
      </span>
      {oldWord && (
        <span className={`rt__word rt__word--out ${className}`} key={oldKey}>
          <Letters text={oldWord} offset={offset} />
        </span>
      )}
    </span>
  );
}

export default function RotatingTitle({ lines, ready }: { lines: [string, string][]; ready: boolean }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  const go = (next: number) => {
    if (next === index) return;
    setPrev(index);
    setIndex(next);
  };

  // auto-rotación (se pausa con el mouse encima)
  useEffect(() => {
    if (!ready || paused) return;
    timer.current = setTimeout(() => go((index + 1) % lines.length), INTERVAL);
    return () => clearTimeout(timer.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, ready, paused, lines.length]);

  // limpia la palabra saliente cuando termina su animación
  useEffect(() => {
    if (prev === null) return;
    const t = setTimeout(() => setPrev(null), 900);
    return () => clearTimeout(t);
  }, [prev, index]);

  const [thin, bold] = lines[index];
  const old = prev !== null ? lines[prev] : null;

  return (
    <div
      className={`rt ${ready ? "is-ready" : ""}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <h1 className="hero__title rt__title" aria-label={lines.map((l) => l.join(" ")).join(", ")}>
        <button
          className="rt__hit"
          onClick={() => go((index + 1) % lines.length)}
          aria-label="Ver el siguiente rol"
          data-cursor="next"
        />
        <span className="rt__line" aria-hidden="true">
          <Slot word={thin} oldWord={old?.[0] ?? null} wordKey={`a${index}`} oldKey={`ao${prev}`} className="thin" />
          <span className="plus rt__plus" style={{ "--turn": `${index * 180}deg` } as CSSProperties}>
            +
          </span>
        </span>
        <span className="rt__line" aria-hidden="true">
          <Slot word={bold} oldWord={old?.[1] ?? null} wordKey={`b${index}`} oldKey={`bo${prev}`} className="regular" offset={3} />
        </span>
      </h1>

      <div className="rt__nav">
        <div className="rt__dots" role="group" aria-label="Roles">
          {lines.map((l, i) => (
            <button
              key={l.join()}
              className={`rt__dot ${i === index ? "is-active" : ""}`}
              onClick={() => go(i)}
              aria-label={l.join(" ")}
              aria-pressed={i === index}
            >
              <Shape kind={INDICATORS[i % INDICATORS.length]} />
            </button>
          ))}
        </div>
        <span className="rt__count">
          {String(index + 1).padStart(2, "0")} / {String(lines.length).padStart(2, "0")}
        </span>
        <span className="rt__bar" aria-hidden="true">
          {ready && !paused && <i key={index} style={{ animationDuration: `${INTERVAL}ms` }} />}
        </span>
      </div>
    </div>
  );
}
