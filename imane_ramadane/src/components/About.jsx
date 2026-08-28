import React from 'react';
import { FileText, Download, Layers, ShieldCheck, Database, Boxes, Sparkles, UserCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = ({ onOpenResume }) => {
  const { personal, stats } = portfolioData;

  const statIcons = {
    Layers: <Layers size={22} />,
    ShieldCheck: <ShieldCheck size={22} />,
    Database: <Database size={22} />,
    Boxes: <Boxes size={22} />
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="site-container">
        <div className="about-card-container">
          {/* Left Avatar Graphic matching inspiration style */}
          <div className="about-avatar-wrapper">
            <div className="avatar-frame">
              <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background soft circle */}
                <circle cx="100" cy="100" r="85" fill="#EEF2FF" />
                <circle cx="100" cy="100" r="70" fill="#E0E7FF" />
                
                {/* Modern Stylish Developer Character */}
                {/* Hair back */}
                <path d="M50 110C45 80 60 45 100 45C140 45 155 80 150 110C140 145 125 155 100 155C75 155 60 145 50 110Z" fill="#312E81" />
                
                {/* Body / Shoulders */}
                <path d="M45 190C45 160 65 145 100 145C135 145 155 160 155 190V200H45V190Z" fill="#6366F1" />
                <path d="M80 145L100 175L120 145H80Z" fill="#E0E7FF" />
                <path d="M88 152L100 170L112 152H88Z" fill="#FFFFFF" />

                {/* Neck */}
                <path d="M88 120H112V148H88V120Z" fill="#FBBF24" opacity="0.8" />

                {/* Head / Face */}
                <ellipse cx="100" cy="98" rx="34" ry="40" fill="#FED7AA" />
                
                {/* Modern Hair front */}
                <path d="M66 85C66 65 80 50 100 50C120 50 134 65 134 85C134 95 128 100 125 90C120 75 110 70 100 70C90 70 80 75 75 90C72 100 66 95 66 85Z" fill="#1E1B4B" />
                <path d="M66 88C64 105 70 125 78 135C74 125 72 110 74 95L66 88Z" fill="#1E1B4B" />
                <path d="M134 88C136 105 130 125 122 135C126 125 128 110 126 95L134 88Z" fill="#1E1B4B" />

                {/* Eyes & Smile */}
                <circle cx="88" cy="98" r="3.5" fill="#1E293B" />
                <circle cx="112" cy="98" r="3.5" fill="#1E293B" />
                <path d="M92 114C96 119 104 119 108 114" stroke="#B45309" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M82 89C86 87 92 87 94 89" stroke="#1E1B4B" strokeWidth="2" strokeLinecap="round" />
                <path d="M106 89C108 87 114 87 118 89" stroke="#1E1B4B" strokeWidth="2" strokeLinecap="round" />

                {/* Modern Glasses */}
                <rect x="78" y="90" width="18" height="15" rx="4" stroke="#6366F1" strokeWidth="2.5" fill="none" />
                <rect x="104" y="90" width="18" height="15" rx="4" stroke="#6366F1" strokeWidth="2.5" fill="none" />
                <path d="M96 97H104" stroke="#6366F1" strokeWidth="2.5" />

                {/* Laptop preview at bottom */}
                <path d="M60 178L70 156H130L140 178H60Z" fill="#CBD5E1" />
                <rect x="74" y="159" width="52" height="16" rx="2" fill="#0F172A" />
                <circle cx="100" cy="167" r="2.5" fill="#6366F1" />
                <rect x="52" y="178" width="96" height="5" rx="2.5" fill="#94A3B8" />
              </svg>
            </div>

            <div className="avatar-badge-tag">
              <span className="flex items-center gap-1.5">
                <UserCheck size={14} className="text-indigo-600" />
                Développeuse Web Full-Stack
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold text-xs mb-3 uppercase tracking-wider">
              <Sparkles size={14} />
              <span>Profil Professionnel</span>
            </div>

            <h2 className="section-main-title mb-4">
              À Propos de Moi <span className="gradient-text">(About Me)</span>
            </h2>

            <div className="about-bio-text space-y-3">
              {personal.extendedBio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Quick Stat Badges */}
            <div className="about-stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="about-stat-item">
                  <div className="stat-icon-box">
                    {statIcons[stat.icon] || <Layers size={20} />}
                  </div>
                  <div>
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Action Buttons (Voir CV & Télécharger CV PDF officiel) */}
            <div className="about-cta-row">
              <button
                type="button"
                onClick={onOpenResume}
                className="btn-primary-glow px-6 py-3 rounded-full font-semibold flex items-center gap-2 text-sm cursor-pointer"
              >
                <FileText size={17} />
                <span>Voir le CV</span>
              </button>

              <a
                href={personal.cvPdfUrl}
                download={personal.cvFileName}
                className="btn-white-pill px-6 py-3 rounded-full font-semibold flex items-center gap-2 text-sm text-slate-800 dark:text-slate-200 no-underline cursor-pointer"
                title="Télécharger le CV officiel en PDF"
              >
                <Download size={17} />
                <span>Télécharger le CV (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
