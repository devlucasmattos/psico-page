import React, { useState } from "react";
import "./Contact.css";
import { Phone, Mail, Clock } from "lucide-react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  // Limites de caracteres
  const MAX_NAME_LENGTH = 50;
  const MAX_MESSAGE_LENGTH = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Aplicar limites de caracteres
    if (name === 'name' && value.length > MAX_NAME_LENGTH) return;
    if (name === 'message' && value.length > MAX_MESSAGE_LENGTH) return;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `Olá, meu nome é ${formData.name}. ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/5553991244320?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contato" className={`contact ${darkMode ? "dark" : "light"}`}>
      <h2>Entre em Contato</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <Phone className="contact-icon" size={24} />
            <div>
              <h3>Telefone</h3>
              <p>(53) 99124-4320</p>
            </div>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" size={24} />
            <div>
              <h3>Email</h3>
              <p>contato@magdamattos.com</p>
            </div>
          </div>
          <div className="contact-item">
            <Clock className="contact-icon" size={24} />
            <div>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 19h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Seu nome"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                maxLength={MAX_NAME_LENGTH}
              />
              <div className={`character-counter ${formData.name.length === MAX_NAME_LENGTH ? 'limit-reached' : ''}`}>
                {formData.name.length}/{MAX_NAME_LENGTH}
              </div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Sua mensagem"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="form-textarea"
                maxLength={MAX_MESSAGE_LENGTH}
              />
              <div className={`character-counter ${formData.message.length === MAX_MESSAGE_LENGTH ? 'limit-reached' : ''}`}>
                {formData.message.length}/{MAX_MESSAGE_LENGTH}
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Enviar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;