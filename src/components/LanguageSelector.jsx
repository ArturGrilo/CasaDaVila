import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/LanguageSelector.css";


const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('languagePreference') || 'pt');
  const [showOptions, setShowOptions] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const changeLanguage = (language) => {
    localStorage.setItem('languagePreference', language);
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
    window.location.replace('/');
    if (isMobile) setShowOptions(false);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('languagePreference');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='cdv-flag-container'>
      {isMobile ? (
        <>
          <div 
            className={`cdv-country-icon active-language`} 
            onClick={() => setShowOptions(!showOptions)} 
            title="Change language">
            <span>{selectedLanguage.toUpperCase()}</span>
          </div>
          {showOptions && (
            <div className="cdv-options">
              {selectedLanguage !== 'pt' && (
                <div className='cdv-country-icon' onClick={() => changeLanguage('pt')} title="Select Portuguese as the language">
                  <span>PT</span>
                </div>
              )}
              {selectedLanguage !== 'en' && (
                <div className='cdv-country-icon' onClick={() => changeLanguage('en')} title="Select English as the language">
                  <span>EN</span>
                </div>
              )}
              {selectedLanguage !== 'fr' && (
                <div className='cdv-country-icon' onClick={() => changeLanguage('fr')} title="Select French as the language">
                  <span>FR</span>
                </div>
              )}
              {selectedLanguage !== 'es' && (
                <div className='cdv-country-icon' onClick={() => changeLanguage('es')} title="Select Spanish as the language">
                  <span>ES</span>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        <>
          <div className={`cdv-country-icon ${selectedLanguage === 'pt' ? 'active-language' : ''}`} onClick={() => changeLanguage('pt')} title="Selecionar Português como linguagem">
            <span>PT</span>
          </div>
          <div className={`cdv-country-icon ${selectedLanguage === 'en' ? 'active-language' : ''}`} onClick={() => changeLanguage('en')} title="Select English as the language">
            <span>EN</span>
          </div>
          <div className={`cdv-country-icon ${selectedLanguage === 'fr' ? 'active-language' : ''}`} onClick={() => changeLanguage('fr')} title="Select French as the language">
            <span>FR</span>
          </div>
          <div className={`cdv-country-icon ${selectedLanguage === 'es' ? 'active-language' : ''}`} onClick={() => changeLanguage('es')} title="Select Spanish as the language">
            <span>ES</span>
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSelector;