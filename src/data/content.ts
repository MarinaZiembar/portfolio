// ─────────────────────────────────────────────────────────────
//  Todo el contenido del sitio vive acá. Editá este archivo para
//  actualizar textos, proyectos y experiencia sin tocar componentes.
// ─────────────────────────────────────────────────────────────

export const profile = {
  firstName: "Marina",
  lastName: "Ziembar",
  role: ["Sr Frontend Engineer", "& Creative Technologist"],
  location: "Buenos Aires, Argentina",
  email: "marinaziembar@gmail.com",
  phone: "+54 9 11 3199 2611",
  phoneHref: "tel:+5491131992611",
  linkedin: "https://linkedin.com/in/marina-ziembar",
  linkedinLabel: "linkedin.com/in/marina-ziembar",
  // Link a tu CV (ej. Google Drive o "/cv.pdf" dentro de /public). Vacío = se oculta el botón.
  cvUrl: "",
};

// Roles que rotan en el hero: línea fina + línea regular (como en el CV).
// Agregá, quitá o reordená libremente.
export const heroLines: [string, string][] = [
  ["frontend", "engineer"],
  ["creative", "technologist"],
  ["ui/ux", "designer"],
  ["team", "lead"],
];

export const intro =
  "Desarrolladora frontend con formación en Diseño Gráfico y UX/UI. Transformo ideas en experiencias web pulidas e interactivas, donde el diseño y el código trabajan juntos.";

