import React, { useEffect, useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import { faPhoneVolume, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import "../styles/Bookings.css";

const BookingPage = () => {
  const { t } = useTranslation(); // Carrega as traduções dos namespaces 'booking' e 'common'
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
      newErrors.checkInDate = t('booking.errorCheckInFuture');
    }
    if (checkOutDateObj <= checkInDateObj) {
      newErrors.checkOutDate = t('booking.errorCheckOutAfterCheckIn');
    }
    if (dateDifference > 60) {
      newErrors.checkOutDate = t('booking.errorCheckOutMaxTwoMonths');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements['name'].value;

    if (validateDates(checkInDate, checkOutDate)) {
      let message = `${t('booking.reservationFor')} ${name}:\n`;
      message += `- ${t('booking.checkInDate')}: ${checkInDate}\n`;
      message += `- ${t('booking.checkOutDate')}: ${checkOutDate}\n`;
      message += `- ${t('booking.adults')}: ${adults}\n`;
      if (children > 0) {
        message += `- ${t('booking.children')}: ${children}\n`;
      }
      if (form.elements['observations'].value.trim() !== '') { 
        message += `- ${t('booking.observations')}: ${form.elements['observations'].value}`;
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
          <span>{t('booking.book')}</span>
        </div>
        <div className="cdv-img-parallax-alt-page">
          <div className='cdv-red'></div>
        </div>
      </div>
      <TopBar altScreen={true} />
      <div className="cdv-main-container">
        <div className="cdv-text" style={{ textAlign: "left", marginBottom: "80px"}}>
          <span style={{ textAlign: "left", width: "calc(100% - 80px)" }} data-aos="fade-up">{t('booking.paragraph1')}</span>
          <span style={{ textAlign: "left", width: "calc(100% - 80px)" }} data-aos="fade-up">{t('booking.paragraph2')}</span>
          <span data-aos="fade-up">{t('booking.paragraph3')}</span>
          <span data-aos="fade-up">{t('booking.paragraph4')}</span>
        </div>
        <div className='tag-desconto'>
          <div className="tag-triangle"></div>
          <div className="tag-content">
            <span className="desconto-text">-10%</span>
            <span className="desconto-text-bigger">{t('booking.onWebsite')}</span>
          </div>
        </div>
        <div className="reservation-container">
          <div className="reservation-call" data-aos="fade-up">
            <div className='reservation-call-icon'>
              <FontAwesomeIcon icon={faPhoneVolume} className="cdv-card-icon"/>
            </div>
            <div className='reservation-text'>{t('contact-phone')}</div>
            <a className='reservation-title' href="tel:+351964849002">+351 964 849 002</a>
          </div>
          <div className="reservation-call" data-aos="fade-up">
            <div className='reservation-call-icon'>
              <FontAwesomeIcon icon={faEnvelope} className="cdv-card-icon"/>
            </div>
            <div className='reservation-text'>{t('contact-email')}</div>
            <a className='reservation-title alt' href="mailto:casadavila.pt@hotmail.com">casadavila.pt@hotmail.com</a>
          </div>
        </div>
        <div className='cdv-active-link' data-aos="fade-up">{t('booking.or')}</div>

        <div className="reservation-form">
          <div className='reservation-call-icon' data-aos="fade-up">
            <FontAwesomeIcon icon={faWhatsapp} className="cdv-card-icon"/>
          </div>
          <div className='reservation-text' data-aos="fade-up">{t('booking.fillForm')}</div>
          <form onSubmit={handleSubmit}>
            <div data-aos="fade-up">
              <label className='cdv-text' htmlFor="name">{t('booking.name')}:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div data-aos="fade-up">
              <label className='cdv-text' htmlFor="check-in-date">{t('booking.checkInDate')}:</label>
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
            <div data-aos="fade-up">
              <label className='cdv-text' htmlFor="check-out-date">{t('booking.checkOutDate')}:</label>
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
            <div data-aos="fade-up">
              <label className='cdv-text' htmlFor="adults">{t('booking.adults')}:</label>
              <input 
                type="number" 
                id="adults" 
                name="adults" 
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                required 
              />
            </div>
            <div data-aos="fade-up">
              <label className='cdv-text' htmlFor="children">{t('booking.children')}:</label>
              <input 
                type="number" 
                id="children" 
                name="children" 
                value={children}
                onChange={(e) => setChildren(e.target.value)}
                min="0" 
              />
            </div>
            <div data-aos="fade-up">
              <label className='cdv-text' htmlFor="observations">{t('booking.observations')}:</label>
              <textarea 
                id="observations" 
                name="observations" 
                rows="3" 
                style={{ width: '100%', resize: 'none' }} 
              ></textarea>
            </div>
            <button className='cdv-button-secundary' type="submit">{t('booking.sendReservation')}</button>
          </form>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookingPage;