import React from "react";
import "./Services.css";
import terapiaImage from "../assets/profissional.png"; // Imagem ilustrativa dos serviços

const Services = ({ darkMode }) => {
  return (
    <section className={`services ${darkMode ? "dark" : "light"}`}>
      <div className="services-content">
        <div className="services-image">
          <img src={terapiaImage} alt="Sessão de terapia" />
        </div>
        <div className="services-text">
          <h2>Serviços</h2>
          <p>
            Ofereço atendimento psicológico online e presencial, utilizando a abordagem da <strong>Terapia Cognitivo-Comportamental (TCC)</strong> para ajudar você a lidar com desafios emocionais e psicológicos.
          </p>
          <ul>
            <li>Atendimento para ansiedade e estresse</li>
            <li>Tratamento para depressão</li>
            <li>Orientação profissional e desenvolvimento pessoal</li>
            <li>Acompanhamento para transtornos emocionais</li>
            <li>Suporte em momentos de crise e luto</li>
          </ul>
          <p>Entre em contato e agende sua sessão para iniciar sua jornada de bem-estar.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
