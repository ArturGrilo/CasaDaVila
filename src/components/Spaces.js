import React from "react";
import "../styles/Spaces.css";
import Carousel from "./Carousel";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWifi, faShower, faFireBurner, faTv, faBed, faCouch, faPerson, faBaby, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Spaces({ space }) {
  const space1_Images = [
    "/images/RC_1.jpeg",
    "/images/RC_2.jpeg",
    "/images/RC_3.jpeg",
    "/images/RC_4.jpeg",
    "/images/RC_5.jpeg",
    "/images/RC_6.jpeg",
    "/images/RC_7.jpeg",
    "/images/RC_8.jpeg",
    "/images/RC_9.jpeg",
    "/images/RC_10.jpeg",
    "/images/RC_11.jpeg",
    "/images/RC_12.jpeg",
    "/images/RC_13.jpeg",
    "/images/RC_14.jpeg"
  ];

  const space2_Images = [
    "/images/PS_1.jpeg",
    "/images/PS_2.jpeg",
    "/images/PS_3.jpeg",
    "/images/PS_4.jpeg",
    "/images/PS_5.jpeg",
    "/images/PS_6.jpeg",
    "/images/PS_7.jpeg",
    "/images/PS_8.jpeg",
    "/images/PS_9.jpeg",
    "/images/PS_10.jpeg",
    "/images/PS_11.jpeg",
    "/images/PS_12.jpeg",
    "/images/PS_13.jpeg"
  ];

  library.add(faWifi, faSnowflake, faShower, faFireBurner, faTv, faBed, faCouch, faPerson, faBinoculars);

  return (
    <section>
        {space === 1 && (
          <div className="space-main-container">
            <div className="carousel-container">
              <Carousel images={space1_Images} />
            </div>
            <div className="space-1">
              <div className="space-1-info">
                <div className="cdv-title" style={{ justifyContent: "left", fontSize: "30px" }}>Apartamento rés de chão</div>
                <div className="commodity-list">
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faPerson} className="commodity-icon"/>
                    <span>4 adultos máximo</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBaby} className="commodity-icon"/>
                    <span>1/2 bebé(s) com aviso prévio</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBed} className="commodity-icon"/>
                    <span>1 Quarto, cama de casal</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faCouch} className="commodity-icon"/>
                    <span>1 sofá cama</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faWifi} className="commodity-icon"/>
                    <span>Wifi rápido e gratuito</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faSnowflake} className="commodity-icon"/>
                    <span>Ar condicionado</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faShower} className="commodity-icon"/>
                    <span>Casa de banho privativa</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faFireBurner} className="commodity-icon"/>
                    <span>Cozinha totalmente equipada</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faTv} className="commodity-icon"/>
                    <span>Televisão c/ canais por cabo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {space === 2 && (
          <div className="space-main-container">
          <div className="carousel-container"> 
            <Carousel images={space2_Images} />
          </div>
            <div className="space-1">
              <div className="space-1-info">
                <div className="cdv-title" style={{ justifyContent: "left", fontSize: "30px" }}>Apartamento Duplex</div>
                <div className="commodity-list">
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faPerson} className="commodity-icon"/>
                    <span>4 adultos máximo</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBaby} className="commodity-icon"/>
                    <span>1/2 bebé(s) com aviso prévio</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBed} className="commodity-icon"/>
                    <span>1 cama de casal + 2 camas de solteiro</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBinoculars} className="commodity-icon"/>
                    <span>1 varanda</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faWifi} className="commodity-icon"/>
                    <span>Wifi rápido e gratuito</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faSnowflake} className="commodity-icon"/>
                    <span>Ar condicionado</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faShower} className="commodity-icon"/>
                    <span>Casa de banho privativa</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faFireBurner} className="commodity-icon"/>
                    <span>Cozinha totalmente equipada</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faTv} className="commodity-icon"/>
                    <span>Televisão c/ canais por cabo</span>
                  </div>
                </div>
                <div className="rooms-reservar-button">
                  <button className="cdv-button-secundary">Reservar</button>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}

export default Spaces;