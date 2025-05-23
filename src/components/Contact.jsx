import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        {t('contact.title')}
      </h2>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          {t('contact.text')}
        </p>
        <div className="flex justify-center gap-6 text-blue-600">
          <a
            href="mailto:virginiapoglonig@gmail.com"
            aria-label="Correo electrónico"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-6 h-6 hover:text-blue-800 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/vpoglonig/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6 hover:text-blue-800 transition-colors" />
          </a>
          <a
            href="https://github.com/VpogF"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6 hover:text-blue-800 transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;