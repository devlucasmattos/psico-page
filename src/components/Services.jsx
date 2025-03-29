import React from "react";
import "./Services.css";

const Services = ({ darkMode }) => {
  return (
    <section className={`services ${darkMode ? "dark" : "light"}`} id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Nossos Serviços</h2>
          <div className="divider"></div>
          <p className="services-intro">
            Ofereço uma abordagem personalizada de <strong>Terapia Cognitivo-Comportamental</strong> adaptada às suas necessidades individuais, com sessões presenciais e online para maior comodidade.
          </p>
        </div>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🧠</div>
            <h3>Ansiedade e Estresse</h3>
            <p>Técnicas comprovadas para gerenciar preocupações excessivas e sintomas físicos do estresse, ajudando a restaurar o equilíbrio emocional.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💙</div>
            <h3>Depressão</h3>
            <p>Abordagem estruturada para lidar com sintomas depressivos, recuperando o prazer pelas atividades cotidianas.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🌱</div>
            <h3>Desenvolvimento Pessoal</h3>
            <p>Orientação profissional e estratégias para alcançar seu potencial máximo em todas as áreas da vida.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🤝</div>
            <h3>Acompanhamento Terapêutico</h3>
            <p>Suporte contínuo para diversos transtornos emocionais, com plano de tratamento individualizado.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🕊️</div>
            <h3>Processamento do Luto</h3>
            <p>Ajuda especializada para lidar com perdas significativas e reconstruir sua vida com significado.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🧘</div>
            <h3>Mindfulness</h3>
            <p>Técnicas de atenção plena para aumentar sua consciência e reduzir sintomas de ansiedade.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;