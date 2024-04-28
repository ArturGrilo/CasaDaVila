import React, { useEffect, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/TopBar.css";
import { useTranslation } from 'react-i18next';

const TopBar = ({ scrollThreshold }) => {
  library.add(faCaretDown);
  
  const [activeSection, setActiveSection] = useState('');
  const topBarRef = useRef(null);
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > (scrollThreshold || window.innerHeight / 1.5);
      setScrolled(isScrolled);
  
      if ((location.pathname === "/SerraDaEstrela") || (location.pathname === "/SerraDaGardunha") ||
          (location.pathname === "/AldeiasHistoricas") || (location.pathname === "/AldeiasDoXisto") ||
          (location.pathname === "/Romarias")) {
        setActiveSection('exps');
      }else if (topBarRef.current) {
        const topBarHeight = topBarRef.current.offsetHeight;
        const homeSection = document.getElementById('home-id');
        const aboutSection = document.getElementById('about-us-id');
        const spacesSection = document.getElementById('spaces-id');
        const expsSection = document.getElementById('exps-id');
        const feedbackSection = document.getElementById('break-section-id');
        const galleryBreakSection = document.getElementById('gallery-section-id');
  
        const sections = [homeSection, aboutSection, spacesSection, galleryBreakSection, expsSection, feedbackSection];
  
        const offsets = sections.map(section => section?.offsetTop - topBarHeight);
  
        const scrollY = window.scrollY;
  
        if (scrollY >= offsets[0] && scrollY < offsets[1]) {
          setActiveSection('home');
        } else if (scrollY >= offsets[1] && scrollY < offsets[2]) {
          setActiveSection('about-us');
        } else if (scrollY >= offsets[2] && scrollY < offsets[3]) {
          setActiveSection('spaces');
        } else if (scrollY >= offsets[3] && scrollY < offsets[4]) {
          setActiveSection('gallery-section');
        } else if (scrollY >= offsets[4] && scrollY < offsets[5]) {
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
  }, [scrollThreshold, location.pathname]);

  return (
    <div className={`top-bar ${scrolled ? "scrolled" : ""}`} ref={topBarRef}>
      <div className="top-bar-container">
        <div className="logo-container">
          <img src={scrolled ? "/images/CasaDaVilaLogo.png" : "/images/CasaDaVilawhiteLOGO.png"} alt="Logo" className="logo" />
        </div>
        <div className="links-top-bar">
          <a href="/#home-id" className={activeSection === 'home' ? 'cdv-active-link' : ''}>
            <span>{t('home-label')}</span>
          </a>
          <a href="/#about-us-id" className={activeSection === 'about-us' ? 'cdv-active-link' : ''}>
            <span>{t('about-us-label')}</span>
          </a>
          <a href="/#spaces-id" className={activeSection === 'spaces' ? 'cdv-active-link' : ''}>
            <span>Comodidades</span>
          </a>
          <a href="/#gallery-section-id" className={activeSection === 'gallery-section' ? 'cdv-active-link' : ''}>
            <span>Galeria</span>
          </a>
          <a href="/#exps-id" className={activeSection === 'exps' ? 'dropdown-menu-link cdv-active-link' : 'dropdown-menu-link'}>
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
        </div>
      </div>
    </div>
  );
};

export default TopBar;