import React from "react";
import "./Hero.css";
import profissionalImg from "../assets/profissional.png";
import profissionalDarkImg from "../assets/profissional-dark.png";

const Hero = ({ darkMode }) => {
  return (
    <section className={`hero ${darkMode ? "dark" : "light"}`}>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Bem-vindo(a) ao seu momento de transformação!</h1>
          <p className="hero-text">
            Atendimento psicológico especializado para ajudar você a alcançar 
            bem-estar emocional e qualidade de vida.
          </p>
          <a href="#contato" className="hero-button">
            Agende uma Sessão
          </a>
        </div>
        <div className="hero-image-container">
          <img 
            src={darkMode ? profissionalDarkImg : profissionalImg} 
            alt="Psicóloga Magda Mattos" 
            className="hero-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;