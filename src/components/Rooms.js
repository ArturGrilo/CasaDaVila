import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Rooms.css";
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spaces from './Spaces';

function Rooms() {
  const { t } = useTranslation();
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(0);

  const openPopup = (roomNumber) => {
    setSelectedRoom(roomNumber);
    setPopupOpen(true);
    document.body.style.overflow = 'hidden'; // Desativa o scroll do body
  };

  const closePopup = () => {
    setPopupOpen(false);
    document.body.style.overflow = 'auto'; // Ativa o scroll do body
  };

  return (
    <section id="spaces-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className="cdv-title" data-aos="fade-up">
          <span>{t('rooms.amenities')}</span>
        </div>
        <div className="cdv-text">
          <span data-aos="fade-up">{t('rooms.description1')}</span>
          <span data-aos="fade-up">{t('rooms.description2')}</span>
          <span data-aos="fade-up">{t('rooms.description3')}</span>
        </div>
        <div className="rooms-grid">
          <div data-aos="fade-left" className="cdv-card" onClick={() => openPopup(1)}>
            <img loading="lazy" src="/images/RC_6.jpeg" alt="Imagem Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">{t('rooms.groundFloorApartment')}</div>
              <div className="cdv-card-details-see-more">
                <span>{t('rooms.seeMore')}</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </div>
          <div className="cdv-card" data-aos="fade-right" onClick={() => openPopup(2)}>
            <img loading="lazy" src="/images/PS_3.webp" alt="Casa Da Vila - Piso Superior - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">{t('rooms.duplexApartment')}</div>
              <div className="cdv-card-details-see-more">
                <span>{t('rooms.seeMore')}</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </div>
        </div>
        <div className={`cdv-popup ${popupOpen ? 'cdv-popup-open' : ''}`}>
          <div className="cdv-popup-content">
            <Spaces space={selectedRoom} />
            <FontAwesomeIcon icon={faTimes} className="cdv-popup-times" onClick={closePopup}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;