import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/Footer.css";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  const { t } = useTranslation();

  // Coordenadas da localização do alojamento (latitude e longitude)
  const latAlojamento = 40.099183;
  const lngAlojamento = -7.466664;

  // Link do Google Maps com trajeto
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${latAlojamento},${lngAlojamento}`;

  // Função para abrir o link em uma nova janela
  const abrirGoogleMaps = () => {
    window.open(googleMapsLink, '_blank');
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column-1" onClick={abrirGoogleMaps}>
          <span className="footer-title">{t('footer.location')}</span>
          <div className="footer-text">
            <span>{t('footer.address')}</span>
            <span>
              {t('footer.city')}
              <FontAwesomeIcon icon={faLocationDot} className="footer-icon" />
            </span>
            <span>{t('footer.postalCode')}</span>
          </div>
        </div>
        <div className="footer-column-2">
          <img
            loading="lazy"
            src="/images/Logo/CasaDaVilaWhiteLogo.png"
            alt="Logo Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"
            className="logo"
          />
        </div>
        <div className="footer-column-3">
          <span className="footer-title">{t('footer.contacts')}</span>
          <span className="footer-text" style={{ textDecoration: "none !important" }} onClick={() => window.location.href = `mailto:${t('footer.email')}`}>
            {t('footer.email')}
          </span>
          <span href="tel:+351964849002" className="footer-text" style={{ textDecoration: "none !important" }}>{t('footer.phone')}</span>
          <span href="tel:+351966910051" className="footer-text" style={{ textDecoration: "none !important" }}>{t('footer.phone-2')}</span>
          <div>
            <FontAwesomeIcon icon={faFacebook} className="footer-bigger-icon" />
            <a 
              href="https://www.instagram.com/casadavila_alojamentolocal?igsh=MWwyaXY1eGpnaGlhbw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-bigger-icon"
            >
              <FontAwesomeIcon 
                icon={faInstagram} 
                className="footer-bigger-icon" 
              />
            </a>
          </div>
        </div>
      </div>
      <p className="footer-copyright-text">Casa Da Vila &copy; {new Date().getFullYear()}</p>
      <p className="footer-site-credits">{t('footer.credits')}</p>
    </footer>
  );
}

export default Footer;