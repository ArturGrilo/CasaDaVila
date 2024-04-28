import React from "react";
import "../styles/Feedback.css";

function Feedback() {
  return (
    <section id="feedback-id" className="feedback-section">
      <div className="feedback-main-container">
        <div className="cdv-title">
          <span>Testemunhos</span>
        </div>
        <div className="feedback-aspas">"</div>
        <div className="feedback-text">A casa é muito acolhedora e bem equipada. Fomos muito bem recebidos. Uma experiência a repetir.</div>
        <div className="feedback-author">Manuel</div>
        <div className="feedback-country">Portugal</div>
        <div className="feedback-image">
            <img src="/images/feedback-image-copia.png" alt="feedback"/>
        </div>
      </div>
    </section>
  );
}

export default Feedback;