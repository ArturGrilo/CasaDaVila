import React, { useState, useEffect } from 'react';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/GalleryPage.css';
import { useTranslation } from 'react-i18next';

const GalleryPage = () => {
  const { t } = useTranslation();

  const images = {
    CasaDaVilaI: [
      "/images/CasaDaVilaI/IMG_1.jpg",
      "/images/CasaDaVilaI/IMG_2.jpg",
      "/images/CasaDaVilaI/IMG_3.jpg",
      "/images/CasaDaVilaI/IMG_4.jpg",
      "/images/CasaDaVilaI/IMG_5.jpg",
      "/images/CasaDaVilaI/IMG_6.jpg",
      "/images/CasaDaVilaI/IMG_7.jpg",
      "/images/CasaDaVilaI/IMG_8.jpg",
      "/images/CasaDaVilaI/IMG_9.jpg",
      "/images/CasaDaVilaI/IMG_10.jpg",
      "/images/CasaDaVilaI/IMG_11.jpg",
      "/images/CasaDaVilaI/IMG_12.jpg",
      "/images/CasaDaVilaI/IMG_13.jpg",
    ],
    CasaDaVilaII: [
      "/images/CasaDaVilaII/IMG_1.jpg",
      "/images/CasaDaVilaII/IMG_2.jpg",
      "/images/CasaDaVilaII/IMG_3.jpg",
      "/images/CasaDaVilaII/IMG_4.jpg",
      "/images/CasaDaVilaII/IMG_5.jpg",
      "/images/CasaDaVilaII/IMG_6.jpg",
      "/images/CasaDaVilaII/IMG_7.jpg",
      "/images/CasaDaVilaII/IMG_8.jpg",
      "/images/CasaDaVilaII/IMG_9.jpg",
      "/images/CasaDaVilaII/IMG_10.jpg",
      "/images/CasaDaVilaII/IMG_11.jpg",
      "/images/CasaDaVilaII/IMG_12.jpg",
      "/images/CasaDaVilaII/IMG_13.jpg",
      "/images/CasaDaVilaII/IMG_14.jpg",
      "/images/CasaDaVilaII/IMG_15.jpg",
      "/images/CasaDaVilaII/IMG_16.jpg",
      "/images/CasaDaVilaII/IMG_17.jpg",
      "/images/CasaDaVilaII/IMG_18.jpg",
      "/images/CasaDaVilaII/IMG_19.jpg",
      "/images/CasaDaVilaII/IMG_20.jpg",
      "/images/CasaDaVilaII/IMG_21.jpg",
      "/images/CasaDaVilaII/IMG_22.jpg",
      "/images/CasaDaVilaII/IMG_23.jpg",
      "/images/CasaDaVilaII/IMG_24.jpg",
    ],
    Exterior: [
      "/images/Exterior/IMG_1.jpg",
      "/images/Exterior/IMG_2.jpg",
      "/images/Exterior/IMG_3.jpg",
      "/images/Exterior/IMG_4.jpg",
      "/images/Exterior/IMG_5.jpg",
      "/images/Exterior/IMG_6.jpg",
      "/images/Exterior/IMG_7.jpg",
      "/images/Exterior/IMG_8.jpg",
      "/images/Exterior/IMG_9.jpg",
      "/images/Exterior/IMG_10.jpg",
      "/images/Exterior/IMG_11.jpg",
      "/images/Exterior/IMG_12.jpg",
      "/images/Exterior/IMG_13.jpg",
      "/images/Exterior/IMG_14.jpg",
    ]
  };

  const [displayedImages, setDisplayedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('CasaDaVilaI');
  const [loadedCategories, setLoadedCategories] = useState({ CasaDaVilaI: true, CasaDaVilaII: false, Exterior: false });
  const [loadingImages, setLoadingImages] = useState({});

  useEffect(() => {
    if (!loadedCategories[selectedCategory]) {
      setLoadedCategories(prev => ({ ...prev, [selectedCategory]: true }));
    }
    setDisplayedImages(images[selectedCategory]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, loadedCategories]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  const handleImageLoad = (src) => {
    setLoadingImages(prev => ({ ...prev, [src]: true })); // Marca imagem como carregada
  };

  return (
    <section id="gallery-page-id" className="cdv-section">
      <div className="cdv-img-alt-page">
        <div className="cdv-title">
          <span>{t('gallery.text')}</span>
        </div>
        <div className="cdv-img-parallax-alt-page">
          <div className='cdv-red'></div>
        </div>
      </div>
      <TopBar altScreen={true} />
      <div className="cdv-main-container">
        <div className="media-type-buttons">
          {['CasaDaVilaI', 'CasaDaVilaII', 'Exterior'].map(category => (
            <button
              key={category}
              className={selectedCategory === category ? 'cdv-button-secundary' : 'cdv-button-primary'}
              onClick={() => handleCategoryChange(category)}
            >
              <span>{category === 'Exterior' ? t('exterior') : category.replace('CasaDaVila', 'Casa Da Vila ')}</span>
            </button>
          ))}
        </div>
        <div className="media-display">
          {displayedImages.map((image, index) => (
            <div key={index} className="media-item" onClick={() => openModal(image)}>
              <img
                className={!loadingImages[image] ? 'blurred' : 'clear'} // Aplica blur se não estiver carregada
                loading="lazy"
                src={image}
                alt={`Imagem from ${selectedCategory} - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira`}
                onLoad={() => handleImageLoad(image)} // Remove o blur quando carregar
              />
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="modal open" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <FontAwesomeIcon icon={faTimes} className="cdv-popup-times" onClick={closeModal}/>
              <img loading="lazy" src={selectedImage} alt="Imagem Modal - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default GalleryPage;