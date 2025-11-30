import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
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

  // Array con datos de los proyectos
    const projects = [
    {
      title: 'Cientifiks',
      description: t('proyects.desc-cientifics'),
      link: 'http://cientifiks.erfanribas.me/',
      imageSrc: cientifiksImage,
      videoSrc: cientifiksVideo,
    },
    {
      title: 'Organizen',
      description: t('proyects.desc-organizen'),
      link: 'http://organizen.vpf2024.me/',
      imageSrc: organizenImage,
      videoSrc: organizenVideo,
    },
    {
      title: 'Chill Gig',
      description: t('proyects.desc-chillgig'),
      link: 'https://github.com/TheCheetahGirls-3/melodia-conectada',
      imageSrc: chillgigImage,
      videoSrc: chillgigVideo,
    },
    {
      title: 'Yogamotion',
      description: t('proyects.desc-yogamotion'),
      link: 'https://github.com/VpogF/yogamotion',
      imageSrc: yogamotionImage,
      videoSrc: yogamotionVideo,
    },
  ];
  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10">{t('proyects.title')}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            imageSrc={project.imageSrc}
            videoSrc={project.videoSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
