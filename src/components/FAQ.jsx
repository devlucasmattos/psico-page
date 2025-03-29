import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a terapia online?",
      answer: "A terapia online é realizada por videoconferência através de plataformas seguras e confiáveis. Você receberá um link de acesso exclusivo antes de cada sessão, podendo participar de qualquer lugar com privacidade total."
    },
    {
      question: "Quantas sessões são necessárias?",
      answer: "O número de sessões varia conforme cada caso e objetivos terapêuticos. Durante nossa primeira consulta faremos uma avaliação detalhada e juntos traçaremos um plano de tratamento personalizado, com revisões periódicas."
    },
    {
      question: "Qual o valor das sessões e formas de pagamento?",
      answer: "Os valores são informados durante o agendamento inicial. Oferecemos pacotes com condições especiais para sessões semanais, além de aceitarmos todas as principais formas de pagamento, incluindo PIX e cartões."
    },
    {
      question: "Como sei se preciso de terapia?",
      answer: "Se você está enfrentando dificuldades emocionais, problemas de relacionamento, estresse persistente, ou simplesmente sente que não está vivendo sua vida plenamente, a terapia pode ser extremamente benéfica. Não espere estar em crise para buscar ajuda."
    },
    {
      question: "Qual a abordagem terapêutica utilizada?",
      answer: "Trabalho principalmente com a Terapia Cognitivo-Comportamental (TCC), uma abordagem científica e focada em soluções, combinando técnicas comprovadas com estratégias personalizadas para cada paciente."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`faq ${darkMode ? "dark" : "light"}`}>
      <div className="faq-container">
        <div className="faq-header">
          <h2>Perguntas Frequentes</h2>
          <div className="divider"></div>
          <p className="faq-subtitle">Tire suas dúvidas sobre o processo terapêutico</p>
        </div>
        
        <div className="faq-content">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button 
                className={`faq-question ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {activeIndex === index ? (
                      <path d="M4 10L8 6L12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    ) : (
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    )}
                  </svg>
                </span>
              </button>
              <div 
                id={`faq-answer-${index}`}
                className={`faq-answer ${activeIndex === index ? "show" : ""}`}
              >
                <div className="faq-answer-content">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;