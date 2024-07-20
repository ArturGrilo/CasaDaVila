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
        <div className="cdv-title">
          <span>{t('rooms.amenities')}</span>
        </div>
        <div className="cdv-text">
          <span>{t('rooms.description1')}</span>
          <span>{t('rooms.description2')}</span>
          <span>{t('rooms.description3')}</span>
        </div>
        <div className="rooms-grid">
          <div className="cdv-card" onClick={() => openPopup(1)}>
            <img src="/images/RC_6.jpeg" alt="Imagem 2"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">{t('rooms.groundFloorApartment')}</div>
              <div className="cdv-card-details-see-more">
                <span>{t('rooms.seeMore')}</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </div>
          <div className="cdv-card" onClick={() => openPopup(2)}>
            <img src="/images/PS_3.jpeg" alt="Casa Da Vila - Piso Superior"/>
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