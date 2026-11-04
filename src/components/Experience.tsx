"use client";

import { useState } from "react";
import { Reveal } from "./ui";
import { experience } from "@/data/content";

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experiencia" className="section experience">
      <div className="container">
        <Reveal as="h2" className="section-title" variant="mask">
          <span>
            experiencia <span className="thin">& recorrido</span>
            <sup>{experience.length}</sup>
          </span>
        </Reveal>

        <ol className="jobs">
          {experience.map((job, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={`${job.company}-${job.role}`} delay={i * 60} className={`job ${isOpen ? "is-open" : ""}`}>
                <button
                  className="job__head"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`job-${i}`}
                >
                  <span className="job__num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="job__company">{job.company}</span>
                  <span className="job__role">{job.role}</span>
                  <span className="job__period">{job.period}</span>
                  <span className="job__toggle" aria-hidden="true" />
                </button>
                <div className="job__body" id={`job-${i}`} role="region">
                  <div className="job__body-inner">
                    <ul>
                      {job.bullets.map((b) => (
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
