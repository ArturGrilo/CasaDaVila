import React, { useState, useEffect } from "react";
import "../styles/SplashScreen.css";

const SplashScreen = () => {
  const [hiddenSplashScreen, setHiddenSplashScreen] = useState(false);
  const [hiddenSplashLogo, setHiddenSplashLogo] = useState(false);
  const [changeIndex, setIndex] = useState(false);

  useEffect(() => {
    const timerSplashScreen = setTimeout(() => {
      setHiddenSplashScreen(true);
    }, 1000);

    const timerIndex = setTimeout(() => {
        setIndex(true);
    }, 1500);

    const timerSplashLogo = setTimeout(() => {
      setHiddenSplashLogo(true);
    }, 100);

    // Limpa os timers quando o componente é desmontado
    return () => {
      clearTimeout(timerSplashScreen);
      clearTimeout(timerSplashLogo);
      clearTimeout(timerIndex);
    };
  }, []);

  return (
    <div className={`splash-container ${hiddenSplashScreen ? "hidden" : ""} ${changeIndex ? "change-index" : ""}`}>
      <div className="splash-logo-container">
        <img
          src="/images/Logo/CasaDaVilaLogo2.png"
          alt="Logo"
          className={`splash-logo ${hiddenSplashLogo ? "hidden" : ""}`}
        />
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default SplashScreen;