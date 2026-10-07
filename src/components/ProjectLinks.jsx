import { useTranslation } from 'react-i18next';

// Enlaces de demo y código; stopPropagation para no abrir el modal al hacer clic
const ProjectLinks = ({ demo, code }) => {
  const { t } = useTranslation();
  const linkClass = 'text-blue-600 dark:text-blue-400 hover:underline';

  return (
    <div className="flex gap-4" onClick={(e) => e.stopPropagation()}>
      {demo && (
        <a href={demo} className={linkClass} target="_blank" rel="noopener noreferrer">
          {t('proyects.demo')}
        </a>
      )}
      {code && (
        <a href={code} className={linkClass} target="_blank" rel="noopener noreferrer">
          {t('proyects.code')}
        </a>
      )}
    </div>
  );
};

export default ProjectLinks;
