import React from 'react';
import { GraduationCap, Award, Globe2, CheckCircle2, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Education = () => {
  const { education, certifications, languages } = portfolioData;

  return (
    <section id="experience" className="section-wrapper">
      <div className="site-container">
        {/* Section Header */}
        <div className="section-header-flex">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-xs mb-2 uppercase tracking-wider">
              <GraduationCap size={14} />
              <span>Formations & Diplômes</span>
            </div>
            <h2 className="section-main-title">
              Parcours Académique & <span className="gradient-text">Compétences</span>
            </h2>
          </div>
          <p className="section-sub-title">
            Mes diplômes, certifications et compétences linguistiques
          </p>
        </div>

        {/* Education Timeline Cards Grid */}
        <div className="timeline-grid mb-10">
          {education.map((item, index) => (
            <div key={index} className="timeline-card">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="timeline-period-badge">{item.period}</span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                  {item.badge}
                </span>
              </div>

              <h3 className="timeline-degree">{item.degree}</h3>
              
              <div className="timeline-school">
                <GraduationCap size={18} />
                <span>{item.institution}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-4">
                <MapPin size={13} className="text-indigo-500" />
                <span>{item.location}</span>
              </div>

              <p className="timeline-desc">{item.description}</p>

              <div className="border-t border-slate-100 pt-3 mt-4">
                <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  Points Clés de la Formation :
                </h5>
                <ul className="timeline-bullets">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="timeline-bullet-item">
                      <CheckCircle2 size={15} className="text-indigo-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications and Languages Grid */}
        <div className="extra-section-grid">
          {/* Certifications Card */}
          <div className="language-progress-box">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-200">
                <Award size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Certifications Obtenues</h3>
                <p className="text-slate-500 text-xs font-medium">Reconnaissance de compétences</p>
              </div>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-100">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">{cert.period}</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mb-1">{cert.title}</h4>
                  <p className="text-xs text-slate-500 font-medium mb-3">{cert.issuer}</p>
                  <p className="text-sm text-slate-600 leading-relaxed">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Card */}
          <div className="language-progress-box">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-200">
                <Globe2 size={22} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Langues Maîtrisées</h3>
                <p className="text-slate-500 text-xs font-medium">Communication internationale & technique</p>
              </div>
            </div>

            <div className="space-y-5">
              {languages.map((lang, index) => (
                <div key={index} className="language-item">
                  <div className="language-header">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{lang.flag}</span>
                      <span className="font-bold text-slate-800">{lang.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                        {lang.proficiency}
                      </span>
                      <span className="text-xs text-slate-400 font-mono font-medium">
                        {lang.percentage}%
                      </span>
                    </div>
                  </div>

                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${lang.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
