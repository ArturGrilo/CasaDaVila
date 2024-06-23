import React, { useState, useEffect } from "react";
import "../styles/Feedback.css";

const Feedback = () => {
  const [feedbacks] = useState([
    { text: "A casa é muito acolhedora e bem equipada. Fomos muito bem recebidos. Uma experiência a repetir.", author: "Manuel", country: "Portugal" },
    { text: "Tudo espetacular, casa limpa e cozinha com o essencial para se cozinhar. Dona São super simpática.", author: "Alexandra", country: "Portugal" },
    { text: "Aconchego, conforto e decoração. Mas, também, a disponibilidade e simpatia da proprietária.", author: "Pedro", country: "Portugal" },
    { text: "Excelente aproveitamento das áreas. Boa iluminação natural. Bastante privacidade.", author: "Martins", country: "Portugal" },
  ]);

  const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    const nextFeedback = () => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
        setFadeClass("fade-in");
      }, 500);
    };

    const interval = setInterval(nextFeedback, 6000);

    return () => clearInterval(interval);
  }, [feedbacks.length]);

  const setFeedback = (index) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setCurrentFeedbackIndex(index);
      setFadeClass("fade-in");
    }, 500);
  };

  return (
    <section id="feedback-id" className="feedback-section">
      <div className="feedback-main-container">
        <div className="cdv-title">
          <span>Testemunhos</span>
        </div>
        <div className="feedback-aspas">"</div>
        <div className={`feedback-text-container ${fadeClass}`}>
          <div className="feedback-text">{feedbacks[currentFeedbackIndex].text}</div>
          <div className="feedback-author">{feedbacks[currentFeedbackIndex].author}</div>
          <div className="feedback-country">{feedbacks[currentFeedbackIndex].country}</div>
        </div>
        <div className="feedback-dots">
          {feedbacks.map((_, index) => (
            <span
              key={index}
              className={`feedback-dot ${index === currentFeedbackIndex ? "active" : ""}`}
              onClick={() => setFeedback(index)}
            ></span>
          ))}
        </div>
        <div className="feedback-image">
          <img src={"/images/feedback-image-copia.png"} alt="feedback" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;