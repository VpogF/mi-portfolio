import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import foto from '../assets/images/foto.png';
import foto2 from '../assets/images/foto2.jpg';  

const About = () => {
  const { t } = useTranslation();
  const [flipped, setFlipped] = useState(false);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleClick = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setFlipped(!flipped);
      setIsFlipping(false);
    }, 300); // tiempo a mitad del giro
  };

  return (
    <section
      id="about"
      className="min-h-[300px] flex flex-col items-center justify-center text-center px-4 py-20"
    >
      <div
        className={`w-36 h-36 mb-6 rounded-full shadow-lg cursor-pointer flip-coin ${
          isFlipping ? 'flipping' : ''
        }`}
        onClick={handleClick}
      >
        <img
          src={flipped ? foto2 : foto}
          alt="Foto de Virginia"
          className="w-full h-full object-cover rounded-full hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className="text-4xl font-bold mb-2">Virginia Poglonig</h1>
      <h2 className="text-xl text-blue-600 mb-6">{t('about.profession')}</h2>
      <p className="max-w-2xl text-gray-700 text-left leading-relaxed dark:text-gray-200">
        {t('about.text')}
      </p>
    </section>
  );
};

export default About;