import React from "react";
import "../styles/Footer.css";
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  // Coordenadas da localização do alojamento (latitude e longitude)
  const latAlojamento = 40.099420814223066;
  const lngAlojamento = -7.46680080569976; 

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
              <span className="footer-title">Localização</span>
                <div className="footer-text">
                  <span>Rua da Fonte, 2</span>
                  <span>
                    Alpedrinha
                    <FontAwesomeIcon icon={faLocationDot} className="footer-icon"/>
                  </span>
                  <span>6230-058</span>
                </div>
              </div>
            <div className="footer-column-2">
                <img
                src="/images/Logo/CasaDaVilaWhiteLogo.png"
                alt="Logo"
                className="logo"
                />
            </div>
            <div className="footer-column-3">
              <span className="footer-title">Contactos</span>
              <span className="footer-text" onClick={() => window.location.href = 'mailto:contato@meusite.com'}>
                casa_da_vila@gmail.com
              </span>
              <span className="footer-text">Tel: (+351) 964 849 002</span>
              <div>
                <FontAwesomeIcon icon={faFacebook} className="footer-bigger-icon"/>
                <FontAwesomeIcon icon={faInstagram} className="footer-bigger-icon"/>
              </div>
            </div>
        </div>
        <p className="footer-copyright-text">Copyright &copy; {new Date().getFullYear()} Casa Da Vila</p>
        <p className="cdv-site-credits">Desenvolvido por <a rel="noreferrer" href="https://arturgrilo.netlify.app/" target="_blank">Artur</a> e Ana Rita</p>
    </footer>
  );
}

export default Footer;