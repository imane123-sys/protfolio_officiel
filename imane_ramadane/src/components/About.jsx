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
                {/* 1. Background circle */}
                <circle cx="100" cy="100" r="85" fill="#EEF2FF" />
                <circle cx="100" cy="100" r="72" fill="#E0E7FF" />

                {/* 2. Long hair back (rounded shape behind shoulders) */}
                <path d="M72 85 C72 55 128 55 128 85 V155 H72 Z" fill="#222035" />

                {/* 3. Neck */}
                <rect x="94" y="112" width="12" height="20" fill="#FED7AA" />

                {/* 4. Shoulders / Body */}
                <path d="M55 165 C55 148 70 138 100 138 C130 138 145 148 145 165 V200 H55 V165 Z" fill="#6366F1" />
                <path d="M85 138 L100 156 L115 138 Z" fill="#FED7AA" />

                {/* 5. Head / Face */}
                <ellipse cx="100" cy="98" rx="26" ry="30" fill="#FED7AA" />

                {/* 6. Face details */}
                {/* Eyes */}
                <circle cx="91" cy="96" r="2.5" fill="#1E293B" />
                <circle cx="109" cy="96" r="2.5" fill="#1E293B" />
                {/* Cheeks blush */}
                <circle cx="83" cy="102" r="3.5" fill="#FCA5A5" opacity="0.6" />
                <circle cx="117" cy="102" r="3.5" fill="#FCA5A5" opacity="0.6" />
                {/* Smile */}
                <path d="M96 106 Q100 110 104 106" stroke="#B45309" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Glasses */}
                <rect x="81" y="90" width="16" height="12" rx="3" stroke="#6366F1" strokeWidth="2" fill="none" />
                <rect x="103" y="90" width="16" height="12" rx="3" stroke="#6366F1" strokeWidth="2" fill="none" />
                <path d="M97 96 H103" stroke="#6366F1" strokeWidth="2" />

                {/* 7. Front hair (bangs and side strands draping down) */}
                {/* Bangs */}
                <path d="M74 85 C74 72 82 66 100 66 C118 66 126 72 126 85 C126 90 122 86 118 82 C108 77 92 77 82 82 C78 86 74 90 74 85 Z" fill="#1E1B4B" />
                {/* Side strands draping forward over shoulders */}
                <path d="M72 85 C72 110 74 142 80 142 C86 142 80 110 80 85 Z" fill="#1E1B4B" />
                <path d="M128 85 C128 110 126 142 120 142 C114 142 120 110 120 85 Z" fill="#1E1B4B" />

                {/* 8. Laptop */}
                <rect x="62" y="142" width="76" height="42" rx="4" fill="#1E293B" stroke="#475569" strokeWidth="2" />
                <rect x="68" y="147" width="64" height="26" rx="2" fill="#0F172A" />
                <rect x="74" y="153" width="30" height="3" rx="1.5" fill="#38BDF8" />
                <rect x="74" y="159" width="40" height="3" rx="1.5" fill="#A78BFA" />
                <rect x="74" y="165" width="20" height="3" rx="1.5" fill="#34D399" />

                {/* 9. Hands holding laptop */}
                <circle cx="68" cy="170" r="5" fill="#FED7AA" />
                <circle cx="132" cy="170" r="5" fill="#FED7AA" />
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
