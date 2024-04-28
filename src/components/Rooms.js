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
    <section id="spaces-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className="cdv-title">
          <span>Comodidades</span>
        </div>
        <div className="cdv-text">
          <span>
            Casa Da Vila - Alojamento Local é uma casa de pedra renovada, dividida em dois apartamentos 
            no rés-do-chão e primeiro andar.
          </span>
          <span>
            O exterior mantém o estilo típico da região, com portas e janelas em tons de vinho, refletindo
             a cor das cerejas do Fundão.
          </span>
          <span>
            O interior combina rusticidade com um design limpo e acolhedor.
          </span>
        </div>
        <div className="rooms-grid">
          <div className="cdv-card" onClick={() => openPopup(1)}>
            <img src="/images/RC_6.jpeg" alt="Imagem 2"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Apartamento rés de chão</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </div>
          <div className="cdv-card" onClick={() => openPopup(2)}>
            <img src="/images/PS_3.jpeg" alt="Casa Da Vila - Piso Superior"/>
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