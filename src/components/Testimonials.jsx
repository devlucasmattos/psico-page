import React from "react";
import "./Testimonials.css";

const Testimonials = ({ darkMode }) => {
  const testimonials = [
    {
      id: 1,
      name: "Ana C.",
      text: "A terapia com a Magda transformou minha vida. Aprendi a lidar com minha ansiedade de forma saudável.",
      role: "Paciente há 1 ano"
    },
    {
      id: 2,
      name: "Carlos M.",
      text: "O atendimento acolhedor e profissional me ajudou a superar um período difícil de depressão.",
      role: "Paciente há 8 meses"
    },
    {
      id: 3,
      name: "Juliana S.",
      text: "As sessões online foram tão eficazes quanto as presenciais. Recomendo muito!",
      role: "Paciente há 6 meses"
    }
  ];

  return (
    <section id="depoimentos" className={`testimonials ${darkMode ? "dark" : "light"}`}>
      <h2>Depoimentos</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
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
    </section>
  );
};

export default Testimonials;