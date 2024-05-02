import React from "react";
import "../styles/ReservationBreakSection.css";

function ReservationBreakSection() {

  return (
    <section id="break-section-id" className="cdv-section alt">
      <div id="break-sub-section-id">
        <span className="break-section-title">Reservar a Casa da Vila</span>
        <span className="break-section-text">Veja disponibilidades e faça a sua reserva clicando em baixo</span>
        <div className="break-section-button-container">
          <button className="cdv-button-primary">Reservar</button>
          <div id="break-sub-section-id" className="price">
            <span className="break-section-text">Desde</span>
            <span className="break-section-title">80€</span>
          </div>
        </div>
      </div>
      <div id="break-sub-section-id" className="price desktop">
        <span className="break-section-text">Desde</span>
        <span className="break-section-title">80€</span>
      </div>
    </section>
  );
}

export default ReservationBreakSection;