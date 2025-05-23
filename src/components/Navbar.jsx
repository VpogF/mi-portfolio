import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Sun, Moon, Globe } from 'lucide-react';

const Navbar = () => {
  const { i18n } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex justify-between items-center">

      {/* Botón hamburguesa - solo móvil, a la izquierda */}
      <button
        className="md:hidden text-gray-800 dark:text-gray-100 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          </svg>
        )}
      </button>

      {/* Menú escritorio */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium text-gray-800 dark:text-gray-100">
        <li><a href="#about" onClick={handleLinkClick} className="hover:underline">{i18n.language === 'es' ? 'Sobre mí' : 'About'}</a></li>
        <li><a href="#projects" onClick={handleLinkClick} className="hover:underline">{i18n.language === 'es' ? 'Proyectos' : 'Projects'}</a></li>
        <li><a href="#experience" onClick={handleLinkClick} className="hover:underline">{i18n.language === 'es' ? 'Experiencia' : 'Experience'}</a></li>
        <li><a href="#contact" onClick={handleLinkClick} className="hover:underline">{i18n.language === 'es' ? 'Contacto' : 'Contact'}</a></li>
      </ul>

      {/* Botones idioma y modo oscuro - siempre visibles, a la derecha */}
      <div className="flex space-x-4 items-center">
        <button onClick={toggleLanguage} className="hover:text-blue-600 dark:hover:text-blue-300" title="Cambiar idioma">
          <Globe className="w-5 h-5" />
        </button>

        <button onClick={toggleDarkMode} className="hover:text-blue-600 dark:hover:text-blue-300" title="Modo claro/oscuro">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* Menú lateral móvil */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white dark:bg-gray-900 shadow-lg z-50 flex flex-col p-6 space-y-6 text-gray-800 dark:text-gray-100">
          <a href="#about" onClick={handleLinkClick} className="text-lg font-semibold hover:text-blue-600">{i18n.language === 'es' ? 'Sobre mí' : 'About'}</a>
          <a href="#projects" onClick={handleLinkClick} className="text-lg font-semibold hover:text-blue-600">{i18n.language === 'es' ? 'Proyectos' : 'Projects'}</a>
          <a href="#experience" onClick={handleLinkClick} className="text-lg font-semibold hover:text-blue-600">{i18n.language === 'es' ? 'Experiencia' : 'Experience'}</a>
          <a href="#contact" onClick={handleLinkClick} className="text-lg font-semibold hover:text-blue-600">{i18n.language === 'es' ? 'Contacto' : 'Contact'}</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;