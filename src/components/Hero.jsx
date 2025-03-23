import React from "react";
import "./Hero.css";
import profissionalImage from "../assets/profissional.png";
import profissionalImageDark from "../assets/profissional-dark.png"; // Importe a imagem para o modo escuro

const Hero = ({ darkMode }) => {
  return (
    <section className={`hero ${darkMode ? "dark" : "light"}`}>
      <div className="hero-content">
        <div className="hero-image">
          {/* Condicional para alternar entre as imagens */}
          <img 
            src={darkMode ? profissionalImageDark : profissionalImage} 
            alt="Profissional" 
          />
        </div>
        <div className="hero-text">
          <h2>Bem-vindo(a) ao seu momento de transformação!</h2>
          <p>
            Se você busca melhorar sua saúde mental e qualidade de vida, está no
            lugar certo. Com um atendimento acolhedor e focado nas suas
            necessidades, juntos vamos trabalhar para alcançar seus objetivos.
          </p>
          <a
            href="https://wa.me/5553991244320"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Agende uma Sessão
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
