/* =====================================================================
   EDIT HERE
   1. LINKS: fill in your URLs. A link stays hidden until it has a value.
      "cv" and "letter" can be a file next to this page, e.g. "cv-imane-laazibi.pdf".
   2. PROJECTS: add "repo" (GitHub/GitLab URL) and "shots" (screenshots) below.
      shots example: [{ src: "images/pollution-1.png", alt: "Report form" }]
   ===================================================================== */
var LINKS = { github: "https://github.com/seisaww", gitlab: "", linkedin: "", cv: "", letter: "" };
var EMAIL = "laazibiimane101@gmail.com";

var PROJECT_META = [
  { key: "alcateams",  art: "network", tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker"], repo: "https://github.com/alcateams/alcateams", cover: "", shots: [] },
  { key: "pollution",  art: "rings",   tech: ["Angular", "PostgreSQL"],                 repo: "", cover: "", shots: [] },
  { key: "boards",     art: "board",   tech: ["C++"],                                   repo: "", cover: "", shots: [] },
  { key: "pacmanc",    art: "maze",    tech: ["C", "SDL2"],                             repo: "https://github.com/Pacman-C/Pacman", cover: "", shots: [] },
  { key: "pacman",     art: "maze",    tech: ["C#", "Unity"],                           repo: "", cover: "", shots: [] },
  { key: "appcredit",  art: "coins",   tech: ["C#", "VB.NET", "Windows Forms", "SQL Server"], repo: "https://github.com/seisaww/AppCredit", cover: "", shots: [] },
  { key: "androidgames", art: "pad",   tech: ["Android Studio"],                        repo: "", cover: "", shots: [] }
];

/* =====================================================================
   CONTENT (English + French). To add a language, copy one block.
   ===================================================================== */
var C = {
  en: {
    title: "Imane Laazibi | Data & software development",
    desc: "Portfolio of Imane Laazibi, computer science engineering student (CNAM Grand Est) and Data & BI Engineer at Domial.",
    ui: {
      skip: "Skip to content",
      nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_certs: "Certifications", nav_contact: "Contact",
      theme_aria: "Switch between dark and light theme", lang_btn: "FR", lang_aria: "Passer le site en français",
      hero_role: "Computer science engineering student. Data and software development.",
      hero_intro: "I build reliable data pipelines and the applications that rely on them. I currently work as a Data & BI Engineer at Domial on a work-study contract, alongside my engineering degree at CNAM Grand Est.",
      hero_status: "Looking for a 9-week international internship in data or software development, from July to October 2028.",
      cta_projects: "See my projects", cta_contact: "Get in touch",
      about_title: "How I got into data",
      about_p1: "I started out in a management-focused STMG track, with no background in computing. Discovering programming changed my path: I enrolled in a BTS in software development (SIO, SLAM option) and graduated with an average of 16/20 in the exams.",
      about_p2: "That result got me into the engineering programme at CNAM Grand Est, which I follow on a work-study basis. At Domial I work with data every day: ETL migration, data quality, BI reporting and compliance.",
      facts: [
        ["Studying", "Engineering degree in Computer Science, Information Systems track (2025 to 2028)"],
        ["Working", "Data & BI Engineer, work-study at Domial (Colmar)"],
        ["Languages", "French (native), English (B2)"],
        ["Based in", "Strasbourg, France"]
      ],
      tl_title: "Experience and education",
      skills_title: "Tools and skills",
      projects_title: "Selected projects",
      prev_aria: "Previous project", next_aria: "Next project", open_hint: "See details",
      d_context: "Context and goal", d_role: "My role", d_features: "Main features", d_tech: "Technologies", d_shots: "Screenshots", d_code: "View the code", d_close: "Close", d_shot_ph: "Screenshot coming soon",
      certs_title: "Certifications",
      contact_title: "Let's talk",
      contact_intro: "I'm looking for a 9-week international internship in data or software development, from July to October 2028. Send me a message or find me through the links below.",
      f_name: "Name", f_email: "Email", f_msg: "Message", f_send: "Send message",
      f_ok: "Message sent. I'll get back to you as soon as I can.",
      f_fallback: "The message couldn't be sent directly, so your email app will open instead.",
      l_github: "GitHub", l_gitlab: "GitLab", l_linkedin: "LinkedIn", l_cv: "Download my CV", l_letter: "Cover letter",
      foot_done: "Pipeline complete.", foot_thanks: "Thanks for reading."
    },
    timeline: [
      { date: "Aug 2025 to present", title: "Data & BI Engineer (work-study)", where: "Domial, Colmar", bullets: [
        "Led a year-long migration of data integration workflows from Qlik to Talend (ETL).",
        "Built metadata-driven Talend jobs and scripts to automate and standardise data pipelines.",
        "Improved data quality by cleaning datasets and adding automated checks that flag inconsistent data.",
        "Designed and delivered BI reports for several business teams.",
        "Contributed to data compliance, secure storage and security best practices."
      ] },
      { date: "2025 to 2028 (expected)", title: "Engineering degree in Computer Science, Information Systems track", where: "CNAM Grand Est, Strasbourg" },
      { date: "Jan to Feb 2025", title: "Web developer intern", where: "Luence, Strasbourg", text: "Redesigned the company website with WordPress and Elementor." },
      { date: "2023 to 2025", title: "BTS SIO, SLAM option (two-year degree in software development)", where: "Lycée René Cassin, Strasbourg", text: "Graduated with an average of 16/20 in the exams." },
      { date: "Before 2023", title: "STMG baccalaureate", where: "Management and business track" }
    ],
    skills: [
      { g: "Data & BI", items: ["SQL", "SQL Server", "PostgreSQL", "MongoDB", "Talend (ETL)", "Qlik", "Power BI", "Data quality", "Data governance"] },
      { g: "Programming", items: ["Python", "C#", "VB.NET", "C / C++", "TypeScript", "JavaScript", "PHP", "HTML / CSS"] },
      { g: "Software design", items: ["Object-oriented design", "SOLID principles", "Design patterns"] },
      { g: "Web & mobile", items: ["Angular", "React", "Node.js", "Android", "WordPress", "CodeIgniter"] },
      { g: "Systems & tools", items: ["Linux", "Windows", "Active Directory", "Git / GitHub", "Docker", "Unity", "Agile (Scrum)", "Packet Tracer"] }
    ],
    projects: {
      alcateams: {
        name: "ALCATeams", kind: "Project for Alcatel",
        desc: "An enterprise social network that extends Alcatel's Rainbow collaboration platform.",
        context: "Project carried out for Alcatel. The goal was to extend Rainbow with an enterprise social network, where employees are organised into communities and can exchange and search messages.",
        role: "I took part in building the application as a member of a development team.",
        features: ["Communities with member roles and sub-groups", "Messages synchronised with Rainbow", "Full-text message search with Meilisearch", "Back end with a PostgreSQL database managed through Prisma, running in Docker"]
      },
      pollution: {
        name: "Air pollution reporting app", kind: "Individual project",
        desc: "A full-stack web app for reporting air pollution incidents.",
        context: "Academic project. The goal was to build a complete application, from the interface to the database, where users can report pollution incidents and have them stored in a structured way.",
        role: "Individual project: I designed and built the whole application, from the Angular interface to the PostgreSQL database.",
        features: ["Users report pollution incidents", "Reports are stored in a PostgreSQL database"]
      },
      boards: {
        name: "Board game platform", kind: "Team project, 4 people",
        desc: "A C++ platform hosting several classic board games.",
        context: "Academic team project. The goal was to implement several games using object-oriented design and the SOLID principles.",
        role: "Member of a team of four.",
        features: ["Checkers", "Go", "Tic-tac-toe", "Connect 4"]
      },
      pacmanc: {
        name: "Pac-Man in C", kind: "Game in C",
        desc: "A Pac-Man game written in C with SDL2, following the rules of the original arcade version.",
        context: "The goal was to rebuild Pac-Man in C by following the rules of the 1980 arcade game, based on a written development plan covering the maze, the scoring and the ghost behaviour.",
        role: "I developed the game in C with the SDL2 library, split into modules: map, entities, ghost AI, rendering and audio.",
        features: ["Maze with warp tunnels, pellets and power pellets", "Ghost AI with alternating scatter and chase modes", "Lives, scoring and bonus fruits that change with the level", "Sprite rendering and sound with SDL2"]
      },
      pacman: {
        name: "Pac-Man in Unity", kind: "Team project, 4 people",
        desc: "A team recreation of the original arcade game in Unity.",
        context: "Academic team project. The goal was to recreate a classic arcade game as a group of four.",
        role: "Member of a team of four.",
        features: ["Recreation of the original game with Unity and C#"]
      },
      appcredit: {
        name: "AppCredit", kind: "Desktop application",
        desc: "A Windows loan simulator that calculates monthly payments and saves credits in a SQL Server database.",
        context: "The goal was to build a desktop application that simulates a loan from its amount, duration and annual rate, then records the credit and its client in a database.",
        role: "I developed the application in C# with Windows Forms, a VB.NET class library for the calculation and a SQL Server database.",
        features: ["Monthly payment calculation from the amount, duration and annual rate", "A separate window to review and register credits", "A SQL Server stored procedure that creates the client if needed and rejects credits of 60,000 or more, inside a transaction"]
      },
      androidgames: {
        name: "Android mini-games", kind: "Mobile application",
        desc: "A collection of mini-games developed for Android.",
        context: "The goal was to learn mobile development with Android Studio by building small games.",
        role: "I designed and developed the games.",
        features: ["Several mini-games for Android"]
      }
    },
    certs: [
      { year: "2025", name: "Cisco DevNet Associate", text: "API development, network automation, Python and DevOps tools (Git, REST, JSON)." },
      { year: "2024", name: "Cisco Cybersecurity Essentials", text: "Cybersecurity fundamentals: threats and attack techniques, data protection and confidentiality, securing an organisation." }
    ]
  },

  fr: {
    title: "Imane Laazibi | Data et développement logiciel",
    desc: "Portfolio d'Imane Laazibi, élève ingénieure en informatique (CNAM Grand Est) et Data & BI Engineer chez Domial.",
    ui: {
      skip: "Aller au contenu",
      nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences", nav_projects: "Projets", nav_certs: "Certifications", nav_contact: "Contact",
      theme_aria: "Basculer entre le thème sombre et le thème clair", lang_btn: "EN", lang_aria: "Switch the site to English",
      hero_role: "Élève ingénieure en informatique. Data et développement logiciel.",
      hero_intro: "Je construis des pipelines de données fiables et les applications qui s'appuient dessus. Je suis actuellement Data & BI Engineer chez Domial, en alternance, en parallèle de mon cycle ingénieur au CNAM Grand Est.",
      hero_status: "Je recherche un stage international de 9 semaines en data ou en développement logiciel, de juillet à octobre 2028.",
      cta_projects: "Voir mes projets", cta_contact: "Me contacter",
      about_title: "Comment je suis arrivée à la data",
      about_p1: "J'ai commencé par un bac STMG, orienté gestion, sans aucune base en informatique. En découvrant la programmation, j'ai changé de voie : j'ai intégré un BTS SIO option SLAM (développement logiciel) et je l'ai obtenu avec 16/20 de moyenne aux examens.",
      about_p2: "Ce résultat m'a permis d'entrer en cycle ingénieur au CNAM Grand Est, que je suis en alternance. Chez Domial, je travaille chaque jour sur la donnée : migration d'ETL, qualité des données, reporting BI et conformité.",
      facts: [
        ["En formation", "Cycle ingénieur en informatique, option Systèmes d'information (2025 à 2028)"],
        ["En alternance", "Data & BI Engineer chez Domial (Colmar)"],
        ["Langues", "Français (langue maternelle), anglais (B2)"],
        ["Basée à", "Strasbourg, France"]
      ],
      tl_title: "Expérience et formation",
      skills_title: "Outils et compétences",
      projects_title: "Projets choisis",
      prev_aria: "Projet précédent", next_aria: "Projet suivant", open_hint: "Voir les détails",
      d_context: "Contexte et objectif", d_role: "Mon rôle", d_features: "Fonctionnalités principales", d_tech: "Technologies", d_shots: "Captures d'écran", d_code: "Voir le code", d_close: "Fermer", d_shot_ph: "Capture à venir",
      certs_title: "Certifications",
      contact_title: "Échangeons",
      contact_intro: "Je cherche un stage international de 9 semaines en data ou en développement logiciel, de juillet à octobre 2028. Écrivez-moi ou retrouvez-moi via les liens ci-dessous.",
      f_name: "Nom", f_email: "E-mail", f_msg: "Message", f_send: "Envoyer le message",
      f_ok: "Message envoyé. Je vous répondrai dès que possible.",
      f_fallback: "L'envoi direct a échoué : votre application de messagerie va s'ouvrir.",
      l_github: "GitHub", l_gitlab: "GitLab", l_linkedin: "LinkedIn", l_cv: "Télécharger mon CV", l_letter: "Lettre de motivation",
      foot_done: "Pipeline terminé.", foot_thanks: "Merci de votre lecture."
    },
    timeline: [
      { date: "Depuis août 2025", title: "Data & BI Engineer en alternance", where: "Domial, Colmar", bullets: [
        "Pilotage d'une migration d'un an des flux d'intégration de données de Qlik vers Talend (ETL).",
        "Développement de jobs et de scripts Talend pilotés par les métadonnées, pour automatiser et standardiser les pipelines.",
        "Amélioration de la qualité des données : nettoyage des jeux de données et contrôles automatiques qui détectent les incohérences.",
        "Conception et livraison de rapports BI pour plusieurs équipes métier.",
        "Contribution à la conformité des données, au stockage sécurisé et aux bonnes pratiques de sécurité."
      ] },
      { date: "2025 à 2028 (prévu)", title: "Cycle ingénieur en informatique, option Systèmes d'information", where: "CNAM Grand Est, Strasbourg" },
      { date: "Janv. à févr. 2025", title: "Stagiaire développeuse web", where: "Luence, Strasbourg", text: "Refonte du site web de l'entreprise avec WordPress et Elementor." },
      { date: "2023 à 2025", title: "BTS SIO option SLAM (bac+2 en développement logiciel)", where: "Lycée René Cassin, Strasbourg", text: "Diplôme obtenu avec 16/20 de moyenne aux examens." },
      { date: "Avant 2023", title: "Baccalauréat STMG", where: "Sciences et technologies du management et de la gestion" }
    ],
    skills: [
      { g: "Data & BI", items: ["SQL", "SQL Server", "PostgreSQL", "MongoDB", "Talend (ETL)", "Qlik", "Power BI", "Qualité des données", "Gouvernance des données"] },
      { g: "Programmation", items: ["Python", "C#", "VB.NET", "C / C++", "TypeScript", "JavaScript", "PHP", "HTML / CSS"] },
      { g: "Conception logicielle", items: ["Conception orientée objet", "Principes SOLID", "Design patterns"] },
      { g: "Web et mobile", items: ["Angular", "React", "Node.js", "Android", "WordPress", "CodeIgniter"] },
      { g: "Systèmes et outils", items: ["Linux", "Windows", "Active Directory", "Git / GitHub", "Docker", "Unity", "Agile (Scrum)", "Packet Tracer"] }
    ],
    projects: {
      alcateams: {
        name: "ALCATeams", kind: "Projet pour Alcatel",
        desc: "Un réseau social d'entreprise qui étend la plateforme collaborative Rainbow d'Alcatel.",
        context: "Projet réalisé pour Alcatel. L'objectif était d'étendre Rainbow avec un réseau social d'entreprise, où les employés sont organisés en communautés et peuvent échanger et rechercher des messages.",
        role: "J'ai participé au développement de l'application au sein d'une équipe.",
        features: ["Communautés avec rôles pour les membres et sous-groupes", "Messages synchronisés avec Rainbow", "Recherche plein texte dans les messages avec Meilisearch", "Back end avec une base PostgreSQL gérée via Prisma, exécutée dans Docker"]
      },
      pollution: {
        name: "Application de signalement de la pollution de l'air", kind: "Projet individuel",
        desc: "Une application web full-stack pour signaler des incidents de pollution de l'air.",
        context: "Projet académique. L'objectif était de réaliser une application complète, de l'interface à la base de données, permettant aux utilisateurs de signaler des incidents de pollution et de les conserver de façon structurée.",
        role: "Projet individuel : j'ai conçu et développé toute l'application, de l'interface Angular à la base de données PostgreSQL.",
        features: ["Signalement d'incidents de pollution par les utilisateurs", "Stockage des signalements dans une base PostgreSQL"]
      },
      boards: {
        name: "Plateforme de jeux de plateau", kind: "Projet d'équipe, 4 personnes",
        desc: "Une plateforme C++ qui regroupe plusieurs jeux de plateau classiques.",
        context: "Projet académique en équipe. L'objectif était d'implémenter plusieurs jeux avec la conception orientée objet et les principes SOLID.",
        role: "Membre d'une équipe de quatre personnes.",
        features: ["Jeu de dames", "Go", "Morpion", "Puissance 4"]
      },
      pacmanc: {
        name: "Pac-Man en C", kind: "Jeu en C",
        desc: "Un jeu Pac-Man écrit en C avec SDL2, fidèle aux règles de la version arcade d'origine.",
        context: "L'objectif était de reconstruire Pac-Man en C en suivant les règles du jeu d'arcade de 1980, à partir d'un plan de développement écrit couvrant le labyrinthe, le score et le comportement des fantômes.",
        role: "J'ai développé le jeu en C avec la bibliothèque SDL2, découpé en modules : carte, entités, IA des fantômes, rendu et audio.",
        features: ["Labyrinthe avec tunnels latéraux, pastilles et super-pastilles", "IA des fantômes alternant les modes dispersion et poursuite", "Vies, score et fruits bonus qui changent selon le niveau", "Affichage des sprites et son avec SDL2"]
      },
      pacman: {
        name: "Pac-Man sous Unity", kind: "Projet d'équipe, 4 personnes",
        desc: "Recréation en équipe du jeu d'arcade original avec Unity.",
        context: "Projet académique en équipe. L'objectif était de recréer un jeu d'arcade classique à quatre.",
        role: "Membre d'une équipe de quatre personnes.",
        features: ["Recréation du jeu original avec Unity et C#"]
      },
      appcredit: {
        name: "AppCredit", kind: "Application de bureau",
        desc: "Un simulateur de prêt pour Windows qui calcule les mensualités et enregistre les crédits dans une base SQL Server.",
        context: "L'objectif était de réaliser une application de bureau qui simule un prêt à partir de son montant, de sa durée et de son taux annuel, puis enregistre le crédit et son client dans une base de données.",
        role: "J'ai développé l'application en C# avec Windows Forms, une bibliothèque de classes VB.NET pour le calcul et une base SQL Server.",
        features: ["Calcul de la mensualité à partir du montant, de la durée et du taux annuel", "Une fenêtre dédiée pour consulter et enregistrer les crédits", "Une procédure stockée SQL Server qui crée le client si besoin et refuse les crédits de 60 000 ou plus, dans une transaction"]
      },
      androidgames: {
        name: "Mini-jeux Android", kind: "Application mobile",
        desc: "Une collection de mini-jeux développés pour Android.",
        context: "L'objectif était de découvrir le développement mobile avec Android Studio en réalisant de petits jeux.",
        role: "J'ai conçu et développé les jeux.",
        features: ["Plusieurs mini-jeux pour Android"]
      }
    },
    certs: [
      { year: "2025", name: "Cisco DevNet Associate", text: "Développement d'API, automatisation réseau, Python et outils DevOps (Git, REST, JSON)." },
      { year: "2024", name: "Cisco Cybersecurity Essentials", text: "Fondamentaux de la cybersécurité : menaces et techniques d'attaque, protection et confidentialité des données, sécurisation d'une organisation." }
    ]
  }
};

/* Abstract geometric covers (used until you add a real screenshot as "cover") */
var ART = {
  rings: '<svg class="art" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><circle class="s" cx="250" cy="112" r="28"/><circle class="s" cx="250" cy="112" r="58"/><circle class="s" cx="250" cy="112" r="88"/><circle class="s" cx="250" cy="112" r="118"/><circle class="f" cx="250" cy="112" r="6"/><circle class="f" cx="170" cy="70" r="4"/><circle class="fd" cx="320" cy="150" r="9"/><circle class="f" cx="300" cy="60" r="3"/><circle class="f" cx="205" cy="165" r="3.5"/></svg>',
  maze: '<svg class="art" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path class="s" d="M60 40 H340 V185 H60 Z"/><path class="s" d="M100 80 H200 V130 H100 Z"/><path class="s" d="M240 80 H300 V145 H240 Z"/><path class="s" d="M130 160 H210"/><circle class="f" cx="86" cy="60" r="4"/><circle class="f" cx="126" cy="60" r="4"/><circle class="f" cx="166" cy="60" r="4"/><circle class="f" cx="206" cy="60" r="4"/><circle class="f" cx="246" cy="60" r="4"/><circle class="f" cx="286" cy="60" r="4"/><circle class="f" cx="320" cy="112" r="4"/><circle class="f" cx="220" cy="105" r="4"/><circle class="fd" cx="80" cy="165" r="10"/></svg>',
  board: '<svg class="art" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><g class="s"><path d="M120 30 V195 M175 30 V195 M230 30 V195 M285 30 V195"/><path d="M85 65 H320 M85 112 H320 M85 160 H320"/></g><circle class="f" cx="147" cy="88" r="13"/><circle class="fd" cx="202" cy="136" r="13"/><circle class="f" cx="257" cy="88" r="13"/><circle class="fd" cx="147" cy="184" r="13"/><circle class="f" cx="202" cy="42" r="13"/></svg>',
  network: '<svg class="art" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path class="s" d="M120 70 L210 112 L290 60 M210 112 L160 170 M210 112 L300 160 M120 70 L160 170"/><circle class="fd" cx="210" cy="112" r="14"/><circle class="f" cx="120" cy="70" r="8"/><circle class="f" cx="290" cy="60" r="8"/><circle class="f" cx="160" cy="170" r="8"/><circle class="f" cx="300" cy="160" r="8"/></svg>',
  coins: '<svg class="art" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><ellipse class="s" cx="150" cy="150" rx="46" ry="14"/><ellipse class="s" cx="150" cy="132" rx="46" ry="14"/><ellipse class="s" cx="150" cy="114" rx="46" ry="14"/><ellipse class="s" cx="250" cy="165" rx="46" ry="14"/><ellipse class="s" cx="250" cy="147" rx="46" ry="14"/><ellipse class="s" cx="250" cy="129" rx="46" ry="14"/><ellipse class="s" cx="250" cy="111" rx="46" ry="14"/><ellipse class="s" cx="250" cy="93" rx="46" ry="14"/><circle class="fd" cx="320" cy="60" r="9"/><circle class="f" cx="90" cy="80" r="5"/></svg>',
  pad: '<svg class="art" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect class="s" x="120" y="45" width="160" height="135" rx="18"/><path class="s" d="M150 140 H190 M170 120 V160"/><circle class="f" cx="236" cy="128" r="9"/><circle class="fd" cx="258" cy="150" r="9"/><rect class="s" x="140" y="62" width="120" height="40" rx="4"/><circle class="f" cx="200" cy="82" r="5"/></svg>'
};

/* =====================================================================
   APP
   ===================================================================== */
(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia && matchMedia("(hover: hover) and (pointer: fine)").matches;
  var root = document.documentElement;
  var lang = "en";
  var firstRender = true;
  var io;
  var lastFocus = null;
  var openIndex = -1;

  /* ---------- language ---------- */
  try { lang = localStorage.getItem("lang"); } catch (e) {}
  if (lang !== "fr" && lang !== "en") {
    lang = ((navigator.language || "en").toLowerCase().indexOf("fr") === 0) ? "fr" : "en";
  }
  function ui() { return C[lang].ui; }

  /* ---------- reveal observer ---------- */
  io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

  function watch(scope) {
    $$("[data-reveal], [data-reveal-mask], .skill-row, #pipe", scope).forEach(function (el) {
      if (el.classList.contains("in")) return;
      if (reduce || !firstRender) el.classList.add("in");
      else io.observe(el);
    });
  }
  $$("[data-reveal-mask]").forEach(function (h) { h.classList.add("mask"); });

  /* ---------- rendering ---------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  function renderStatic() {
    var u = ui();
    root.lang = lang;
    document.title = C[lang].title;
    $('meta[name="description"]').setAttribute("content", C[lang].desc);
    $$("[data-i18n]").forEach(function (el) { el.textContent = u[el.getAttribute("data-i18n")] || ""; });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", u[el.getAttribute("data-i18n-aria")] || ""); });
    $$("#railList a").forEach(function (a) { a.setAttribute("aria-label", $(".lab", a).textContent); });
    var lb = $("#langBtn");
    lb.textContent = u.lang_btn;
    lb.setAttribute("aria-label", u.lang_aria);
    lb.setAttribute("lang", lang === "en" ? "fr" : "en");
    $("#facts").innerHTML = u.facts.map(function (f) { return "<li><b>" + esc(f[0]) + "</b>" + esc(f[1]) + "</li>"; }).join("");
  }

  function renderTimeline() {
    var items = C[lang].timeline;
    $("#tl").innerHTML = '<div class="tl-fill"></div>' + items.map(function (it) {
      var body = "";
      if (it.bullets) body = "<ul>" + it.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") + "</ul>";
      else if (it.text) body = "<p>" + esc(it.text) + "</p>";
      return '<article class="tl-item" data-reveal="right"><span class="tl-date">' + esc(it.date) + "</span><h4>" + esc(it.title) +
             '</h4><div class="tl-where">' + esc(it.where) + "</div>" + body + "</article>";
    }).join("");
    onScroll();
  }

  function renderSkills() {
    $("#skillList").innerHTML = C[lang].skills.map(function (s) {
      return '<div class="skill-row"><h3>' + esc(s.g) + '</h3><div class="chips">' +
        s.items.map(function (t, k) { return '<span class="chip" style="--k:' + k + '">' + esc(t) + "</span>"; }).join("") + "</div></div>";
    }).join("");
  }

  function renderProjects() {
    var u = ui();
    $("#track").innerHTML = PROJECT_META.map(function (m, i) {
      var p = C[lang].projects[m.key];
      var cover = m.cover ? '<img src="' + esc(m.cover) + '" alt="" loading="lazy">' : ART[m.art];
      return '<button class="card" type="button" role="listitem" data-i="' + i + '">' +
        '<div class="cover">' + cover + "</div>" +
        '<div class="card-body"><div class="kind">' + esc(p.kind) + "</div><h3>" + esc(p.name) + "</h3><p>" + esc(p.desc) + "</p>" +
        '<div class="tags">' + m.tech.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
        '<span class="more">' + esc(u.open_hint) + "</span></div></button>";
    }).join("");
    updateCarousel();
  }

  function renderCerts() {
    $("#certList").innerHTML = C[lang].certs.map(function (c, i) {
      return '<article class="cert" data-reveal="up" style="--d:' + (i * 0.12) + 's"><div class="year">' + esc(c.year) + "</div><h3>" + esc(c.name) + "</h3><p>" + esc(c.text) + "</p></article>";
    }).join("");
  }

  function renderLinks() {
    var u = ui();
    var defs = [["github", u.l_github], ["gitlab", u.l_gitlab], ["linkedin", u.l_linkedin], ["cv", u.l_cv], ["letter", u.l_letter]];
    $("#links").innerHTML = defs.filter(function (d) { return LINKS[d[0]]; }).map(function (d) {
      var k = d[0];
      var extra = k === "cv" ? " download" : "";
      return '<li><a href="' + esc(LINKS[k]) + '" target="_blank" rel="noopener"' + extra + ">" + esc(d[1]) + "</a></li>";
    }).join("");
  }

  function renderDialog() {
    if (openIndex < 0) return;
    var u = ui(), m = PROJECT_META[openIndex], p = C[lang].projects[m.key];
    var shots = m.shots && m.shots.length
      ? m.shots.map(function (s) { return '<div class="shot"><img src="' + esc(s.src) + '" alt="' + esc(s.alt || "") + '" loading="lazy"></div>'; }).join("")
      : '<div class="shot ph">' + esc(u.d_shot_ph) + '</div><div class="shot ph">' + esc(u.d_shot_ph) + "</div>";
    $("#dlg").innerHTML = '<div class="dlg">' +
      '<button class="close" type="button" aria-label="' + esc(u.d_close) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button>' +
      '<div class="kind">' + esc(p.kind) + '</div><h3 id="dlg-title">' + esc(p.name) + "</h3><p>" + esc(p.desc) + "</p>" +
      "<h4>" + esc(u.d_context) + "</h4><p>" + esc(p.context) + "</p>" +
      "<h4>" + esc(u.d_role) + "</h4><p>" + esc(p.role) + "</p>" +
      "<h4>" + esc(u.d_features) + "</h4><ul>" + p.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      "<h4>" + esc(u.d_tech) + '</h4><div class="tags">' + m.tech.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
      "<h4>" + esc(u.d_shots) + '</h4><div class="shots">' + shots + "</div>" +
      (m.repo ? '<a class="btn" href="' + esc(m.repo) + '" target="_blank" rel="noopener">' + esc(u.d_code) + "</a>" : "") +
      "</div>";
  }

  function renderAll() {
    renderStatic(); renderTimeline(); renderSkills(); renderProjects(); renderCerts(); renderLinks(); renderDialog();
    watch(document);
    firstRender = false;
  }

  /* ---------- theme + language buttons ---------- */
  $("#themeBtn").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    $('meta[name="theme-color"]').setAttribute("content", next === "light" ? "#F5F4FB" : "#07080F");
  });
  $("#langBtn").addEventListener("click", function () {
    lang = lang === "en" ? "fr" : "en";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    renderAll();
  });

  /* ---------- rail: active section + glowing pipeline ---------- */
  var links = $$("#railList a");
  var fill = $("#railFill");
  var mq = window.matchMedia("(max-width: 860px)");
  var activeId = "home";

  function setFill() {
    var a = links.filter(function (l) { return l.getAttribute("data-sec") === activeId; })[0];
    if (!a) return;
    var li = a.parentElement;
    if (mq.matches) {
      fill.style.height = ""; fill.style.width = Math.max(0, li.offsetLeft + li.offsetWidth / 2 - 14) + "px";
    } else {
      fill.style.width = ""; fill.style.height = Math.max(0, li.offsetTop + li.offsetHeight / 2 - 12) + "px";
    }
  }
  function setActive(id) {
    activeId = id;
    links.forEach(function (l) {
      if (l.getAttribute("data-sec") === id) l.setAttribute("aria-current", "true");
      else l.removeAttribute("aria-current");
    });
    setFill();
  }
  var secObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) setActive(en.target.id); });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
  $$("main section").forEach(function (s) { secObs.observe(s); });
  window.addEventListener("resize", setFill);
  setActive("home");

  /* ---------- scroll-linked timeline ---------- */
  var ticking = false;
  function onScroll() {
    var tl = $("#tl");
    if (!tl) return;
    var r = tl.getBoundingClientRect(), vh = window.innerHeight;
    var p = Math.min(1, Math.max(0, (vh * 0.62 - r.top) / r.height));
    tl.style.setProperty("--p", p.toFixed(3));
    $$(".tl-item", tl).forEach(function (it) {
      it.classList.toggle("on", it.getBoundingClientRect().top < vh * 0.62);
    });
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(function () { onScroll(); ticking = false; }); }
  }, { passive: true });

  /* ---------- carousel ---------- */
  var track = $("#track"), prev = $("#prev"), next = $("#next"), count = $("#count");
  function stepSize() {
    var c = $(".card", track);
    if (!c) return 300;
    var gap = parseFloat(getComputedStyle(track).columnGap) || 24;
    return c.getBoundingClientRect().width + gap;
  }
  function updateCarousel() {
    var n = PROJECT_META.length, s = stepSize();
    var i = Math.min(n - 1, Math.round(track.scrollLeft / s));
    count.textContent = (i + 1) + " / " + n;
    prev.disabled = track.scrollLeft < 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  }
  var behavior = function () { return reduce ? "auto" : "smooth"; };
  prev.addEventListener("click", function () { track.scrollBy({ left: -stepSize(), behavior: behavior() }); });
  next.addEventListener("click", function () { track.scrollBy({ left: stepSize(), behavior: behavior() }); });
  track.addEventListener("scroll", function () { requestAnimationFrame(updateCarousel); }, { passive: true });
  window.addEventListener("resize", updateCarousel);

  /* tilt on hover (mouse only) */
  if (finePointer && !reduce) {
    track.addEventListener("pointermove", function (e) {
      var card = e.target.closest ? e.target.closest(".card") : null;
      if (!card) return;
      var r = card.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      card.style.setProperty("--ry", (x * 7).toFixed(2) + "deg");
      card.style.setProperty("--rx", (-y * 7).toFixed(2) + "deg");
      card.style.setProperty("--ty", "-6px");
    });
    track.addEventListener("pointerout", function (e) {
      var card = e.target.closest ? e.target.closest(".card") : null;
      if (!card) return;
      card.style.setProperty("--ry", "0deg"); card.style.setProperty("--rx", "0deg"); card.style.setProperty("--ty", "0px");
    });
  }

  /* ---------- project dialog ---------- */
  var dlg = $("#dlg");
  track.addEventListener("click", function (e) {
    var card = e.target.closest ? e.target.closest(".card") : null;
    if (!card) return;
    lastFocus = card;
    openIndex = parseInt(card.getAttribute("data-i"), 10);
    renderDialog();
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
    document.body.style.overflow = "hidden";
  });
  dlg.addEventListener("click", function (e) {
    if (e.target === dlg || (e.target.closest && e.target.closest(".close"))) dlg.close();
  });
  dlg.addEventListener("close", function () {
    openIndex = -1;
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  });

  /* ---------- contact form ---------- */
  var form = $("#form"), statusEl = $("#formStatus"), sendBtn = $("#send");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    if (data.get("bot-field")) return;
    var u = ui();
    statusEl.textContent = "";
    sendBtn.disabled = true;
    var body = new URLSearchParams(data).toString();
    fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body })
      .then(function (res) {
        if (!res.ok) throw new Error("send failed");
        statusEl.textContent = u.f_ok;
        form.reset();
      })
      .catch(function () {
        statusEl.textContent = u.f_fallback;
        var subject = "Portfolio contact from " + data.get("name");
        var text = data.get("message") + "\n\n" + data.get("name") + " (" + data.get("email") + ")";
        window.location.href = "mailto:" + EMAIL + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(text);
      })
      .then(function () { sendBtn.disabled = false; });
  });

  /* ---------- hero art: pause motion for reduced-motion users ---------- */
  if (reduce) {
    var art = $(".hero-art");
    if (art && art.pauseAnimations) art.pauseAnimations();
  }

  $("#year").textContent = new Date().getFullYear();
  renderAll();
  onScroll();
})();
