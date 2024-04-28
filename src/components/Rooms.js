import React, { useState } from 'react';
import "../styles/Rooms.css";
import { faArrowRight, faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spaces from './Spaces'

function Rooms() {
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
    <section id="spaces-id" className="cdv-section alt">
      <img
        src="/images/Balcony.jpeg"
        alt="Logo"
        className="img-comodidades"
      />
      <div className="cdv-main-container">
        <div className="cdv-title alt">
          <span>Comodidades</span>
        </div>
        <div className="rooms-grid">
          <div className="cdv-card" onClick={() => openPopup(1)}>
            <img src="/images/HomeOutside.jpeg" alt="Imagem 2"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Apartamento rés de chão</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </div>
          <div className="cdv-card" onClick={() => openPopup(2)}>
            <img src="/images/HomeInside.jpeg" alt="Imagem 2"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Apartamento duplex</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </div>
        </div>
        <div className={`cdv-popup ${popupOpen ? 'cdv-popup-open' : ''}`}>
          <div className="cdv-popup-content">
            <Spaces space={selectedRoom} />
            <FontAwesomeIcon icon={faTimes} className="cdv-popup-times"  onClick={closePopup}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Rooms;