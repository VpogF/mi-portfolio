import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaJs } from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const CardExperiencia = ({ title, date, isActive, onToggle, technologies, softSkills }) => {

  const { t } = useTranslation();

  return (
    <div
      onClick={onToggle}
      className="border rounded-lg p-4 bg-white dark:bg-gray-800 cursor-pointer transition-shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{date}</p>

      {isActive && (
        <div className="mt-4 space-y-2">
          {/* Tecnologías */}
          {technologies && technologies.length > 0 && (
            <>
            <p className='text-gray-700 dark:text-gray-300'>{t('experience.technologies')}</p>
            <div className="flex flex-wrap gap-4 text-2xl text-blue-600 dark:text-blue-300">
                {technologies.map((Icon, i) => (
                <Icon key={i} className="w-6 h-6" />
                ))}
            </div>
                </>
            )}
          {/* Soft Skills */}
          <p className='text-gray-700 dark:text-gray-300'>Soft Skills</p>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
            {softSkills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CardExperiencia;
