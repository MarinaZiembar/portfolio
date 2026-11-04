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
  lastName: "Ziembar",
  role: ["Sr Frontend Engineer", "& Creative Technologist"],
  location: { es: "Buenos Aires, Argentina", en: "Buenos Aires, Argentina" } as L,
  email: "marinaziembar@gmail.com",
  phone: "+54 9 11 3199 2611",
  phoneHref: "tel:+5491131992611",
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
      hello: "Hola, soy",
      intro:
        "Desarrolladora frontend con formación en Diseño Gráfico y UX/UI. Transformo ideas en experiencias web pulidas e interactivas, donde el diseño y el código trabajan juntos.",
      cta: "Explorá mi trabajo",
      badge: "scroll • desplazate • scroll • desplazate • ",
      badgeAria: "Bajar a trabajos",
      hint: "Click para reacomodar ↗",
      nextRole: "Ver el siguiente rol",
      roles: "Roles",
    },
    marquee2: ["Diseño", "Código", "Tipografía", "Movimiento", "Composición", "Detalle"],
    works: {
      title: ["trabajos", "seleccionados"],
      lead: "Como desarrolladora creativa, hago",
      for: "para",
      reset: "ver todo ×",
      empty: "Nada por acá con esa combinación todavía.",
      showAll: "Ver todo",
      carousel: "Trabajos seleccionados",
      prev: "Trabajo anterior",
      next: "Trabajo siguiente",
      view: "ver",
    },
    experience: { title: ["experiencia", "& recorrido"] },
    about: {
      title: ["pocas palabras", "sobre mí"],
      reel: ["Frontend", "UI/UX", "Diseño gráfico", "Design systems", "Motion", "Accesibilidad", "Mentoría", "& más"],
      education: "Educación",
      certifications: "Certificaciones",
      languages: "Idiomas",
    },
    contact: {
      kicker: "¿Tenés un proyecto?",
      title: "hablemos",
      write: "Escribime",
      cv: "Descargar CV",
      copied: "¡Copiado!",
      copy: "copiar",
      done: "¡listo!",
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
      badge: "scroll • keep going • scroll • keep going • ",
      badgeAria: "Scroll to works",
      hint: "Click to rearrange ↗",
      nextRole: "Show next role",
      roles: "Roles",
    },
    marquee2: ["Design", "Code", "Typography", "Motion", "Composition", "Detail"],
    works: {
      title: ["selected", "works"],
      lead: "As a creative developer, I do",
      for: "for",
      reset: "see all ×",
      empty: "Nothing here with that combination yet.",
      showAll: "See all",
      carousel: "Selected works",
      prev: "Previous project",
      next: "Next project",
      view: "view",
    },
    experience: { title: ["experience", "& journey"] },
    about: {
      title: ["a few words", "about me"],
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
      copied: "Copied!",
      copy: "copy",
      done: "done!",
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
    items: ["PHP", "Laravel", "MySQL", "WordPress", "Firebase", "Strapi"],
  },
  {
    title: { es: "Herramientas & Metodologías", en: "Tools & Methodologies" },
    items: ["Git", "Git Flow", "Agile", "Scrum", "Jira"],
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

export const disciplines = ["frontend", "uiux", "interaction", "leadership"] as const;
export const projectTypes = ["ecommerce", "dashboards", "apps", "websites"] as const;

export type Discipline = (typeof disciplines)[number];
export type ProjectType = (typeof projectTypes)[number];

export const tagLabels: Record<Discipline | ProjectType, L> = {
  frontend: { es: "Frontend", en: "Frontend" },
  uiux: { es: "UI/UX", en: "UI/UX" },
  interaction: { es: "Interacción", en: "Interaction" },
  leadership: { es: "Liderazgo", en: "Leadership" },
  ecommerce: { es: "E-commerce", en: "E-commerce" },
  dashboards: { es: "Dashboards", en: "Dashboards" },
  apps: { es: "Apps", en: "Apps" },
  websites: { es: "Sitios web", en: "Websites" },
};

export type Project = {
  slug: string;
  title: L;
  client: string;
  year: string;
  description: L;
  disciplines: Discipline[];
  types: ProjectType[];
  href?: string;
  seed: number; // define la composición geométrica de la miniatura
};

// ⚠️ Proyectos de ejemplo basados en tu experiencia: reemplazalos por los reales
// (título, descripción, link). `seed` cambia la ilustración generativa.
export const projects: Project[] = [
  {
    slug: "ecommerce-white-label",
    title: { es: "E-commerce white-label", en: "White-label e-commerce" },
    client: "itti",
    year: "2025",
    description: {
      es: "Componentes reutilizables y escalables para una plataforma multimarca.",
      en: "Reusable, scalable components for a multi-brand platform.",
    },
    disciplines: ["frontend", "uiux"],
    types: ["ecommerce"],
    seed: 3,
  },
  {
    slug: "dashboard-ia",
    title: { es: "Dashboard conversacional con IA", en: "AI conversation dashboard" },
    client: "Cliengo",
    year: "2024",
    description: {
      es: "Conversaciones de múltiples redes sociales unificadas en una sola interfaz.",
      en: "Conversations from multiple social channels unified in a single interface.",
    },
    disciplines: ["frontend", "interaction"],
    types: ["dashboards"],
    seed: 11,
  },
  {
    slug: "apps-mobile",
    title: { es: "Apps móviles", en: "Mobile apps" },
    client: "Creativedog",
    year: "2023",
    description: {
      es: "Liderazgo de un equipo de 5 personas desarrollando apps con React Native.",
      en: "Led a team of 5 building apps with React Native.",
    },
    disciplines: ["frontend", "leadership"],
    types: ["apps"],
    seed: 7,
  },
  {
    slug: "sitios-institucionales",
    title: { es: "Sitios institucionales", en: "Corporate websites" },
    client: "Creativedog",
    year: "2022",
    description: {
      es: "Sitios a medida con Next.js y WordPress, con foco en detalle visual.",
      en: "Custom sites built with Next.js and WordPress, with a focus on visual detail.",
    },
    disciplines: ["frontend", "uiux"],
    types: ["websites"],
    seed: 21,
  },
  {
    slug: "design-system",
    title: { es: "Librería de componentes", en: "Component library" },
    client: "Creativedog",
    year: "2021",
    description: {
      es: "Lineamientos de frontend y estructura de componentes con Atomic Design.",
      en: "Frontend guidelines and component structure based on Atomic Design.",
    },
    disciplines: ["uiux", "leadership"],
    types: ["websites", "apps"],
    seed: 5,
  },
  {
    slug: "portfolio",
    title: { es: "Este portfolio", en: "This portfolio" },
    client: "Personal",
    year: "2026",
    description: {
      es: "Next.js, canvas y geometría en movimiento.",
      en: "Next.js, canvas and geometry in motion.",
    },
    disciplines: ["frontend", "interaction", "uiux"],
    types: ["websites"],
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
