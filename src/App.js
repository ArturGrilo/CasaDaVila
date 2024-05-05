import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

const App = () => {
  const mobile = window.innerWidth < 800;

  return (
    <div>  
      <ScrollToTop />
      <SplashScreen />
      <WhatsAppLink />
      <ButtonTop />
      <LanguageSelector />
      <Routes>
        {/* Rota da página principal */}
        <Route path="/" element={<MainPage />} />
        <Route path="/PoliticaDePrivacidade" element={<PrivacyPolicy />} />
        <Route path="/Galeria" element={<GalleryPage />} />
          {/* Rota da página das Aldeias Históricas */}
          <Route 
            path="/AldeiasHistoricas" 
            element={<RoadTimeline 
                        title="Aldeias Históricas"
                        description={[
                            "A Casa da Vila é um verdadeiro tesouro para os entusiastas do Patrimônio e da História.",
                            "Situada em uma região cercada por diversas Aldeias Históricas, como a nossa vizinha Castelo Novo, Monsanto, Belmonte e Sortelha.",
                            "A partir daqui, você pode embarcar em uma autêntica viagem pelo tempo, explorando o coração de Portugal.",
                            "Aproveite a nossa sugestão de roteiro, esperemos que goste!"
                        ]}
                        routes={[
                            { title: "Castelo Novo (6,5km)", description: mobile ? "Em plena Serra da Gardunha, Castelo Novo ergue-se em tons de verde e cinza." : "Em plena Serra da Gardunha, a Aldeia Histórica de Castelo Novo ergue-se em tons de verde e cinza. Construída sobre o granito, Castelo Novo conserva no tempo um património arquitetónico único.", image: "/images/CasteloNovo.jpeg" },
                            { title: "Monsanto (41km)", description: mobile ? "Alcandorada num cabeço que se impõe ao olhar na maior parte dos horizontes. Um encanto singular." : "Alcandorada num cabeço que se impõe ao olhar na maior parte dos horizontes, a Aldeia Histórica de Portugal de Monsanto detém um encanto singular.", image: "/images/Monsanto.jpeg" },
                            { title: "Belmonte (44km)", description: mobile ? "Terra de Pedro Álvares Cabral, detém uma ampla vista sobre a Serra da Estrela." : "Terra de Pedro Álvares Cabral, situada em plena Cova da Beira e com ampla vista sobre a encosta oriental da Serra da Estrela, a vila de Belmonte justifica plenamente as características que lhe terão dado o nome.", image: "/images/Belmonte.jpeg" },
                            { title: "Sortelha (56,5km)", description: mobile ? "A sua fisionomia urbana e arquitectónica permanece inalterada desde o Renascimento." : "Sortelha é uma das mais belas e antigas vilas portuguesas, tendo mantido a sua fisionomia urbana e arquitectónica inalterada desde o renascimento até aos nossos dias.", image: "/images/Sortelha.jpeg" }
                        ]}  
                        bottomLogo= "/images/AldeiasHistoricasPortuguesas.png"
                    />} 
            />
          <Route path="/AldeiasDoXisto" element={<RoadTimeline 
                                                      title="Aldeias do Xisto"
                                                      description={[
                                                          "Entre as sinuosas serras da Estrela, Açor e Gardunha, ou nas margens serenas dos rios Tejo, Ocreza e Zêzere, encontra-se entrelaçada a rede das 27 aldeias do Xisto, um tesouro inestimável da nossa região e herança.",
                                                          "Para os aventureiros, em busca dessa imensa riqueza histórica, cultural e natural, a Casa Da Vila sugere duas das mais cativantes Aldeias do Xisto que, curiosamente, se localizam no nosso concelho do Fundão.",
                                                          "Aproveite a nossa sugestão de roteiro, esperemos que goste!"
                                                      ]}
                                                      routes={[
                                                          { title: "Barroca (39,8km)", description: mobile ? "Num pequeno morro, ladeado por duas linhas de água, junto ao rio Zêzere." : "A parte mais antiga da aldeia está implantada ao longo de um pequeno morro, ladeado por duas linhas de água profundamente cavadas, formando um conjunto perpendicular ao curso do Zêzere, com o qual confina.", image: "/images/Barroca.png" },
                                                          { title: "Janeiro de Cima (52,1km)", description: mobile ? "Caminhe pelo emaranhado de ruas sinuosas cujas casas revelam as suas características fachadas em xisto." : "Janeiro de Cima encontra-se na margem esquerda do Zêzere, rodeada por uma extensa manta de terrenos agrícolas. Caminhe pelo emaranhado de ruas sinuosas cujas casas revelam as suas características fachadas em xisto.", image: "/images/JaneiroDeCima.jpeg" }
                                                      ]}  
                                                      bottomLogo= "/images/AldeiasDoXisto.png"
                                                    />} />
          <Route path="/SerraDaGardunha" element={<RoadTimeline 
                                                      title="Serra da Gardunha"
                                                      description={[
                                                          "Explore os seus trilhos e maravilhe-se com as vistas panorâmicas deslumbrantes enquanto se aventura pelas encostas desta serra imponente.",
                                                          "Venha explorar este tesouro da região e deixe-se encantar pela sua beleza singular.",
                                                          "Aproveite a nossa sugestão de roteiro, esperemos que goste!"
                                                      ]}
                                                      routes={[
                                                          { title: "Percursos pedestres, trail ou btt", description: mobile ? "Desbrave as Rotas da Serra da Gardunha, uma jornada imersiva e fascinante." : "Desbrave as Rotas da Serra da Gardunha, uma jornada imersiva e fascinante na reserva natural da Rede Natura 2000 e no Geopark Naturtejo.", image: "/images/PercursosGardunha.jpg" },
                                                          { title: "Casa do Guarda", description: mobile ? "Amplas áreas de lazer e uma vista deslumbrante das majestosas serras circundantes." : "Neste local encantador, aguardam-no amplas áreas de lazer, equipadas com mesas, churrasqueiras, espaços para preparar deliciosas refeições ao ar livre e ainda oferece uma vista deslumbrante das majestosas serras circundantes.", image: "/images/CasaDoGuarda.jpeg" }
                                                      ]}  
                                                      bottomLogo="/images/AldeiasDoXisto.png"
                                                      isNature={true}
                                                    />} />
          <Route path="/SerraDaEstrela" element={<RoadTimeline 
                                                      title="Serra da Estrela"
                                                      description={[
                                                          "Explore os seus trilhos e maravilhe-se com as vistas panorâmicas deslumbrantes enquanto se aventura pelas encostas desta serra imponente.",
                                                          "Venha explorar este tesouro da região e deixe-se encantar pela sua beleza singular.",
                                                          "Aproveite a nossa sugestão de roteiro, esperemos que goste!"
                                                      ]}
                                                      routes={[
                                                          { title: "Torre", description: "Ponto mais alto de Portugal Continental com 1993 metros acima do nível do mar. Uma torre de 7 metros foi construída de forma que o ponto mais alto alcance simbolicamente 2 000 metros.", image: "/images/TorreSerraEstrela.jpeg" },
                                                          { title: "Seia", description: "Situada a 550 metros de altitude, Seia é uma das mais importantes cidades situadas no sopé do Parque Natural da Serra da Estrela e uma porta de entrada para o ponto mais alto de Portugal Continental (Torre).", image: "/images/Seia.jpeg" }
                                                      ]}  
                                                      bottomLogo="/images/AldeiasDoXisto.png"
                                                      isNature={true}
                                                    />} />
          <Route path="/Romarias" element={<RoadTimeline 
                                                      title="Festas e Romarias"
                                                      description={[
                                                          "Explore as melhores festas de Alpedrinha e arredores.",
                                                          "Aproveite as nossas sugestões, esperemos que goste!"
                                                      ]}
                                                      routes={[
                                                          { title: "Festa da Cereja", location: "Alcongosta", month: "Junho", image: "/images/FestaDaCereja.jpeg" },
                                                          { title: "Anjo da Guarda", location: "Alpedrinha", month: "Agosto", image: "/images/AnjoDaGuarda.jpeg" },
                                                          { title: "Chocalhos", location: "Alpedrinha", month: "Setembro", image: "/images/Chocalhos.jpeg" },
                                                          { title: "Míscaros", location: "Alcaide", month: "Novembro", image: "/images/Miscaros.jpeg" }
                                                      ]}  
                                                      bottomLogo="/images/AldeiasDoXisto.png"
                                                      isNature={false}
                                                      isParties={true}
                                                    />} />
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Rolagem para o topo da página
  }, [pathname]);

  return null; // Não renderizar nenhum elemento adicional
};

export default App;