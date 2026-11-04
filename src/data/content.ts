// ─────────────────────────────────────────────────────────────
//  Todo el contenido del sitio vive acá, en español (es) e inglés (en).
//  Editá este archivo para actualizar textos, proyectos y experiencia
//  sin tocar componentes. Todo lo que tiene { es, en } se traduce.
// ─────────────────────────────────────────────────────────────

export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export type L = Record<Locale, string>;

export const profile = {
  firstName: "Marina",
  nickName: "Maru",
  lastName: "Ziembar",
  role: ["Sr Frontend Engineer", "& Creative Technologist"],
  location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" } as L,
  email: "marinaziembar@gmail.com",
  linkedin: "https://linkedin.com/in/marina-ziembar",
  // Link a tu CV (ej. Google Drive). Vacío = se oculta el botón.
  // Podés poner uno por idioma: { es: "...", en: "..." }
  cvUrl: { es: "", en: "" } as L,
};

// Roles que rotan en el hero: línea fina + línea regular (como en el CV).
// Quedan en inglés en ambos idiomas, como en tu CV.
export const heroLines: [string, string][] = [
  ["frontend", "engineer"],
  ["creative", "technologist"],
  ["ui/ux", "designer"],
  ["team", "lead"],
];

// ── Textos de interfaz ────────────────────────────────────────

export const ui = {
  es: {
    nav: { about: "Sobre mí.", works: "Trabajos.", experience: "Experiencia.", contact: "Contacto." },
    navAria: { main: "Principal", home: "Marina Ziembar — inicio", open: "Abrir menú", close: "Cerrar menú", lang: "Idioma" },
    hero: {
      hello: "Hola! Soy",
      intro:
        "Desarrolladora frontend con formación en Diseño Gráfico y UX/UI. Transformo ideas en experiencias web pulidas e interactivas, donde el diseño y el código trabajan juntos.",
      cta: "Explorá mi trabajo",
    },
    marquee2: ["Diseño", "Código", "Tipografía", "Movimiento", "Composición", "Detalle"],
    works: {
      title: ["Trabajos", "seleccionados"],
      lead: "Como desarrolladora creativa, hago",
      for: "con",
      reset: "ver todo ×",
      empty: "Nada por acá con esa combinación todavía.",
      showAll: "Ver todo",
      carousel: "Trabajos seleccionados",
      prev: "Trabajo anterior",
      next: "Trabajo siguiente",
    },
    experience: { title: ["Experiencia", "& Recorrido"] },
    about: {
      title: ["Un poco", "sobre mí"],
      reel: ["Frontend", "UI/UX", "Diseño gráfico", "Design systems", "Motion", "Accesibilidad", "Mentoría", "& más"],
      education: "Educación",
      certifications: "Certificaciones",
      languages: "Idiomas",
    },
    contact: {
      kicker: "¿Tenés un proyecto?",
      title: "charlemos",
      write: "Escribime",
      cv: "Descargar CV",
    },
    footer: { social: "Redes", top: "Volver arriba ↑", credit: "Diseñado y desarrollado por Marina." },
  },
  en: {
    nav: { about: "About.", works: "Works.", experience: "Experience.", contact: "Contact." },
    navAria: { main: "Main", home: "Marina Ziembar — home", open: "Open menu", close: "Close menu", lang: "Language" },
    hero: {
      hello: "Hi, I'm",
      intro:
        "Frontend developer with a background in Graphic Design and UX/UI. I turn ideas into polished, interactive web experiences where design and code work together.",
      cta: "Explore my work",
    },
    marquee2: ["Design", "Code", "Typography", "Motion", "Composition", "Detail"],
    works: {
      title: ["selected", "works"],
      lead: "As a creative developer, I build",
      for: "with",
      reset: "see all ×",
      empty: "Nothing here with that combination yet.",
      showAll: "See all",
      carousel: "Selected works",
      prev: "Previous project",
      next: "Next project",
    },
    experience: { title: ["experience", "& journey"] },
    about: {
      title: ["a bit", "about me"],
      reel: ["Frontend", "UI/UX", "Graphic design", "Design systems", "Motion", "Accessibility", "Mentoring", "& more"],
      education: "Education",
      certifications: "Certifications",
      languages: "Languages",
    },
    contact: {
      kicker: "Got a project?",
      title: "let's talk",
      write: "Email me",
      cv: "Download CV",
    },
    footer: { social: "Social", top: "Back to top ↑", credit: "Designed and built by Marina." },
  },
} satisfies Record<Locale, unknown>;

export type UI = (typeof ui)["es"];
// Verifica en compilación que el inglés tenga las mismas claves que el español.
export const uiByLocale: Record<Locale, UI> = ui;

