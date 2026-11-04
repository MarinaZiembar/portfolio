"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent as RMouseEvent,
  type PointerEvent as RPointerEvent,
  type TransitionEvent as RTransitionEvent,
} from "react";
import ProjectArt from "./ProjectArt";
import { Reveal } from "./ui";
import { projectTypes, projects, tagLabels, type Project, type ProjectType, type Stack } from "@/data/content";
import { useLang } from "@/i18n/LanguageProvider";

const AUTOPLAY = 3800;

// En la frase de filtros mostramos solo los stacks principales.
const filterStacks: Stack[] = ["react", "next", "reactNative", "typescript", "tailwind"];

export default function Works() {
  const { t, tr } = useLang();
  const [type, setType] = useState<ProjectType | null>(null);
  const [stack, setStack] = useState<Stack | null>(null);

  const filtered = useMemo(
    () => projects.filter((p) => (!type || p.types.includes(type)) && (!stack || p.stack.includes(stack))),
    [type, stack],
  );

  const countT = (pt: ProjectType) => projects.filter((p) => p.types.includes(pt)).length;
  const countS = (st: Stack) => projects.filter((p) => p.stack.includes(st)).length;
  const reset = () => {
    setType(null);
    setStack(null);
  };

  return (
    <section id="trabajos" className="section works">
      <div className="container">
        <Reveal as="h2" className="section-title" variant="mask">
          <span>
            {t.works.title[0]} <span className="thin">{t.works.title[1]}</span>
            <sup>{filtered.length}</sup>
          </span>
        </Reveal>

        <Reveal className="filters" delay={100}>
          <p>
            {t.works.lead}{" "}
            {projectTypes.map((pt) => (
              <button
                key={pt}
                className={`chip ${type === pt ? "is-active" : ""}`}
                onClick={() => setType(type === pt ? null : pt)}
                aria-pressed={type === pt}
              >
                {tr(tagLabels[pt])}
                <sup>{countT(pt)}</sup>
              </button>
            ))}{" "}
            {t.works.for}{" "}
            {filterStacks.map((st) => (
              <button
                key={st}
                className={`chip ${stack === st ? "is-active" : ""}`}
                onClick={() => setStack(stack === st ? null : st)}
                aria-pressed={stack === st}
              >
                {tr(tagLabels[st])}
                <sup>{countS(st)}</sup>
              </button>
            ))}
            {(type || stack) && (
              <button className="chip chip--reset" onClick={reset}>
                {t.works.reset}
              </button>
            )}
          </p>
        </Reveal>

        {filtered.length === 0 ? (
          <p className="works__empty">
            {t.works.empty}{" "}
            <button className="link" onClick={reset}>
              {t.works.showAll}
            </button>
          </p>
        ) : (
          <Carousel items={filtered} key={`${type ?? "all"}-${stack ?? "all"}`} />
        )}
      </div>
    </section>
  );
}

/* ───────────────────────── Carrusel ─────────────────────────
   - Autoplay infinito (se pausa con el mouse encima, al arrastrar,
     fuera de pantalla o con la pestaña oculta).
   - Arrastre / swipe con el mouse o el dedo.
   - La card que entra en foco "arma" su composición geométrica.
*/

