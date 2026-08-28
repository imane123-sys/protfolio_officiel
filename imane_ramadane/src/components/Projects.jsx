import React from 'react';
import { ArrowRight, Terminal, Shield, Activity, Truck, HeartPulse, Laptop } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SocialGithubIcon } from './TechIcons';

export const Projects = ({ onSelectProject }) => {
  const { projects } = portfolioData;

  const getProjectMockupVisual = (project) => {
    if (project.id === 'fleetflow') {
      return (
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="project-preview-badge flex items-center gap-1.5">
              <Activity size={12} className="text-emerald-300" />
              <span>Temps Réel & Logistique</span>
            </span>
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <Truck size={18} className="text-white" />
            </div>
          </div>

          {/* Mini Interactive Tracking UI Mockup */}
          <div className="project-preview-mock">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-700 dark:text-indigo-400 font-bold text-xs">
                #FL
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Livraison #4829 - En route</div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">● Suivi GPS & Chauffeur assigné</div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-indigo-50 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 px-2 py-1 rounded">
              JWT OK
            </span>
          </div>
        </div>
      );
    }

    if (project.id === 'healthcare-plus') {
      return (
        <div className="w-full h-full flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="project-preview-badge flex items-center gap-1.5">
              <Shield size={12} className="text-cyan-300" />
              <span>Données Médicales Sécurisées</span>
            </span>
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
              <HeartPulse size={18} className="text-white" />
            </div>
          </div>

          {/* Mini Medical Portal Mockup */}
          <div className="project-preview-mock">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-sky-100 dark:bg-sky-950 flex items-center justify-center text-sky-700 dark:text-sky-400 font-bold text-xs">
                +HC
              </div>
              <div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Dossier Patient & Consultations</div>
                <div className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">● Cache Redis activé (98ms)</div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold bg-emerald-50 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-300 px-2 py-1 rounded">
              RBAC Auth
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="project-preview-badge flex items-center gap-1.5">
            <Laptop size={12} className="text-pink-300" />
            <span>React + REST Client</span>
          </span>
          <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Laptop size={18} className="text-white" />
          </div>
        </div>

        <div className="project-preview-mock">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-950 flex items-center justify-center text-purple-700 dark:text-purple-400 font-bold text-xs">
              UI
            </div>
            <div>
              <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Dashboard & Composants Réactifs</div>
              <div className="text-[11px] text-purple-600 dark:text-purple-400 font-medium">● Responsive Design & State</div>
            </div>
          </div>
          <span className="text-xs font-mono font-bold bg-purple-50 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300 px-2 py-1 rounded">
            React 19
          </span>
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="site-container">
        {/* Section Header matching imane_insp2.png */}
        <div className="section-header-flex">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold text-xs mb-2 uppercase tracking-wider">
              <Terminal size={14} />
              <span>Réalisations & Projets</span>
            </div>
            <h2 className="section-main-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
          </div>
          <p className="section-sub-title">
            Quelques-unes de mes réalisations logicielles majeures
          </p>
        </div>

        {/* Project Cards Grid matching imane_insp2.png & imane_insp3.png */}
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {/* Graphic Banner Area */}
              <div
                className="project-banner-preview"
                style={{ background: project.coverGradient }}
              >
                {getProjectMockupVisual(project)}
              </div>

              {/* Project Card Content */}
              <div className="project-content-body">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p className="project-summary">{project.summary}</p>

                {/* Pill Tags with distinct colors matching inspiration */}
                <div className="project-tags-scroll">
                  {project.technologies.slice(0, 7).map((tech, idx) => (
                    <span
                      key={idx}
                      className="project-tag-pill"
                      style={{
                        backgroundColor: tech.bg || '#f1f5f9',
                        color: tech.color || '#334155'
                      }}
                    >
                      {tech.name}
                    </span>
                  ))}
                  {project.technologies.length > 7 && (
                    <span className="project-tag-pill bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      +{project.technologies.length - 7} more
                    </span>
                  )}
                </div>

                {/* Action Button Row with Voir Projet + GitHub Link */}
                <div className="project-btn-row mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {/* Voir le Projet Button */}
                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="btn-primary-glow px-5 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <span>Voir le Projet</span>
                      <ArrowRight size={16} />
                    </button>

                    {/* GitHub Code Link beside Voir Button */}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-white-pill px-4 py-2.5 rounded-full font-semibold text-sm flex items-center gap-2 text-slate-700 dark:text-slate-200 no-underline cursor-pointer"
                        title={`Voir le code GitHub de ${project.title}`}
                      >
                        <SocialGithubIcon size={17} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <span className="text-xs font-semibold text-slate-400 hidden sm:inline-block">
                    {project.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
