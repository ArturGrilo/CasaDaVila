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
      "/images/CasaDaVilaI/CasaDaVilaI_1.jpeg",
      "/images/CasaDaVilaI/CasaDaVilaI_2.jpeg",
      "/images/CasaDaVilaI/CasaDaVilaI_3.jpeg",
      "/images/CasaDaVilaI/CasaDaVilaI_4.jpeg",
      "/images/CasaDaVilaI/CasaDaVilaI_5.jpeg",
      "/images/CasaDaVilaI/CasaDaVilaI_6.jpg",
      "/images/CasaDaVilaI/CasaDaVilaI_7.jpg",
      "/images/CasaDaVilaI/CasaDaVilaI_8.jpg",
      "/images/CasaDaVilaI/CasaDaVilaI_9.jpg"
    ],
    CasaDaVilaII: [
      "/images/CasaDaVilaII/CasaDaVilaII_1.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_2.jpg",
      "/images/CasaDaVilaII/CasaDaVilaII_3.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_4.jpg",
      "/images/CasaDaVilaII/CasaDaVilaII_5.jpg",
      "/images/CasaDaVilaII/CasaDaVilaII_6.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_7.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_8.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_9.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_10.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_11.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_12.jpeg",
      "/images/CasaDaVilaII/CasaDaVilaII_13.jpeg"
    ],
    Exterior: [
      "/images/Exterior/CasaDaVilaExterior_1.jpeg",
      "/images/Exterior/CasaDaVilaExterior_2.jpeg",
      "/images/Exterior/CasaDaVilaExterior_3.jpeg",
      "/images/Exterior/CasaDaVilaExterior_4.jpeg",
      "/images/Exterior/CasaDaVilaExterior_5.jpeg",
      "/images/Exterior/CasaDaVilaExterior_6.jpeg",
      "/images/Exterior/CasaDaVilaExterior_7.jpeg",
      "/images/Exterior/CasaDaVilaExterior_8.jpg",
      "/images/Exterior/CasaDaVilaExterior_10.jpg",
      "/images/Exterior/CasaDaVilaExterior_13.jpg"
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