import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/CookieBanner.css";

const CookieBanner = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Verifica se o banner de cookies já foi aceito pelo usuário
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');

        // Função para esconder o banner de cookies quando o usuário aceita os cookies
        const hideCookieBanner = () => {
            const cookieBanner = document.getElementById('cookie-banner');
            if (cookieBanner) {
                cookieBanner.style.opacity = '0';
                cookieBanner.style.display = 'none';
            }
        };

        // Função para lidar com o clique no botão de aceitar cookies
        const handleAcceptCookies = () => {
            localStorage.setItem('cookiesAccepted', 'true');
            hideCookieBanner();
        };

        // Verifica se o banner de cookies deve ser exibido
        if (!cookiesAccepted) {
            const cookieBanner = document.getElementById('cookie-banner');
            if (cookieBanner) {
                cookieBanner.style.opacity = '1';
                cookieBanner.style.display = 'block';
            }

            // Adiciona um ouvinte de evento para o botão de aceitar cookies
            const acceptCookiesButton = document.getElementById('accept-cookies');
            if (acceptCookiesButton) {
                acceptCookiesButton.addEventListener('click', handleAcceptCookies);
            }
        }

        // Limpa o ouvinte de evento quando o componente é desmontado
        return () => {
            const acceptCookiesButton = document.getElementById('accept-cookies');
            if (acceptCookiesButton) {
                acceptCookiesButton.removeEventListener('click', handleAcceptCookies);
            }
        };
    }, []); // O segundo argumento vazio garante que o efeito é executado apenas uma vez após a renderização inicial

    return (
        <div id="cookie-banner" className="cookie-banner">
            <div className="cookie-content">
                <p>{t('cookieBanner.message')}</p>
                <button className="cdv-button-secundary" id="accept-cookies">{t('cookieBanner.accept')}</button>
                <a href="/PoliticaDePrivacidade" className='cdv-link'>{t('cookieBanner.learnMore')}</a>
            </div>
        </div>
    );
};

export default CookieBanner;