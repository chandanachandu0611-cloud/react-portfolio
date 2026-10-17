import React, { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  // State for Dark/Light mode toggle (Bonus requirement)
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
      {/* Navigation / Theme Toggle Bar */}
      <nav className="navbar">
        <span className="logo">Chandana T P</span>
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      {/* Modular Portfolio Components */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;