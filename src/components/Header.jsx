import { useState, useEffect } from "react";
import "./Header.css";
import { Moon, Sun } from "lucide-react";

const Header = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    const header = document.querySelector('.header');
    header.classList.toggle('menu-open', !menuOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = isMobile ? -70 : -30;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMenuOpen(false);
      document.querySelector('.header').classList.remove('menu-open');
    }
  };

  // URL do WhatsApp adaptada para iOS
  const whatsappUrl = navigator.userAgent.match(/iPhone|iPad|iPod/i) 
    ? 'whatsapp://send?phone=555391039430' 
    : 'https://wa.me/555391039430';

  return (
    <header className={`header ${darkMode ? "dark" : ""} ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
      <div className="header-brand">
        <div className="logo">
          <img 
            src="./icone-semfundo-magda.png" 
            alt="Logo Psicóloga Magda Mattos" 
            className="logo-image"
          />
        </div>
        <div className="name-container">
          <h1 className="name">Magda Mattos</h1>
          <p className="crp">CRP 07/23252</p>
        </div>
      </div>
      
      <div className="nav-content">
        <button 
          className={`menu-toggle ${menuOpen ? "open" : ""}`} 
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""} ${darkMode ? "dark" : ""}`}>
          <div className="nav-items">
            <button onClick={() => scrollToSection("sobre")}>Sobre</button>
            <button onClick={() => scrollToSection("services")}>Serviços</button>
            <button onClick={() => scrollToSection("depoimentos")}>Depoimentos</button>
            <button onClick={() => scrollToSection("faq")}>Saiba mais</button>
            <button onClick={() => scrollToSection("contato")}>Contato</button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
              onClick={(e) => {
                e.preventDefault();
                window.open(whatsappUrl, '_blank');
              }}
            >
              Agende uma sessão
            </a>
          </div>
        </nav>
      </div>
      
      <button 
        className={`dark-mode-btn ${darkMode ? "dark" : "light"}`} 
        onClick={toggleDarkMode}
        aria-label={darkMode ? "Modo claro" : "Modo escuro"}
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>
    </header>
  );
};

export default Header;