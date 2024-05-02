import React from "react";
import "../styles/WordsBreakSection.css";

function WordsBreakSection() {

  return (
    <section id="words-section-id" className="cdv-section alt">
      <img
        src="/images/Logo/CasaDaVilaWhiteLogo.png"
        alt="Alpedrinha - Vista do Palácio do Picadeiro"
        className="img-words-break-section"
      />
      <span className="desktop-words-break-section"> Simplicidade • Conforto • História</span>
      <div className="mobile-words-break-section">
        <span > Simplicidade</span>
        <span> • </span>
        <span> Conforto </span>
        <span> • </span>
        <span> História</span>
      </div>
    </section>
  );
}

export default WordsBreakSection;