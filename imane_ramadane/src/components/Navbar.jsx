import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { SunIcon, MoonIcon } from './TechIcons';

export const Navbar = ({ onOpenResume, activeSection, onNavigate, isDarkMode, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil' },
    { id: 'about', label: 'À Propos' },
    { id: 'skills', label: 'Compétences' },
    { id: 'projects', label: 'Projets' },
    { id: 'experience', label: 'Parcours' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="site-container">
        <div className="navbar-inner">
          {/* Brand Logo */}
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="brand-logo">
            <div className="logo-badge">
              &lt;/&gt;
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="brand-name">{portfolioData.personal.name}</span>
                <span className="brand-status-dot" title="Disponible pour de nouvelles opportunités"></span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav>
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`nav-link-item ${activeSection === item.id ? 'active' : ''}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions: Theme Toggle & CV Action */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle Button */}
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={isDarkMode ? "Passer en mode clair" : "Passer en mode sombre"}
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>

            {/* Download/View CV Button */}
            <button
              type="button"
              onClick={onOpenResume}
              className="nav-cta-btn btn-primary-glow"
            >
              <Download size={17} />
              <span>CV / Profil</span>
            </button>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="mobile-nav-link"
            >
              {item.label}
            </a>
          ))}

          <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Thème :</span>
            <button
              type="button"
              onClick={onToggleTheme}
              className="theme-toggle-btn"
              title={isDarkMode ? "Mode clair" : "Mode sombre"}
            >
              {isDarkMode ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="nav-cta-btn btn-primary-glow w-full justify-center mt-2"
          >
            <Download size={17} />
            <span>Voir / Télécharger CV</span>
          </button>
        </div>
      )}
    </header>
  );
};
