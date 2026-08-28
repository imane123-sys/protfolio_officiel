import React, { useState } from 'react';
import { Sparkles, CheckCircle, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills = ({ onSelectSkill }) => {
  const { skills, skillsCategories } = portfolioData;
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="section-wrapper">
      <div className="site-container">
        {/* Section Header (matching imane_insp1.png) */}
        <div className="section-header-flex">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-xs mb-2 uppercase tracking-wider">
              <Cpu size={14} />
              <span>Stack Technique</span>
            </div>
            <h2 className="section-main-title">
              My Tech <span className="gradient-text">Stack</span>
            </h2>
          </div>
          <p className="section-sub-title">
            Technologies & Outils que je maîtrise au quotidien
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="category-filter-bar">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`filter-pill ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Squircle Cards Grid (Style matching imane_insp1.png) */}
        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="skill-squircle-card group"
              onClick={() => onSelectSkill && onSelectSkill(skill)}
              title={skill.description}
            >
              <div
                className="skill-icon-container"
                style={{ backgroundColor: skill.bgSoft || '#f8fafc' }}
              >
                <TechIcon name={skill.iconType || skill.name} size={30} />
              </div>

              <div className="skill-card-name">{skill.name}</div>
              <div className="skill-card-sub">{skill.version}</div>
            </div>
          ))}
        </div>

        {/* Feature Highlights Banner */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-indigo-50/70 via-purple-50/70 to-blue-50/70 border border-indigo-100/80 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-200">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-base">Architecture & Bonnes Pratiques</h4>
              <p className="text-slate-600 text-sm">Clean Architecture, Sécurité JWT, Migrations Flyway & Tests automatisés JUnit 5.</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-700 bg-white/80 px-4 py-2 rounded-full border border-indigo-100 shadow-sm">
            <CheckCircle size={14} className="text-emerald-500" />
            <span>Environnement Conteneurisé Docker & CI/CD</span>
          </div>
        </div>
      </div>
    </section>
  );
};
