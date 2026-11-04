"use client";

import { useEffect, useState } from "react";
import GeometryCanvas from "./GeometryCanvas";
import RotatingTitle from "./RotatingTitle";
import { RollText } from "./ui";
import { heroLines, profile } from "@/data/content";
import { useLang } from "@/i18n/LanguageProvider";

export default function Hero() {
  const { t, tr } = useLang();
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="top" className={`hero ${ready ? "is-ready" : ""}`}>
      <GeometryCanvas className="hero__canvas" />

      <div className="hero__inner container">
        <p className="hero__hello">
          <span className="hero__wave" aria-hidden="true" />
          {t.hero.hello} {profile.firstName}.
        </p>

        <RotatingTitle lines={heroLines} ready={ready} />

        <div className="hero__bottom">
          <p className="hero__intro">{t.hero.intro}</p>

          <ul className="hero__info">
            <li>{tr(profile.location)}</li>
            <li>
              <a href={`mailto:${profile.email}`}>
                <RollText>{profile.email}</RollText>
              </a>
            </li>
            <li>
              <a href={profile.phoneHref}>
                <RollText>{profile.phone}</RollText>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <RollText>LinkedIn ↗</RollText>
              </a>
            </li>
          </ul>

          <a href="#trabajos" className="btn btn--red hero__cta">
            <RollText>{t.hero.cta}</RollText>
            <span className="btn__arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
