import React from 'react';
import { X, CheckCircle2, Layers, Terminal, Sparkles, ExternalLink } from 'lucide-react';
import { SocialGithubIcon } from './TechIcons';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const getMethodBadgeColor = (method) => {
    switch (method) {
      case 'GET': return 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300';
      case 'POST': return 'bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300';
      case 'PUT': return 'bg-amber-100 dark:bg-amber-900/60 text-amber-700 dark:text-amber-300';
      case 'DELETE': return 'bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300';
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-dialog max-w-3xl" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-indigo-600"></span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{project.subtitle}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="modal-close-btn"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body space-y-6">
          {/* Banner Overview */}
          <div
            className="p-6 rounded-2xl text-white shadow-md relative overflow-hidden"
            style={{ background: project.coverGradient }}
          >
            <div className="relative z-10">
              <span className="inline-block bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-2">
                {project.badge}
              </span>
              <p className="text-sm sm:text-base leading-relaxed text-white/95">
                {project.fullDescription}
              </p>
            </div>
          </div>

          {/* Key Features List */}
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />
              Fonctionnalités & Points Forts Techniques
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                  <CheckCircle2 size={16} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details */}
          {project.architecture && (
            <div className="p-4 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50">
              <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold text-sm mb-1">
                <Layers size={16} className="text-indigo-600 dark:text-indigo-400" />
                <span>Architecture & Modélisation</span>
              </div>
              <p className="text-xs text-indigo-950/80 dark:text-indigo-200/80 leading-relaxed">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Sample API Endpoints Explorer */}
          {project.endpoints && project.endpoints.length > 0 && (
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                <Terminal size={16} className="text-indigo-600 dark:text-indigo-400" />
                Endpoints Clés de l'API REST
              </h4>
              <div className="space-y-2 font-mono-code text-xs">
                {project.endpoints.map((ep, idx) => (
                  <div key={idx} className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-slate-900 dark:bg-black/70 text-slate-100 border border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded font-bold ${getMethodBadgeColor(ep.method)}`}>
                        {ep.method}
                      </span>
                      <span className="text-slate-200">{ep.path}</span>
                    </div>
                    <span className="text-slate-400 font-sans text-xs">{ep.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags Grid */}
          <div>
            <h4 className="text-sm font-extrabold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
              Stack Technologique Utilisée
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    backgroundColor: tech.bg || '#f1f5f9',
                    color: tech.color || '#334155'
                  }}
                >
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* Modal Footer Actions with Code GitHub Button */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-white-pill px-5 py-2 rounded-full text-sm font-semibold flex items-center gap-2 text-slate-800 dark:text-slate-200"
              >
                <SocialGithubIcon size={17} />
                <span>Voir le Code sur GitHub</span>
                <ExternalLink size={14} className="opacity-70" />
              </a>
            ) : <div />}

            <button
              type="button"
              onClick={onClose}
              className="btn-primary-glow px-6 py-2 rounded-full text-sm font-semibold cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
