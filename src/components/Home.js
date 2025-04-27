import React, { useState, useEffect, useMemo } from "react";
import "../styles/Home.css";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = useMemo(() => [ 
    "/images/HomePage/HomePage_1.webp",
    "/images/HomePage/HomePage_4.jpeg",
    "/images/HomePage/HomePage_6.jpeg",
    "/images/HomePage/HomePage_7.jpeg",
    "/images/HomePage/HomePage_8.jpeg",
    "/images/HomePage/HomePage_9.jpeg",
    "/images/HomePage/HomePage_5.jpeg"
  ], []); 

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(interval);
  }, [images]); // Depend on images to rerun the effect when it changes

  return (
    <section id="home-id" className="home-section">
      {images.map((img, index) => (
        <div key={index} className={`homepage-image ${index === imageIndex ? "fade-in" : "fade-out"}`}>
          <img src={img} alt={`Homepage imagem Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira`} className="homepage-image-animation"/>
        </div>
      ))}
      <div className="home-main-container">
        <span 
              className="snowflake"
              style={{
                left: 'calc(100% * 0.1)', // Posição inicial
                animationDuration: '10s', // Tempo de queda
                '--start-x': 0.1,
                '--end-x': 0.1,
                '--start-size': 0.8, // Tamanho inicial
                '--end-size': 1.2, // Tamanho final
              }}
        >❄</span>
        <span
          className="snowflake"
          style={{
            left: 'calc(100% * 0.3)',
            animationDuration: '8s',
            '--start-x': 0.3,
            '--end-x': 0.35,
            '--start-size': 0.6,
            '--end-size': 1.1,
          }}
        >
          ❄
        </span>
        <span
          className="snowflake"
          style={{
            left: 'calc(100% * 0.5)',
            animationDuration: '12s',
            '--start-x': 0.5,
            '--end-x': 0.5,
            '--start-size': 0.7,
            '--end-size': 1.3,
          }}
        >
          ❄
        </span>
        <span
          className="snowflake"
          style={{
            left: 'calc(100% * 0.7)',
            animationDuration: '9s',
            '--start-x': 0.7,
            '--end-x': 0.75,
            '--start-size': 0.5,
            '--end-size': 1.0,
          }}
        >
          ❄
        </span>
        <span
          className="snowflake"
          style={{
            left: 'calc(100% * 0.9)',
            animationDuration: '11s',
            '--start-x': 0.9,
            '--end-x': 0.85,
            '--start-size': 0.9,
            '--end-size': 1.0,
          }}
        >
          ❄
        </span>
        
        
        <div className="home-main-container-2">
          
        </div>
        <div className="home-info-container">
          <div className="home-info-main-text">
            <span>Na simplicidade do campo</span>
          </div>
          <div className="home-info-sub-text">
            <span>Encontramos a verdadeira essência da vida</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;