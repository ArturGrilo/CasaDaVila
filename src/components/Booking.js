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
        
      </div>
      <Footer />
    </section>
  );
};

export default BookingPage;