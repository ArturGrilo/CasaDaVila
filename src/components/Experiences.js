import "../styles/Experiences.css";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="exps-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className="cdv-title" data-aos="fade-up">
          <span>{t('experiences.title')}</span>
        </div>
        <div className='experiences-interval'>
          <div className="cdv-grid">
            <a className="cdv-card" data-aos="fade-left" href={t('routes.alpedrinha')}>
              <img src="/images/Alpedrinha/Picadeiro.webp" alt="Alpedrinha - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.alpedrinha')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" data-aos="fade-right" href={t('routes.historicalVillages')}>
              <img loading="lazy" src="/images/Experiencias/AldeiasHistoricas.webp" alt="Aldeias Históricas - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.historicalVillages')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" data-aos="fade-left" href={t('routes.schistVillages')}>
              <img loading="lazy" src="/images/Experiencias/AldeiasDoXisto.webp" alt="Aldeias Do Xisto - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.schistVillages')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" data-aos="fade-right" href={t('routes.gardunhaMountain')}>
              <img loading="lazy" src="/images/Experiencias/SerraDaGardunha.webp" alt="Serra da Gardunha - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.gardunhaMountain')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" data-aos="fade-left" href={t('routes.estrelaMountain')}>
              <img loading="lazy" src="/images/Experiencias/SerraEstrela.jpeg" alt="Serra Da Estrela - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.estrelaMountain')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" data-aos="fade-right" href={t('routes.festivals')}>
              <img loading="lazy" src="/images/Experiencias/AnjoDaGuarda.webp" alt="Festas e Romarias - Casa da Vila - Alojamento Local , Alpedrinha , Beira Baixa , Sintra da Beira"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.festivities')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
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