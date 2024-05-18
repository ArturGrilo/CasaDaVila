import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/images/HomeOutside5.jpeg", "/images/HomeInside2.jpeg", "/images/HomePageImage.jpeg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Mudar a imagem a cada 5 segundos
  
    return () => clearInterval(interval);
  }, [images]); // Remova ".length" aqui

  return (
    <section id="home-id" className="home-section">
      {images.map((img, index) => (
        <div key={index} className={`homepage-image ${index === imageIndex ? "fade-in" : "fade-out"}`}>
          <img src={img} alt={`Imagem ${index + 1}`} className="homepage-image-animation"/> {/* Mude para "img" aqui */}
        </div>
      ))}
      <div className="home-main-container"></div>
    </section>
  );
};

export default Home;