function Carousel({ items }: { items: Project[] }) {
  const { t, lang } = useLang();
  const n = items.length;
  const viewport = useRef<HTMLDivElement>(null);
  const [per, setPer] = useState(3); // cards visibles (según CSS)
  const [step, setStep] = useState(0); // ancho de card + gap en px
  const loop = n > Math.floor(per);
  const slides = loop ? [...items, ...items, ...items] : items;

  const [index, setIndex] = useState(loop ? n : 0);
  const [animate, setAnimate] = useState(true);
  const [drag, setDrag] = useState(0);
  const [hover, setHover] = useState(false);
  const [inView, setInView] = useState(false);
  const [measured, setMeasured] = useState(false);
  const dragState = useRef<{ x: number; y: number; moved: boolean; active: boolean }>({ x: 0, y: 0, moved: false, active: false });

  // medir
  useEffect(() => {
    const el = viewport.current;
    if (!el) return;
    const measure = () => {
      const card = el.querySelector<HTMLElement>(".slide");
      const gap = parseFloat(getComputedStyle(el).getPropertyValue("--gap")) || 24;
      const p = parseFloat(getComputedStyle(el).getPropertyValue("--per")) || 3;
      setPer(p);
      if (card) setStep(card.offsetWidth + gap);
    };
    measure();
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setMeasured(true)));
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  useEffect(() => {
    setIndex(loop ? n : 0);
  }, [loop, n]);

  const go = useCallback(
    (delta: number) => {
      setAnimate(true);
      setIndex((i) => {
        if (loop) return i + delta;
        const max = Math.max(0, n - Math.floor(per));
        return Math.min(max, Math.max(0, i + delta));
      });
    },
    [loop, n, per],
  );

  // al terminar la transición, si salimos de la copia del medio, saltamos sin animación
  const onTransitionEnd = (e: RTransitionEvent) => {
    if (e.target !== e.currentTarget || !loop) return;
    if (index >= 2 * n || index < n) {
      setAnimate(false);
      setIndex(((index % n) + n) % n + n);
    }
  };
  useEffect(() => {
    if (animate) return;
    const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
    return () => cancelAnimationFrame(id);
  }, [animate]);

  // autoplay
  const playing = loop && inView && !hover && !dragState.current.active;
  useEffect(() => {
    if (!playing) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const t = setTimeout(() => go(1), AUTOPLAY);
    return () => clearTimeout(t);
  }, [playing, index, go]);

  // arrastre
  const onPointerDown = (e: RPointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragState.current = { x: e.clientX, y: e.clientY, moved: false, active: true };
    setAnimate(false);
  };
  const onPointerMove = (e: RPointerEvent) => {
    const s = dragState.current;
    if (!s.active) return;
    const dx = e.clientX - s.x;
    const dy = e.clientY - s.y;
    if (!s.moved && Math.abs(dy) > Math.abs(dx) && Math.abs(dy) > 8) {
      // scroll vertical: soltamos
      s.active = false;
      setAnimate(true);
      setDrag(0);
      return;
    }
    if (Math.abs(dx) > 6) {
      s.moved = true;
      (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    }
    if (s.moved) setDrag(loop || (index > 0 && dx > 0) || dx < 0 ? dx : dx * 0.3);
  };
  const endDrag = () => {
    const s = dragState.current;
    if (!s.active) return;
    s.active = false;
    setAnimate(true);
    if (step && Math.abs(drag) > step * 0.18) {
      const count = Math.max(1, Math.round(Math.abs(drag) / step));
      go(drag < 0 ? count : -count);
    }
    setDrag(0);
  };
  const onClickCapture = (e: RMouseEvent) => {
    if (dragState.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      dragState.current.moved = false;
    }
  };

  const visible = Math.max(1, Math.floor(per));
  const current = ((index % n) + n) % n;
  const x = -index * step + drag;

  return (
    <div className="carousel">
      <div
        className={`carousel__viewport ${dragState.current.active && drag ? "is-dragging" : ""}`}
        ref={viewport}
        onPointerEnter={(e) => e.pointerType === "mouse" && setHover(true)}
        onPointerLeave={(e) => e.pointerType === "mouse" && setHover(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={onClickCapture}
        aria-roledescription={lang === "en" ? "carousel" : "carrusel"}
        aria-label={t.works.carousel}
      >
        <div
          className={`carousel__track ${animate && measured && !drag ? "" : "no-anim"}`}
          style={{ transform: `translate3d(${x}px,0,0)` }}
          onTransitionEnd={onTransitionEnd}
        >
          {slides.map((p, i) => {
            const inFocus = i >= index && i < index + visible;
            const lead = i === index;
            return (
              <div
                className={`slide ${inFocus ? "is-visible" : ""} ${lead ? "is-lead" : ""}`}
                key={`${p.slug}-${i}`}
                aria-hidden={!inFocus}
                style={{ "--d": `${(i - index) * 70}ms` } as CSSProperties}
              >
                <ProjectCard project={p} number={(i % n) + 1} focusable={inFocus} />
              </div>
            );
          })}
        </div>
      </div>

      {(loop || n > visible) && (
        <div className="carousel__controls">
          <div className="carousel__count">
            <strong>{String(current + 1).padStart(2, "0")}</strong>
            <span> / {String(n).padStart(2, "0")}</span>
          </div>

          <div className="carousel__bar" aria-hidden="true">
            {items.map((p, i) => (
              <span key={p.slug} className={i === current ? "is-on" : i < current ? "is-done" : ""}>
                {i === current && playing && <i key={index} style={{ animationDuration: `${AUTOPLAY}ms` }} />}
              </span>
            ))}
          </div>

          <div className="carousel__arrows">
            <button className="arrow" onClick={() => go(-1)} aria-label={t.works.prev} disabled={!loop && index === 0}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 4 7 12l8 8" />
              </svg>
            </button>
            <button
              className="arrow arrow--next"
              onClick={() => go(1)}
              aria-label={t.works.next}
              disabled={!loop && index >= n - visible}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m9 4 8 8-8 8" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectCard({ project: p, number, focusable }: { project: Project; number: number; focusable: boolean }) {
  const { t, tr } = useLang();
  return (
    <a
      href={p.href}
      className="card"
      data-cursor={t.works.view}
      draggable={false}
      tabIndex={focusable ? 0 : -1}
      target="_blank"
      rel="noreferrer"
    >
      <div className="card__art">
        <ProjectArt seed={p.seed} title={p.title} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="card__logo" src={p.logo} alt="" draggable={false} loading="lazy" />
        <span className="card__index">{String(number).padStart(2, "0")}</span>
      </div>
      <div className="card__meta">
        <h3>
          {p.title}
          <span className="card__arrow" aria-hidden="true">
            ↗
          </span>
        </h3>
        <p className="card__client">{p.client ? `${p.client} · ${tr(p.period)}` : tr(p.period)}</p>
        {p.description && <p className="card__desc">{tr(p.description)}</p>}
        <p className="card__link">{tr(p.linkLabel)}</p>
        <ul className="card__tags">
          {[...p.types, ...p.stack].map((tag) => (
            <li key={tag}>{tr(tagLabels[tag])}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
