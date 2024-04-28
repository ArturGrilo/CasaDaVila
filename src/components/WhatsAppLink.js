import "../styles/WhatsAppLink.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppLink = () => {

  return (
    <a href="https://wa.me/351964849002" target="_blank" rel="noopener noreferrer" className="whatsapp-link">
        <button>
            <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" fill="#25D366"/>
            <span>Conversar no WhatsApp</span>
        </button>
    </a>
  );
};

export default WhatsAppLink;