// ── Sobre mí ──────────────────────────────────────────────────

export const about: Record<Locale, string[]> = {
  es: [
    "Soy Desarrolladora Frontend con formación en Diseño Gráfico y UX/UI. Me apasiona transformar ideas en experiencias web pulidas e interactivas, donde el diseño y el código trabajan en conjunto.",
    "Tengo un fuerte criterio visual, especialmente en tipografía, espaciado, composición, jerarquía visual y movimiento. Me interesa no solo cómo funciona una interfaz, sino también cómo se ve y se siente.",
    "Trabajo principalmente con React, Next.js, TypeScript y Tailwind, y cuento con experiencia liderando y mentoreando desarrolladores.",
  ],
  en: [
    "I'm a Frontend Developer with a background in Graphic Design and UX/UI. I love turning ideas into polished, interactive web experiences where design and code work hand in hand.",
    "I have a strong visual eye, especially for typography, spacing, composition, visual hierarchy and motion. I care not only about how an interface works, but also about how it looks and feels.",
    "I work mainly with React, Next.js, TypeScript and Tailwind, and I have experience leading and mentoring developers.",
  ],
};

export const skillGroups: { title: L; items: string[] }[] = [
  {
    title: { es: "Frontend", en: "Frontend" },
    items: ["React", "Next.js", "React Native", "JavaScript (ES6+)", "TypeScript", "TanStack Query", "Redux", "TailwindCSS", "HTML5", "CSS3", "SASS", "jQuery"],
  },
  {
    title: { es: "Diseño", en: "Design" },
    items: ["UI/UX Design", "Responsive Web Design", "Atomic Design", "Graphic Design", "Figma", "Photoshop", "Illustrator", "Adobe XD"],
  },
  {
    title: { es: "Backend & CMS", en: "Backend & CMS" },
    items: ["PHP", "Laravel", "MySQL", "WordPress", "Elementor", "WP Bakery", "Firebase", "Strapi"],
  },
  {
    title: { es: "Herramientas & Metodologías", en: "Tools & Methodologies" },
    items: [
      "Claude",
      "Cursor",
      "SDD",
      "Gemini",
      "Git",
      "Git Flow",
      "Vercel",
      "Agile",
      "Scrum",
      "Jira",
      "Google Play Console",
      "Apple Developer Program",
    ],
  },
];

export const marqueeWords = [
  "React",
  "Next.js",
  "TypeScript",
  "UI/UX",
  "Tailwind",
  "Motion",
  "Figma",
  "React Native",
  "Design Systems",
  "Atomic Design",
];

// ── Trabajos ──────────────────────────────────────────────────

// Filtros de la frase "hago [tipo] con [stack]".
export const projectTypes = ["websites", "ecommerce", "apps"] as const;
export const stacks = ["react", "next", "reactNative", "typescript", "tailwind", "v0"] as const;

export type ProjectType = (typeof projectTypes)[number];
export type Stack = (typeof stacks)[number];

export const tagLabels: Record<ProjectType | Stack, L> = {
  websites: { es: "Sitios web", en: "Websites" },
  ecommerce: { es: "E-commerce", en: "E-commerce" },
  apps: { es: "Apps móviles", en: "Mobile apps" },
  react: { es: "React", en: "React" },
  next: { es: "Next.js", en: "Next.js" },
  reactNative: { es: "React Native", en: "React Native" },
  typescript: { es: "TypeScript", en: "TypeScript" },
  tailwind: { es: "Tailwind", en: "Tailwind" },
  v0: { es: "v0", en: "v0" },
};

export type Project = {
  slug: string;
  title: string;
  client?: string; // empresa dueña del proyecto (si no hay, se muestra solo la fecha)
  period: L;
  description?: L; // opcional: una línea sobre el proyecto
  types: ProjectType[];
  stack: Stack[];
  href: string;
  linkLabel: L; // texto del link (dominio o tienda)
  logo: string; // imagen en /public/projects
  seed: number; // define la composición geométrica de fondo
};

// Proyectos tomados del PDF "Proyectos". El orden de este array es el orden del carrusel.
export const projects: Project[] = [
  {
    slug: "umarket",
    title: "Umarket",
    client: "Itti Digital",
    period: { es: "2025 — 2026", en: "2025 — 2026" },
    types: ["ecommerce"],
    stack: ["react", "next", "typescript", "tailwind"],
    href: "https://umarket.com.py/es",
    linkLabel: { es: "umarket.com.py", en: "umarket.com.py" },
    logo: "/projects/umarket.png",
    seed: 7,
  },
  {
    slug: "ame-pilates",
    title: "Âme Pilates Body Ballet",
    period: { es: "Jun 2026", en: "Jun 2026" },
    types: ["websites"],
    stack: ["react", "next", "typescript", "tailwind"],
    href: "https://www.amepilates.com.ar",
    linkLabel: { es: "amepilates.com.ar", en: "amepilates.com.ar" },
    logo: "/projects/ame.png",
    seed: 3,
  },
  {
    slug: "relocation-by-lambo",
    title: "Relocation by Lambo",
    period: { es: "May 2026", en: "May 2026" },
    types: ["websites"],
    stack: ["react", "next", "typescript", "tailwind", "v0"],
    href: "https://www.relocationbylambo.com.ar",
    linkLabel: { es: "relocationbylambo.com.ar", en: "relocationbylambo.com.ar" },
    logo: "/projects/relocation.png",
    seed: 11,
  },
  {
    slug: "precompra",
    title: "Precompra",
    client: "Creativedog",
    period: { es: "2024", en: "2024" },
    types: ["apps"],
    stack: ["reactNative"],
    href: "https://play.google.com/store/apps/details?id=com.precompra&hl=es_AR",
    linkLabel: { es: "Google Play", en: "Google Play" },
    logo: "/projects/precompra.png",
    seed: 21,
  },
  {
    slug: "separados-con-wilas",
    title: "Separados con Wilas",
    client: "Creativedog",
    period: { es: "2023", en: "2023" },
    types: ["websites"],
    stack: ["react", "next"],
    href: "https://separadosconwilas.com",
    linkLabel: { es: "separadosconwilas.com", en: "separadosconwilas.com" },
    logo: "/projects/separados.png",
    seed: 5,
  },
  {
    slug: "findpet",
    title: "FindPet",
    client: "Creativedog",
    period: { es: "2021 — 2022", en: "2021 — 2022" },
    types: ["apps"],
    stack: ["reactNative"],
    href: "https://play.google.com/store/apps/details?id=com.findpetapp.app&hl=es_AR",
    linkLabel: { es: "Google Play", en: "Google Play" },
    logo: "/projects/findpet.png",
    seed: 17,
  },
];

// ── Experiencia ───────────────────────────────────────────────

export type Job = {
  company: string;
  role: L;
  period: L;
  bullets: Record<Locale, string[]>;
};

export const experience: Job[] = [
  {
    company: "itti",
    role: { es: "Sr Software Engineer", en: "Sr Software Engineer" },
    period: { es: "Jul 2025 — Actualidad", en: "Jul 2025 — Present" },
    bullets: {
      es: [
        "Desarrollo de soluciones frontend para una plataforma de e-commerce white-label con React, Next.js, TypeScript y Tailwind CSS.",
        "Componentes de UI reutilizables y escalables, enfocados en la consistencia entre múltiples experiencias de e-commerce.",
        "Transformo requerimientos de diseño en interfaces responsivas, pulidas y funcionales.",
        "Colaboro en patrones y soluciones frontend reutilizables para un entorno multimarca.",
      ],
      en: [
        "Building frontend solutions for a white-label e-commerce platform with React, Next.js, TypeScript and Tailwind CSS.",
        "Reusable, scalable UI components focused on consistency across multiple e-commerce experiences.",
        "Turning design requirements into responsive, polished and functional interfaces.",
        "Contributing to reusable frontend patterns and solutions for a multi-brand environment.",
      ],
    },
  },
  {
    company: "Cliengo",
    role: { es: "Ssr Frontend Developer", en: "Ssr Frontend Developer" },
    period: { es: "Ago 2024 — Jul 2025", en: "Aug 2024 — Jul 2025" },
    bullets: {
      es: [
        "Frontend de un dashboard de gestión de conversaciones potenciado por IA, que centraliza múltiples canales de redes sociales.",
        "Funcionalidades enfocadas en usabilidad, diseño responsivo y presentación clara de la información.",
        "Producto que integra inteligencia artificial y flujos de comunicación con clientes.",
      ],
      en: [
        "Frontend for an AI-powered conversation management dashboard that centralizes multiple social media channels.",
        "Features focused on usability, responsive design and clear presentation of information.",
        "A product that combines artificial intelligence with customer communication flows.",
      ],
    },
  },
  {
    company: "Creativedog",
    role: { es: "Frontend Coach", en: "Frontend Coach" },
    period: { es: "Jun 2024 — Ago 2024", en: "Jun 2024 — Aug 2024" },
    bullets: {
      es: [
        "Soporte técnico y mentoría al equipo en desarrollo frontend y buenas prácticas.",
        "Capacitaciones internas sobre técnicas de estilizado y calidad de UI.",
        "Investigación de nuevas tecnologías para modernizar el stack de la empresa.",
      ],
      en: [
        "Technical support and mentoring for the team on frontend development and best practices.",
        "Internal training sessions on styling techniques and UI quality.",
        "Researched new technologies to modernize the company's stack.",
      ],
    },
  },
  {
    company: "Creativedog",
    role: { es: "Team Lead — Equipo de Desarrollo de Apps", en: "Team Lead — App Development Team" },
    period: { es: "Feb 2023 — Jun 2024", en: "Feb 2023 — Jun 2024" },
    bullets: {
      es: [
        "Lideré un equipo de 5 personas: cronogramas, evaluaciones de desempeño y sprints con Scrum.",
        "Coordiné la comunicación con los clientes durante todo el desarrollo.",
        "Participé en entrevistas y evaluación de candidatos.",
      ],
      en: [
        "Led a team of 5: schedules, performance reviews and Scrum sprints.",
        "Coordinated client communication throughout development.",
        "Took part in interviews and candidate evaluation.",
      ],
    },
  },
  {
    company: "Creativedog",
    role: { es: "Frontend Developer", en: "Frontend Developer" },
    period: { es: "Jul 2020 — Ago 2024", en: "Jul 2020 — Aug 2024" },
    bullets: {
      es: [
        "Sitios web, aplicaciones web y móviles con React, Next.js y React Native.",
        "Establecí lineamientos de frontend y estructuras de componentes reutilizables.",
        "Proyectos con WordPress utilizando PHP, Laravel y Symfony.",
      ],
      en: [
        "Websites, web apps and mobile apps with React, Next.js and React Native.",
        "Set frontend guidelines and reusable component structures.",
        "WordPress projects using PHP, Laravel and Symfony.",
      ],
    },
  },
  {
    company: "Coderhouse",
    role: { es: "Profesora de Desarrollo Web", en: "Web Development Teacher" },
    period: { es: "Jul 2022 — Ene 2025", en: "Jul 2022 — Jan 2025" },
    bullets: {
      es: [
        "Curso de 2 meses sobre HTML, CSS y SASS, guiando a los estudiantes hasta un proyecto final.",
        "Acompañamiento en la aplicación de conceptos de frontend y buenas prácticas de estilizado.",
      ],
      en: [
        "2-month course on HTML, CSS and SASS, guiding students through to a final project.",
        "Helped students apply frontend concepts and styling best practices.",
      ],
    },
  },
];

// ── Educación, certificaciones, idiomas ───────────────────────

export const education: { title: L; place: L; period: string }[] = [
  {
    title: { es: "Tecnicatura Superior en Programación", en: "Associate Degree in Programming" },
    place: { es: "Teclab Instituto Técnico Superior", en: "Teclab Instituto Técnico Superior" },
    period: "2020 — 2022",
  },
  {
    title: { es: "Diseño Gráfico", en: "Graphic Design" },
    place: { es: "Universidad de Buenos Aires", en: "University of Buenos Aires" },
    period: "2017 — 2021",
  },
];

export const certifications: { title: L; place: string; year: string }[] = [
  { title: { es: "Diseño de Experiencias Didácticas Gamificadas", en: "Gamified Experience Design" }, place: "Universidad Siglo XXI", year: "2026" },
  { title: { es: "Software Quality Testing", en: "Software Quality Testing" }, place: "Digital House", year: "2025" },
  { title: { es: "Digital Product Management", en: "Digital Product Management" }, place: "Digital House", year: "2024" },
  { title: { es: "Liderazgo Estratégico", en: "Strategic Leadership" }, place: "UTN", year: "2023" },
  { title: { es: "Frontend Avanzado con ReactJs", en: "Advanced Frontend with ReactJS" }, place: "Acámica", year: "2020" },
  { title: { es: "Diseño UX/UI", en: "UX/UI Design" }, place: "Coderhouse", year: "2020" },
  { title: { es: "Desarrollo Web Full-Stack", en: "Full-Stack Web Development" }, place: "Digital House", year: "2019" },
];

export const languages: { name: L; level: L; score: number }[] = [
  { name: { es: "Español", en: "Spanish" }, level: { es: "Nativo", en: "Native" }, score: 5 },
  { name: { es: "Inglés", en: "English" }, level: { es: "C1", en: "C1" }, score: 4 },
  { name: { es: "Alemán", en: "German" }, level: { es: "B1", en: "B1" }, score: 3 },
  { name: { es: "Lengua de Señas Argentina", en: "Argentine Sign Language" }, level: { es: "B1", en: "B1" }, score: 3 },
];
