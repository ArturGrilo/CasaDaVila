import React, { useState, useEffect, useMemo } from "react";
import "../styles/Home.css";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const images = useMemo(() => [
    {
      lowRes: "/images/HomePage/HomePage_1_LowRes.webp", // Placeholder de baixa resolução
      highRes: "/images/HomePage/HomePage_1.webp"
    },
    {
      lowRes: "/images/HomePage/HomePage_2_LowRes.webp", // Placeholder de baixa resolução
      highRes: "/images/HomePage/HomePage_2.webp"
    },
    {
      lowRes: "/images/HomePage/HomePage_3_LowRes.webp", // Placeholder de baixa resolução
      highRes: "/images/HomePage/HomePage_3.webp"
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the image every 5 seconds

    return () => clearInterval(interval);
  }, [images]); // Depend on images to rerun the effect when it changes

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <section id="home-id" className="home-section">
      {images.map((img, index) => (
        <div key={index} className={`homepage-image ${index === imageIndex ? "fade-in" : "fade-out"}`}>
          {/* Placeholder (imagem de baixa resolução com blur) */}
          <img
            src={img.lowRes}
            alt={`Homepage imagem Casa da Vila - Alojamento Local, Alpedrinha, Beira Baixa, Sintra da Beira`}
            className={`homepage-image-animation placeholder-image ${loaded ? "hidden" : ""}`} 
            loading="lazy"
          />
          {/* Imagem de alta resolução */}
          <img
            src={img.highRes}
            alt={`Homepage imagem Casa da Vila - Alojamento Local, Alpedrinha, Beira Baixa, Sintra da Beira`}
            className={`homepage-image-animation highres-image ${loaded ? "fade-in" : ""}`}
            loading="lazy"
            onLoad={handleImageLoad}
          />
        </div>
      ))}
      <div className="home-main-container"></div>
    </section>
  );
};

export default Home;