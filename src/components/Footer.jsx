import React from "react";
import "./Footer.css";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Magda Mattos</h3>
          <p>Psicóloga Clínica - CRP 00/00000</p>
          <p>Especialista em Terapia Cognitivo-Comportamental</p>
        </div>
        <div className="footer-section">
          <h3>Links Rápidos</h3>
          <ul>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Redes Sociais</h3>
          <div className="social-icons">
            <a href="https://instagram.com" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Magda Mattos Psicóloga. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;