import '../styles/GalleryPage.css';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faTimes} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GalleryPage = () => {
  const [displayedImages, setDisplayedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('CasaDaVilaI');

  useEffect(() => {
    fetchImages('CasaDaVilaI');
  }, []);

  const fetchImages = (category) => {
    axios.get(`https://casa-da-vila.netlify.app/images/${category}`)
      .then(response => {
        console.log('Response:', response);
        const imagesData = response.data.map(filename => ({
          src: `/images/${category}/${filename}`,
          alt: `Image from ${category}`
        }));
        setDisplayedImages(imagesData);
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
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
      <div className="img-gallery-page">
        <div className="img-parallax-gallery-page">
          <div className='red'></div>
        </div>
      </div>
      <TopBar scrollThreshold={-1} />
      <div className="cdv-title">
        <span>Galeria</span>
      </div>
      <div className="cdv-main-container">
        <div className="media-type-buttons">
          <button className={selectedCategory === 'CasaDaVilaI' ? 'cdv-button-secundary' : 'cdv-button-primary'} name="category" value="CasaDaVilaI" onClick={() => handleCategoryChange('CasaDaVilaI')} >
            <span>Casa Da Vila I</span>
          </button>
          <button className={selectedCategory === 'CasaDaVilaII' ? 'cdv-button-secundary' : 'cdv-button-primary'} name="category" value="CasaDaVilaII" onClick={() => handleCategoryChange('CasaDaVilaII')} >
            <span>Casa Da Vila II</span>
          </button>
          <button className={selectedCategory === 'Exterior' ? 'cdv-button-secundary' : 'cdv-button-primary'} name="category" value="Exterior" onClick={() => handleCategoryChange('Exterior')} >
            <span>Exterior</span>
          </button>
        </div>
        <div className="media-display">
          {displayedImages.map((image, index) => (
            <div key={index} className="media-item" onClick={() => openModal(image.src)}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        {/* Modal */}
        <div className={`modal${modalOpen ? ' open' : ''}`} onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FontAwesomeIcon icon={faTimes} className="cdv-popup-times"  onClick={closeModal}/>
            <img src={selectedImage} alt="Imagem Modal" />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default GalleryPage;