export const about = [
  "Soy Desarrolladora Frontend con formación en Diseño Gráfico y UX/UI. Me apasiona transformar ideas en experiencias web pulidas e interactivas, donde el diseño y el código trabajan en conjunto.",
  "Tengo un fuerte criterio visual, especialmente en tipografía, espaciado, composición, jerarquía visual y movimiento. Me interesa no solo cómo funciona una interfaz, sino también cómo se ve y se siente.",
  "Trabajo principalmente con React, Next.js, TypeScript y Tailwind, y cuento con experiencia liderando y mentoreando desarrolladores.",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "React Native", "JavaScript (ES6+)", "TypeScript", "TanStack Query", "Redux", "TailwindCSS", "HTML5", "CSS3", "SASS", "jQuery"],
  },
  {
    title: "Diseño",
    items: ["UI/UX Design", "Responsive Web Design", "Atomic Design", "Graphic Design", "Figma", "Photoshop", "Illustrator", "Adobe XD"],
  },
  {
    title: "Backend & CMS",
    items: ["PHP", "Laravel", "MySQL", "WordPress", "Firebase", "Strapi"],
  },
  {
    title: "Herramientas & Metodologías",
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

export const disciplines = ["Frontend", "UI/UX", "Interacción", "Liderazgo"] as const;
export const projectTypes = ["E-commerce", "Dashboards", "Apps", "Sitios web"] as const;

export type Discipline = (typeof disciplines)[number];
export type ProjectType = (typeof projectTypes)[number];

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  description: string;
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
    title: "E-commerce white-label",
    client: "itti",
    year: "2025",
    description: "Componentes reutilizables y escalables para una plataforma multimarca.",
    disciplines: ["Frontend", "UI/UX"],
    types: ["E-commerce"],
    seed: 3,
  },
  {
    slug: "dashboard-ia",
    title: "Dashboard conversacional con IA",
    client: "Cliengo",
    year: "2024",
    description: "Conversaciones de múltiples redes sociales unificadas en una sola interfaz.",
    disciplines: ["Frontend", "Interacción"],
    types: ["Dashboards"],
    seed: 11,
  },
  {
    slug: "apps-mobile",
    title: "Apps móviles",
    client: "Creativedog",
    year: "2023",
    description: "Liderazgo de un equipo de 5 personas desarrollando apps con React Native.",
    disciplines: ["Frontend", "Liderazgo"],
    types: ["Apps"],
    seed: 7,
  },
  {
    slug: "sitios-institucionales",
    title: "Sitios institucionales",
    client: "Creativedog",
    year: "2022",
    description: "Sitios a medida con Next.js y WordPress, con foco en detalle visual.",
    disciplines: ["Frontend", "UI/UX"],
    types: ["Sitios web"],
    seed: 21,
  },
  {
    slug: "design-system",
    title: "Librería de componentes",
    client: "Creativedog",
    year: "2021",
    description: "Lineamientos de frontend y estructura de componentes con Atomic Design.",
    disciplines: ["UI/UX", "Liderazgo"],
    types: ["Sitios web", "Apps"],
    seed: 5,
  },
  {
    slug: "portfolio",
    title: "Este portfolio",
    client: "Personal",
    year: "2026",
    description: "Next.js, canvas y geometría en movimiento.",
    disciplines: ["Frontend", "Interacción", "UI/UX"],
    types: ["Sitios web"],
    seed: 17,
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "itti",
    role: "Sr Software Engineer",
    period: "Jul 2025 — Actualidad",
    bullets: [
      "Desarrollo de soluciones frontend para una plataforma de e-commerce white-label con React, Next.js, TypeScript y Tailwind CSS.",
      "Componentes de UI reutilizables y escalables, enfocados en la consistencia entre múltiples experiencias de e-commerce.",
      "Transformo requerimientos de diseño en interfaces responsivas, pulidas y funcionales.",
      "Colaboro en patrones y soluciones frontend reutilizables para un entorno multimarca.",
    ],
  },
  {
    company: "Cliengo",
    role: "Ssr Frontend Developer",
    period: "Ago 2024 — Jul 2025",
    bullets: [
      "Frontend de un dashboard de gestión de conversaciones potenciado por IA, que centraliza múltiples canales de redes sociales.",
      "Funcionalidades enfocadas en usabilidad, diseño responsivo y presentación clara de la información.",
      "Producto que integra inteligencia artificial y flujos de comunicación con clientes.",
    ],
  },
  {
    company: "Creativedog",
    role: "Frontend Coach",
    period: "Jun 2024 — Ago 2024",
    bullets: [
      "Soporte técnico y mentoría al equipo en desarrollo frontend y buenas prácticas.",
      "Capacitaciones internas sobre técnicas de estilizado y calidad de UI.",
      "Investigación de nuevas tecnologías para modernizar el stack de la empresa.",
    ],
  },
  {
    company: "Creativedog",
    role: "Team Lead — Equipo de Desarrollo de Apps",
    period: "Feb 2023 — Jun 2024",
    bullets: [
      "Lideré un equipo de 5 personas: cronogramas, evaluaciones de desempeño y sprints con Scrum.",
      "Coordiné la comunicación con los clientes durante todo el desarrollo.",
      "Participé en entrevistas y evaluación de candidatos.",
    ],
  },
  {
    company: "Creativedog",
    role: "Frontend Developer",
    period: "Jul 2020 — Ago 2024",
    bullets: [
      "Sitios web, aplicaciones web y móviles con React, Next.js y React Native.",
      "Establecí lineamientos de frontend y estructuras de componentes reutilizables.",
      "Proyectos con WordPress utilizando PHP, Laravel y Symfony.",
    ],
  },
  {
    company: "Coderhouse",
    role: "Profesora de Desarrollo Web",
    period: "Jul 2022 — Ene 2025",
    bullets: [
      "Curso de 2 meses sobre HTML, CSS y SASS, guiando a los estudiantes hasta un proyecto final.",
      "Acompañamiento en la aplicación de conceptos de frontend y buenas prácticas de estilizado.",
    ],
  },
];

export const education = [
  { title: "Tecnicatura Superior en Programación", place: "Teclab Instituto Técnico Superior", period: "2020 — 2022" },
  { title: "Diseño Gráfico", place: "Universidad de Buenos Aires", period: "2017 — 2021" },
];

export const certifications = [
  { title: "Software Quality Testing", place: "Digital House", year: "2025" },
  { title: "Digital Product Management", place: "Digital House", year: "2024" },
  { title: "Liderazgo Estratégico", place: "UTN", year: "2023" },
  { title: "Frontend Avanzado con ReactJs", place: "Acámica", year: "2020" },
  { title: "Diseño UX/UI", place: "Coderhouse", year: "2020" },
  { title: "Desarrollo Web Full-Stack", place: "Digital House", year: "2019" },
];

export const languages = [
  { name: "Español", level: "Nativo", score: 5 },
  { name: "Inglés", level: "C1", score: 4 },
  { name: "Alemán", level: "B1", score: 3 },
  { name: "Lengua de Señas Argentina", level: "B1", score: 3 },
];
