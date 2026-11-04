"use client";

import { useState } from "react";
import { Reveal } from "./ui";
import { experience } from "@/data/content";
import { useLang } from "@/i18n/LanguageProvider";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);
  const { t, lang, tr } = useLang();

  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <Reveal as="h2" className="section-title" variant="mask">
          <span>
            {t.experience.title[0]} <span className="thin">{t.experience.title[1]}</span>
            <sup>{experience.length}</sup>
          </span>
        </Reveal>

        <ol className="jobs">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={`${job.company}-${job.role.es}`} delay={i * 60} className={`job ${isOpen ? "is-open" : ""}`}>
                <button
                  className="job__head"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`job-${i}`}
                >
                  <span className="job__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="job__company">{job.company}</span>
                  <span className="job__role">{tr(job.role)}</span>
                  <span className="job__period">{tr(job.period)}</span>
                  <span className="job__toggle" aria-hidden="true" />
                </button>
                <div className="job__body" id={`job-${i}`} role="region">
                  <div className="job__body-inner">
                    <ul>
                      {job.bullets[lang].map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
