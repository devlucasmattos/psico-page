import React from "react";
import "./Hero.css";
import profissionalImg from "../assets/profissional.png";
import profissionalDarkImg from "../assets/profissional-dark.png";

const Hero = ({ darkMode }) => {
  return (
    <section className={`hero ${darkMode ? "dark" : "light"} animate-fade`}>
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="hero-content flex flex-col gap-4">
            <h1>Bem-vindo(a) ao seu momento de transformação!</h1>
            <p className="text-secondary">
              Atendimento psicológico especializado para ajudar você a alcançar 
              bem-estar emocional e qualidade de vida.
            </p>
            <a href="#contato" className="button">
              Agende uma Sessão
            </a>
          </div>
          <div className="hero-image">
            <img 
              src={darkMode ? profissionalDarkImg : profissionalImg} 
              alt="Psicóloga Magda Mattos" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;