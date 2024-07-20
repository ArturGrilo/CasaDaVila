import "../styles/Experiences.css";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';


function Experiences() {
  const { t } = useTranslation();

  return (
    <section id="exps-id" className="cdv-section">
      <div className="cdv-main-container">
        <div className="cdv-title">
          <span>{t('experiences.title')}</span>
        </div>
        <div className='experiences-interval'>
          <div className="cdv-grid">
            <a className="cdv-card" href={t('routes.alpedrinha')}>
              <img src="/images/Alpedrinha/Picadeiro.jpeg" alt="Alpedrinha"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.alpedrinha')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" href={t('routes.historicalVillages')}>
              <img src="/images/Experiencias/AldeiasHistoricas.png" alt="Aldeias Históricas"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.historicalVillages')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" href={t('routes.schistVillages')}>
              <img src="/images/Experiencias/AldeiasDoXisto.jpeg" alt="Aldeias Do Xisto"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.schistVillages')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" href={t('routes.gardunhaMountain')}>
              <img src="/images/Experiencias/SerraDaGardunha.jpeg" alt="Serra da Gardunha"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.gardunhaMountain')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" href={t('routes.estrelaMountain')}>
              <img src="/images/Experiencias/SerraEstrela.jpeg" alt="Serra Da Estrela"/>
              <div className="cdv-card-details">
                <div className="cdv-card-details-title">{t('experiences.estrelaMountain')}</div>
                <div className="cdv-card-details-see-more">
                  <span>{t('experiences.seeMore')}</span>
                  <FontAwesomeIcon icon={faArrowRight} className="cdv-card-icon"/>
                </div>
              </div>
            </a>
            <a className="cdv-card" href={t('routes.festivals')}>
              <img src="/images/Experiencias/AnjoDaGuarda.jpeg" alt="Festas e Romarias"/>
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