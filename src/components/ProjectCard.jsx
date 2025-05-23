import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const ProjectCard = ({ title, description, link, imageSrc, videoSrc }) => {
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
      className="bg-white shadow rounded-lg p-4 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-80 mb-4 overflow-hidden rounded-md">
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
      <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
        {t('proyects.see-more')}
      </a>
    </div>
  );
};

export default ProjectCard;
