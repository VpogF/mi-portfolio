import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import ProjectTags from './ProjectTags';
import ProjectLinks from './ProjectLinks';

const ProjectModal = ({ project, onClose }) => {
  const { title, summary, description, tags, demo, code, imageSrc, videoSrc } = project;
  const { t } = useTranslation();
  const closeRef = useRef(null);

  // Cerrar con Escape, bloquear el scroll de fondo y enfocar el botón de cerrar
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-lg bg-white dark:bg-gray-900 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label={t('proyects.close')}
          className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          <X className="w-5 h-5" />
        </button>

        <video
          src={videoSrc}
          poster={imageSrc}
          className="w-full aspect-video object-cover rounded-t-lg bg-black"
          muted
          loop
          playsInline
          autoPlay
          controls
        />

        <div className="p-6 space-y-4">
          <h3 id="project-modal-title" className="text-2xl font-bold text-gray-900 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{description || summary}</p>
          <ProjectTags tags={tags} />
          <ProjectLinks demo={demo} code={code} />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
