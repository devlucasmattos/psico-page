import React from "react";
import "./Hero.css";
import profissionalImg from "../assets/profissional.png";
import profissionalDarkImg from "../assets/profissional-dark.png";

const Hero = ({ darkMode }) => {
  return (
    <section className={`hero ${darkMode ? "dark" : "light"}`} id="inicio">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo(a)<br></br> ao seu momento de transformação!</h1>
          <div className="divider"></div>
          <p className="hero-text">
            Atendimento psicológico especializado com abordagem <strong>cognitivo-comportamental</strong> para ajudar você a alcançar bem-estar emocional e qualidade de vida.
          </p>
          <div className="hero-buttons">
            <a href="#contato" className="hero-button primary">
              Agende uma Sessão
            </a>
            <a href="#services" className="hero-button secondary">
              Conheça os Serviços
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="image-wrapper">
            <img 
              src={darkMode ? profissionalDarkImg : profissionalImg} 
              alt="Psicóloga Magda Mattos" 
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;