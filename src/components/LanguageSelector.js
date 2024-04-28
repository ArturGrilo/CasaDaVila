import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/LanguageSelector.css";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(localStorage.getItem('languagePreference'));

  // Função para mudar o idioma e recarregar a página
  const changeLanguage = (language) => {
    localStorage.setItem('languagePreference', language);
    setSelectedLanguage(language);
    window.location.reload(); // Recarrega a página
  };

  // Verifica se há um idioma salvo no localStorage e define-o se existir
  useEffect(() => {
    const savedLanguage = localStorage.getItem('languagePreference');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setSelectedLanguage(savedLanguage); // Define o idioma salvo como selecionado
    }
  }, [i18n]);

  return (
    <div className='cdv-flag-container'>
      <div className={`cdv-country-icon ${selectedLanguage === 'pt' ? 'active-language' : ''}`}
           onClick={() => changeLanguage('pt')} 
           title="Select Portuguese as the language">
        <span>PT</span>
      </div>
      <div className={`cdv-country-icon ${selectedLanguage === 'en' ? 'active-language' : ''}`}
           onClick={() => changeLanguage('en')} 
           title="Select English as the language.">
        <span>EN</span>
      </div>
      <div className={`cdv-country-icon ${selectedLanguage === 'fr' ? 'active-language' : ''}`}
           onClick={() => changeLanguage('fr')} 
           title="Select French as the language.">
        <span>FR</span>
      </div>
    </div>
  );
};

export default LanguageSelector;