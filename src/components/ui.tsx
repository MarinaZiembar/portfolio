"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode, type CSSProperties } from "react";

/** Aparece con animación cuando entra en el viewport. */
export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  variant = "up",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  variant?: "up" | "fade" | "mask";
}) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? "is-in" : ""} ${className}`}
      style={{ "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

/** Texto que "rueda" hacia arriba al hacer hover (estilo jozue.fr). */
export function RollText({ children }: { children: string }) {
  return (
    <span className="roll" aria-label={children}>
      <span className="roll__inner" aria-hidden="true">
        <span>{children}</span>
        <span>{children}</span>
      </span>
    </span>
  );
}

/** Pequeñas formas geométricas en SVG, para decorar títulos y botones. */
export function Shape({
  kind,
  className = "",
  color = "currentColor",
}: {
  kind: "circle" | "square" | "triangle" | "plus" | "half" | "ring";
  className?: string;
  color?: string;
}) {
  const common = { className: `shape ${className}`, viewBox: "0 0 24 24", "aria-hidden": true } as const;
  switch (kind) {
    case "circle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="11" fill={color} />
        </svg>
      );
    case "ring":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9.5" fill="none" stroke={color} strokeWidth="3" />
        </svg>
      );
    case "square":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" fill={color} />
        </svg>
      );
    case "triangle":
      return (
        <svg {...common}>
          <path d="M12 1.5 23 21.5H1z" fill={color} />
        </svg>
      );
    case "half":
      return (
        <svg {...common}>
          <path d="M1 17a11 11 0 0 1 22 0z" fill={color} />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <path d="M9 1h6v8h8v6h-8v8H9v-8H1V9h8z" fill={color} />
        </svg>
      );
  }
}
