import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectTags from './ProjectTags';
import ProjectLinks from './ProjectLinks';

const ProjectCard = ({ project, onOpen }) => {
  const { title, summary, tags, demo, code, imageSrc, videoSrc } = project;
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const { t } = useTranslation();

  // Cuando entra el mouse, reproducir video
  const handleMouseEnter = () => {
    setHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  // Cuando sale el mouse, pausar video y ocultarlo
  const handleMouseLeave = () => {
    setHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="bg-white shadow rounded-lg p-4 cursor-pointer flex flex-col transition-shadow hover:shadow-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
    >
      <div className="relative w-full aspect-video mb-4 overflow-hidden rounded-md">
        {/* Imagen de portada */}
        {!hovered && (
          <img
            src={imageSrc}
            alt={`Portada de ${title}`}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        )}
        {/* Video demo */}
        {hovered && (
          <video
            ref={videoRef}
            src={videoSrc}
            className="object-cover w-full h-full"
            muted
            loop
            playsInline
            autoPlay
          />
        )}
      </div>
      <h3 className="text-xl font-semibold mb-1 text-black">{title}</h3>
      <p className="text-gray-600 mb-3">{summary}</p>
      <div className="mb-4">
        <ProjectTags tags={tags} />
      </div>
      <div className="mt-auto flex items-center justify-between">
        <ProjectLinks demo={demo} code={code} />
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpen();
          }}
          className="text-sm font-medium px-3 py-1.5 rounded-md bg-gray-900 text-white hover:bg-gray-700"
        >
          {t('proyects.details')}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
