import React from "react";
import "../styles/AboutUs.css";

function AboutUs() {

  return (
    <section id="about-us-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className="cdv-title">
          <span>Sobre nós</span>
        </div>
        <div className="cdv-text">
          <span>Olá! Sou a Maria da Conceição, mas pode tratar-me por São. É com imenso prazer
          que lhe apresento a história por trás da Casa da Vila. Esta jornada começou com
          uma preciosa herança deixada pelos meus pais: uma casa de pedra abandonada, à
          espera de uma nova vida. Decidi então embarcar nesta emocionante aventura de
          reconstrução, uma verdadeira obra de amor e dedicação em honra dos meus
          progenitores.</span>
          <span>Aos poucos, com o coração cheio de sonhos, dei vida a este espaço que agora é a
          Casa da Vila</span>
          <span>Apesar de já estar perto da reforma, não consegui parar de trabalhar. Encontrei na
          decoração e na arte de receber pessoas as minhas grandes paixões, e decidi unir
          esses dois mundos neste projeto. Cada detalhe, desde os móveis escolhidos com
          carinho até às pequenas surpresas que preparei para os nossos hóspedes, reflete a
          minha dedicação em proporcionar uma estadia verdadeiramente acolhedora e
          memorável.</span>
          <span>Com carinho,</span>
        </div>
        <div className="about-us-signature">Maria da Conceição Ferreira da Silva</div>
        <div className="grid-about-us">
          <div className="column">
            <img src="/images/SobreNos/Picadeiro.jpeg" alt="Imagem 1" className="homepage-image-animation-2"/>
          </div>
          <div className="column">
            <img src="/images/SobreNos/HomeOutside.jpeg" alt="Imagem 2"/>
          </div>
          <div className="column">
            <img src="/images/SobreNos/SerraDaGardunha.jpeg" alt="Imagem 3" className="homepage-image-animation"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;