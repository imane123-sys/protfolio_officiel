import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SocialGithubIcon, SocialLinkedinIcon } from './TechIcons';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { personal, education, projects } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog max-w-4xl" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Bar */}
        <div className="modal-header">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white text-lg">Curriculum Vitae — {personal.name}</span>
            <span className="text-xs bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-semibold px-2.5 py-0.5 rounded-full">
              Full Stack
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Download Official PDF */}
            <a
              href={personal.cvPdfUrl}
              download={personal.cvFileName}
              className="btn-primary-glow px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 no-underline cursor-pointer"
              title="Télécharger le PDF original"
            >
              <Download size={15} />
              <span>Télécharger PDF</span>
            </a>

            {/* Print / Save View */}
            <button
              type="button"
              onClick={handlePrint}
              className="btn-white-pill px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 cursor-pointer text-slate-800 dark:text-slate-200"
            >
              <Printer size={15} />
              <span>Imprimer</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="modal-close-btn"
              aria-label="Fermer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable CV Content */}
        <div className="modal-body p-6 sm:p-10 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100" id="printable-cv">
          {/* CV Header */}
          <div className="border-b-2 border-slate-100 dark:border-slate-800 pb-6 mb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-1">
              {personal.name}
            </h1>
            <div className="text-lg sm:text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
              {personal.role}
            </div>

            {/* Contact Details Grid */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600 dark:text-slate-300">
              <span className="flex items-center gap-1.5">
                <Phone size={14} className="text-indigo-600 dark:text-indigo-400" />
                {personal.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <Mail size={14} className="text-indigo-600 dark:text-indigo-400" />
                {personal.email}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-indigo-600 dark:text-indigo-400" />
                {personal.location}
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <SocialGithubIcon size={14} />
                {personal.githubUsername}
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-indigo-600 dark:text-indigo-400 hover:underline"
              >
                <SocialLinkedinIcon size={14} />
                {personal.linkedinUsername}
              </a>
            </div>
          </div>

          {/* Profil Section */}
          <div className="mb-6">
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              Profil Professionnel
            </h2>
            <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-xl border border-slate-100 dark:border-slate-800">
              {personal.bio}
            </p>
          </div>

          {/* Compétences Techniques */}
          <div className="mb-6">
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              Compétences Techniques
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block text-xs uppercase text-indigo-600 dark:text-indigo-400 mb-1">Langages & Frontend</strong>
                <span>Java, JavaScript (ES6+), React.js, Bootstrap, HTML5/CSS3</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block text-xs uppercase text-indigo-600 dark:text-indigo-400 mb-1">Backend & APIs</strong>
                <span>Spring Boot, Spring Security, JWT, API REST, JPA / Hibernate</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block text-xs uppercase text-indigo-600 dark:text-indigo-400 mb-1">Bases de Données & Cache</strong>
                <span>MySQL, MongoDB, Redis, Flyway (DB Migration)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block text-xs uppercase text-indigo-600 dark:text-indigo-400 mb-1">DevOps, Tests & Méthodes</strong>
                <span>Docker, CI/CD (GitHub Actions), JUnit 5, Git/GitHub, Swagger, Postman, Agile/Scrum, UML</span>
              </div>
            </div>
          </div>

          {/* Expériences Professionnelles & Projets */}
          <div className="mb-6">
            <h2 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
              Expériences Professionnelles & Réalisations
            </h2>
            <div className="space-y-4">
              {projects.slice(0, 2).map((proj) => (
                <div key={proj.id} className="border-l-2 border-indigo-600 pl-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-slate-900 dark:text-white text-base">
                      {proj.title} — {proj.subtitle}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1 mb-2 leading-relaxed">
                    {proj.summary}
                  </p>
                  <div className="text-xs text-slate-600 dark:text-slate-400">
                    <strong className="text-slate-900 dark:text-white">Technologies : </strong>
                    {proj.technologies.map(t => t.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Formations & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h2 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                Formations
              </h2>
              <div className="space-y-3">
                {education.map((edu, idx) => (
                  <div key={idx} className="text-xs">
                    <div className="font-bold text-slate-900 dark:text-white">{edu.degree}</div>
                    <div className="text-indigo-600 dark:text-indigo-400 font-medium">{edu.institution}</div>
                    <div className="text-slate-500 dark:text-slate-400">{edu.period}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                Certifications & Langues
              </h2>
              <div className="mb-3 text-xs">
                <div className="font-bold text-slate-900 dark:text-white">Certificat de programme d’innovation entrepreneurial</div>
                <div className="text-slate-500 dark:text-slate-400">2023–2025</div>
              </div>
              <div className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                <div><strong>Arabe : </strong>Natif</div>
                <div><strong>Français : </strong>Courant</div>
                <div><strong>Anglais : </strong>Intermédiaire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
