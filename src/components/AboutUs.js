import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/AboutUs.css";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about-us-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className="cdv-title" data-aos="fade-up">
          <span>{t('about-us.title')}</span>
        </div>
        <div className="cdv-text">
          <span data-aos="fade-up">{t('about-us.paragraph1')}</span>
          <span data-aos="fade-up">{t('about-us.paragraph2')}</span>
          <span data-aos="fade-up">{t('about-us.paragraph3')}</span>
          <span data-aos="fade-up">{t('about-us.paragraph4')}</span>
        </div>
        <div className="about-us-signature" data-aos="fade-up">{t('about-us.signature')}</div>
      </div>
    </section>
  );
}

export default AboutUs;