import { useState } from "react";
import "./Header.css";
import { Moon, Sun } from "lucide-react";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <div className="logo">🧠</div>
      <div className="nav-content">
        <h1 className="name">Magda Mattos</h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
          <div className="menu-bar"></div>
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""} ${darkMode ? "dark" : ""}`}>
          <button onClick={() => document.getElementById("sobre").scrollIntoView()}>Sobre</button>
          <button onClick={() => document.getElementById("servicos").scrollIntoView()}>Serviços</button>
          <button onClick={() => document.getElementById("depoimentos").scrollIntoView()}>Depoimentos</button>
          <button onClick={() => document.getElementById("saiba-mais").scrollIntoView()}>Saiba mais</button>
          <a
            href="https://wa.me/5553991244320"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Agende uma sessão
          </a>
        </nav>
      </div>
      
      <button 
        className={`dark-mode-btn ${darkMode ? "dark" : "light"}`} 
        onClick={toggleDarkMode}
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>
    </header>
  );
};

export default Header;
