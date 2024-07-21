import React from "react";
import { useTranslation } from 'react-i18next';
import "../styles/GalleryBreakSection.css";

function GalleryBreakSection() {
  const { t } = useTranslation();

  const redirectToGallery = () => {
    window.location.href = '/Galeria';
  };

  return (
    <section id="gallery-section-id" className="cdv-section alt">
      <img
        src="/images/gallery-break-section.jpeg"
        alt="Alpedrinha - Vista do Palácio do Picadeiro"
        className="img-gallery-break-section"
      />
      <button onClick={redirectToGallery} data-aos="fade-up" className="cdv-button-primary">
        {t('gallery-break-section.viewGallery')}
      </button>
    </section>
  );
}

export default GalleryBreakSection;