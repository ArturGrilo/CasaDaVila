import '../styles/GalleryPage.css';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GalleryPage = () => {
  const [displayedImages, setDisplayedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetchImages('CasaDaVilaI');
  }, []);

  const fetchImages = (category) => {
    axios.get(`/images/${category}`)
      .then(response => {
        setDisplayedImages(response.data);
        debugger;
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    fetchImages(selectedCategory);
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
      <TopBar scrollThreshold={-1} />
      <div className="cdv-main-container">
        <div className="cdv-title">
          <span>Galeria</span>
        </div>
        <div className="media-type-buttons">
          <label>
            <input type="radio" name="category" value="CasaDaVilaI" onChange={handleCategoryChange} />
            Casa Da Vila I
          </label>
          <label>
            <input type="radio" name="category" value="CasaDaVilaII" onChange={handleCategoryChange} />
            Casa Da Vila II
          </label>
          <label>
            <input type="radio" name="category" value="Exterior" onChange={handleCategoryChange} />
            Exterior
          </label>
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