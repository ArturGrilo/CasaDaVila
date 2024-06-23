import '../styles/Bookings.css';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import React, { useEffect, useCallback, useState } from "react";
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BookingPage = () => {
  const [errors, setErrors] = useState({});
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const applyBackgroundImage = useCallback(() => {
    const elements = document.querySelectorAll('.cdv-img-parallax-alt-page');
    if (elements.length > 0) {
      elements.forEach(element => {
        element.style.backgroundImage = `url(/images/reservar.jpg)`;
      });
      return true;
    }
    return false;
  }, []);

  const validateDates = (checkInDate, checkOutDate) => {
    const checkInDateObj = new Date(checkInDate);
    const checkOutDateObj = new Date(checkOutDate);
    const currentDate = new Date();
    const dateDifference = (checkOutDateObj - checkInDateObj) / (1000 * 60 * 60 * 24);

    const newErrors = {};

    if (checkInDateObj < currentDate) {
      newErrors.checkInDate = 'A data de check-in deve ser no futuro.';
    }
    if (checkOutDateObj <= checkInDateObj) {
      newErrors.checkOutDate = 'A data de check-out deve ser após a data de check-in.';
    }
    if (dateDifference > 60) {
      newErrors.checkOutDate = 'O intervalo entre as datas não pode ser maior que 2 meses.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements['name'].value;

    if (validateDates(checkInDate, checkOutDate)) {
      let message = `Reserva para ${name}:\n`;
      message += `- Data de Check-in: ${checkInDate}\n`;
      message += `- Data de Check-out: ${checkOutDate}\n`;
      message += `- Número de Adultos: ${adults}\n`;
      if (children > 0) {
        message += `- Número de Crianças: ${children}\n`;
      }
      if (form.elements['observations'].value.trim() !== '') { 
        message += `- Observações: ${form.elements['observations'].value}`;
      }

      const whatsappUrl = `whatsapp://send?phone=+351964849002&text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl;
    }
  };

  useEffect(() => {
    const currentDate = new Date();
    const currentHour = currentDate.getUTCHours() + 1; // Hora atual em Portugal (UTC+1)

    if (currentHour >= 13) {
      currentDate.setDate(currentDate.getDate() + 1);
    }

    const defaultCheckInDate = new Date(currentDate);
    const defaultCheckOutDate = new Date(defaultCheckInDate);
    defaultCheckOutDate.setDate(defaultCheckOutDate.getDate() + 1);

    setCheckInDate(defaultCheckInDate.toISOString().split('T')[0]);
    setCheckOutDate(defaultCheckOutDate.toISOString().split('T')[0]);

    window.scrollTo(0, 0);
    const interval = setInterval(() => {
      if (applyBackgroundImage()) {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [applyBackgroundImage]);

  return (
    <section id="booking-page-id" className="cdv-section">
      <div className="cdv-img-alt-page">
        <div className="cdv-title">
          <span>Reservar</span>
        </div>
        <div className="cdv-img-parallax-alt-page">
          <div className='cdv-red'></div>
        </div>
      </div>
      <TopBar altScreen={true} />
      <div className="cdv-main-container">
        <div className='tag-desconto'>
          <div className="tag-triangle"></div>
          <div className="tag-content">
              <span className="desconto-text">-10%</span>
              <span className="desconto-text-bigger">No site</span>
          </div>
      </div>
        <div className="reservation-container">
          <div className="reservation-call">
            <div className='reservation-call-icon'>
              <FontAwesomeIcon icon={faPhoneVolume} className="cdv-card-icon"/>
            </div>
            <div className='reservation-text'>Telemóvel</div>
            <a className='reservation-title' href="tel:+351964849002">+351 964 849 002</a>
          </div>
          <div className="reservation-call">
            <div className='reservation-call-icon'>
              <FontAwesomeIcon icon={faEnvelope} className="cdv-card-icon"/>
            </div>
            <div className='reservation-text'>Email</div>
            <a className='reservation-title alt' href="mailto:casadavila.alpedrinha@hotmail.com">casadavila.alpedrinha@hotmail.com</a>
          </div>
        </div>
        <div className='cdv-active-link'>ou</div>

        <div className="reservation-form">
          <div className='reservation-call-icon'>
            <FontAwesomeIcon icon={faWhatsapp} className="cdv-card-icon"/>
          </div>
          <div className='reservation-text'>Preencha o formulário abaixo</div>
          <form onSubmit={handleSubmit}>
            <div>
              <label className='cdv-text' htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label className='cdv-text' htmlFor="check-in-date">Data de Check-in:</label>
              <input 
                type="date" 
                id="check-in-date" 
                name="check-in-date" 
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                required 
              />
              {errors.checkInDate && <div className="error-text">{errors.checkInDate}</div>}
            </div>
            <div>
              <label className='cdv-text' htmlFor="check-out-date">Data de Check-out:</label>
              <input 
                type="date" 
                id="check-out-date" 
                name="check-out-date" 
                value={checkOutDate}
                onChange={(e) => setCheckOutDate(e.target.value)}
                required 
              />
              {errors.checkOutDate && <div className="error-text">{errors.checkOutDate}</div>}
            </div>
            <div>
              <label className='cdv-text' htmlFor="adults">Número de Adultos:</label>
              <input 
                type="number" 
                id="adults" 
                name="adults" 
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                required 
              />
            </div>
            <div>
              <label className='cdv-text' htmlFor="children">Número de Crianças:</label>
              <input 
                type="number" 
                id="children" 
                name="children" 
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                min="0" 
              />
            </div>
            <div>
              <label className='cdv-text' htmlFor="observations">Observações:</label>
              <textarea 
                id="observations" 
                name="observations" 
                rows="3" 
                style={{ width: '100%', resize: 'none' }} 
              ></textarea>
            </div>
            <button className='cdv-button-secundary' type="submit">Enviar Reserva</button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookingPage;