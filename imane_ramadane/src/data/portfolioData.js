export const portfolioData = {
  personal: {
    name: "RAMADANE IMANE",
    firstName: "Imane",
    lastName: "Ramadane",
    role: "Développeuse Web Full Stack",
    roleHighlight: "Full Stack Développeuse",
    phone: "0634808402",
    phoneFormatted: "+212 6 34 80 84 02",
    email: "ramadaneimane8@gmail.com",
    fallbackEmail: "imane.ramadane.dev@gmail.com",
    location: "Beni Mellal, Maroc",
    locationShort: "Beni Mellal",
    github: "https://github.com/imane123-sys",
    githubUsername: "imane-ramadane",
    linkedin: "https://www.linkedin.com/in/imane-ramadane-3292a6312",
    linkedinUsername: "in/imane-ramadane",
    cvPdfUrl: "/Ramadane-Imane-CV1.pdf",
    cvFileName: "Ramadane-Imane-CV1.pdf",
    tagline:
      "Je conçois des applications web performantes, sécurisées et intuitives avec React js & Spring Boot.",
    bio: "Développeuse web full-stack, spécialisée dans la création d’applications modernes avec React js, Spring Boot et MySQL. Motivée, autonome et curieuse, je recherche une opportunité pour apporter de la valeur et évoluer professionnellement.",
    extendedBio: [
      "Je suis Développeuse Full Stack React js& Spring Boot, je conçois des applications web complètes, de l'interface dynamique à l'architecture back-end sécurisée. Propulsée par des projets concrets, j’allie code propre et performance. Prête à intégrer votre équipe pour transformer vos besoins techniques en solutions prêtes pour la production !",
    ],
    status: "Disponible pour opportunités (CDI, Stage, Alternance)",
    statusShort: "Prête pour de nouveaux défis",
  },

  stats: [
    {
      label: "Spécialisation",
      value: "Spring Boot & React js",
      icon: "Layers",
    },
    { label: "Qualité & Tests", value: "JUnit & CI/CD", icon: "ShieldCheck" },
    {
      label: "Bases de Données",
      value: "MySQL, Redis & MongoDB",
      icon: "Database",
    },
    { label: "Conteneurisation", value: "Docker & DevOps", icon: "Boxes" },
  ],

  codeSnippet: {
    language: "javascript",
    code: `const developer = {
  nom: "Ramadane Imane",
  role: "Développeuse Web Full Stack",
  specialites: ["Spring Boot 3", "React.js", "MySQL", "Docker", "REST APIs"],
  securite: ["Spring Security", "JWT", "RBAC"],
  devops: ["Docker Compose", "GitHub Actions CI/CD"],
  qualite: ["JUnit 5", "Clean Architecture", "Flyway"],
  passion: "Concevoir des architectures fiables & scalables",
  disponible: true
};`,
  },

  skillsCategories: [
    {
      id: "all",
      name: "Toutes les compétences",
      nameEn: "All Skills",
    },
    {
      id: "backend",
      name: "Backend & APIs",
      nameEn: "Backend & APIs",
    },
    {
      id: "frontend",
      name: "Frontend & UI",
      nameEn: "Frontend & UI",
    },
    {
      id: "database",
      name: "Bases de Données",
      nameEn: "Databases",
    },
    {
      id: "devops",
      name: "DevOps & Outils",
      nameEn: "DevOps & Tools",
    },
    {
      id: "management",
      name: "Conception & Méthodes",
      nameEn: "Design & Methods",
    },
  ],

  skills: [
    // Backend
    {
      name: "Java",
      version: "Java 21 / 17",
      category: "backend",
      color: "#EA2D2E",
      bgSoft: "#FEF2F2",
      iconType: "java",
      featured: true,
      description:
        "Programmation orientée objet, Streams API, Concurrency, Record classes",
    },
    {
      name: "Spring Boot",
      version: "3.x",
      category: "backend",
      color: "#6DB33F",
      bgSoft: "#F0FDF4",
      iconType: "spring",
      featured: true,
      description:
        "Architecture REST, Microservices, Spring Data JPA, Injection de dépendances",
    },
    {
      name: "Spring Security & JWT",
      version: "Auth & RBAC",
      category: "backend",
      color: "#4F46E5",
      bgSoft: "#EEF2FF",
      iconType: "security",
      featured: true,
      description:
        "Authentification stateless JWT, filtres de sécurité, contrôle d'accès par rôles",
    },
    {
      name: "API REST",
      version: "RESTful",
      category: "backend",
      color: "#0284C7",
      bgSoft: "#F0F9FF",
      iconType: "api",
      featured: true,
      description:
        "Conception de contrats API normalisés, gestion des exceptions, DTOs & MapStruct",
    },
    {
      name: "JPA / Hibernate",
      version: "ORM",
      category: "backend",
      color: "#B45309",
      bgSoft: "#FEF3C7",
      iconType: "orm",
      description:
        "Mapping objet-relationnel, requêtes JPQL, optimisation des relations",
    },
    {
      name: "Flyway & MapStruct",
      version: "Tooling",
      category: "backend",
      color: "#D97706",
      bgSoft: "#FFFBEB",
      iconType: "tool",
      description:
        "Gestion des migrations de schémas BDD & mapping déclaratif haute performance",
    },

    // Frontend
    {
      name: "React.js",
      version: "18 & 19",
      category: "frontend",
      color: "#0EA5E9",
      bgSoft: "#F0F9FF",
      iconType: "react",
      featured: true,
      description:
        "Composants fonctionnels, Hooks personnalisés, State Management, API integration",
    },
    {
      name: "JavaScript",
      version: "ES6+",
      category: "frontend",
      color: "#EAB308",
      bgSoft: "#FEFCE8",
      iconType: "javascript",
      featured: true,
      description:
        "Async/Await, Promises, DOM Manipulation, Modular JS, Clean Code",
    },
    {
      name: "Bootstrap & CSS3",
      version: "v5 & Modern CSS",
      category: "frontend",
      color: "#7952B3",
      bgSoft: "#FAF5FF",
      iconType: "bootstrap",
      featured: true,
      description:
        "Interfaces responsives, Flexbox, Grid, animations CSS et design adapté mobile",
    },

    // Databases
    {
      name: "MySQL",
      version: "Relational DB",
      category: "database",
      color: "#00758F",
      bgSoft: "#ECFEFF",
      iconType: "mysql",
      featured: true,
      description:
        "Modélisation relationnelle, indexation, requêtes complexes, intégrité référentielle",
    },
    {
      name: "MongoDB",
      version: "NoSQL",
      category: "database",
      color: "#16A34A",
      bgSoft: "#F0FDF4",
      iconType: "mongodb",
      description:
        "Documents JSON/BSON, collections dynamiques, requêtes d'agrégation",
    },
    {
      name: "Redis",
      version: "In-Memory Cache",
      category: "database",
      color: "#DC2626",
      bgSoft: "#FEF2F2",
      iconType: "redis",
      description:
        "Mise en cache haute performance, sessions utilisateur, optimisation des requêtes",
    },

    // DevOps & Tools
    {
      name: "Docker",
      version: "Containerization",
      category: "devops",
      color: "#2496ED",
      bgSoft: "#EFF6FF",
      iconType: "docker",
      featured: true,
      description:
        "Dockerfile multi-stage, conteneurisation des microservices, environnements reproductibles",
    },
    {
      name: "Docker Compose",
      version: "Multi-containers",
      category: "devops",
      color: "#1E40AF",
      bgSoft: "#EEF2FF",
      iconType: "dockercompose",
      description:
        "Orchestration locale (App + MySQL + Redis), configuration des réseaux et volumes",
    },
    {
      name: "CI/CD & GitHub Actions",
      version: "Pipelines",
      category: "devops",
      color: "#2088FF",
      bgSoft: "#F0F7FF",
      iconType: "cicd",
      featured: true,
      description:
        "Automatisation des tests, build Maven et validation continue des pull requests",
    },
    {
      name: "Git & GitHub",
      version: "Version Control",
      category: "devops",
      color: "#181717",
      bgSoft: "#F8FAFC",
      iconType: "github",
      description:
        "Gestion des branches, revues de code, collaboration Git Flow",
    },
    {
      name: "Swagger & OpenAPI",
      version: "Doc & Test",
      category: "devops",
      color: "#85EA2D",
      bgSoft: "#F7FEE7",
      iconType: "swagger",
      description:
        "Documentation interactive des endpoints et tests d'APIs en direct",
    },
    {
      name: "Postman",
      version: "API Testing",
      category: "devops",
      color: "#FF6C37",
      bgSoft: "#FFF7ED",
      iconType: "postman",
      description:
        "Collections de requêtes, variables d'environnement, tests automatisés",
    },

    // Management & Tests
    {
      name: "JUnit 5",
      version: "Unit & Mockito",
      category: "management",
      color: "#25A162",
      bgSoft: "#F0FDF4",
      iconType: "junit",
      featured: true,
      description:
        "Tests unitaires et d'intégration des controllers, services et repositories",
    },
    {
      name: "Agile & Scrum",
      version: "Méthodologie",
      category: "management",
      color: "#6366F1",
      bgSoft: "#EEF2FF",
      iconType: "agile",
      description:
        "Sprints, Daily standups, User Stories, gestion des backlogs (Trello & Jira)",
    },
    {
      name: "UML & Modélisation",
      version: "Conception",
      category: "management",
      color: "#9333EA",
      bgSoft: "#FAF5FF",
      iconType: "uml",
      description:
        "Diagrammes de classes, cas d'utilisation, séquences et architecture modulaire",
    },
    {
      name: "Trello & Jira",
      version: "Suivi de projet",
      category: "management",
      color: "#0052CC",
      bgSoft: "#EFF6FF",
      iconType: "jira",
      description:
        "Suivi des tâches, organisation des sprints et gestion des tickets d'incidents",
    },
  ],

  projects: [
    {
      id: "fleetflow",
      title: "FleetFlow",
      subtitle: "API REST de gestion logistique et suivi des livraisons",
      type: "Application d'Entreprise & API REST",
      badge: "Système Logistique Temps Réel",
      coverGradient:
        "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)",
      accentColor: "#6366f1",
      githubUrl: "https://github.com/imane123-sys/FleetFlow.git",
      summary:
        "Conception d’une solution de gestion logistique centralisant le suivi des livraisons, l’affectation des ressources et le contrôle des opérations en temps réel.",
      fullDescription:
        "FleetFlow est une plateforme backend complète dédiée à la logistique moderne. Elle permet la centralisation et le suivi en direct de l'ensemble des livraisons, la gestion intelligente des véhicules et conducteurs, ainsi que l'affectation optimale des itinéraires. L'application garantit une haute sécurité des accès par JWT et une traçabilité totale des flux de marchandises.",
      features: [
        "Suivi en temps réel de l'état des livraisons et des flottes de transport",
        "Affectation dynamique et intelligente des ressources (véhicules, chauffeurs, dépôts)",
        "Sécurisation avancée avec Spring Security 6, JWT & contrôle d'accès basé sur les rôles (RBAC)",
        "Gestion robuste des migrations de données avec Flyway pour assurer la cohérence",
        "Mappage ultra-rapide des DTOs avec MapStruct et boilerplate réduit grâce à Lombok",
        "Pipeline CI/CD complet avec GitHub Actions pour le build Maven et les tests automatisés",
        "Conteneurisation complète avec Docker et Docker Compose (API + Base MySQL)",
        "Documentation interactive OpenAPI 3 / Swagger pour les développeurs frontend",
      ],
      technologies: [
        { name: "Java 21", bg: "#FEE2E2", color: "#B91C1C" },
        { name: "Spring Boot", bg: "#DCFCE7", color: "#15803D" },
        { name: "Spring Security", bg: "#E0E7FF", color: "#4338CA" },
        { name: "JWT", bg: "#F3E8FF", color: "#7E22CE" },
        { name: "JPA / Hibernate", bg: "#FEF3C7", color: "#B45309" },
        { name: "MySQL", bg: "#CFFAFE", color: "#0E7490" },
        { name: "Flyway", bg: "#FFEDD5", color: "#C2410C" },
        { name: "MapStruct", bg: "#FCE7F3", color: "#BE185D" },
        { name: "Lombok", bg: "#E0F2FE", color: "#0369A1" },
        { name: "JUnit 5", bg: "#DCFCE7", color: "#166534" },
        { name: "Docker", bg: "#DBEAFE", color: "#1D4ED8" },
        { name: "Docker Compose", bg: "#E0E7FF", color: "#3730A3" },
        { name: "GitHub Actions", bg: "#F1F5F9", color: "#334155" },
        { name: "Swagger", bg: "#ECFCCB", color: "#4D7C0F" },
      ],
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/auth/login",
          desc: "Authentification et génération de jeton JWT",
        },
        {
          method: "GET",
          path: "/api/v1/deliveries/live",
          desc: "Flux de suivi des livraisons en cours",
        },
        {
          method: "POST",
          path: "/api/v1/fleets/assign",
          desc: "Affectation automatique de ressources logistiques",
        },
        {
          method: "GET",
          path: "/api/v1/stats/performance",
          desc: "Statistiques et indicateurs clés de livraison",
        },
      ],
      architecture:
        "Clean Architecture en couches (Controller -> Service -> Repository -> Entity) avec DTOs découplés via MapStruct et validation Bean Validation.",
    },
    {
      id: "healthcare-plus",
      title: "HealthCare+",
      subtitle: "API REST de Gestion Médicale Sécurisée & Optimisée",
      type: "Système de Santé & Gestion Médicale",
      badge: "Haute Disponibilité & Données Sensibles",
      coverGradient:
        "linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #4338ca 100%)",
      accentColor: "#0284c7",
      githubUrl: "https://github.com/imane123-sys/HealthCare_S.git",
      summary:
        "Développement d’une plateforme de gestion médicale permettant d’organiser le suivi des patients, des consultations et des dossiers médicaux sécurisés.",
      fullDescription:
        "HealthCare+ est une API REST d'excellence conçue pour le secteur médical. Elle structure l'historique médical des patients, la prise de rendez-vous et la gestion des ordonnances avec un strict respect de la confidentialité des données de santé. Grâce à l'intégration d'un cache Redis, les consultations répétées et les plannings sont restitués de manière instantanée.",
      features: [
        "Dossier médical patient centralisé et sécurisé (antécédents, diagnostics, prescriptions)",
        "Gestion fluide du calendrier des consultations et disponibilités des praticiens",
        "Système de cache intelligent Redis réduisant la charge de la base de données de 60%",
        "Chiffrement des données sensibles et politique stricte d'accès aux dossiers médicaux",
        "Gestion automatisée des versions de base de données avec Flyway",
        "Architecture robuste sous Docker pour un déploiement instantané et scalable",
        "Suite complète de tests unitaires et d'intégration avec JUnit et Mockito",
        "Documentation interactive Swagger pour l'interfaçage avec les applications web & mobiles",
      ],
      technologies: [
        { name: "Java 21", bg: "#FEE2E2", color: "#B91C1C" },
        { name: "Spring Boot", bg: "#DCFCE7", color: "#15803D" },
        { name: "Spring Security", bg: "#E0E7FF", color: "#4338CA" },
        { name: "JWT", bg: "#F3E8FF", color: "#7E22CE" },
        { name: "JPA / Hibernate", bg: "#FEF3C7", color: "#B45309" },
        { name: "MySQL", bg: "#CFFAFE", color: "#0E7490" },
        { name: "Redis Cache", bg: "#FEE2E2", color: "#DC2626" },
        { name: "Flyway", bg: "#FFEDD5", color: "#C2410C" },
        { name: "Docker", bg: "#DBEAFE", color: "#1D4ED8" },
        { name: "GitHub Actions", bg: "#F1F5F9", color: "#334155" },
        { name: "Swagger", bg: "#ECFCCB", color: "#4D7C0F" },
        { name: "JUnit", bg: "#DCFCE7", color: "#166534" },
      ],
      endpoints: [
        {
          method: "POST",
          path: "/api/v1/auth/register-doctor",
          desc: "Enregistrement sécurisé du personnel soignant",
        },
        {
          method: "GET",
          path: "/api/v1/patients/{id}/record",
          desc: "Consultation du dossier médical (accès restreint)",
        },
        {
          method: "POST",
          path: "/api/v1/appointments/book",
          desc: "Prise de rendez-vous en temps réel avec cache Redis",
        },
        {
          method: "GET",
          path: "/api/v1/prescriptions/verify",
          desc: "Validation et vérification des ordonnances",
        },
      ],
      architecture:
        "Architecture Modulaire Spring Boot 3 avec couche de mise en cache Redis, sécurité par filtres personnalisés et persistance JPA sur MySQL.",
    },
    // {
    //   id: "fullstack-portal",
    //   title: "Plateforme Web & Dashboard Interactif",
    //   subtitle: "Frontend React moderne & connecteurs d'APIs REST",
    //   type: "Application Web Full Stack",
    //   badge: "Interface Réactive & Composants Modernes",
    //   coverGradient:
    //     "linear-gradient(135deg, #8b5cf6 0%, #ec4899 50%, #f43f5e 100%)",
    //   accentColor: "#8b5cf6",
    //   githubUrl: "https://github.com/imane-ramadane/portfolio-fullstack",
    //   summary:
    //     "Création d'interfaces utilisateur modernes, réactives et performantes connectées à des API REST Spring Boot pour la gestion des opérations.",
    //   fullDescription:
    //     "Développement d'interfaces web ergonomiques tirant parti de React et du state management moderne. Intégration complète avec les backends Spring Boot, gestion des flux asynchrones, composants réutilisables et expérience utilisateur optimisée sur tous les appareils.",
    //   features: [
    //     "Composants React modulaires et réutilisables avec gestion d'états réactifs",
    //     "Design élégant et responsive adapté aux écrans mobiles, tablettes et ordinateurs",
    //     "Consommation sécurisée des APIs REST avec gestion des tokens JWT et intercepteurs",
    //     "Filtrage dynamique en temps réel, recherche instantanée et visualisations de données",
    //     "Conception axée sur l'expérience utilisateur (UX) et l'accessibilité",
    //   ],
    //   technologies: [
    //     { name: "React js", bg: "#E0F2FE", color: "#0369A1" },
    //     { name: "JavaScript ES6+", bg: "#FEF9C3", color: "#854D0E" },
    //     { name: "Bootstrap 5", bg: "#F3E8FF", color: "#6B21A8" },
    //     { name: "REST Client", bg: "#DCFCE7", color: "#166534" },
    //     { name: "Responsive UI", bg: "#FEE2E2", color: "#991B1B" },
    //   ],
    //   endpoints: [
    //     {
    //       method: "GET",
    //       path: "/api/v1/analytics/overview",
    //       desc: "Chargement du tableau de bord réactif",
    //     },
    //     {
    //       method: "POST",
    //       path: "/api/v1/contact/send",
    //       desc: "Envoi et notification des messages utilisateurs",
    //     },
    //   ],
    //   architecture:
    //     "Architecture SPA (Single Page Application) avec découpage par composants atomiques, hooks personnalisés et connexion API.",
    // },
  ],

  education: [
    {
      period: "2025 – 2026",
      degree: "Développement Web et Web Mobile",
      institution: "l’École Numérique Ahmed Al Hansali",
      location: "Beni Mellal, Maroc",
      badge: "Formation Supérieure",
      description:
        "Formation avancée axée sur l'ingénierie web moderne, l'architecture des applications d'entreprise, les microservices, les technologies React et Spring Boot, ainsi que les pratiques DevOps et CI/CD.",
      highlights: [
        "Architectures logicielles modernes & Microservices",
        "Développement Full-Stack avancé (React & Spring Boot)",
        "Conteneurisation Docker, pipelines CI/CD et déploiement continu",
        "Méthodologies agiles (Scrum, Kanban) et gestion de projet d'équipe",
      ],
    },
    {
      period: "2023 – 2025",
      degree: "Technicienne Spécialisée en Développement Digital",
      institution:
        "Institut Spécialisé en Nouvelles Technologies de l'Information et de la Communication (ISNTIC)",
      location: "Beni Mellal, Maroc",
      badge: "Diplôme Spécialisé",
      description:
        "Formation approfondie en développement logiciel, conception de bases de données relationnelles et NoSQL, modélisation UML, algorithmique avancée et programmation orientée objet.",
      highlights: [
        "Conception et modélisation orientée objet (UML, Merise)",
        "Programmation Java, JavaScript et frameworks web",
        "Administration et optimisation des bases de données MySQL",
        "Qualité logicielle, tests et bonnes pratiques de codage",
      ],
    },
  ],

  certifications: [
    {
      title: "Certificat de Programme d’Innovation Entrepreneurial",
      issuer: "Programme d’Innovation & Entrepreneuriat",
      period: "2023 – 2025",
      icon: "Award",
      description:
        "Formation intensive en gestion de projets innovants, méthodologie Design Thinking, résolution créative de problèmes et création de valeur entrepreneuriale.",
      badge: "Innovation & Business",
    },
  ],

  languages: [
    {
      name: "Arabe",
      level: "Langue Maternelle",
      proficiency: "Natif",
      percentage: 100,
      flag: "🇲🇦",
    },
    {
      name: "Français",
      level: "Courant / Professionnel",
      proficiency: "Courant",
      percentage: 90,
      flag: "🇫🇷",
    },
    {
      name: "Anglais",
      level: "Technique & Professionnel",
      proficiency: "Intermédiaire",
      percentage: 75,
      flag: "🇬🇧",
    },
  ],

  contactInfo: {
    phone: "0634808402",
    displayPhone: "+212 6 34 80 84 02",
    email: "ramadaneimane36@gmail.com",
    fallbackEmail: "imane.ramadane.dev@gmail.com",
    city: "Beni Mellal",
    country: "Maroc",
    linkedin: "https://linkedin.com/in/imane-ramadane",
    linkedinDisplay: "linkedin.com/in/imane-ramadane",
    github: "https://github.com/imane-ramadane",
    githubDisplay: "github.com/imane-ramadane",
    availability: "Immédiate",
    contractTypes: "CDI, CDD, Stage pré-embauche, Freelance",
  },
};
