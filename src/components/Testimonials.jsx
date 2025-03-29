import React from "react";
import "./Testimonials.css";

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: "Ana C.",
      text: "A terapia com a Magda transformou minha vida. Aprendi a lidar com minha ansiedade de forma saudável e recuperei minha qualidade de vida.",
      role: "Paciente há 1 ano",
      avatar: "👩"
    },
    {
      id: 2,
      name: "Carlos M.",
      text: "O atendimento acolhedor e profissional me ajudou a superar um período difícil de depressão. Hoje me sinto renovado e com novas perspectivas.",
      role: "Paciente há 8 meses",
      avatar: "👨"
    },
    {
      id: 3,
      name: "Juliana S.",
      text: "As sessões online foram tão eficazes quanto as presenciais. A flexibilidade me permitiu continuar o tratamento mesmo viajando a trabalho.",
      role: "Paciente há 6 meses",
      avatar: "👩‍💼"
    }
  ];

  return (
    <section className={`testimonials ${darkMode ? "dark" : "light"}`} id="depoimentos">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2>Depoimentos</h2>
          <div className="divider"></div>
          <p className="testimonials-subtitle">O que meus pacientes dizem sobre o processo terapêutico</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-avatar">{testimonial.avatar}</div>
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-role">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;