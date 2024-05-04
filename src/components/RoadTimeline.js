import React, { useEffect, useState } from "react";
import "../styles/RoadTimeline.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonWalking, faFlag, faTree } from '@fortawesome/free-solid-svg-icons';
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

function RoadTimeline({ title, description, routes, bottomLogo, isNature, isParties, month, location }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setShowContent(true);
    }, []);

    return (
        <section id="experiences-id" className="cdv-section">
            {showContent && (
                <div>
                    <TopBar scrollThreshold={-1} />
                    <div className="cdv-main-container">
                        <div className="cdv-title">
                            <span>{title}</span>
                        </div>
                        <div className="cdv-text">
                            {description.map((text, index) => (
                                <span key={index}>{text}</span>
                            ))}
                        </div>
                        {isParties ? 
                            <div className="parties-main-container">
                                <img src="/images/FestasERomarias.png" alt="Logo" />
                                <div className="parties-container">
                                    <div className="timeline-central-bar"></div>
                                    {routes.map((route, index) => (
                                        <div className="parties-sub-container" style={{ width: "100%", position: "relative" }}>
                                            <div className="cdv-road-container parties" key={index}>
                                                <div className="cdv-month parties">{route.month}</div>
                                                <div className="cdv-empty-container parties"></div>
                                                <div className="cdv-dot-container parties"></div>
                                                <div className="cdv-text parties">
                                                    <div className="parties-text-details">
                                                        <div className="parties-seta-title">
                                                            <div className="seta-esquerda"></div>
                                                            <div className="seta-text-details">
                                                                <span className="cdv-title parties" style={{ marginBottom: "0px" }}>{route.title}</span>
                                                                <span className="cdv-sub-title parties">{route.location}</span>
                                                            </div>
                                                            <div className="seta-direita"></div>
                                                        </div>
                                                    </div>
                                                    <div className="cdv-road-image-container parties">
                                                        <img src={route.image} alt={route.title} className="cdv-road-image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>   
                            </div>
                            : 
                            <div className="cdv-road-timeline">
                                <div className="cdv-road-from-icon">
                                    <div className="logo-container">
                                        <img src="/images/Logo/CasaDaVilaLogo.png" alt="Logo" className="logo" />
                                    </div>
                                </div>
                                <div className="cdv-road-from-icon-2">
                                    <FontAwesomeIcon icon={faTree} className="commodity-icon"/>
                                    <FontAwesomeIcon icon={faPersonWalking} className="commodity-icon"/>
                                    <FontAwesomeIcon icon={faTree} className="commodity-icon .nature-color"/>
                                    <FontAwesomeIcon icon={faTree} className="commodity-icon .nature-color"/>
                                </div>
                                <div className={`cdv-road-from ${isNature ? 'nature-color' : ''}`}></div>
                                <div className={`cdv-road-from-dashed-line ${isNature ? 'nature-color' : ''}`}></div>   
                                {routes.map((route, index) => (
                                    <div className="cdv-road-container" key={index}>
                                        <div className="cdv-road-text-container">
                                            <div className="cdv-title">{route.title}</div>
                                            <div className="cdv-text">{route.description}</div>
                                        </div>
                                        <div className={`cdv-road ${isNature ? 'nature-color' : ''}`}>
                                            <div className="cdv-road-image-container">
                                                <img src={route.image} alt={route.title} className="cdv-road-image" />
                                            </div>

                                            <div className={`cdv-road-sub ${isNature ? 'nature-color' : ''}`}></div>
                                        </div>
                                    </div>
                                ))}
                                <div className={`cdv-road-to ${isNature ? 'nature-color' : ''}`}></div>
                                <div className={`cdv-road-to-dashed-line ${isNature ? 'nature-color' : ''}`}></div>
                                <div className="cdv-road-to-icon">
                                    <div className="logo-container">
                                        {isNature ? "" :
                                        <img src={bottomLogo} alt="Logo" className="logo" />}
                                    </div>
                                </div>
                                <div className="cdv-road-to-icon-2">
                                    <FontAwesomeIcon icon={faTree} className="commodity-icon .nature-color"/>
                                    <FontAwesomeIcon icon={faTree} className="commodity-icon .nature-color"/>
                                    <FontAwesomeIcon icon={faFlag} className="commodity-icon"/>
                                    <FontAwesomeIcon icon={faTree} className="commodity-icon .nature-color"/>
                                </div>
                            </div>
                        }
                    </div>
                    <Footer />
                </div>
            )}
        </section>
    );
}

export default RoadTimeline;