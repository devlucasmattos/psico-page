import React from "react";
import "./Footer.css";
import { Instagram, Facebook, Linkedin } from "lucide-react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">🧠</div>
            <div>
              <h3 className="footer-title">Magda Mattos</h3>
              <p className="footer-subtitle">Psicóloga Clínica</p>
              <p className="footer-crp">CRP 00/00000</p>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">Navegação</h4>
            <ul>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#services">Serviços</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">Dúvidas</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Contato</h4>
            <address>
              <p>(53) 99124-4320</p>
              <p>contato@magdamattos.com</p>
              <p>Seg-Sex: 8h às 19h</p>
              <p>Sábado: 8h às 12h</p>
            </address>
          </div>

          <div className="footer-social">
            <h4 className="footer-heading">Redes Sociais</h4>
            <div className="social-links">
              <a href="https://instagram.com" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {new Date().getFullYear()} Magda Mattos. Todos os direitos reservados.
          </p>
          <p className="developer-credit">
            Desenvolvido por <a href="https://devlucasmattos.com" target="_blank" rel="noopener noreferrer">Lucas Mattos</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;