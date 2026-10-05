import React from 'react';
import { useTranslation } from 'react-i18next';

const CardExperiencia = ({ title, date, tasks = [], isActive, onToggle, technologies = [] }) => {
  const { t } = useTranslation();

  return (
    <div
      onClick={onToggle}
      className="border rounded-lg p-4 bg-white dark:bg-gray-800 cursor-pointer transition-shadow hover:shadow-md"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{date}</p>

      {isActive && (
        <div className="mt-4 space-y-3">
          {tasks.length > 0 && (
            <>
              <p className="text-gray-700 dark:text-gray-300">{t('experience.tasks')}</p>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                {tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </>
          )}

          {technologies.length > 0 && (
            <>
              <p className="text-gray-700 dark:text-gray-300">{t('experience.technologies')}</p>
              <div className="flex flex-wrap gap-4 text-2xl text-blue-600 dark:text-blue-300">
                {technologies.map((Icon, i) => (
                  <Icon key={i} className="w-6 h-6" />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CardExperiencia;
