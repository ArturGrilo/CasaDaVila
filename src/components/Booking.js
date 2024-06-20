import '../styles/Bookings.css';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import React, { useEffect, useCallback } from "react";

const BookingPage = () => {

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements['name'].value;
    const date = form.elements['date'].value;
    const message = `Reserva para ${name} no dia ${date}.`;

    const whatsappUrl = `https://wa.me/351964849002?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const interval = setInterval(() => {
    if (applyBackgroundImage()) {
        clearInterval(interval); // Stop checking once the image is applied
    }
    }, 100); // Check every 100ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
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
        <div className="reservation-container scrolled">
          <div className="reservation-call">
            <div className='cdv-card-details-text'>Faça sua reserva por telefone</div>
            <p>Para reservar, ligue para: <a href="tel:+351964849002">+351 964 849 002</a></p>
          </div>

          <div className='cdv-active-link'>ou</div>

          <div className="reservation-form">
            <div className='cdv-card-details-text'>Preencha o formulário abaixo</div>
            <form onSubmit={handleSubmit}>
              <div>
                <div className='cdv-text' htmlFor="name">Nome:</div>
                <input type="text" id="name" name="name" required />
              </div>
              <div>
              <div className='cdv-text' htmlFor="date">Data da Reserva:</div>
                <input type="date" id="date" name="date" required />
              </div>
              <button className='cdv-button-secundary' type="submit">Enviar Reserva</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default BookingPage;