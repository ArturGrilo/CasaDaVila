import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import ptTranslation from './locales/pt.json';
import frTranslation from './locales/fr.json';
import esTranslation from './locales/es.json';

// Adicione os arquivos de tradução ao i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: frTranslation,
      },
      en: {
        translation: enTranslation,
      },
      pt: {
        translation: ptTranslation,
      },
      es: {
        translation: esTranslation,
      }
    },
    lng: localStorage.getItem('languagePreference') || 'pt', // Define o idioma inicial baseado no localStorage
    fallbackLng: 'pt', // Idioma de fallback
    interpolation: {
      escapeValue: false, // Not needed for react as it escapes by default
    },
  });

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();