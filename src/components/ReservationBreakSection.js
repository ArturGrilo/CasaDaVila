import React from "react";
import "../styles/ReservationBreakSection.css";
import { useTranslation } from 'react-i18next';

function ReservationBreakSection() {
  const { t } = useTranslation();

  return (
    <section id="break-section-id" className="cdv-section alt">
      <div id="break-sub-section-id">
        <span className="break-section-title" data-aos="fade-up">{t('reservationBreakSection.title')}</span>
        <span className="break-section-text" data-aos="fade-up">{t('reservationBreakSection.text')}</span>
        <div className="break-section-button-container" data-aos="fade-up">
          <button className="cdv-button-primary" onClick={(e) => {e.preventDefault(); window.location.href = '/Reservar';}}>
            {t('reservationBreakSection.bookButton')}
          </button>
          <div id="break-sub-section-id" className="price">
            <span className="break-section-text">{t('reservationBreakSection.priceFrom')}</span>
            <span className="break-section-title">{t('reservationBreakSection.priceValue')}</span>
          </div>
        </div>
      </div>
      <div id="break-sub-section-id" className="price desktop">
        <span className="break-section-text">{t('reservationBreakSection.priceFrom')}</span>
        <span className="break-section-title">{t('reservationBreakSection.priceValue')}</span>
      </div>
    </section>
  );
}

export default ReservationBreakSection;