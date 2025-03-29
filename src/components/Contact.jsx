import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = ({ darkMode }) => {
  return (
    <section id="contato" className={`contact ${darkMode ? "dark" : "light"}`}>
      <h2>Entre em Contato</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <Phone className="contact-icon" />
            <div>
              <h3>Telefone</h3>
              <p>(53) 99124-4320</p>
            </div>
          </div>
          <div className="contact-item">
            <Mail className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>contato@magdamattos.com</p>
            </div>
          </div>
          <div className="contact-item">
            <MapPin className="contact-icon" />
            <div>
              <h3>Endereço</h3>
              <p>Rua Exemplo, 123 - Centro, Pelotas/RS</p>
            </div>
          </div>
          <div className="contact-item">
            <Clock className="contact-icon" />
            <div>
              <h3>Horário de Atendimento</h3>
              <p>Segunda a Sexta: 8h às 19h</p>
              <p>Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form>
            <div className="form-group">
              <input type="text" placeholder="Seu nome" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Seu email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Seu telefone" />
            </div>
            <div className="form-group">
              <textarea placeholder="Sua mensagem" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;