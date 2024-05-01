import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = ["/images/HomeOutside_2.jpeg", "/images/HomeInside2.jpeg", "/images/RC_15.jpeg", "/images/CasaDaVilaI/IMG-20240423-WA0021.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Mudar a imagem a cada 5 segundos
  
    return () => clearInterval(interval);
  }, [images.length]); 

  return (
    <section id="home-id" className="home-section">
      {images.map((img, index) => (
        <div key={index} className={`homepage-image ${index === imageIndex ? "fade-in" : "fade-out"}`}>
          <img src={images[imageIndex]} alt={`Imagem ${imageIndex + 1}`} className="homepage-image-animation"/>
        </div>
      ))}
      <div className="home-main-container"></div>
    </section>
  );
};

export default Home;