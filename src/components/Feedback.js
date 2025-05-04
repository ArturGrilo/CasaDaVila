import React, { useState, useEffect } from "react";
import "../styles/Feedback.css";
import { useTranslation } from 'react-i18next';

const Feedback = () => {
  const { t } = useTranslation();
  const feedbacks = t('feedback.testimonials', { returnObjects: true });

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
        <div className="cdv-title" data-aos="fade-up">
          <span className='cdv-small-title'>Casa da Vila</span>
          <span>{t('feedback.title')}</span>
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
          <img src={"/images/Feedback/FeedbackImage.webp"} alt="feedback - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira" />
        </div>
      </div>
    </section>
  );
};

export default Feedback;