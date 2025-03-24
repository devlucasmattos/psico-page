import React from "react";
import "./About.css";
import sobreImage from "../assets/profissional.png"; // Foto ou imagem representativa

const About = ({ darkMode }) => {
  return (
    <section className={`sobre ${darkMode ? "dark" : "light"}`}>
      <div className="sobre-content">
        <div className="sobre-text">
          <h2>Sobre Mim</h2>
          <p>
            Sou psicóloga com formação em <strong>Saúde Mental</strong> e com uma especialização em <strong>Terapia Cognitivo-Comportamental (TCC)</strong>. Meu objetivo é proporcionar um espaço seguro e acolhedor para que você possa explorar suas emoções e encontrar caminhos para o seu bem-estar.
          </p>
          <p>
            Com experiência no atendimento de adultos, jovens e idosos, ajudo meus pacientes a lidar com questões como ansiedade, estresse, depressão, entre outros desafios emocionais. Estou aqui para ouvir, entender e oferecer ferramentas práticas para que você possa superar suas dificuldades e alcançar uma vida mais equilibrada e saudável.
          </p>
          <p>
            Se você deseja iniciar sua jornada de autoconhecimento e transformação, estou à disposição para acompanhá-lo(a) nesse processo.
          </p>
        </div>
        <div className="sobre-image">
          <img 
            src={sobreImage} 
            alt="Imagem da psicóloga" 
          />
        </div>
      </div>
    </section>
  );
};

export default About;
