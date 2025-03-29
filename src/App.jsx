import { useState, useEffect } from "react";
import './reset.css';
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticlesBackground from "./components/ParticlesBackground";

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Verifica o tema preferido do sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem("theme");
    
    return savedTheme 
      ? savedTheme === "dark"
      : prefersDark;
  });

  useEffect(() => {
    // Aplica o tema ao body
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    
    // Adiciona classe ao html para melhor suporte a dark mode
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main>
        {/* Adiciona o componente de partículas aqui */}
        <ParticlesBackground darkMode={darkMode} />
        
        {/* Envolva cada seção em uma div container para o efeito de sobreposição */}
        <div className="section-container">
          <div className="main-container">
            <Hero darkMode={darkMode} />
          </div>
        </div>
        
        <div className="section-container">
          <div className="main-container">
            <About darkMode={darkMode} />
          </div>
        </div>
        
        <div className="section-container">
          <div className="main-container">
            <Services darkMode={darkMode} />
          </div>
        </div>
        
        <div className="section-container">
          <div className="main-container">
            <Testimonials darkMode={darkMode} />
          </div>
        </div>
        
        <div className="section-container">
          <div className="main-container">
            <FAQ darkMode={darkMode} />
          </div>
        </div>
        
        <div className="section-container">
          <div className="main-container">
            <Contact darkMode={darkMode} />
          </div>
        </div>
      </main>
      
      <Footer darkMode={darkMode} />
    </div>
  );
}