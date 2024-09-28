import React, { useEffect, useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import "../styles/Bookings.css";

const BookingPage = () => {
  const { t } = useTranslation();
  const [backgroundImage, setBackgroundImage] = useState('/images/Reservar/reservar_placeholder.webp'); // Placeholder inicial

  const applyBackgroundImage = useCallback(() => {
    const screenWidth = window.innerWidth;
    let imageUrl;

    // Selecionar a imagem com base na largura da tela
    if (screenWidth <= 480) {
      imageUrl = '/images/Reservar/reservar_480.webp';
    } else if (screenWidth <= 800) {
      imageUrl = '/images/Reservar/reservar_800.webp';
    } else {
      imageUrl = '/images/Reservar/reservar_1200.webp';
    }

    // Carregar a imagem em um objeto Image para garantir que ela esteja completamente carregada
    const img = new Image();
    img.src = imageUrl;

    img.onload = () => {
      setBackgroundImage(imageUrl); // Substituir a imagem quando estiver carregada
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    applyBackgroundImage(); // Carregar a imagem de fundo ao montar o componente
  }, [applyBackgroundImage]);

  return (
    <section id="booking-page-id" className="cdv-section">
      <div className="cdv-img-alt-page">
        <div className="cdv-title">
          <span>{t('booking.book')}</span>
        </div>
        <div
          className="cdv-img-parallax-alt-page"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            transition: 'background-image 0.3s ease-in-out'
          }}
        >
          <div className='cdv-red'></div>
        </div>
      </div>
      <TopBar altScreen={true} />
      <div className="cdv-main-container">
        <div className="cdv-text" style={{ textAlign: "left"}}>
          <span style={{ textAlign: "left", width: "calc(100% - 80px)" }} data-aos="fade-up">{t('booking.paragraph1')}</span>
          <span style={{ textAlign: "left", width: "calc(100% - 100px)", fontWeight: "bold" }} data-aos="fade-up">{t('booking.paragraph2')}</span>
          <span data-aos="fade-up">{t('booking.paragraph3')}</span>
        </div>
        <div className='tag-desconto'>
          <div className="tag-triangle"></div>
          <div className="tag-content">
            <span className="desconto-text">-10%</span>
            <span className="desconto-text-bigger">{t('booking.onWebsite')}</span>
          </div>
        </div>
        <div className="reservation-container">
          <div className="reservation-call" data-aos="fade-up">
            <div className='reservation-call-icon'>
              <FontAwesomeIcon icon={faPhoneVolume} className="cdv-card-icon"/>
            </div>
            <div className='reservation-text'>{t('booking.phone')}</div>
            <a className='reservation-title' href="tel:+351964849002">+351 964 849 002</a>
            <a  style={{ marginTop: "-20px"}} className='reservation-title' href="tel:+351966910051">+351 966 910 051</a>
          </div>
          <div className="reservation-call" data-aos="fade-up">
            <div className='reservation-call-icon'>
              <FontAwesomeIcon icon={faEnvelope} className="cdv-card-icon"/>
            </div>
            <div className='reservation-text'>{t('booking.email')}</div>
            <a className='reservation-title alt' href="mailto:casadavila.pt@hotmail.com">casadavila.pt@hotmail.com</a>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookingPage;