/* =====================================================================
   EDIT HERE
   1. LINKS: fill in your URLs. A link stays hidden until it has a value.
      "cv" and "letter" can be a file next to this page, e.g. "cv-imane-laazibi.pdf".
   2. PROJECTS: add "repo" (GitHub/GitLab URL) and "shots" (screenshots) below.
      shots example: [{ src: "images/pollution-1.png", alt: "Report form" }]
   3. CERTIFICATIONS: add an entry to "certs" in each language (the carousel adapts).
   ===================================================================== */
var LINKS = { github: "https://github.com/seisaww", gitlab: "", linkedin: "", cv: "", letter: "" };   /* paste your GitLab and LinkedIn URLs here */
var EMAIL = "laazibiimane101@gmail.com";

var PROJECT_META = [
  { key: "pacman", art: "maze", tech: ["C#", "Unity", "ML-Agents", "Reinforcement learning"],
    repo: "https://github.com/CNAM-A1-Pacman/Pacman", cover: "",
    shots: [
      { src: "images/unity/unity3.png", alt: { fr: "Partie en cours", en: "Game in progress" } },
      { src: "images/unity/unity2.png", alt: { fr: "Configuration de la partie et pilote auto (IA)", en: "Game settings and AI autopilot" } },
      { src: "images/unity/unity1.png", alt: { fr: "Éditeur de cartes", en: "Map editor" } }
    ] },
  { key: "alcateams", art: "network", tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Docker"],
    repo: "https://github.com/alcateams/alcateams", cover: "",
    shots: [
      { src: "images/alcateams/alcateams1.png", alt: { fr: "Page de connexion", en: "Login page" } }
    ] },
  { key: "pollution", art: "rings", tech: ["Angular", "NGXS", "Node.js", "Express", "PostgreSQL", "JWT"],
    repo: "https://github.com/seisaww/projet_laazibi_imane", cover: "",
    shots: [
      { src: "images/pollusite/pollusite1.png", alt: { fr: "Formulaire de signalement", en: "Report form" } },
      { src: "images/pollusite/pollusite2.png", alt: { fr: "Liste des signalements", en: "List of reports" } }
    ] },
  { key: "boards", art: "board", tech: ["C++", "Qt 6", "CMake"],
    repo: "https://gitlab.com/jfromageat/cpp_2025", cover: "images/boardgame/boardgame3.png",
    shots: [
      { src: "images/boardgame/boardgame1.png", alt: { fr: "Menu principal", en: "Main menu" } },
      { src: "images/boardgame/boardgame2.png", alt: { fr: "Partie de Puissance 4", en: "Connect 4 game" } },
      { src: "images/boardgame/boardgame3.png", alt: { fr: "Partie d'Othello entre deux IA", en: "Othello game, AI vs AI" } }
    ] },
  { key: "pacmanc", art: "maze", tech: ["C", "SDL2"],
    repo: "https://github.com/Pacman-C/Pacman", cover: "",
    shots: [
      { src: "images/pacmanc/pacmanc1.png", alt: { fr: "Écran d'accueil", en: "Start screen" } },
      { src: "images/pacmanc/pacmanc2.png", alt: { fr: "Partie en cours", en: "Game in progress" } }
    ] },
  
  { key: "androidgames", art: "pad", tech: ["Kotlin", "Jetpack Compose", "Room", "Android Studio"],
    repo: "https://github.com/seisaww/AppMobile_LAAZIBI-Imane", cover: "",
    shots: [
      { src: "images/android/android1.png", alt: { fr: "Menu des jeux", en: "Game menu" } },
      { src: "images/android/android2.png", alt: { fr: "Jeu de précision", en: "Timing game" } },
      { src: "images/android/android3.png", alt: { fr: "Jeu de mots", en: "Word game" } }
    ] },
  { key: "appcredit", art: "coins", tech: ["C#", "VB.NET", "Windows Forms", "SQL Server"],
    repo: "https://github.com/seisaww/AppCredit", cover: "",
    shots: [
      { src: "images/appcredit/appcredit1.png", alt: { fr: "Enregistrement des crédits", en: "Saving credits" } },
      { src: "images/appcredit/appcredit2.png", alt: { fr: "Calcul de la mensualité", en: "Monthly payment calculation" } }
    ] }
];

/* =====================================================================
   CONTENT (English + French). To add a language, copy one block.
   ===================================================================== */
var C = {
  en: {
    title: "Imane Laazibi | Computer science engineering student",
    desc: "Portfolio of Imane Laazibi, computer science engineering student (CNAM Grand Est) and Data & BI Engineer at Domial.",
    ui: {
      skip: "Skip to content",
      nav_home: "Home", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_certs: "Certifications", nav_contact: "Contact",
      theme_aria: "Switch between dark and light theme", lang_btn: "FR", lang_aria: "Passer le site en français",
      hero_role: "Computer science engineering student.",
      hero_intro: "As a Data & BI Engineer at Domial on a work-study contract, I build BI reports for the company's different business teams, set up data quality controls and put a data architecture in place in our data warehouse (DWH). Alongside, I'm working toward my engineering degree at CNAM Grand Est.",
      hero_status: "Looking for an internship abroad of at least 9 weeks, in English or French, in data or software development, from July to October 2028.",
      cta_projects: "See my projects", cta_contact: "Get in touch",
      about_title: "How I met computer science",
      about_p1: "I did an STMG baccalaureate with a marketing option, with a mention assez bien. I enjoyed the Python we did in maths class, so I headed to a BTS in software development (SIO, SLAM option) with no background in computing, and graduated.",
      about_p2: "That result opened the door to the engineering programme at CNAM Grand Est, which I follow on a work-study basis. At Domial, I build BI reports for the different business teams, set up data quality controls and put a data architecture in place in our DWH.",
      facts_title: "Currently",
      facts: [
        ["Studying", "Engineering degree in Computer Science, Information Systems track (2025 to 2028)"],
        ["Working", "Data & BI Engineer, work-study at Domial (Colmar)"],
        ["Languages", "French (native), English (B2 to C1)"],
        ["Based in", "Strasbourg, France"]
      ],
      tl_title: "Experience and education",
      skills_title: "Tools and skills",
      projects_title: "Selected projects",
      prev_aria: "Previous project", next_aria: "Next project", c_prev_aria: "Previous certification", c_next_aria: "Next certification", open_hint: "See details",
      d_context: "Context and goal", d_role: "My role", d_features: "Main features", d_tech: "Technologies", d_shots: "Screenshots", d_code: "View the code", d_close: "Close", d_shot_ph: "Screenshot coming soon", lb_close: "Close", lb_prev: "Previous screenshot", lb_next: "Next screenshot", lb_open: "Enlarge screenshot",
      certs_title: "Certifications",
      contact_title: "Let's talk",
      contact_intro: "I'm looking for an internship abroad of at least 9 weeks, in English or French, in data or software development, from July to October 2028. Send me a message or find me through the links below.",
      f_name: "Name", f_email: "Email", f_msg: "Message", f_send: "Send message",
      f_ok: "Message sent. I'll get back to you as soon as I can.",
      f_fallback: "The message couldn't be sent directly, so your email app will open instead.",
      l_github: "GitHub", l_gitlab: "GitLab", l_linkedin: "LinkedIn", l_cv: "Download my CV", l_letter: "Cover letter",
      circuit_hint: "Drag the devices around, or select one to see its details."
    },
    timeline: [
      { date: "Aug 2025 to present", title: "Data & BI Engineer (work-study)", where: "Domial, Colmar", bullets: [
        "Designing BI reports for the company's different business teams.",
        "Setting up data quality controls.",
        "Putting a data architecture in place in our data warehouse (DWH).",
        "Led a year-long migration of data integration workflows from Qlik to Talend (ETL), with metadata-driven jobs."
      ] },
      { date: "2025 to 2028 (expected)", title: "Engineering degree in Computer Science, Information Systems track", where: "CNAM Grand Est, Strasbourg" },
      { date: "Jan to Feb 2025", title: "Web developer intern", where: "Luence, Strasbourg", text: "Redesigned the company website with WordPress and Elementor." },
      { date: "2023 to 2025", title: "BTS SIO, SLAM option (two-year degree in software development)", where: "Lycée René Cassin, Strasbourg" },
      { date: "Before 2023", title: "STMG baccalaureate, marketing option", where: "Management and business track", text: "Passed with a mention assez bien." }
    ],
    skills: [
      { g: "Data & BI", items: ["SQL", "SQL Server", "PostgreSQL", "MongoDB", "Talend (ETL)", "Qlik", "Power BI", "Data warehouse (DWH)", "Stored procedures", "Data quality", "Data governance"] },
      { g: "Programming", items: ["Python", "C#", "VB.NET", "C", "C++", "Kotlin", "TypeScript", "JavaScript", "PHP", "HTML / CSS"] },
      { g: "Software design", items: ["Object-oriented design", "SOLID principles", "Design patterns", "Project management"] },
      { g: "Web & mobile", items: ["Angular", "React", "Node.js", "Prisma", "Meilisearch", "Android Studio", "Jetpack Compose", "WordPress", "Elementor", "CodeIgniter"] },
      { g: "Desktop & games", items: ["Windows Forms", "Qt", "Unity", "Unity ML-Agents", "SDL2"] },
      { g: "Systems & tools", items: ["Linux", "Windows", "Active Directory", "Git / GitHub", "Docker", "Agile (Scrum)", "Packet Tracer"] }
    ],
    projects: {
      alcateams: {
        name: "ALCATeams", kind: "Team project, 8 people, for Alcatel",
        desc: "An enterprise social network that extends Alcatel's Rainbow collaboration platform.",
        context: "Project carried out for Alcatel. The goal was to extend Rainbow with an enterprise social network, where employees are organised into communities and can exchange and search messages.",
        role: "Member of a team of eight. I mainly worked on the communities: member roles and sub-groups.",
        features: ["Communities with member roles and sub-groups", "Messages synchronised with Rainbow", "Full-text message search with Meilisearch", "Back end with a PostgreSQL database managed through Prisma, running in Docker"]
      },
      pollution: {
        name: "Air pollution reporting app", kind: "Individual project",
        desc: "A full-stack web app for reporting air pollution incidents, with user accounts and favourites.",
        context: "Academic project. The goal was to build a complete application, from the interface to the database, where users can report pollution incidents and have them stored in a structured way.",
        role: "Individual project: I designed and built the whole application, from the Angular interface to the Node.js API and the PostgreSQL database.",
        features: [
          "Report pollution incidents, then browse them in a list with a detail page",
          "Sign-up and login with JWT authentication and passwords hashed with bcrypt",
          "Protected pages (Angular route guard) and an HTTP interceptor that adds the token to every request",
          "Favourite reports managed with NGXS and kept between sessions",
          "REST API in Node.js and Express, with Sequelize on PostgreSQL"
        ]
      },
      boards: {
        name: "Board game platform", kind: "Team project, 4 people",
        desc: "A C++ and Qt platform with four board games, where you can play against a friend, against an AI, or watch two AIs play each other.",
        context: "Academic team project in C++. The goal was to build a single platform for several board games, designed with object-oriented principles and SOLID so that a new game can be added without changing the rest of the code.",
        role: "Member of a team of four. I developed the checkers game and the save system (saving, serialising and loading games), and worked on refactoring and code quality.",
        features: [
          "Four games: tic-tac-toe, Connect 4, Othello and checkers",
          "Three modes: player vs player, player vs AI and AI vs AI",
          "AI opponents built on interchangeable strategies (Strategy pattern)",
          "Save a game at any moment and load it later from the menu",
          "A Qt graphical interface and a console version sharing the same game engine"
        ]
      },
      pacmanc: {
        name: "Pac-Man in C", kind: "Pair project in C",
        desc: "A Pac-Man game written in C with SDL2, following the rules of the original arcade version.",
        context: "The goal was to rebuild Pac-Man in C by following the rules of the 1980 arcade game, based on a written development plan covering the maze, the scoring and the ghost behaviour.",
        role: "Project in a pair. I focused on the game logic and the code (map, entities, ghost AI, scoring) rather than on the sprites.",
        features: ["Maze with warp tunnels, pellets and power pellets", "Ghost AI with alternating scatter and chase modes", "Lives, scoring and bonus fruits that change with the level", "Rendering and sound with SDL2"]
      },
      pacman: {
        name: "Pac-Man in Unity", kind: "Team project, 4 people",
        desc: "A Pac-Man game in Unity, with an AI trained over several months to play in place of the player, and adjustable difficulty.",
        context: "Academic team project over the year. The goal was to recreate Pac-Man in Unity and C#, then go further: a configuration menu, a map editor and an AI that learns to play the game by itself through reinforcement learning.",
        role: "Member of a team of four. I first built the Pac-Man character and its movement, then mainly developed the ghosts: their distinct chase behaviours (ambusher, flanker), the scatter, frightened and home modes, and the refactoring of their code.",
        features: [
          "An AI built with Unity ML-Agents (PPO), trained over several months, that plays Pac-Man in place of the player",
          "Configuration screen: speed of Pac-Man and of the ghosts, power pellet duration, ghost release time and active ghosts, with an estimated difficulty (easy, normal, hard) and an AI autopilot switch",
          "Four ghosts with their own movement behaviour, based on nodes placed at the maze intersections",
          "A map editor that saves and loads mazes, with two playable maps",
          "Score, rounds, lives and a Game Over screen to start again"
        ]
      },
      appcredit: {
        name: "AppCredit", kind: "Team project, 4 people, as project lead",
        desc: "A Windows loan simulator that calculates monthly payments and saves credits in a SQL Server database.",
        context: "The goal was to build a desktop application that simulates a loan from its amount, duration and annual rate, then records the credit and its client in a database.",
        role: "Project lead of a team of four: I organised the work and the deliverables, and took part in the development of the application and the database.",
        features: [
          "Monthly payment calculation from the amount, duration and annual rate (VB.NET class library)",
          "A Windows Forms window to review and register credits",
          "A SQL Server stored procedure that creates the client if needed and rejects credits of 60,000 or more, inside a transaction"
        ]
      },
      androidgames: {
        name: "Android mini-games", kind: "Individual project, mobile app",
        desc: "An Android app in Kotlin and Jetpack Compose with two mini-games and a shared leaderboard.",
        context: "Academic project to learn mobile development. The goal was to build an app with a game menu, two games developed during the practical sessions and a leaderboard saved on the phone.",
        role: "Individual project: I designed and developed the whole application.",
        features: [
          "Menu listing the games with a short description, and a nickname required to play",
          "Timing game: stop the timer as close as possible to a target time, with a speed that changes with the score",
          "Word game: find the hidden word in a letter grid, with a hint and the best score saved",
          "Top 10 leaderboard stored locally with Room, with a reset button"
        ]
      }
    },
    certs: [
      { year: "2025", name: "Cisco DevNet Associate", icon: "code", text: "API development, network automation, Python and DevOps tools (Git, REST, JSON)." },
      { year: "2024", name: "Cisco Cybersecurity Essentials", icon: "shield", text: "Cybersecurity fundamentals: threats and attack techniques, data protection and confidentiality, securing an organisation." },
      { year: "", name: "Coming soon", soon: true, text: "Another certification will be added here." },
      { year: "", name: "Coming soon", soon: true, text: "Another certification will be added here." },
      { year: "", name: "Coming soon", soon: true, text: "Another certification will be added here." }
    ]
  },

  fr: {
    title: "Imane Laazibi | Étudiante ingénieure en informatique",
    desc: "Portfolio d'Imane Laazibi, étudiante ingénieure en informatique (CNAM Grand Est) et Ingénieure Data & BI chez Domial.",
    ui: {
      skip: "Aller au contenu",
      nav_home: "Accueil", nav_about: "À propos", nav_skills: "Compétences", nav_projects: "Projets", nav_certs: "Certifications", nav_contact: "Contact",
      theme_aria: "Basculer entre le thème sombre et le thème clair", lang_btn: "EN", lang_aria: "Switch the site to English",
      hero_role: "Étudiante ingénieure en informatique.",
      hero_intro: "Ingénieure Data & BI chez Domial en alternance, je conçois des rapports BI pour les différents métiers de l'entreprise, je mets en place des contrôles de qualité des données et une architecture de la donnée dans notre DWH. En parallèle, je prépare mon diplôme d'ingénieure au CNAM Grand Est.",
      hero_status: "Je recherche un stage à l'étranger de 9 semaines minimum, en anglais ou en français, en data ou en développement logiciel, de juillet à octobre 2028.",
      cta_projects: "Voir mes projets", cta_contact: "Me contacter",
      about_title: "Comment j'ai rencontré l'informatique",
      about_p1: "J'ai passé un bac STMG option marketing, avec mention assez bien. J'ai beaucoup aimé le Python que nous faisions en mathématiques, alors je me suis dirigée vers un BTS SIO option SLAM (développement logiciel), sans aucune base en informatique, et je l'ai obtenu.",
      about_p2: "Ce résultat m'a ouvert les portes du cycle ingénieur au CNAM Grand Est, que je suis en alternance. Chez Domial, je conçois des rapports BI pour les différents métiers de l'entreprise, je mets en place des contrôles de qualité des données et une architecture de la donnée dans notre DWH.",
      facts_title: "Actuellement",
      facts: [
        ["En formation", "Cycle ingénieur en informatique, option Systèmes d'information (2025 à 2028)"],
        ["En alternance", "Ingénieure Data & BI chez Domial (Colmar)"],
        ["Langues", "Français (langue maternelle), anglais (B2 à C1)"],
        ["Basée à", "Strasbourg, France"]
      ],
      tl_title: "Expérience et formation",
      skills_title: "Outils et compétences",
      projects_title: "Projets choisis",
      prev_aria: "Projet précédent", next_aria: "Projet suivant", c_prev_aria: "Certification précédente", c_next_aria: "Certification suivante", open_hint: "Voir les détails",
      d_context: "Contexte et objectif", d_role: "Mon rôle", d_features: "Fonctionnalités principales", d_tech: "Technologies", d_shots: "Captures d'écran", d_code: "Voir le code", d_close: "Fermer", d_shot_ph: "Capture à venir", lb_close: "Fermer", lb_prev: "Capture précédente", lb_next: "Capture suivante", lb_open: "Agrandir la capture",
      certs_title: "Certifications",
      contact_title: "Échangeons",
      contact_intro: "Je recherche un stage à l'étranger de 9 semaines minimum, en anglais ou en français, en data ou en développement logiciel, de juillet à octobre 2028. Écrivez-moi ou retrouvez-moi via les liens ci-dessous.",
      f_name: "Nom", f_email: "E-mail", f_msg: "Message", f_send: "Envoyer le message",
      f_ok: "Message envoyé. Je vous répondrai dès que possible.",
      f_fallback: "L'envoi direct a échoué : votre application de messagerie va s'ouvrir.",
      l_github: "GitHub", l_gitlab: "GitLab", l_linkedin: "LinkedIn", l_cv: "Télécharger mon CV", l_letter: "Lettre de motivation",
      circuit_hint: "Déplacez les appareils, ou sélectionnez-en un pour voir le détail."
    },
    timeline: [
      { date: "Depuis août 2025", title: "Ingénieure Data & BI en alternance", where: "Domial, Colmar", bullets: [
        "Conception de rapports BI pour les différents métiers de l'entreprise.",
        "Mise en place de contrôles de qualité des données.",
        "Mise en place d'une architecture de la donnée dans notre DWH.",
        "Pilotage d'une migration d'un an des flux d'intégration de données de Qlik vers Talend (ETL), avec des jobs pilotés par les métadonnées."
      ] },
      { date: "2025 à 2028 (prévu)", title: "Cycle ingénieur en informatique, option Systèmes d'information", where: "CNAM Grand Est, Strasbourg" },
      { date: "Janv. à févr. 2025", title: "Stagiaire développeuse web", where: "Luence, Strasbourg", text: "Refonte du site web de l'entreprise avec WordPress et Elementor." },
      { date: "2023 à 2025", title: "BTS SIO option SLAM (bac+2 en développement logiciel)", where: "Lycée René Cassin, Strasbourg" },
      { date: "Avant 2023", title: "Baccalauréat STMG, option marketing", where: "Sciences et technologies du management et de la gestion", text: "Obtenu avec mention assez bien." }
    ],
    skills: [
      { g: "Data & BI", items: ["SQL", "SQL Server", "PostgreSQL", "MongoDB", "Talend (ETL)", "Qlik", "Power BI", "Entrepôt de données (DWH)", "Procédures stockées", "Qualité des données", "Gouvernance des données"] },
      { g: "Programmation", items: ["Python", "C#", "VB.NET", "C", "C++", "Kotlin", "TypeScript", "JavaScript", "PHP", "HTML / CSS"] },
      { g: "Conception logicielle", items: ["Conception orientée objet", "Principes SOLID", "Design patterns", "Gestion de projet"] },
      { g: "Web et mobile", items: ["Angular", "React", "Node.js", "Prisma", "Meilisearch", "Android Studio", "Jetpack Compose", "WordPress", "Elementor", "CodeIgniter"] },
      { g: "Applications et jeux", items: ["Windows Forms", "Qt", "Unity", "Unity ML-Agents", "SDL2"] },
      { g: "Systèmes et outils", items: ["Linux", "Windows", "Active Directory", "Git / GitHub", "Docker", "Agile (Scrum)", "Packet Tracer"] }
    ],
    projects: {
      alcateams: {
        name: "ALCATeams", kind: "Projet d'équipe, 8 personnes, pour Alcatel",
        desc: "Un réseau social d'entreprise qui étend la plateforme collaborative Rainbow d'Alcatel.",
        context: "Projet réalisé pour Alcatel. L'objectif était d'étendre Rainbow avec un réseau social d'entreprise, où les employés sont organisés en communautés et peuvent échanger et rechercher des messages.",
        role: "Membre d'une équipe de huit personnes. Je me suis surtout occupée des communautés : rôles des membres et sous-groupes.",
        features: ["Communautés avec rôles pour les membres et sous-groupes", "Messages synchronisés avec Rainbow", "Recherche plein texte dans les messages avec Meilisearch", "Back end avec une base PostgreSQL gérée via Prisma, exécutée dans Docker"]
      },
      pollution: {
        name: "Application de signalement de la pollution de l'air", kind: "Projet individuel",
        desc: "Une application web full-stack pour signaler des incidents de pollution de l'air, avec comptes utilisateurs et favoris.",
        context: "Projet académique. L'objectif était de réaliser une application complète, de l'interface à la base de données, permettant aux utilisateurs de signaler des incidents de pollution et de les conserver de façon structurée.",
        role: "Projet individuel : j'ai conçu et développé toute l'application, de l'interface Angular à l'API Node.js et à la base de données PostgreSQL.",
        features: [
          "Signalement d'incidents de pollution, puis consultation sous forme de liste avec une page de détail",
          "Inscription et connexion avec authentification JWT et mots de passe hachés avec bcrypt",
          "Pages protégées (guard Angular) et intercepteur HTTP qui ajoute le jeton à chaque requête",
          "Signalements favoris gérés avec NGXS et conservés d'une session à l'autre",
          "API REST en Node.js et Express, avec Sequelize sur PostgreSQL"
        ]
      },
      boards: {
        name: "Plateforme de jeux de plateau", kind: "Projet d'équipe, 4 personnes",
        desc: "Une plateforme C++ et Qt de quatre jeux de plateau : on peut jouer contre un ami, contre une IA, ou regarder deux IA s'affronter.",
        context: "Projet académique en équipe, en C++. L'objectif était de réunir plusieurs jeux de plateau dans une seule plateforme, conçue avec la programmation orientée objet et les principes SOLID pour pouvoir ajouter un jeu sans modifier le reste du code.",
        role: "Membre d'une équipe de quatre personnes. J'ai développé le jeu de dames et le système de sauvegarde (sauvegarde, sérialisation et chargement des parties), et j'ai participé au refactoring et à la qualité du code.",
        features: [
          "Quatre jeux : morpion, Puissance 4, Othello et dames",
          "Trois modes : joueur contre joueur, joueur contre IA et IA contre IA",
          "Des IA basées sur des stratégies interchangeables (patron Strategy)",
          "Sauvegarde d'une partie à tout moment et reprise plus tard depuis le menu",
          "Une interface graphique Qt et une version console qui partagent le même moteur de jeu"
        ]
      },
      pacmanc: {
        name: "Pac-Man en C", kind: "Projet en binôme, en C",
        desc: "Un jeu Pac-Man écrit en C avec SDL2, fidèle aux règles de la version arcade d'origine.",
        context: "L'objectif était de reconstruire Pac-Man en C en suivant les règles du jeu d'arcade de 1980, à partir d'un plan de développement écrit couvrant le labyrinthe, le score et le comportement des fantômes.",
        role: "Projet en binôme. Je me suis concentrée sur la logique du jeu et le code (carte, entités, IA des fantômes, score) plutôt que sur les sprites.",
        features: ["Labyrinthe avec tunnels latéraux, pastilles et super-pastilles", "IA des fantômes alternant les modes dispersion et poursuite", "Vies, score et fruits bonus qui changent selon le niveau", "Affichage et son avec SDL2"]
      },
      pacman: {
        name: "Pac-Man sous Unity", kind: "Projet d'équipe, 4 personnes",
        desc: "Un Pac-Man sous Unity, avec une IA entraînée pendant plusieurs mois pour jouer à la place du joueur, et une difficulté réglable.",
        context: "Projet académique en équipe sur l'année. L'objectif était de recréer Pac-Man avec Unity et C#, puis d'aller plus loin : un menu de configuration, un éditeur de cartes et une IA qui apprend à jouer seule par apprentissage par renforcement.",
        role: "Membre d'une équipe de quatre personnes. J'ai d'abord réalisé le personnage de Pac-Man et ses déplacements, puis j'ai principalement développé les fantômes : leurs comportements de poursuite distincts (embuscade, contournement), les modes dispersion, effrayé et retour à la maison, et le refactoring de leur code.",
        features: [
          "Une IA réalisée avec Unity ML-Agents (PPO), entraînée pendant plusieurs mois, qui joue à Pac-Man à la place du joueur",
          "Écran de configuration : vitesse de Pac-Man et des fantômes, durée des super-pastilles, temps en prison des fantômes et fantômes actifs, avec une difficulté estimée (facile, normal, difficile) et un interrupteur pilote auto (IA)",
          "Quatre fantômes au comportement propre, basé sur des nœuds placés aux intersections du labyrinthe",
          "Un éditeur de cartes avec sauvegarde et chargement des labyrinthes, et deux cartes jouables",
          "Score, manches, vies et écran de Game Over pour recommencer"
        ]
      },
      appcredit: {
        name: "AppCredit", kind: "Projet d'équipe, 4 personnes, cheffe de projet",
        desc: "Un simulateur de prêt pour Windows qui calcule les mensualités et enregistre les crédits dans une base SQL Server.",
        context: "L'objectif était de réaliser une application de bureau qui simule un prêt à partir de son montant, de sa durée et de son taux annuel, puis enregistre le crédit et son client dans une base de données.",
        role: "Cheffe de projet d'une équipe de quatre personnes : j'ai organisé le travail et les livrables, et j'ai participé au développement de l'application et de la base de données.",
        features: [
          "Calcul de la mensualité à partir du montant, de la durée et du taux annuel (bibliothèque de classes VB.NET)",
          "Une fenêtre Windows Forms pour consulter et enregistrer les crédits",
          "Une procédure stockée SQL Server qui crée le client si besoin et refuse les crédits de 60 000 ou plus, dans une transaction"
        ]
      },
      androidgames: {
        name: "Mini-jeux Android", kind: "Projet individuel, application mobile",
        desc: "Une application Android en Kotlin et Jetpack Compose avec deux mini-jeux et un classement commun.",
        context: "Projet académique pour découvrir le développement mobile. L'objectif était de réaliser une application avec un menu de jeux, deux jeux développés pendant les TP et un classement enregistré sur le téléphone.",
        role: "Projet individuel : j'ai conçu et développé toute l'application.",
        features: [
          "Menu qui présente les jeux avec une courte description, et pseudo obligatoire pour jouer",
          "Jeu de précision : arrêter le chrono au plus près d'un temps cible, avec une vitesse qui varie selon le score",
          "Jeu de mots : retrouver le mot caché dans une grille de lettres, avec un indice et le meilleur score mémorisé",
          "Classement des 10 meilleurs scores stocké en local avec Room, avec un bouton de réinitialisation"
        ]
      }
    },
    certs: [
      { year: "2025", name: "Cisco DevNet Associate", icon: "code", text: "Développement d'API, automatisation réseau, Python et outils DevOps (Git, REST, JSON)." },
      { year: "2024", name: "Cisco Cybersecurity Essentials", icon: "shield", text: "Fondamentaux de la cybersécurité : menaces et techniques d'attaque, protection et confidentialité des données, sécurisation d'une organisation." },
      { year: "", name: "À venir", soon: true, text: "Une autre certification sera ajoutée ici." },
      { year: "", name: "À venir", soon: true, text: "Une autre certification sera ajoutée ici." },
      { year: "", name: "À venir", soon: true, text: "Une autre certification sera ajoutée ici." }
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
    $$("[data-reveal], [data-reveal-mask], .skill-row", scope).forEach(function (el) {
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
    $("#facts").innerHTML = '<li class="facts-head"><i aria-hidden="true"></i>' + esc(u.facts_title) + "</li>" +
      u.facts.map(function (f) { return "<li><b>" + esc(f[0]) + "</b>" + esc(f[1]) + "</li>"; }).join("");
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

  /* screenshot captions can be a plain string or { fr: "...", en: "..." } */
  function altOf(s) { var a = s.alt || ""; return typeof a === "string" ? a : (a[lang] || a.fr || a.en || ""); }
  /* an image inside a frame: blurred copy behind, whole image on top (any ratio) */
  function framed(src, alt, art) {
    return ' style="--img:url(&quot;' + esc(src) + '&quot;)" data-art="' + art + '"><img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async">';
  }

  function renderProjects() {
    var u = ui();
    $("#track").innerHTML = PROJECT_META.map(function (m, i) {
      var p = C[lang].projects[m.key];
      var src = m.cover || (m.shots && m.shots[0] && m.shots[0].src);
      var cover = src ? '<div class="cover frame"' + framed(src, "", m.art) + "</div>" : '<div class="cover">' + ART[m.art] + "</div>";
      return '<button class="card" type="button" role="listitem" data-i="' + i + '">' + cover +
        '<div class="card-body"><div class="kind">' + esc(p.kind) + "</div><h3>" + esc(p.name) + "</h3><p>" + esc(p.desc) + "</p>" +
        '<div class="tags">' + m.tech.map(function (t) { return '<span class="tag">' + esc(t) + "</span>"; }).join("") + "</div>" +
        '<span class="more">' + esc(u.open_hint) + "</span></div></button>";
    }).join("");
    updateProjects();
  }

  function renderCerts() { renderCircuit(); }

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
      ? m.shots.map(function (s, k) {
          var alt = altOf(s);
          return '<figure class="shot"><button class="shot-btn frame" type="button" data-k="' + k + '" aria-label="' + esc(u.lb_open + (alt ? " : " + alt : "")) + '"' +
            framed(s.src, alt, m.art) + "</button>" + (alt ? "<figcaption>" + esc(alt) + "</figcaption>" : "") + "</figure>";
        }).join("")
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

  /* if an image can't load, show the project's illustration instead of a broken icon */
  document.addEventListener("error", function (e) {
    var img = e.target;
    if (!img || img.tagName !== "IMG") return;
    var box = img.closest ? img.closest(".frame") : null;
    if (!box) return;
    box.classList.remove("frame");
    box.style.removeProperty("--img");
    box.classList.add("broken");
    box.innerHTML = ART[box.getAttribute("data-art")] || "";
  }, true);

  /* ---------- full-size screenshot viewer ---------- */
  var lb = $("#lb"), lbIndex = 0;
  function renderLightbox() {
    if (openIndex < 0) return;
    var u = ui(), shots = PROJECT_META[openIndex].shots, s = shots[lbIndex], alt = altOf(s), many = shots.length > 1;
    var arrow = function (cls, label, d, off) {
      return '<button class="arrow ' + cls + '" type="button" aria-label="' + esc(label) + '"' + (off ? " disabled" : "") +
        '><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' + d + '"/></svg></button>';
    };
    lb.setAttribute("aria-label", alt || u.d_shots);
    lb.innerHTML = '<figure class="lb-fig"><img src="' + esc(s.src) + '" alt="' + esc(alt) + '">' +
      (alt ? "<figcaption>" + esc(alt) + "</figcaption>" : "") + "</figure>" +
      '<div class="lb-bar">' +
      (many ? arrow("lb-prev", u.lb_prev, "M15 5l-7 7 7 7", lbIndex === 0) + '<span class="lb-count">' + (lbIndex + 1) + " / " + shots.length + "</span>" : "") +
      '<button class="close lb-close" type="button" aria-label="' + esc(u.lb_close) + '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19"/></svg></button>' +
      (many ? arrow("lb-next", u.lb_next, "M9 5l7 7-7 7", lbIndex === shots.length - 1) : "") +
      "</div>";
  }
  function lbGo(d) {
    var n = PROJECT_META[openIndex].shots.length, k = lbIndex + d;
    if (k < 0 || k >= n) return;
    lbIndex = k; renderLightbox();
    var b = $(d < 0 ? ".lb-prev" : ".lb-next", lb);
    if (b && !b.disabled) b.focus(); else $(".lb-close", lb).focus();
  }
  $("#dlg").addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest(".shot-btn") : null;
    if (!b || b.closest(".broken")) return;
    lbIndex = +b.getAttribute("data-k");
    renderLightbox();
    if (typeof lb.showModal === "function") lb.showModal(); else lb.setAttribute("open", "");
  });
  lb.addEventListener("click", function (e) {
    var t = e.target;
    if (t === lb || (t.closest && t.closest(".lb-close"))) lb.close();
    else if (t.closest && t.closest(".lb-prev")) lbGo(-1);
    else if (t.closest && t.closest(".lb-next")) lbGo(1);
  });
  lb.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") lbGo(-1);
    else if (e.key === "ArrowRight") lbGo(1);
  });

  function renderAll() {
    renderStatic(); renderTimeline(); renderSkills(); renderProjects(); renderCerts(); renderLinks(); renderDialog();
    if (lb.open) renderLightbox();
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

  /* ---------- carousels (projects + certifications) ---------- */
  var behavior = function () { return reduce ? "auto" : "smooth"; };
  function carousel(track, prev, next, count, sel) {
    function stepSize() {
      var c = $(sel, track);
      if (!c) return 300;
      var gap = parseFloat(getComputedStyle(track).columnGap) || 24;
      return c.getBoundingClientRect().width + gap;
    }
    function update() {
      var n = $$(sel, track).length, s = stepSize();
      var i = Math.max(0, Math.min(n - 1, Math.round(track.scrollLeft / s)));
      count.textContent = n ? (i + 1) + " / " + n : "";
      prev.disabled = track.scrollLeft < 4;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    }
    prev.addEventListener("click", function () { track.scrollBy({ left: -stepSize(), behavior: behavior() }); });
    next.addEventListener("click", function () { track.scrollBy({ left: stepSize(), behavior: behavior() }); });
    track.addEventListener("scroll", function () { requestAnimationFrame(update); }, { passive: true });
    window.addEventListener("resize", update);
    return update;
  }
  var track = $("#track");
  var updateProjects = carousel(track, $("#prev"), $("#next"), $("#count"), ".card");

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
      card.style.setProperty("--px", (e.clientX - r.left) + "px");
      card.style.setProperty("--py", (e.clientY - r.top) + "px");
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

  /* =====================================================================
     HERO: typed SQL query, decoding name, live data network
     ===================================================================== */
  var hero = $("#home");

  /* name: letters decode from random glyphs, then settle */
  var GLYPHS = "01{}<>/#$%&=+*ABCDEF";
  function buildWord(el, text, startAt) {
    el.innerHTML = "";
    var letters = text.split("").map(function (ch) {
      var l = document.createElement("span");
      l.className = "l";
      l.textContent = ch;
      el.appendChild(l);
      return { el: l, ch: ch };
    });
    if (reduce) { letters.forEach(function (x) { x.el.classList.add("go"); }); return; }
    var go = function () {
      letters.forEach(function (x) { x.w = x.el.getBoundingClientRect().width; x.el.style.minWidth = x.w + "px"; });
      letters.forEach(function (x, i) {
        var t0 = startAt + i * 85, dur = 650;
        setTimeout(function () {
          x.el.classList.add("go");
          var t = performance.now();
          (function tick(now) {
            var k = (now - t) / dur;
            if (k >= 1) { x.el.textContent = x.ch; x.el.classList.add("done"); return; }
            x.el.textContent = GLYPHS.charAt(Math.floor(Math.random() * GLYPHS.length));
            requestAnimationFrame(tick);
          })(t);
        }, t0);
      });
    };
    letters.forEach(function (x) { x.el.style.visibility = "hidden"; });
    var show = function () { letters.forEach(function (x) { x.el.style.visibility = ""; }); go(); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(show); else show();
  }
  buildWord($("#w1"), "Imane", 350);
  buildWord($("#w2"), "Laazibi", 700);

  /* typed query line */
  (function () {
    var el = $("#typed"), q = "SELECT * FROM portfolio WHERE owner = 'Imane Laazibi';", i = 0;
    if (!el) return;
    if (reduce) { el.textContent = q; return; }
    setTimeout(function type() {
      el.textContent = q.slice(0, ++i);
      if (i < q.length) setTimeout(type, 22 + Math.random() * 30);
    }, 250);
  })();

  /* ---------- pointer: spotlight, name parallax, magnetic buttons ---------- */
  var nameEl = $("#name");
  if (finePointer && !reduce) {
    var lastBtn = null;
    window.addEventListener("pointermove", function (e) {
      root.style.setProperty("--mx", e.clientX + "px");
      root.style.setProperty("--my", e.clientY + "px");
      var nx = e.clientX / window.innerWidth - .5, ny = e.clientY / window.innerHeight - .5;
      nameEl.style.transform = "translate3d(" + (nx * -16).toFixed(1) + "px," + (ny * -10).toFixed(1) + "px,0)";
      var b = e.target.closest ? e.target.closest(".btn") : null;
      if (lastBtn && lastBtn !== b) { lastBtn.style.setProperty("--bx", "0px"); lastBtn.style.setProperty("--by", "0px"); }
      lastBtn = b;
      if (b) {
        var r = b.getBoundingClientRect();
        b.style.setProperty("--bx", ((e.clientX - r.left - r.width / 2) * .22).toFixed(1) + "px");
        b.style.setProperty("--by", ((e.clientY - r.top - r.height / 2) * .3).toFixed(1) + "px");
      }
    }, { passive: true });
  }

  /* ---------- page-wide data network (one background for every section) ---------- */
  (function () {
    var cv = $("#bgCanvas");
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext("2d");
    var W = 0, H = 0, dpr = 1, nodes = [], pulses = [], mouse = { x: -999, y: -999, on: false };
    var raf = 0, accent = "#8B7CF6", lastSpawn = 0, LINK = 150;

    function seed() {
      var n = Math.max(30, Math.min(90, Math.round(W * H / 17000)));
      nodes = []; pulses = [];;
      for (var i = 0; i < n; i++) nodes.push({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
        r: Math.random() * 1.5 + 1, big: Math.random() < .12
      });
    }
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed(); draw();
    }
    function draw() {
      accent = getComputedStyle(root).getPropertyValue("--accent").trim() || accent;
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = accent; ctx.strokeStyle = accent;
      var i, j, a, b, dx, dy, d;
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        for (j = i + 1; j < nodes.length; j++) {
          b = nodes[j]; dx = a.x - b.x; dy = a.y - b.y; d = dx * dx + dy * dy;
          if (d < LINK * LINK) {
            ctx.globalAlpha = (1 - Math.sqrt(d) / LINK) * .3; ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        if (mouse.on) {
          dx = a.x - mouse.x; dy = a.y - mouse.y; d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200) {
            ctx.globalAlpha = (1 - d / 200) * .85; ctx.lineWidth = 1.3;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
          }
        }
      }
      for (i = 0; i < nodes.length; i++) {
        a = nodes[i];
        ctx.globalAlpha = a.big ? .9 : .55;
        ctx.shadowColor = accent; ctx.shadowBlur = a.big ? 14 : 0;
        ctx.beginPath(); ctx.arc(a.x, a.y, a.big ? a.r + 1.6 : a.r, 0, 6.2832); ctx.fill();
      }
      /* data packets travelling along links */
      ctx.shadowBlur = 12; ctx.globalAlpha = 1;
      for (i = pulses.length - 1; i >= 0; i--) {
        var p = pulses[i], A = nodes[p.a], B = nodes[p.b];
        if (!A || !B) { pulses.splice(i, 1); continue; }
        p.t += .018;
        if (p.t >= 1) { pulses.splice(i, 1); continue; }
        ctx.beginPath(); ctx.arc(A.x + (B.x - A.x) * p.t, A.y + (B.y - A.y) * p.t, 2.4, 0, 6.2832); ctx.fill();
      }
      ctx.shadowBlur = 0; ctx.globalAlpha = 1;
    }
    function spawn(now) {
      if (now - lastSpawn < 260 || pulses.length > 14) return;
      lastSpawn = now;
      var a = Math.floor(Math.random() * nodes.length), A = nodes[a], best = -1, bd = LINK * LINK;
      for (var j = 0; j < nodes.length; j++) {
        if (j === a) continue;
        var dx = A.x - nodes[j].x, dy = A.y - nodes[j].y, d = dx * dx + dy * dy;
        if (d < bd && Math.random() < .35) { bd = d; best = j; }
      }
      if (best >= 0) pulses.push({ a: a, b: best, t: 0 });
    }
    function step() {
      for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (mouse.on) {
          var dx = mouse.x - n.x, dy = mouse.y - n.y, d = Math.sqrt(dx * dx + dy * dy);
          if (d < 200 && d > 1) { n.vx += dx / d * .012; n.vy += dy / d * .012; }
        }
        n.vx *= .995; n.vy *= .995;
        var sp = Math.sqrt(n.vx * n.vx + n.vy * n.vy);
        if (sp > 1.1) { n.vx *= 1.1 / sp; n.vy *= 1.1 / sp; }
        n.x += n.vx; n.y += n.vy;
        if (n.x < -10) n.x = W + 10; else if (n.x > W + 10) n.x = -10;
        if (n.y < -10) n.y = H + 10; else if (n.y > H + 10) n.y = -10;
      }
    }
    function loop(now) {
      if (document.hidden) { raf = 0; return; }
      step(); spawn(now); draw();
      raf = requestAnimationFrame(loop);
    }
    function start() { if (!raf && !reduce) raf = requestAnimationFrame(loop); }
    window.addEventListener("pointermove", function (e) { mouse.x = e.clientX; mouse.y = e.clientY; mouse.on = true; }, { passive: true });
    document.addEventListener("pointerleave", function () { mouse.on = false; });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", start);
    resize(); start();
  })();

  /* ---------- certifications: a draggable, glowing network topology ---------- */
  var circ = { pos: [], sel: 1, edges: [], packets: [], raf: 0, vis: false, last: 0 };
  var CERT_POS = [[.2, .24], [.8, .24], [.16, .78], [.84, .78], [.5, .9]];
  var EDGE_SET = [[1, 2], [1, 3], [2, 4], [3, 5], [4, 5]];
  var ICONS = {
    code: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    badge: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="9" r="5"/><path d="M8.5 13.5L7 21l5-3 5 3-1.5-7.5"/></svg>',
    plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>'
  };
  var circuitEl = $("#circuit"), nodesEl = $("#circNodes"), wiresEl = $("#wires");

  function renderCircuit() {
    var list = C[lang].certs, u = ui();
    if (circ.pos.length !== list.length + 1) {
      circ.pos = [{ fx: .5, fy: .5 }].concat(list.map(function (c, i) { var p = CERT_POS[i % CERT_POS.length]; return { fx: p[0], fy: p[1] }; }));
      circ.sel = 1;
    }
    nodesEl.innerHTML = '<div class="node hub" data-n="0"><span class="dev"><b>IL</b></span><span class="nl">' + esc(u.certs_title) + "</span></div>" +
      list.map(function (c, i) {
        return '<button class="node cert' + (c.soon ? " soon" : "") + '" type="button" data-n="' + (i + 1) + '" aria-pressed="false">' +
          '<span class="dev">' + ICONS[c.soon ? "plus" : (c.icon || "badge")] + '</span><span class="nl">' + esc(c.name) + "</span></button>";
      }).join("");
    circ.edges = list.map(function (c, i) { return [0, i + 1]; }).concat(EDGE_SET.filter(function (e) { return e[0] <= list.length && e[1] <= list.length; }));
    wiresEl.innerHTML = circ.edges.map(function () { return '<line class="cable"/>'; }).join("") + circ.edges.map(function () { return '<circle class="pkt" r="3.5"/>'; }).join("");
    circ.packets = circ.edges.map(function (e, i) { return { t: Math.random(), v: .14 + Math.random() * .12, dir: i % 2 ? 1 : -1 }; });
    layoutCircuit();
    selectCert(circ.sel);
  }
  function layoutCircuit() {
    if (!circuitEl) return;
    var w = circuitEl.clientWidth, h = circuitEl.clientHeight;
    $$(".node", nodesEl).forEach(function (n) {
      var p = circ.pos[+n.getAttribute("data-n")];
      n.style.left = (p.fx * w) + "px"; n.style.top = (p.fy * h) + "px";
    });
    var lines = $$(".cable", wiresEl);
    circ.edges.forEach(function (e, i) {
      var a = circ.pos[e[0]], b = circ.pos[e[1]], l = lines[i];
      if (!l) return;
      l.setAttribute("x1", a.fx * w); l.setAttribute("y1", a.fy * h); l.setAttribute("x2", b.fx * w); l.setAttribute("y2", b.fy * h);
    });
    drawPackets();
  }
  function drawPackets() {
    var w = circuitEl.clientWidth, h = circuitEl.clientHeight, dots = $$(".pkt", wiresEl);
    circ.edges.forEach(function (e, i) {
      var a = circ.pos[e[0]], b = circ.pos[e[1]], p = circ.packets[i], d = dots[i];
      if (!d || !p) return;
      var t = p.dir > 0 ? p.t : 1 - p.t;
      d.setAttribute("cx", (a.fx + (b.fx - a.fx) * t) * w); d.setAttribute("cy", (a.fy + (b.fy - a.fy) * t) * h);
    });
  }
  function circTick(now) {
    if (!circ.vis || document.hidden) { circ.raf = 0; return; }
    var dt = Math.min(.05, (now - circ.last) / 1000); circ.last = now;
    circ.packets.forEach(function (p) { p.t = (p.t + p.v * dt) % 1; });
    drawPackets();
    circ.raf = requestAnimationFrame(circTick);
  }
  function circStart() { if (!circ.raf && circ.vis && !reduce) { circ.last = performance.now(); circ.raf = requestAnimationFrame(circTick); } }
  function selectCert(i) {
    if (i < 1) return;
    circ.sel = i;
    $$(".cert", nodesEl).forEach(function (n) {
      var on = +n.getAttribute("data-n") === i;
      n.classList.toggle("sel", on); n.setAttribute("aria-pressed", on ? "true" : "false");
    });
    var c = C[lang].certs[i - 1];
    if (c) $("#certDetail").innerHTML = '<div class="year">' + esc(c.year || "+") + "</div><div><h3>" + esc(c.name) + "</h3><p>" + esc(c.text) + "</p></div>";
  }
  (function () {
    var drag = null;
    nodesEl.addEventListener("pointerdown", function (e) {
      var n = e.target.closest ? e.target.closest(".node") : null;
      if (!n) return;
      var i = +n.getAttribute("data-n");
      drag = { i: i, n: n, sx: e.clientX, sy: e.clientY, ox: circ.pos[i].fx, oy: circ.pos[i].fy, moved: false };
      try { n.setPointerCapture(e.pointerId); } catch (err) {}
    });
    nodesEl.addEventListener("pointermove", function (e) {
      if (!drag) return;
      var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
      if (!drag.moved && Math.sqrt(dx * dx + dy * dy) < 5) return;
      drag.moved = true; drag.n.classList.add("drag");
      var r = circuitEl.getBoundingClientRect(), p = circ.pos[drag.i];
      p.fx = Math.min(.92, Math.max(.08, drag.ox + dx / r.width));
      p.fy = Math.min(.9, Math.max(.1, drag.oy + dy / r.height));
      layoutCircuit();
    });
    function end() {
      if (!drag) return;
      drag.n.classList.remove("drag");
      if (!drag.moved && drag.i > 0) selectCert(drag.i);
      drag = null;
    }
    nodesEl.addEventListener("pointerup", end);
    nodesEl.addEventListener("pointercancel", end);
    nodesEl.addEventListener("click", function (e) {
      if (e.detail !== 0) return;               /* keyboard activation only */
      var n = e.target.closest ? e.target.closest(".cert") : null;
      if (n) selectCert(+n.getAttribute("data-n"));
    });
    window.addEventListener("resize", layoutCircuit);
    new IntersectionObserver(function (en) { circ.vis = en[0].isIntersecting; if (circ.vis) circStart(); }, { threshold: 0 }).observe(circuitEl);
    document.addEventListener("visibilitychange", circStart);
  })();

  renderAll();
  onScroll();
})();
