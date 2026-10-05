import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardExperiencia from './CardExperiencia';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaJava, FaWordpress, FaGitAlt } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import {
  SiTailwindcss, SiAstro, SiFigma, SiPhp, SiMysql, SiVuedotjs,
  SiNestjs, SiTypescript, SiPostgresql, SiTypeorm, SiClaude, SiJira, SiOracle,
} from 'react-icons/si';

// Iconos en el mismo orden que experience.items en los JSON de traducción
const technologiesByItem = [
  [SiNestjs, SiTypescript, SiPostgresql, SiTypeorm, FaReact, FaGitAlt, SiClaude], // Ethix
  [FaHtml5, FaCss3Alt, FaJs, SiTailwindcss, FaWordpress, SiAstro, SiFigma, SiPhp], // Jelliby
  [SiJira],                                                                         // Sequra
  [FaHtml5, FaCss3Alt, FaJs, FaDocker, FaJava, SiMysql, SiVuedotjs, BsBootstrap, SiFigma, SiPhp], // DAW
  [SiOracle],                                                                       // UTN PL/SQL
  [FaHtml5, FaCss3Alt, FaJs, FaReact, DiNodejs],                                    // Neoland
];

const Experience = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0); // Ethix abierta por defecto

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = t('experience.items', { returnObjects: true });

  return (
    <section id="experience" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">{t('experience.title')}</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {items.map((item, index) => (
          <CardExperiencia
            key={index}
            title={item.title}
            date={item.date}
            tasks={item.tasks}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
            technologies={technologiesByItem[index] || []}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
