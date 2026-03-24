import React, { useEffect, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { faPhoneVolume, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TopBar from "./TopBar";
import Footer from "./Footer";
import "../styles/Booking2.css";

const BookingPage = () => {
  const { t } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState(
    "/images/Reservar/reservar_placeholder.webp"
  );

  const applyBackgroundImage = useCallback(() => {
    const screenWidth = window.innerWidth;
    let imageUrl;

    if (screenWidth <= 480) imageUrl = "/images/Reservar/reservar_480.webp";
    else if (screenWidth <= 800) imageUrl = "/images/Reservar/reservar_800.webp";
    else imageUrl = "/images/Reservar/reservar_1200.webp";

    const img = new Image();
    img.src = imageUrl;

    img.onload = () => setBackgroundImage(imageUrl);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    applyBackgroundImage();

    window.addEventListener("resize", applyBackgroundImage);
    return () => window.removeEventListener("resize", applyBackgroundImage);
  }, [applyBackgroundImage]);

  return (
    <section id="booking-page-id" className="cdv-section">
      <div className="cdv-img-alt-page booking-hero">
        <div className="cdv-title booking-hero-title">
          <span>{t("booking.book")}</span>
        </div>

        <div
          className="cdv-img-parallax-alt-page booking-hero-bg"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transition: "background-image 0.35s ease-in-out",
          }}
        >
          {/* overlay premium (substitui/eleva a tua .cdv-red) */}
          <div className="booking-hero-overlay" />
        </div>
      </div>

      <TopBar altScreen={true} />

      <div className="cdv-main-container booking-container">
        <div className="booking-intro" data-aos="fade-up">
          <p className="booking-p">{t("booking.paragraph1")}</p>
          <p className="booking-p booking-p-strong">{t("booking.paragraph2")}</p>
          <p className="booking-p booking-p-muted">{t("booking.paragraph3")}</p>
        </div>

        <div className="tag-desconto booking-ribbon" aria-label="Promoção">
          <div className="tag-triangle" />
          <div className="tag-content">
            <span className="desconto-text">-10%</span>
            <span className="desconto-text-bigger">{t("booking.onWebsite")}</span>
          </div>
        </div>

        <div className="reservation-container booking-cards">
          <div className="reservation-call booking-card" data-aos="fade-up">
            <div className="reservation-call-icon booking-icon">
              <FontAwesomeIcon icon={faPhoneVolume} className="cdv-card-icon" />
            </div>

            <div className="reservation-text booking-card-title">{t("booking.phone")}</div>
            <div className="booking-card-subtitle">Disponível diariamente</div>

            <div className="booking-links">
              <a className="reservation-title booking-link" href="tel:+351964849002">
                +351 964 849 002
              </a>
              <a className="reservation-title booking-link" href="tel:+351966910051">
                +351 966 910 051
              </a>
            </div>
          </div>

          <div className="reservation-call booking-card" data-aos="fade-up">
            <div className="reservation-call-icon booking-icon">
              <FontAwesomeIcon icon={faEnvelope} className="cdv-card-icon" />
            </div>

            <div className="reservation-text booking-card-title">{t("booking.email")}</div>
            <div className="booking-card-subtitle">Resposta rápida</div>

            <div className="booking-links">
              <a
                className="reservation-title alt booking-link"
                href="mailto:casadavila.pt@hotmail.com"
              >
                casadavila.pt@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default BookingPage;