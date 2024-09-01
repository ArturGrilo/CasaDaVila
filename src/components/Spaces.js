import React from "react";
import "../styles/Spaces.css";
import Carousel from "./Carousel";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWifi, faShower, faFireBurner, faTv, faBed, faCouch, faPerson, faBaby, faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

function Spaces({ space }) {
  const { t } = useTranslation();

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
    "/images/PS_3.webp",
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
    <section id="rooms-popup">
        {space === 1 && (
          <div className="space-main-container">
            <div className="carousel-container">
              <Carousel images={space1_Images} />
              <div className="rooms-reservar-button mobile-space-button">
                <button className="cdv-button-secundary" onClick={(e) => {e.preventDefault(); window.location.href = '/Reservar';}}>
                  {t('reserve')}
                </button>
              </div>
            </div>
            <div className="space-1">
              <div className="space-1-info">
                <div className="cdv-title" style={{ justifyContent: "left", fontSize: "30px" }}>{t('ground_floor_apartment')}</div>
                <div className="commodity-list">
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faPerson} className="commodity-icon"/>
                    <span>{t('max_adults')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBaby} className="commodity-icon"/>
                    <span>{t('baby_notice')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBed} className="commodity-icon"/>
                    <span>{t('double_bed')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faCouch} className="commodity-icon"/>
                    <span>{t('sofa_bed')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faWifi} className="commodity-icon"/>
                    <span>{t('fast_free_wifi')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faSnowflake} className="commodity-icon"/>
                    <span>{t('air_conditioning')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faShower} className="commodity-icon"/>
                    <span>{t('private_bathroom')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faFireBurner} className="commodity-icon"/>
                    <span>{t('fully_equipped_kitchen')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faTv} className="commodity-icon"/>
                    <span>{t('cable_tv')}</span>
                  </div>
                </div>
                <div className="rooms-reservar-button desktop-space-button">
                  <button className="cdv-button-secundary" onClick={(e) => {e.preventDefault(); window.location.href = '/Reservar';}}>
                    {t('reserve')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {space === 2 && (
          <div className="space-main-container">
            <div className="carousel-container"> 
              <Carousel images={space2_Images} />
              <div className="rooms-reservar-button mobile-space-button">
                <button className="cdv-button-secundary" onClick={(e) => {e.preventDefault(); window.location.href = '/Reservar';}}>
                  {t('reserve')}
                </button>
              </div>
            </div>
            <div className="space-1">
              <div className="space-1-info">
                <div className="cdv-title" style={{ justifyContent: "left", fontSize: "30px" }}>{t('duplex_apartment')}</div>
                <div className="commodity-list">
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faPerson} className="commodity-icon"/>
                    <span>{t('max_adults')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBaby} className="commodity-icon"/>
                    <span>{t('baby_notice')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBed} className="commodity-icon"/>
                    <span>{t('double_single_beds')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faBinoculars} className="commodity-icon"/>
                    <span>{t('balcony')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faWifi} className="commodity-icon"/>
                    <span>{t('fast_free_wifi')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faSnowflake} className="commodity-icon"/>
                    <span>{t('air_conditioning')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faShower} className="commodity-icon"/>
                    <span>{t('private_bathroom')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faFireBurner} className="commodity-icon"/>
                    <span>{t('fully_equipped_kitchen')}</span>
                  </div>
                  <div className="commodity-item">
                    <FontAwesomeIcon icon={faTv} className="commodity-icon"/>
                    <span>{t('cable_tv')}</span>
                  </div>
                </div>
                <div className="rooms-reservar-button desktop-space-button">
                  <button className="cdv-button-secundary" onClick={(e) => {e.preventDefault(); window.location.href = '/Reservar';}}>
                    {t('reserve')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}

export default Spaces;