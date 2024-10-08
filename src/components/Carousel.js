import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css";

const Carousel = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      sliderRef.current.slickNext(); // Avança para a próxima imagem
    }, 3000); // Intervalo de 5 segundos

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente é desmontado
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider ref={sliderRef} {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} loading="lazy" alt={`Imagem ${index + 1} - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira`} />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;