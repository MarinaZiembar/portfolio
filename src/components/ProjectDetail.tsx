"use client";

import ProjectArt from "./ProjectArt";
import { Reveal, RollText } from "./ui";
import { projects, tagLabels } from "@/data/content";
import { useLang } from "@/i18n/LanguageProvider";

export default function ProjectDetail({ slug }: { slug: string }) {
  const { t, tr } = useLang();
  const i = projects.findIndex((p) => p.slug === slug);
  const p = projects[i];
  if (!p) return null;
  const next = projects[(i + 1) % projects.length];
  const n = projects.length;

  return (
    <section id="top" className="pdetail">
      <div className="container">
        <Reveal className="pdetail__top">
          <a href="/#trabajos" className="pdetail__back">
            <span aria-hidden="true">←</span> <RollText>{t.project.back}</RollText>
          </a>
          <span className="pdetail__count">
            {t.project.label} <strong>{String(i + 1).padStart(2, "0")}</strong> / {String(n).padStart(2, "0")}
          </span>
        </Reveal>

        <Reveal as="h1" className="pdetail__title" variant="mask">
          <span>
            {p.title}
            <span className="pdetail__dot">.</span>
          </span>
        </Reveal>

        <Reveal className="pdetail__art" delay={120}>
          <ProjectArt seed={p.seed} title={p.title} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="pdetail__logo" src={p.logo} alt={p.title} />
        </Reveal>

        <div className="pdetail__body">
          <Reveal className="pdetail__about" delay={80}>
            <p className="pdetail__kicker">{t.project.about}</p>
            <p className="pdetail__text">{tr(p.details)}</p>
            <a href={p.href} target="_blank" rel="noreferrer" className="btn btn--red pdetail__cta">
              <RollText>{t.project.visit}</RollText>
              <span className="btn__arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          </Reveal>

          <Reveal as="dl" className="pdetail__meta" delay={160}>
            <div>
              <dt>{t.project.site}</dt>
              <dd>
                <a href={p.href} target="_blank" rel="noreferrer" className="pdetail__url">
                  {tr(p.linkLabel)} ↗
                </a>
              </dd>
            </div>
            {p.client && (
              <div>
                <dt>{t.project.client}</dt>
                <dd>{p.client}</dd>
              </div>
            )}
            <div>
              <dt>{t.project.date}</dt>
              <dd>{tr(p.period)}</dd>
            </div>
            <div>
              <dt>{t.project.type}</dt>
              <dd>{p.types.map((tag) => tr(tagLabels[tag])).join(" · ")}</dd>
            </div>
            <div>
              <dt>{t.project.tech}</dt>
              <dd>
                <ul className="card__tags">
                  {p.stack.map((tag) => (
                    <li key={tag}>{tr(tagLabels[tag])}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </Reveal>
        </div>

        {next && next.slug !== p.slug && (
          <Reveal>
            <a href={`/proyectos/${next.slug}`} className="pdetail__next">
              <span className="pdetail__kicker">{t.project.next}</span>
              <span className="pdetail__next-title">
                {next.title} <span className="pdetail__next-arrow" aria-hidden="true">→</span>
              </span>
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
