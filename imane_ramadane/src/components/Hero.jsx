import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon, SocialGithubIcon, SocialLinkedinIcon } from './TechIcons';

export const Hero = ({ onNavigate, onCopyToast }) => {
  const { personal } = portfolioData;

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(personal.email);
    onCopyToast("Email copié dans le presse-papier !");
  };

  return (
    <section id="home" className="hero-section">
      <div className="site-container">
        <div className="hero-grid">
          {/* Left Column: Introduction & CTA */}
          <div>
            <div className="hero-pill-badge">
              <span className="text-xl">👋</span>
              <span>Bonjour, je suis</span>
            </div>

            <h1 className="hero-heading">
              {personal.name.split(' ')[0]} {personal.name.split(' ')[1]}
              <br />
              Full Stack <span className="gradient-text">Développeuse</span>
            </h1>

            <p className="hero-subtitle">
              {personal.bio}
            </p>

            <div className="hero-actions">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="btn-primary-glow px-7 py-3.5 rounded-full font-semibold flex items-center gap-2.5 text-base cursor-pointer"
              >
                <span>Voir mes projets</span>
                <ArrowRight size={19} />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="btn-white-pill px-7 py-3.5 rounded-full font-semibold text-base cursor-pointer"
              >
                Me contacter
              </button>
            </div>

            {/* Social & Contact Shortcuts */}
            <div className="hero-socials">
              <span className="hero-social-label">Trouvez-moi :</span>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="social-squircle"
                title="GitHub Profile"
                aria-label="GitHub"
              >
                <SocialGithubIcon size={19} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="social-squircle"
                title="LinkedIn Profile"
                aria-label="LinkedIn"
              >
                <SocialLinkedinIcon size={19} />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="social-squircle cursor-pointer"
                title={`Copier l'email: ${personal.email}`}
                aria-label="Email"
              >
                <Mail size={19} />
              </button>

              <a
                href={`tel:${personal.phone}`}
                className="social-squircle"
                title={`Appeler: ${personal.phoneFormatted}`}
                aria-label="Téléphone"
              >
                <Phone size={19} />
              </a>
            </div>
          </div>

          {/* Right Column: Code Card & Orbital Badges (Style matching imane_insp.png) */}
          <div className="hero-visual-container">
            {/* Ambient Radial Glowing Globe */}
            <div className="hero-globe-glow animate-pulse-glow"></div>

            {/* Interactive Code Window Card */}
            <div className="code-window-card animate-float">
              <div className="code-header">
                <div className="traffic-dots">
                  <span className="traffic-dot dot-red"></span>
                  <span className="traffic-dot dot-yellow"></span>
                  <span className="traffic-dot dot-green"></span>
                </div>
                <span className="code-title">imane-developer.config.js</span>
                <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold">
                  ● Active
                </span>
              </div>

              <div className="code-body font-mono-code">
                <div><span className="code-keyword">const</span> <span className="code-var">developer</span> = &#123;</div>
                <div className="pl-4">
                  <span className="code-prop">name</span>: <span className="code-string">"{personal.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="code-prop">role</span>: <span className="code-string">"Full Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="code-prop">stack</span>: [
                  <span className="code-string">"Java 21"</span>, <span className="code-string">"Spring Boot"</span>, <span className="code-string">"React"</span>, <span className="code-string">"MySQL"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="code-prop">security</span>: <span className="code-string">"Spring Security & JWT"</span>,
                </div>
                <div className="pl-4">
                  <span className="code-prop">devops</span>: [<span className="code-string">"Docker"</span>, <span className="code-string">"CI/CD"</span>],
                </div>
                <div className="pl-4">
                  <span className="code-prop">passion</span>: <span className="code-string">"Building robust real-world apps"</span>,
                </div>
                <div className="pl-4">
                  <span className="code-prop">available</span>: <span className="code-bool">true</span>
                </div>
                <div>&#125;;</div>
              </div>
            </div>

            {/* Floating Orbit Badges around the Code Card */}
            <div className="orbit-badge badge-pos-1 animate-float" style={{ animationDelay: '0.2s' }} title="Spring Boot">
              <TechIcon name="spring" size={28} />
            </div>

            <div className="orbit-badge badge-pos-2 animate-float-delayed" style={{ animationDelay: '0.8s' }} title="Java 21">
              <TechIcon name="java" size={26} />
            </div>

            <div className="orbit-badge badge-pos-3 animate-float" style={{ animationDelay: '1.4s' }} title="React.js">
              <TechIcon name="react" size={28} />
            </div>

            <div className="orbit-badge badge-pos-4 animate-float-delayed" style={{ animationDelay: '0.4s' }} title="MySQL">
              <TechIcon name="mysql" size={26} />
            </div>

            <div className="orbit-badge badge-pos-5 animate-float" style={{ animationDelay: '1.9s' }} title="Docker">
              <TechIcon name="docker" size={28} />
            </div>

            <div className="orbit-badge badge-pos-6 animate-float-delayed" style={{ animationDelay: '1.1s' }} title="JavaScript">
              <TechIcon name="javascript" size={24} />
            </div>

            <div className="orbit-badge badge-pos-7 animate-float" style={{ animationDelay: '0.6s' }} title="GitHub">
              <TechIcon name="github" size={24} />
            </div>

            <div className="orbit-badge badge-pos-8 animate-float-delayed" style={{ animationDelay: '1.6s' }} title="API REST">
              <TechIcon name="api" size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
