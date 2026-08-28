import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { SocialGithubIcon, SocialLinkedinIcon } from './TechIcons';

export const Contact = ({ onCopyToast }) => {
  const { contactInfo } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    onCopyToast(`${label} copié dans le presse-papier !`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger Confetti Celebration
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Reset after some time
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }, 900);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="site-container">
        {/* Top Connect Bar matching imane_insp4.png */}
        <div className="connect-banner-bar">
          {/* Intro Col */}
          <div className="connect-intro-col">
            <h3 className="connect-main-title">Let's Connect</h3>
            <p className="connect-intro-sub">
              Je suis toujours ouverte aux opportunités professionnelles, projets stimulants et collaborations d'envergure.
            </p>
          </div>

          {/* Email Item */}
          <div
            className="connect-pill-item group"
            onClick={() => handleCopy(contactInfo.email, "Email")}
            title="Cliquez pour copier l'email"
          >
            <div className="connect-icon-box text-indigo-600">
              <Mail size={22} />
            </div>
            <div>
              <div className="connect-item-name">Email</div>
              <div className="connect-item-val">{contactInfo.email}</div>
            </div>
          </div>

          {/* LinkedIn Item */}
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="connect-pill-item group"
          >
            <div className="connect-icon-box text-blue-600">
              <SocialLinkedinIcon size={22} />
            </div>
            <div>
              <div className="connect-item-name">LinkedIn</div>
              <div className="connect-item-val">{contactInfo.linkedinDisplay}</div>
            </div>
          </a>

          {/* GitHub Item */}
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noreferrer"
            className="connect-pill-item group"
          >
            <div className="connect-icon-box text-slate-800">
              <SocialGithubIcon size={22} />
            </div>
            <div>
              <div className="connect-item-name">GitHub</div>
              <div className="connect-item-val">{contactInfo.githubDisplay}</div>
            </div>
          </a>

          {/* Phone / Call Item */}
          <a
            href={`tel:${contactInfo.phone}`}
            className="connect-pill-item group"
          >
            <div className="connect-icon-box text-violet-600">
              <Phone size={22} />
            </div>
            <div>
              <div className="connect-item-name">Call</div>
              <div className="connect-item-val">{contactInfo.displayPhone}</div>
            </div>
          </a>
        </div>

        {/* Contact Form & Information Details */}
        <div className="contact-form-grid">
          <div>
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold text-xs mb-3 uppercase tracking-wider">
                <MessageSquare size={14} />
                <span>Formulaire de Contact</span>
              </div>

              <h2 className="section-main-title mb-2 text-center">
                Envoyez-moi un <span className="gradient-text">Message</span>
              </h2>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center flex flex-col items-center justify-center h-full">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Message Envoyé avec Succès !</h3>
                <p className="text-slate-600 text-sm max-w-sm">
                  Merci {formData.name || 'beaucoup'} pour votre message. Je vous contacterai très prochainement.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="form-group mb-0">
                    <label className="form-label">Votre Nom</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div className="form-group mb-0">
                    <label className="form-label">Votre Email</label>
                    <input
                      type="email"
                      required
                      placeholder="Ex: jean@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group mb-0">
                  <label className="form-label">Sujet</label>
                  <input
                    type="text"
                    placeholder="Ex: Opportunité Développeuse Full Stack"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="form-input"
                  />
                </div>

                <div className="form-group mb-0">
                  <label className="form-label">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Bonjour Imane, nous avons une opportunité qui correspond à votre profil..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-textarea resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary-glow w-full py-3.5 rounded-2xl font-bold flex items-center justify-center gap-2 text-base cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Envoyer le Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
