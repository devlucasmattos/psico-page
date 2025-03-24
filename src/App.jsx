import { useState, useEffect } from "react";
import './reset.css';
import "./styles.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Services from "./components/Services"

export default function App() {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") === "dark");

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Services darkMode={darkMode} />
      </main>
    </div>
  );
}
