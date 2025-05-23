import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import CardExperiencia from './CardExperiencia';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaJava, FaWordpress  } from 'react-icons/fa';
import { DiNodejs } from 'react-icons/di';
import { BsBootstrap } from 'react-icons/bs';
import { SiTailwindcss, SiAstro, SiFigma, SiPhp, SiMysql, SiVuedotjs } from 'react-icons/si';
const Experience = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const items = [
    {
      title: t('experience.position'),
      date: t('experience.date'),
      technologies: [FaHtml5, FaCss3Alt, FaJs, SiTailwindcss, FaWordpress , SiAstro, SiFigma, SiPhp ],
      softSkills: t('experience.softSkills', { returnObjects: true }),
    },
    {
      title: t('experience.study-1'),
      date: t('experience.date-1'),
      technologies: [FaHtml5, FaCss3Alt, FaJs, FaDocker, FaJava, SiMysql, SiVuedotjs, BsBootstrap, SiFigma, SiPhp ],
      softSkills: t('experience.softSkills-1', { returnObjects: true }),
    },
    {
      title: t('experience.study-2'),
      date: t('experience.date-2'),
      technologies: [FaHtml5, FaCss3Alt, FaJs, FaReact, DiNodejs],
      softSkills: t('experience.softSkills-2', { returnObjects: true }),
    },
    {
      title: t('experience.study-3'),
      date: t('experience.date-3'),
      technologies: [ ],
      softSkills: t('experience.softSkills-3', { returnObjects: true }),
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">{t('experience.title')}</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {items.map((item, index) => (
          <CardExperiencia
            key={index}
            title={item.title}
            date={item.date}
            isActive={activeIndex === index}
            onToggle={() => handleToggle(index)}
            technologies={item.technologies}
            softSkills={item.softSkills}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;