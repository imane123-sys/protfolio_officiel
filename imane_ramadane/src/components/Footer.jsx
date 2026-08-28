import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SocialGithubIcon, SocialLinkedinIcon } from './TechIcons';

export const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-inner">
          {/* Left Brand */}
          <div className="flex items-center gap-3">
            <div className="logo-badge" style={{ width: '38px', height: '38px', fontSize: '0.95rem' }}>
              &lt;/&gt;
            </div>
            <div>
              <div className="font-extrabold text-slate-900 text-base">
                {personal.name}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                Développeuse Web Full Stack • {personal.locationShort}
              </div>
            </div>
          </div>

          {/* Center Social links */}
          <div className="flex items-center gap-3">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="social-squircle"
              style={{ width: '36px', height: '36px' }}
              aria-label="GitHub"
            >
              <SocialGithubIcon size={17} />
            </a>

            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="social-squircle"
              style={{ width: '36px', height: '36px' }}
              aria-label="LinkedIn"
            >
              <SocialLinkedinIcon size={17} />
            </a>

            <a
              href={`mailto:${personal.email}`}
              className="social-squircle"
              style={{ width: '36px', height: '36px' }}
              aria-label="Email"
            >
              <Mail size={17} />
            </a>

            <a
              href={`tel:${personal.phone}`}
              className="social-squircle"
              style={{ width: '36px', height: '36px' }}
              aria-label="Téléphone"
            >
              <Phone size={17} />
            </a>
          </div>

          {/* Right Action & Copyright */}
          <div className="flex items-center gap-4">
            <span className="footer-copy">
              © {new Date().getFullYear()} {personal.name}. Tous droits réservés.
            </span>

            <button
              type="button"
              onClick={scrollToTop}
              className="social-squircle cursor-pointer"
              title="Retour en haut"
              aria-label="Retour en haut"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
