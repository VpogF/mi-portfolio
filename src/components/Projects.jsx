import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import cientifiksImage from '../assets/images/cientifiks-portada.webp';
import cientifiksVideo from '../assets/videos/cientifiksVideo.mp4';
import organizenImage from '../assets/images/organizen-portada.webp';
import organizenVideo from '../assets/videos/organizenVideo.mp4';
import chillgigImage from '../assets/images/chillgig-portada.webp';
import chillgigVideo from '../assets/videos/chillgigVideo.mp4';
import yogamotionImage from '../assets/images/yogamotion-portada.webp';
import yogamotionVideo from '../assets/videos/yogamotionVideo.mp4';

const Projects = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  // Array con datos de los proyectos
  const projects = [
    {
      title: 'Cientifiks',
      summary: t('proyects.summary-cientifics'),
      description: t('proyects.desc-cientifics'),
      tags: ['PHP', 'MySQL', 'JavaScript', 'PDO'],
      code: 'https://github.com/jorditus99/cient-fiks',
      imageSrc: cientifiksImage,
      videoSrc: cientifiksVideo,
    },
    {
      title: 'Organizen',
      summary: t('proyects.summary-organizen'),
      description: t('proyects.desc-organizen'),
      tags: ['PHP', 'JavaScript', 'MySQL'],
      code: 'https://github.com/VpogF/Herramienta-de-Gestion-de-Proyectos',
      imageSrc: organizenImage,
      videoSrc: organizenVideo,
    },
    {
      title: 'Chill Gig',
      summary: t('proyects.summary-chillgig'),
      description: t('proyects.desc-chillgig'),
      tags: ['Laravel', 'Vue 3', 'MySQL', 'Docker', 'Mapbox'],
      imageSrc: chillgigImage,
      videoSrc: chillgigVideo,
    },
    {
      title: 'Yogamotion',
      summary: t('proyects.summary-yogamotion'),
      description: t('proyects.desc-yogamotion'),
      tags: ['Laravel', 'Vue 3', 'Bootstrap', 'MySQL', 'Docker'],
      code: 'https://github.com/VpogF/yogamotion',
      imageSrc: yogamotionImage,
      videoSrc: yogamotionVideo,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">{t('proyects.title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} onOpen={() => setSelected(project)} />
        ))}
      </div>
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
};

export default Projects;
