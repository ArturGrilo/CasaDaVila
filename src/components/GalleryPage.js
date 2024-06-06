import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/GalleryPage.css';

const GalleryPage = () => {
  const [displayedImages, setDisplayedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('CasaDaVilaI');

  useEffect(() => {
    fetchImages('CasaDaVilaI');
  }, []);

  const fetchImages = async (category) => {
    try {
      const response = await axios.get(`/.netlify/functions/listImages?category=${category}`);
      console.log('Response:', response);

      if (Array.isArray(response.data)) {
        const imagesData = response.data.map(filename => ({
          src: `${process.env.PUBLIC_URL}/images/${category}/${filename}`,
          alt: `Image from ${category}`
        }));
        setDisplayedImages(imagesData);
      } else {
        console.error('Unexpected response format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchImages(category);
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalOpen(false);
  };

  return (
    <section id="gallery-page-id" className="cdv-section">
      <div className="cdv-img-gallery-page">
        <div className="cdv-title">
          <span>Galeria</span>
        </div>
        <div className="cdv-img-parallax-gallery-page">
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
              <span>{category.replace('CasaDaVila', 'Casa Da Vila ')}</span>
            </button>
          ))}
        </div>
        <div className="media-display">
          {displayedImages.map((image, index) => (
            <div key={index} className="media-item" onClick={() => openModal(image.src)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {modalOpen && (
          <div className="modal open" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <FontAwesomeIcon icon={faTimes} className="cdv-popup-times" onClick={closeModal}/>
              <img src={selectedImage} alt="Imagem Modal" />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default GalleryPage;