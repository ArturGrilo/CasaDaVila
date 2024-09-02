import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import WhatsAppLink from "./components/WhatsAppLink";
import ButtonTop from "./components/ButtonTop";
import SplashScreen from "./components/SplashScreen";
import LanguageSelector from "./components/LanguageSelector";
import { useTranslation } from 'react-i18next';
import CookieBanner from "./components/CookieBanner";
import "./styles/fonts.css";
import "./styles/App.css";
import "./styles/variables.css";

// Lazy loading para componentes
const Footer = lazy(() => import('./components/Footer'));
const Feedback = lazy(() => import('./components/Feedback'));
const TopBar = lazy(() => import('./components/TopBar'));
const Home = lazy(() => import('./components/Home'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const RoadTimeline = lazy(() => import('./components/RoadTimeline'));
const Rooms = lazy(() => import('./components/Rooms'));
const ReservationBreakSection = lazy(() => import('./components/ReservationBreakSection'));
const Experiences = lazy(() => import('./components/Experiences'));
const GalleryBreakSection = lazy(() => import('./components/GalleryBreakSection'));
const WordsBreakSection = lazy(() => import('./components/WordsBreakSection'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const GalleryPage = lazy(() => import('./components/GalleryPage'));
const BookingPage = lazy(() => import('./components/Booking'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about-us-id" element={<AboutUs />} />
          <Route path="/PoliticaDePrivacidade" element={<PrivacyPolicy />} />
          <Route path="/Galeria" element={<GalleryPage />} />
          <Route path="/Reservar" element={<BookingPage />} />
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
                        imgpath="Experiencias/AldeiasDoXisto.webp"
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
          <Route path="/robots.txt" element={<Navigate to="/robots.txt" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <CookieBanner />
    </div>
  );
};

// Componente para renderizar a página principal
const MainPage = () => {
  return (
    <div className="app-container">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
};

export default App;