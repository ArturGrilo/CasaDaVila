import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import WhatsAppLink from "./components/WhatsAppLink";
import RoadTimeline from "./components/RoadTimeline";
import Rooms from "./components/Rooms";
import ReservationBreakSection from "./components/ReservationBreakSection";
import Experiences from "./components/Experiences";
import ButtonTop from "./components/ButtonTop";
import SplashScreen from "./components/SplashScreen";
import "./styles/fonts.css";
import "./styles/App.css";
import "./styles/variables.css";
import GalleryBreakSection from "./components/GalleryBreakSection";
import WordsBreakSection from "./components/WordsBreakSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import CookieBanner from "./components/CookieBanner";
import LanguageSelector from "./components/LanguageSelector";
import GalleryPage from "./components/GalleryPage";
import BookingPage from "./components/Booking";
import { useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  const mobile = window.innerWidth < 800;
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const elementPosition = element.offsetTop - 80;

        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth',
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }, [location.hash]);

  return (
    <div>  
      <SplashScreen />
      <WhatsAppLink />
      <ButtonTop />
      <LanguageSelector />
      <Routes>
        {/* Rota da página principal */}
        <Route path="/" element={<MainPage />} />
        <Route path="/about-us-id" element={<AboutUs />} />
        <Route path="/PoliticaDePrivacidade" element={<PrivacyPolicy />} />
        <Route path="/Galeria" element={<GalleryPage />} />
        <Route path="/Reservar" element={<BookingPage />} />
        {/* Rota da página das Aldeias Históricas */}
        <Route 
          path={t('routes.historicalVillages')}
          element={<RoadTimeline 
                      imgpath="Experiencias/AldeiasHistoricas.png"
                      title={t('RoadTimelineHistorical.title')}
                      description={t('RoadTimelineHistorical.description', { returnObjects: true })}
                      routes={t('RoadTimelineHistorical.routes', { returnObjects: true }).map(route => ({
                        ...route,
                        description: route.description[mobile ? 0 : 1]
                      }))}
                      bottomLogo={t('RoadTimelineHistorical.bottomLogo')}
                  />} 
        />
        <Route path={t('routes.schistVillages')} 
        element={<RoadTimeline 
                      imgpath="Experiencias/AldeiasDoXisto.jpeg"
                      title={t('RoadTimelineSchist.title')}
                      description={t('RoadTimelineSchist.description', { returnObjects: true })}
                      routes={t('RoadTimelineSchist.routes', { returnObjects: true }).map(route => ({
                          ...route,
                          description: route.description[mobile ? 0 : 1]
                      }))}
                      bottomLogo={t('RoadTimelineSchist.bottomLogo')}
                  />} 
          />
          <Route path={t('routes.gardunhaMountain')} 
          element={<RoadTimeline 
                      imgpath="Experiencias/SerraDaGardunha.jpeg"
                      title={t('RoadTimelineGardunha.title')}
                      description={t('RoadTimelineGardunha.description', { returnObjects: true })}
                      routes={t('RoadTimelineGardunha.routes', { returnObjects: true }).map(route => ({
                          ...route,
                          description: route.description[mobile ? 0 : 1]
                      }))}
                      bottomLogo={t('RoadTimelineGardunha.bottomLogo')}
                      isNature={true}
                  />} 
        />
        <Route path={t('routes.estrelaMountain')} 
        element={<RoadTimeline 
                      imgpath="Experiencias/SerraEstrela.jpeg"
                      title={t('RoadTimelineEstrela.title')}
                      description={t('RoadTimelineEstrela.description', { returnObjects: true })}
                      routes={t('RoadTimelineEstrela.routes', { returnObjects: true }).map(route => ({
                          ...route,
                          description: route.description[mobile ? 0 : 1]
                      }))}
                      bottomLogo={t('RoadTimelineEstrela.bottomLogo')}
                      isNature={true}
                  />} 
        />
        <Route path={t('routes.alpedrinha')} 
        element={<RoadTimeline 
                      imgpath=""
                      title={t('RoadTimelineAlpedrinha.title')}
                      description={t('RoadTimelineAlpedrinha.description', { returnObjects: true })}
                      routes={t('RoadTimelineAlpedrinha.routes', { returnObjects: true }).map(route => ({
                          ...route,
                          description: route.description[mobile ? 0 : 1]
                      }))}
                      bottomLogo={t('RoadTimelineAlpedrinha.bottomLogo')}
                      isNature={false}
                  />} 
        />
        <Route path={t('routes.festivals')} 
        element={<RoadTimeline 
                      imgpath="Experiencias/AnjoDaGuarda.jpeg"
                      title={t('RoadTimelineFestivals.title')}
                      description={t('RoadTimelineFestivals.description', { returnObjects: true })}
                      routes={t('RoadTimelineFestivals.routes', { returnObjects: true })}
                      bottomLogo={t('RoadTimelineFestivals.bottomLogo')}
                      isNature={false}
                      isParties={true}
                  />} 
        />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <CookieBanner />
    </div>
  );
};

// Componente para renderizar a página principal
const MainPage = () => {
  return (
    <div className="app-container">
      <TopBar />
      <Home />
      <AboutUs />
      <WordsBreakSection />
      <Rooms />
      <GalleryBreakSection />
      <Experiences />
      <ReservationBreakSection />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;