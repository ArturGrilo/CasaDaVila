import React, { useEffect, useState, useRef } from "react";
import { useLocation } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Adicionado o ícone de menu
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/TopBar.css";
import { useTranslation } from 'react-i18next';

const TopBar = ({ scrollThreshold, altScreen }) => {
  library.add(faCaretDown, faBars, faTimes); // Adicionado o ícone de menu
  
  const [activeSection, setActiveSection] = useState('');
  const topBarRef = useRef(null);
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a abertura e fechamento do menu
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = altScreen ? window.innerHeight * 0.25 : window.innerHeight / 1.5;
      const isScrolled = window.scrollY > scrollThreshold;

      setScrolled(isScrolled);
  
      // Define a seção ativa com base no scroll
      if ((location.pathname === "/SerraDaEstrela") || (location.pathname === "/SerraDaGardunha") ||
          (location.pathname === "/AldeiasHistoricas") || (location.pathname === "/AldeiasDoXisto") ||
          (location.pathname === "/Romarias") || (location.pathname === "/Alpedrinha")) {
        setActiveSection('exps-id');
      }else if(location.pathname === "/Galeria"){
        setActiveSection('gallery-section-id');
      } else if (topBarRef.current) {
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
  
        let closestOffsetIndex = 0;
        let minDistance = Math.abs(offsets[0] - scrollY);
        for (let i = 1; i < offsets.length; i++) {
          const distance = Math.abs(offsets[i] - scrollY);
          if (distance < minDistance) {
            minDistance = distance;
            closestOffsetIndex = i;
          }
        }

        setActiveSection(sections[closestOffsetIndex]?.id);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // Limpeza do event listener ao desmontar o componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThreshold, location.pathname, altScreen]);

  const handleLinkClick = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      const sectionTop = sectionElement.offsetTop - 120;
      window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna entre aberto e fechado
  };

  return (
    <div className={`top-bar ${scrolled ? "scrolled" : ""}`} ref={topBarRef}>
      <div className="top-bar-container">
        <div onClick={() => window.location.href = "/#home-id"} className="logo-container">
          <img src={scrolled ? "/images/Logo/CasaDaVilaLogo.png" : "/images/Logo/CasaDaVilaWhiteLOGO.png"} alt="Logo" className="logo" />
        </div>
        <div className="links-top-bar">
          {/* Ícone do menu para dispositivos móveis e tablets */}
          <div className="cdv-menu-icon" onClick={handleMenuToggle}>
            <FontAwesomeIcon icon="bars" className="top-bar-icon" />
          </div>
          {/* Menu lateral */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="logo-container">
              <img src="/images/Logo/CasaDaVilaLogo.png" alt="Logo" className="logo" />
              <div className="times-icon" onClick={handleMenuToggle}>
                <FontAwesomeIcon icon="times" className="times" />
              </div>
            </div>
            <a href="/#home-id" onClick={handleMenuToggle} className={activeSection === 'home-id' ? 'cdv-active-link' : ''}>
              <span>{t('home-label')}</span>
            </a>
            <a href="/#about-us-id" 
              className={activeSection === 'about-us-id' ? 'cdv-active-link' : ''}
              onClick={(e) => {
                e.preventDefault(); // Impede o comportamento padrão de navegação
                handleLinkClick('about-us-id');
              }}>
              <span>{t('about-us-label')}</span>
            </a>
            <a 
              className={activeSection === 'spaces-id' ? 'cdv-active-link' : ''} 
              href="/#spaces-id"
              onClick={(e) => {
                e.preventDefault(); // Impede o comportamento padrão de navegação
                handleLinkClick('spaces-id');
              }}
            >
              <span>Comodidades</span>
            </a>
            <a href="/Galeria" 
              className={activeSection === 'gallery-section-id' ? 'cdv-active-link' : ''} 
              onClick={(e) => {
                window.location.href = '/Galeria';
              }}>
              <span>Galeria</span>
            </a>
            <a href="/#exps-id" 
              onClick={(e) => {
                e.preventDefault(); // Impede o comportamento padrão de navegação
                handleLinkClick('exps-id');
              }}
              className={activeSection === 'exps-id' ? 'dropdown-menu-link cdv-active-link' : 'dropdown-menu-link'}>
              <span>Experiências</span>
            </a>
            <a href="/Reservar" className={activeSection === 'reservar-id' ? 'dropdown-menu-link cdv-active-link' : 'dropdown-menu-link'}>
              <span>Reservar</span>
            </a>
            <div className="side-menu-contacts">
              <span onClick={() => window.location.href = 'mailto:casa_da_vila@gmail.com'}>
                casa_da_vila@gmail.com
              </span>
              <span>(+351) 964 849 002</span>
              <div>
                <FontAwesomeIcon icon={faFacebook} className="footer-bigger-icon"/>
                <FontAwesomeIcon icon={faInstagram} className="footer-bigger-icon"/>
              </div>
            </div>
            <div className="feedback-image">
              <img src="/images/feedback-image-copia.png" alt="feedback"/>
            </div>
          </div>
          <a href="/#home-id" className={`desktop-topbar-link ${activeSection === 'home-id' ? 'cdv-active-link' : ''}`}>
            <span>{t('home-label')}</span>
          </a>
          <a href="/#about-us-id" 
            className={`desktop-topbar-link ${activeSection === 'about-us-id' ? 'cdv-active-link' : ''}`}
            onClick={(e) => {
              e.preventDefault(); // Impede o comportamento padrão de navegação
              handleLinkClick('about-us-id');
            }}>
            <span>{t('about-us-label')}</span>
          </a>
          <a 
            className={`desktop-topbar-link ${activeSection === 'spaces-id' ? 'cdv-active-link' : ''}`}
            href="#spaces-id"
            onClick={(e) => {
              e.preventDefault(); // Impede o comportamento padrão de navegação
              handleLinkClick('spaces-id');
            }}
          >
            <span>Comodidades</span>
          </a>
          <a href="/Galeria" 
            className={`desktop-topbar-link ${activeSection === 'gallery-section-id' ? 'cdv-active-link' : ''}`} 
            onClick={(e) => {
              window.location.href = '/Galeria';
            }}>
            <span>Galeria</span>
          </a>
          <a href="/#exps-id"
          onClick={(e) => {
            e.preventDefault(); // Impede o comportamento padrão de navegação
            handleLinkClick('exps-id');
          }}
          className={`desktop-topbar-link ${activeSection === 'exps-id' ? 'dropdown-menu-link cdv-active-link' : 'dropdown-menu-link'}`}>
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
          <button onClick={(e) => {
            e.preventDefault(); // Impede o comportamento padrão de navegação
            window.location.href = '/Reservar';
          }} className="desktop-topbar-link cdv-button-secundary">Reservar</button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;