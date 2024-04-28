import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // Função para mudar o idioma
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem('languagePreference', language);
    console.log('Language preference saved:', language);
  };
  

  // Verifica se há um idioma salvo no localStorage e define-o se existir
  useEffect(() => {
    const savedLanguage = localStorage.getItem('languagePreference');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      console.log('Language preference retrieved:', savedLanguage);
    }
  }, [i18n]);

  return (
    <div className='cdv-flag-container'>
      <div className="cdv-flag-icon" onClick={() => changeLanguage('en')} title="Select English as the language.">
        <img src="/images/uk.png" alt="uk-language"/>
      </div>
      <div className="cdv-flag-icon" onClick={() => changeLanguage('pt')} title="Select Portuguese as the language">
        <img src="/images/pt.png" alt="pt-language"/>
      </div>
    </div>
  );
};

export default LanguageSelector;
