import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/WordsBreakSection.css";

function WordsBreakSection() {
  const { t } = useTranslation();

  return (
    <section id="words-section-id" className="cdv-section alt">
      <img
        src="/images/Logo/CasaDaVilaWhiteLogo.png"
        alt="Alpedrinha - Vista do Palácio do Picadeiro"
        className="img-words-break-section"
      />
      <span className="desktop-words-break-section">
        {t('words-break-section.simplicity')} {t('words-break-section.separator')} {t('words-break-section.comfort')} {t('words-break-section.separator')} {t('words-break-section.history')}
      </span>
      <div className="mobile-words-break-section">
        <span>{t('words-break-section.simplicity')}</span>
        <span> {t('words-break-section.separator')} </span>
        <span>{t('words-break-section.comfort')}</span>
        <span> {t('words-break-section.separator')} </span>
        <span>{t('words-break-section.history')}</span>
      </div>
    </section>
  );
}

export default WordsBreakSection;