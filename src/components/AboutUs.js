import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/AboutUs.css";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <section id="about-us-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className='cdv-about-us-container'>
          <img className='cdv-about-us-image' src="/images/SobreNos/D_Sao_CasaDaVila_Alpedrinha.png" alt="Alpedrinha - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira" data-aos="fade-up"/>
          
          <div className="cdv-title-and-text">
            <div className="cdv-title" data-aos="fade-up">
              <span className='cdv-small-title'>Casa da Vila</span>
              <span>{t('about-us.title')}</span>
            </div>
            <div className='cdv-text'>
              <span data-aos="fade-up">{t('about-us.paragraph1')}</span>
              <span data-aos="fade-up">{t('about-us.paragraph2')}</span>
              <span className="not-phone" data-aos="fade-up">{t('about-us.paragraph3')}</span>
              <span className="not-phone" data-aos="fade-up">{t('about-us.paragraph4')}</span>
            </div>
            <div className="about-us-signature not-phone" data-aos="fade-up">{t('about-us.signature')}</div>
          </div>
        </div>
        <div className='cdv-about-us-container not-desktop'>
          <div className='cdv-text'>
            <span data-aos="fade-up">{t('about-us.paragraph3phone')}</span>
            <span data-aos="fade-up">{t('about-us.paragraph4')}</span>
            <div className="about-us-signature not-desktop" data-aos="fade-up">{t('about-us.signature')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;