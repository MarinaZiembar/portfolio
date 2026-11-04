"use client";

import { useState } from "react";
import { Reveal, RollText } from "./ui";
import { profile } from "@/data/content";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="orbit" aria-hidden="true">
        <i className="orbit__circle" />
        <i className="orbit__square" />
        <i className="orbit__tri" />
        <i className="orbit__ring" />
      </div>

      <div className="container contact__inner">
        <Reveal as="p" className="contact__kicker">
          ¿Tenés un proyecto?
        </Reveal>

        <Reveal as="h2" className="contact__title" variant="mask">
          <span>
            <span className="thin">hablemos</span>.
          </span>
        </Reveal>

        <Reveal className="contact__actions" delay={120}>
          <button className="contact__email" onClick={copy} data-cursor={copied ? "¡listo!" : "copiar"}>
            {profile.email}
            <span className={`contact__copied ${copied ? "is-on" : ""}`} role="status">
              {copied ? "¡Copiado!" : ""}
            </span>
          </button>

          <div className="contact__links">
            <a href={`mailto:${profile.email}`} className="btn btn--white">
              <RollText>Escribime</RollText>
              <span className="btn__arrow" aria-hidden="true">→</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn--ghost">
              <RollText>LinkedIn</RollText>
              <span className="btn__arrow" aria-hidden="true">↗</span>
            </a>
            {profile.cvUrl && (
              <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
                <RollText>Descargar CV</RollText>
                <span className="btn__arrow" aria-hidden="true">↓</span>
              </a>
            )}
          </div>
        </Reveal>

        <div className="contact__meta">
          <span>{profile.location}</span>
          <a href={profile.phoneHref}>{profile.phone}</a>
        </div>
      </div>
    </section>
  );
}
