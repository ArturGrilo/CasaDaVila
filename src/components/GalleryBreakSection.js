import React from "react";
import "../styles/GalleryBreakSection.css";

function GalleryBreakSection() {

  return (
    <section id="gallery-section-id" className="cdv-section alt">
      <img
        src="/images/gallery-break-section.jpeg"
        alt="Alpedrinha - Vista do Palácio do Picadeiro"
        className="img-gallery-break-section"
      />
      <button className="cdv-button-primary">Veja a nossa galeria</button>
    </section>
  );
}

export default GalleryBreakSection;