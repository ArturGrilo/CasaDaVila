import React, { useEffect, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/TopBar.css";
import { useTranslation } from 'react-i18next';
import LanguageSelector from "./LanguageSelector";

const TopBar = ({ scrollThreshold }) => {
  library.add(faCaretDown);
  
  const [activeSection, setActiveSection] = useState('');
  const topBarRef = useRef(null);
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > (scrollThreshold || window.innerHeight/1.5);
      setScrolled(isScrolled);

      if (topBarRef.current) {
        const topBarHeight = topBarRef.current.offsetHeight;
        const homeSection = document.getElementById('home-id');
        const aboutSection = document.getElementById('about-us-id');
        const spacesSection = document.getElementById('spaces-id');
        const expsSection = document.getElementById('exps-id');
        const feedbackSection = document.getElementById('break-section-id');

        const homeOffset = homeSection.offsetTop - topBarHeight;
        const aboutOffset = aboutSection.offsetTop - topBarHeight;
        const spacesOffset = spacesSection.offsetTop - topBarHeight;
        const expsOffset = expsSection.offsetTop - topBarHeight;
        const feedbackOffset = feedbackSection.offsetTop - topBarHeight;

        const scrollY = window.scrollY;

        if (scrollY >= homeOffset && scrollY < aboutOffset) {
          setActiveSection('home');
        } else if (scrollY >= aboutOffset && scrollY < spacesOffset) {
          setActiveSection('about-us');
        } else if (scrollY >= spacesOffset && scrollY < expsOffset) {
          setActiveSection('spaces');
        } else if (scrollY >= expsOffset && scrollY < feedbackOffset) {
          setActiveSection('exps');
        } else {
          setActiveSection('');
        }
      }
    };

    const handleRouteChange = () => {
      // Define scrolled como true se a path da rota atual não for "/"
      setScrolled(location.pathname !== "/");
    };

    window.addEventListener("scroll", handleScroll);
    handleRouteChange(); // Chama a função para definir scrolled ao montar o componente

    // Limpeza do event listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold, location.pathname]); // Certifique-se de que o useEffect é executado novamente quando scrollThreshold ou location.pathname for alterado  

  return (
    <div className={`top-bar ${scrolled ? "scrolled" : ""}`} ref={topBarRef}>
      <div className="top-bar-container">
        <div className="logo-container">
          <img src={scrolled ? "/images/CasaDaVilaLogo.png" : "/images/CasaDaVilawhiteLOGO.png"} alt="Logo" className="logo" />
        </div>
        <div className="links-top-bar">
          <a href="#home-id" className={activeSection === 'home' ? 'cdv-active-link' : ''}>
            <span>{t('home-label')}</span>
          </a>
          <a href="#about-id" className={activeSection === 'about-us' ? 'cdv-active-link' : ''}>
            <span>{t('about-us-label')}</span>
          </a>
          <a href="#spaces-id" className={activeSection === 'spaces' ? 'cdv-active-link' : ''}>
            <span>Comodidades</span>
          </a>
          <a href="#location-id" className={activeSection === 'location' ? 'cdv-active-link' : ''}>
            <span>Localização</span>
          </a>
          <a href="#exps-id" className={activeSection === 'exps' ? 'dropdown-menu-link cdv-active-link' : 'dropdown-menu-link'}>
            <span>Experiências</span>
            <div className="dropdown-menu-container">
              <div className="dropdown-menu-sub-container">
                <a href="/AldeiasHistoricas">
                  <div className="dropdown-menu-option">Aldeias Históricas</div>
                </a>
                <a href="/AldeiasDoXisto">
                  <div className="dropdown-menu-option">Aldeias Do Xisto</div>
                </a>
                <a href="/SerraDaGardunha">
                  <div className="dropdown-menu-option">Serra da Gardunha</div>
                </a>
                <a href="/SerraDaEstrela">
                  <div className="dropdown-menu-option">Serra da Estrela</div>
                </a>
                <a href="/Romarias">
                  <div className="dropdown-menu-option">Festas e Romarias</div>
                </a>
              </div>
            </div>
          </a>
          <button className="cdv-button-secundary">Reservar</button>
          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default TopBar;