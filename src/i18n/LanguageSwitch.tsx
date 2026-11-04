"use client";

import { useLang } from "./LanguageProvider";
import { locales } from "@/data/content";

/** Switch ES / EN: una pastilla roja que se desliza entre los dos idiomas. */
export default function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLang();
  const idx = locales.indexOf(lang);

  return (
    <div className={`lang-switch ${className}`} role="group" aria-label={t.navAria.lang}>
      <span className="lang-switch__thumb" style={{ transform: `translateX(${idx * 100}%)` }} aria-hidden="true" />
      {locales.map((l) => (
        <button
          key={l}
          className={l === lang ? "is-active" : ""}
          onClick={() => setLang(l)}
          aria-pressed={l === lang}
          lang={l}
          aria-label={l === "es" ? "Español" : "English"}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
