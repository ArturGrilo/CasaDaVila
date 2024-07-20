import React from "react";
import "../styles/WhatsAppLink.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const WhatsAppLink = () => {
  const { t } = useTranslation();

  return (
    <a href="https://wa.me/351964849002" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
      <button>
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" fill="#25D366" />
        <span>{t('whatsAppLink.text')}</span>
      </button>
    </a>
  );
};

export default WhatsAppLink;