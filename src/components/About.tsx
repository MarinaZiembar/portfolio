"use client";

import { Reveal, Shape } from "./ui";
import { about, certifications, education, languages, skillGroups } from "@/data/content";
import { useLang } from "@/i18n/LanguageProvider";

export default function About() {
  const { t, lang, tr } = useLang();
  const reel = t.about.reel;
  return (
    <section id="sobre-mi" className="section about">
      <div className="container">
        <Reveal as="h2" className="section-title" variant="mask">
          <span>
            {t.about.title[0]} <span className="thin">{t.about.title[1]}</span>
          </span>
        </Reveal>

        <div className="about__grid">
          <div className="reel" aria-label={reel.join(", ")}>
            <ul className="reel__track" aria-hidden="true">
              {[...reel, ...reel].map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </div>

          <div className="about__text">
            {about[lang].map((p, i) => (
              <Reveal as="p" key={i} delay={i * 90}>
                {p}
              </Reveal>
            ))}
          </div>
        </div>

        <div className="skills">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title.es} className="skills__group" delay={i * 80}>
              <h3>
                <Shape kind={(["circle", "square", "triangle", "ring", "plus"] as const)[i % 5]} className="skills__shape" />
                {tr(g.title)}
              </h3>
              <ul>
                {g.items.map((s) => {
                  const label = typeof s === "string" ? s : tr(s);
                  return <li key={label}>{label}</li>;
                })}
              </ul>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

/** Educación, certificaciones e idiomas (separado de "Sobre mí"). */
export function Background() {
  const { t, tr } = useLang();
  return (
    <section id="formacion" className="section background">
      <div className="container">
        <div className="facts facts--standalone">
          <Reveal className="facts__col">
            <h3 className="facts__title">{t.about.education}</h3>
            {education.map((e) => (
              <div className="fact" key={e.title.es}>
                <strong>{tr(e.title)}</strong>
                <span>
                  {tr(e.place)} · {e.period}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal className="facts__col" delay={80}>
            <h3 className="facts__title">{t.about.certifications}</h3>
            {certifications.map((c) => (
              <div className="fact fact--row" key={c.title.es}>
                <strong>{tr(c.title)}</strong>
                <span>
                  {c.place} · {c.year}
                </span>
              </div>
            ))}
          </Reveal>

          <Reveal className="facts__col" delay={160}>
            <h3 className="facts__title">{t.about.languages}</h3>
            {languages.map((l) => (
              <div className="fact lang" key={l.name.es}>
                <strong>{tr(l.name)}</strong>
                <span className="lang__level">
                  <span className="lang__dots" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <i key={i} className={i < l.score ? "on" : ""} style={{ transitionDelay: `${i * 80}ms` }} />
                    ))}
                  </span>
                  {tr(l.level)}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
