import "../styles/Experiences.css";
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef } from 'react';

function Experiences() {
  const videoRef = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      const video = videoRef.current;
      if (video.paused) {
        video.play();
      }
    };

    // Reproduzir o vídeo automaticamente após 1 segundo
    setTimeout(() => {
      playVideo();
    }, 1000); // Atraso de 1 segundo

    // Remover o áudio do vídeo para permitir a reprodução automática
    const video = videoRef.current;
    video.muted = true;

    // Adicionar um evento de carga do vídeo para garantir que o vídeo esteja pronto para a reprodução
    video.addEventListener('canplay', playVideo);

    // Remover o evento de carga quando o componente for desmontado
    return () => {
      video.removeEventListener('canplay', playVideo);
    };
  }, []);

  return (
    <section id="exps-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className="cdv-title">
          <span>Experiências</span>
        </div>
        <div className='experiences-interval'>
        <div className="cdv-grid">
          <a className="cdv-card" href="/AldeiasHistoricas">
            <img src="/images/historicas.png" alt="Aldeias Históricas"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Aldeias Históricas</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </a>
          <a className="cdv-card" href="/AldeiasDoXisto">
            <img src="/images/xisto.jpeg" alt="Aldeias Do Xisto"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Aldeias do Xisto</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </a>
          <a className="cdv-card" href="/SerraDaGardunha">
            <img src="/images/Gardunha.jpeg" alt="Serra da Gardunha"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Serra da Gardunha</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </a>
          <a className="cdv-card" href="/SerraDaEstrela">
            <img src="/images/TorreSerraEstrela.jpeg" alt="Serra Da Estrela"/>
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Serra da Estrela</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </a>
          <a className="cdv-card" href="/SerraDaEstrela">
            <video ref={videoRef} controls>
                <source src="videos/video-casa-da-vila.mp4" type="video/mp4"/>
            </video>
            
            <div className="cdv-card-details">
              <div className="cdv-card-details-title">Video teste</div>
              <div className="cdv-card-details-see-more">
                <span>Ver mais</span>
                <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
              </div>
            </div>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;