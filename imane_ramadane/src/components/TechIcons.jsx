import React from 'react';

export const TechIcon = ({ name, size = 32, className = "" }) => {
  switch (name?.toLowerCase()) {
    case 'java':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M7 19c3 1 7 1 10 0" stroke="#EA2D2E" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 21c4 1.5 8 1.5 12 0" stroke="#EA2D2E" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 3c-2 2-3 4-2 6 2-1 3-2 3-3-1-1-1-3-1-3z" fill="#EA2D2E" />
          <path d="M14 6c-2 2-2 4-1 6 2-1 2-2 2-3-1-1-1-3-1-3z" fill="#EA2D2E" />
          <path d="M10 8c-2 2-2 4-1 5 1.5-1 2-1.5 2-2.5-1-.5-1-1.5-1-2.5z" fill="#EA2D2E" />
        </svg>
      );
    case 'spring':
    case 'springboot':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M19.5 4.5c-4.5-1.5-10 1-13 4-3 3-4 8.5-2 11.5 3 2 8.5 1 11.5-2 3-3 5-8.5 3.5-13.5z" fill="#6DB33F" opacity="0.2"/>
          <path d="M19.5 4.5C15 3 9.5 5.5 6.5 8.5c-3 3-4 8.5-2 11.5 3 2 8.5 1 11.5-2 3-3 5-8.5 3.5-13.5z" stroke="#6DB33F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6.5 17.5c2.5-1 7-4 9.5-9" stroke="#6DB33F" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="16" cy="8.5" r="1.5" fill="#6DB33F" />
        </svg>
      );
    case 'react':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="2.5" fill="#0EA5E9" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#0EA5E9" strokeWidth="1.6" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#0EA5E9" strokeWidth="1.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#0EA5E9" strokeWidth="1.6" transform="rotate(120 12 12)" />
        </svg>
      );
    case 'javascript':
    case 'js':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="5" fill="#F7DF1E" />
          <path d="M7 16.5c.5.8 1.4 1.5 2.5 1.5 1.5 0 2.5-.8 2.5-2.2v-5.8h-1.8v5.8c0 .5-.4.8-.8.8-.4 0-.8-.3-1-.6l-1.4.5z" fill="#000" />
          <path d="M14 17.8c1 .6 2.2.9 3.4.9 2.5 0 3.6-1.2 3.6-2.8 0-1.5-.9-2.2-2.7-2.9-1.2-.5-1.7-.8-1.7-1.4 0-.5.4-.9 1.2-.9.8 0 1.5.3 2 .7l1-1.4c-.8-.6-1.8-.9-3-.9-2.2 0-3.4 1.3-3.4 2.7 0 1.5.9 2.2 2.5 2.8 1.3.5 1.8.9 1.8 1.5 0 .6-.5 1-1.4 1-.9 0-1.8-.4-2.4-1l-1 1.4z" fill="#000" />
        </svg>
      );
    case 'mysql':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M3 13c1.5-5 7-9 13-7 3.5 1.2 5 4 5 7 0 4-4 7-9 7s-8-3-9-7z" stroke="#00758F" strokeWidth="1.8" />
          <path d="M12 6c-3 3-4 7-3 10" stroke="#F29111" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M16 8c-2 2-2.5 5-2 7" stroke="#00758F" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case 'docker':
    case 'dockercompose':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="5" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="8" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="11" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="8" y="7" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="11" y="7" width="2" height="2" rx="0.3" fill="#2496ED" />
          <rect x="14" y="10" width="2" height="2" rx="0.3" fill="#2496ED" />
          <path d="M2 13c1 0 2 1 3 1s2-1 3-1 2 1 3 1 2-1 3-1 2 1 3 1 2-1 3-1c.5 3-2 6.5-6 6.5S4 18 2 13z" fill="#2496ED" opacity="0.3" />
          <path d="M2.5 13.5c1.5-1 3-1.5 5-1.5h10.5c1.5 0 2.5 1 3 2.5 1 3-2 6.5-6.5 6.5-4 0-8-3-12-7.5z" stroke="#2496ED" strokeWidth="1.6" />
        </svg>
      );
    case 'mongodb':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2C10.5 5 7 8 7 12.5c0 3.5 2.5 6.5 5 7.5 2.5-1 5-4 5-7.5C17 8 13.5 5 12 2z" fill="#16A34A" opacity="0.2" />
          <path d="M12 2C10.5 5 7 8 7 12.5c0 3.5 2.5 6.5 5 7.5 2.5-1 5-4 5-7.5C17 8 13.5 5 12 2z" stroke="#16A34A" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M12 3v16" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case 'redis':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 3l8 4-8 4-8-4 8-4z" fill="#DC2626" opacity="0.3"/>
          <path d="M12 3l8 4-8 4-8-4 8-4z" stroke="#DC2626" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M4 11l8 4 8-4" stroke="#DC2626" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M4 16l8 4 8-4" stroke="#DC2626" strokeWidth="1.8" strokeLinejoin="round"/>
        </svg>
      );
    case 'bootstrap':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#7952B3" />
          <path d="M8 6h4.5c1.8 0 3 1 3 2.5 0 1-.7 1.8-1.6 2.2 1.2.4 2.1 1.4 2.1 2.8 0 1.8-1.5 3-3.5 3H8V6zm2.8 4.2h1.5c.8 0 1.3-.4 1.3-1.1s-.5-1.1-1.3-1.1h-1.5v2.2zm0 4.3h1.8c.9 0 1.5-.5 1.5-1.2 0-.8-.6-1.2-1.5-1.2h-1.8v2.4z" fill="#FFFFFF" />
        </svg>
      );
    case 'swagger':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#85EA2D" />
          <circle cx="12" cy="12" r="6.5" stroke="#173647" strokeWidth="1.8" fill="#FFF" />
          <circle cx="12" cy="12" r="3" fill="#85EA2D" />
        </svg>
      );
    case 'postman':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" fill="#FF6C37" />
          <path d="M8 12l8-5-4 10-1-3-3-2z" fill="#FFFFFF" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
        </svg>
      );
    case 'security':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M12 2L4 5v6.5C4 16.5 7.5 21 12 22c4.5-1 8-5.5 8-10.5V5l-8-3z" fill="#4F46E5" opacity="0.15"/>
          <path d="M12 2L4 5v6.5C4 16.5 7.5 21 12 22c4.5-1 8-5.5 8-10.5V5l-8-3z" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'api':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="5" width="18" height="14" rx="4" stroke="#0284C7" strokeWidth="1.8"/>
          <path d="M7 12h10M14 9l3 3-3 3M10 15l-3-3 3-3" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'junit':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect width="24" height="24" rx="6" fill="#25A162" />
          <text x="6" y="16" fill="#FFF" fontSize="11" fontWeight="bold" fontFamily="sans-serif">J5</text>
        </svg>
      );
    case 'cicd':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="6" cy="12" r="3" stroke="#2088FF" strokeWidth="2"/>
          <circle cx="18" cy="12" r="3" stroke="#2088FF" strokeWidth="2"/>
          <path d="M9 12h6M13 9l3 3-3 3" stroke="#2088FF" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    case 'agile':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <path d="M21 12a9 9 0 11-9-9c2.5 0 4.8 1 6.5 2.7L21 8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 3v5h-5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'uml':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <rect x="3" y="3" width="8" height="6" rx="1.5" stroke="#9333EA" strokeWidth="1.8"/>
          <rect x="13" y="15" width="8" height="6" rx="1.5" stroke="#9333EA" strokeWidth="1.8"/>
          <path d="M7 9v4a2 2 0 002 2h4" stroke="#9333EA" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
          <circle cx="12" cy="12" r="10" stroke="#6366F1" strokeWidth="2"/>
          <path d="M8 12h8M12 8v8" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
  }
};

export const SocialGithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export const SocialLinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

export const SunIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2"/>
    <path d="M12 20v2"/>
    <path d="M4.93 4.93l1.41 1.41"/>
    <path d="M17.66 17.66l1.41 1.41"/>
    <path d="M2 12h2"/>
    <path d="M20 12h2"/>
    <path d="M6.34 17.66l-1.41 1.41"/>
    <path d="M19.07 4.93l-1.41 1.41"/>
  </svg>
);

export const MoonIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
  </svg>
);
