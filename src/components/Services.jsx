import React from "react";
import "./Services.css";
import profissionalImg from "../assets/profissional.png";
import profissionalDarkImg from "../assets/profissional-dark.png";

const Services = ({ darkMode }) => {
  return (
    <section className={`services ${darkMode ? "dark" : "light"} animate-fade`}>
      <div className="container">
        <div className="grid grid-cols-2 items-center gap-8">
          <div className="services-image">
            <img 
              src={darkMode ? profissionalDarkImg : profissionalImg} 
              alt="Sessão de terapia" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="services-content flex flex-col gap-4">
            <h2>Serviços</h2>
            <p className="text-secondary">
              Ofereço atendimento psicológico online e presencial, utilizando a abordagem da <strong>Terapia Cognitivo-Comportamental (TCC)</strong> para ajudar você a lidar com desafios emocionais e psicológicos.
            </p>
            <ul className="services-list">
              <li>Atendimento para ansiedade e estresse</li>
              <li>Tratamento para depressão</li>
              <li>Orientação profissional e desenvolvimento pessoal</li>
              <li>Acompanhamento para transtornos emocionais</li>
              <li>Suporte em momentos de crise e luto</li>
            </ul>
            <a href="#contato" className="button">
              Agendar Sessão
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;