"use client";

import { useEffect, useState } from "react";
import { RollText } from "./ui";

const links = [
  { href: "#sobre-mi", label: "Sobre mí." },
  { href: "#trabajos", label: "Trabajos." },
  { href: "#experiencia", label: "Experiencia." },
  { href: "#contacto", label: "Contacto." },
];

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      setHidden(y > 200 && y > last);
      last = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className={`nav ${hidden && !open ? "nav--hidden" : ""} ${scrolled && !open ? "nav--scrolled" : ""} ${open ? "nav--menu" : ""}`}>
        <a href="#top" className="nav__logo" aria-label="Marina Ziembar — inicio">
          <span className="logo-mark" aria-hidden="true">
            <i className="logo-mark__circle" />
            <i className="logo-mark__square" />
          </span>
          <span className="nav__name">
            <span className="thin">Marina</span> Ziembar
          </span>
        </a>

        <nav className="nav__links" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              <RollText>{l.label}</RollText>
            </a>
          ))}
        </nav>

        <button
          className={`nav__burger ${open ? "is-open" : ""}`}
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span />
          <span />
        </button>
      </header>

      <div id="menu-mobile" className={`menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="menu__shapes" aria-hidden="true">
          <i className="menu__circle" />
          <i className="menu__square" />
          <i className="menu__tri" />
        </div>
        <nav>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${120 + i * 70}ms` : "0ms" }}
              tabIndex={open ? 0 : -1}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
