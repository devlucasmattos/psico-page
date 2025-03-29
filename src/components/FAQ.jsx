import React, { useState } from "react";
import "./FAQ.css";

const FAQ = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Como funciona a terapia online?",
      answer: "A terapia online é realizada por videoconferência em plataforma segura. Você receberá um link de acesso antes de cada sessão."
    },
    {
      question: "Quantas sessões são necessárias?",
      answer: "O número de sessões varia conforme cada caso. Na primeira consulta faremos uma avaliação e traçaremos um plano de tratamento."
    },
    {
      question: "Qual o valor das sessões?",
      answer: "Os valores são informados durante o agendamento. Oferecemos pacotes com descontos para sessões semanais."
    },
    {
      question: "Como sei se preciso de terapia?",
      answer: "Se você está enfrentando dificuldades emocionais, relacionamentos complicados ou sente que não está vivendo plenamente, a terapia pode ajudar."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`faq ${darkMode ? "dark" : "light"}`}>
      <h2>Perguntas Frequentes</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className={`faq-question ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </button>
            <div 
              className={`faq-answer ${activeIndex === index ? "show" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;