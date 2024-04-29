import React, { useState } from 'react';
import '../styles/GalleryPage.css';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

const images = [
  { src: "/images/AL.jpeg", alt: "Imagem 1" },
  { src: "/images/Balcony.jpeg", alt: "Imagem 2" },
  { src: "/images/HomeOutside_2.jpeg", alt: "Imagem 3" },
  { src: "/images/RC_14.jpeg", alt: "Imagem 3" }
  // Adicione mais objetos de imagem conforme necessário
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false); // Estado para controlar se o modal está aberto

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true); // Abrir o modal ao clicar na imagem
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false); // Fechar o modal ao clicar fora dele ou no botão de fechar
  };

  return (
    <section id="gallery-page-id" className="cdv-section">
      <TopBar scrollThreshold={-1} />
      <div className="cdv-main-container">
        <div className="cdv-title">
          <span>Galeria</span>
        </div>
        <div className="media-display">
          {images.map((image, index) => (
            <div key={index} className="media-item" onClick={() => openModal(image.src)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {/* Modal */}
        <div className={`modal${modalOpen ? ' open' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={closeModal}>&times;</button>
            <img src={selectedImage} alt="Imagem Modal" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GalleryPage;