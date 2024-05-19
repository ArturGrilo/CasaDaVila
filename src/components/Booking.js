import '../styles/Bookings.css';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const BookingPage = () => {

  return (
    <section id="booking-page-id" className="cdv-section">
      <div className="cdv-img-gallery-page">
        <div className="cdv-img-parallax-gallery-page">
          <div className='cdv-red'></div>
        </div>
      </div>
      <TopBar scrollThreshold={-1} />
      <div className="cdv-title">
        <span>Reservar</span>
      </div>
      <div className="cdv-main-container">
        
      </div>
      <Footer />
    </section>
  );
};

export default BookingPage;