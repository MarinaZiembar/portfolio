"use client";

import { RollText } from "./ui";
import { profile } from "@/data/content";
import { useLang } from "@/i18n/LanguageProvider";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">
          <span className="thin">{profile.firstName}</span> {profile.lastName}
        </p>
        <p className="footer__role">
          {profile.role[0]}
          <br />
          {profile.role[1]}
        </p>
        <nav className="footer__links" aria-label={t.footer.social}>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <RollText>LinkedIn.</RollText>
          </a>
          <a href={`mailto:${profile.email}`}>
            <RollText>Email.</RollText>
          </a>
          <a href="#top">
            <RollText>{t.footer.top}</RollText>
          </a>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} — {t.footer.credit}</p>
      </div>
      <div className="footer__bar" />
    </footer>
  );
}
