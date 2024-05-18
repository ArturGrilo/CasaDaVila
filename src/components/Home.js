import React, { useState, useEffect, useMemo } from "react";
import "../styles/Home.css";

const Home = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const images = useMemo(() => [
    "/images/HomeOutside5.jpeg",
    "/images/HomeInside2.jpeg",
    "/images/HomePageImage.jpeg"
  ], []); // Empty dependency array ensures that images is only initialized once

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change the image every 5 seconds

    return () => clearInterval(interval);
  }, [images]); // Depend on images to rerun the effect when it changes

  return (
    <section id="home-id" className="home-section">
      {images.map((img, index) => (
        <div key={index} className={`homepage-image ${index === imageIndex ? "fade-in" : "fade-out"}`}>
          <img src={img} alt={`Brief description of the content`} className="homepage-image-animation"/>
        </div>
      ))}
      <div className="home-main-container"></div>
    </section>
  );
};

export default Home;