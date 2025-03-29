import React from "react";
import "./Services.css";
import profissionalImg from "../assets/profissional.png";

const Services = ({ darkMode }) => {
  return (
    <section className={`services ${darkMode ? "dark" : "light"}`} id="services">
      <div className="services-content">
        <div className="services-text">
          <h2>Serviços</h2>
          <p>
            Ofereço atendimento psicológico online e presencial, utilizando a abordagem da <strong>Terapia Cognitivo-Comportamental (TCC)</strong> para ajudar você a lidar com desafios emocionais e psicológicos.
          </p>
          <ul className="services-list">
            <li>Atendimento para ansiedade e estresse</li>
            <li>Tratamento para depressão</li>
            <li>Orientação profissional e desenvolvimento pessoal</li>
            <li>Acompanhamento para transtornos emocionais</li>
            <li>Suporte em momentos de crise e luto</li>
          </ul>
        </div>
        <div className="services-image">
          <img 
            src={profissionalImg} 
            alt="Sessão de terapia" 
          />
        </div>
      </div>
    </section>
  );
};

export default Services;