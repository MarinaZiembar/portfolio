"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { uiByLocale, locales, type L, type Locale, type UI } from "@/data/content";

/**
 * Idioma del sitio (es / en), del lado del cliente.
 * - Primera visita: usa el idioma del navegador (inglés si empieza con "en", si no español).
 * - Después recuerda la elección en localStorage.
 * - Actualiza <html lang> y el <title>.
 */

const STORAGE_KEY = "mz-lang";

const titles: L = {
  es: "Marina Ziembar — Sr Frontend Engineer & Creative Technologist",
  en: "Marina Ziembar — Sr Frontend Engineer & Creative Technologist",
};

type Ctx = {
  lang: Locale;
  setLang: (l: Locale) => void;
  t: UI;
  /** Elige el texto del idioma actual de un objeto { es, en }. */
  tr: (v: L) => string;
  switching: boolean;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>("es");
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    let initial: Locale | null = null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && (locales as readonly string[]).includes(saved)) initial = saved as Locale;
    } catch {}
    if (!initial) initial = navigator.language?.toLowerCase().startsWith("en") ? "en" : "es";
    setLangState(initial);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = titles[lang];
  }, [lang]);

  const setLang = useCallback(
    (l: Locale) => {
      if (l === lang) return;
      try {
        localStorage.setItem(STORAGE_KEY, l);
      } catch {}
      // pequeña transición: el contenido se desvanece, cambia el idioma y vuelve
      setSwitching(true);
      window.setTimeout(() => {
        setLangState(l);
        window.setTimeout(() => setSwitching(false), 30);
      }, 220);
    },
    [lang],
  );

  const tr = useCallback((v: L) => v[lang], [lang]);

  useEffect(() => {
    document.body.classList.toggle("is-switching-lang", switching);
  }, [switching]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: uiByLocale[lang], tr, switching }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang debe usarse dentro de <LanguageProvider>");
  return ctx;
}
