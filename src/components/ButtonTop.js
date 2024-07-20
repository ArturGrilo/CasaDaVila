import React, { useEffect } from "react";
import "../styles/ButtonTop.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ButtonTop = () => {
    useEffect(() => {
        // Adiciona o evento de rolagem quando o componente for montado
        window.addEventListener("scroll", scrollFunction);
        return () => {
            window.removeEventListener("scroll", scrollFunction);
        };
    }, []);

    // Função para mostrar ou ocultar o botão com base no scroll
    const scrollFunction = () => {
        const button = document.getElementById("topBtn");
        if (button) {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        }
    };

    // Função para rolar suavemente para o topo da página
    const topFunction = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <button className="go-to-top-link" onClick={topFunction} id="topBtn" title="Go to top">
            <FontAwesomeIcon icon={faAngleUp} className="go-to-top-icon" />
        </button>
    );
};

export default ButtonTop;