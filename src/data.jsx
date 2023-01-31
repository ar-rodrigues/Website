import React from 'react'
import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";


export const websites = [
  {
    id: 0,
    url: 'https://alisson-rodrigues-pt.netlify.app/',
    description: 'website in portuguese'
  },
  {
    id: 1,
    url: 'https://alisson-rodrigues.netlify.app/',
    description: 'website in spanish'
  }
]

export const links = [
  {
    id: 0,
    url: "#home",
    text: "inicio"
  },
  {
    id: 1,
    url: "#about",
    text: "sobre mi"
  },
  {
    id: 2,
    url: "#experiences",
    text: "experiencia"
  },
  {
    id: 3,
    url: "#education",
    text: "cursos"
  },
  {
    id: 4,
    url: "#skills",
    text: "Habilidades"
  },
  {
    id: 5,
    url: "#portfolio",
    text: "Portafolio"
  },
  {
    id: 6,
    url: "#contact-box",
    text: "Contacto"
  }
];

export const social = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/alisson-rodrigues/",
    icon: <FaLinkedin />,
    name: "LinkedIn"
  },
  {
    id: 2,
    url: "https://github.com/ar-rodrigues",
    icon: <FaGithubSquare />,
    name: "Github"
  },
  {
    id: 3,
    url: "https://medium.com/@Alisson.R",
    icon: <FaMedium />,
    name: "Medium"
  }
];
//
export const experiences = [
  {
    id: "gentedemas2022",
    order: 0,
    title: "Hostal Gente de Más BnB",
    dates: "Julio 2022 - Actualmente",
    duties: [
      "Recepcionista.",
      "Registrar a los huéspedes, proporcionar información sobre el lugar y la ciudad, manejar pagos y cobros, y brindar servicio al cliente."
    ],
    company: "Hostal Gente de Más Bnb"
  },
  {
    id: "freelancer00",
    order: 1,
    title: "Freelancer Web Developer",
    dates: "Agosto 2021 - Actualmente",
    duties: [
      "Web Developer.",
      "Creación de paginas web, desarrollar, implementar y mantener sitios web de acuerdo con los requerimientos del cliente. Creación de contenido, la optimización de la experiencia del usuario (UX) y la comprobación de la compatibilidad con todos los dispositivos."
    ],
    company: "Freelancer"
  },
  {
    id: "wpbr2019",
    order: 2,
    title: "WPBR Marketing Digital - México",
    dates: "Julio 2019 - Septiembre 2019",
    duties: [
      "Trainee Internacional en la ciudad de Puebla, México, en el área de marketing.",
      "Gestión de campañas de PPC en Facebook.",
      "Campañas creadas, administradas, monitoreadas y optimizadas en Facebook."
    ],
    company: "WPBR"
  },
  {
    id: "gpset2019",
    order: 3,
    title: "Grupo De Investigación Sociedad, Economía Y Trabajo (GPSET- UFRGS)",
    dates: "Agosto 2018 - Septiembre 2019",
    duties: [
      "Becario de iniciación científica.",
      'Colaboré en el proyecto "Acción emprendedora en pequeñas y medianas empresas de base tecnológica".',
      "Desarrollé actividades de investigación como entrevistas, reportajes y tareas administrativas.",
      'Elaboré y presente el trabajo "Un estudio etnográfico sobre la acción emprendedora en startups, Brasil y México" en el Salón de Iniciación Científica de la UFRGS.'
    ],
    company: "GPSET"
  },
  {
    id: "nitec2018",
    order: 4,
    title: "Centro de Estudios en Innovación (NITEC - UFRGS)",
    dates: "Enero 2017 - Julio 2018",
    duties: [
      'Asistencia en los proyectos "Caminos de innovación en la industria" y "Caminos de innovación en agronegocios".',
      "Asistencia en la difusión de proyectos, informes, presentaciones y tareas administrativas.",
      'Elaboración y presentación de los trabajos “El desarrollo de productos premium en empresas del sector alimentario” y “Agregando valor en el sector alimentario a través de la experiencia del usuario”.'
    ],
    company: "NITEC"
  },
  {
    id: "equilibrio2017",
    order: 5,
    title: "Equilíbrio Assessoria Econômica",
    dates: "Septiembre 2016 - Mayo 2017",
    duties: [
      "Trabajé en el sector de proyectos y en el sector financiero, asistiendo en las actividades de la Empresa Junior."
    ],
    company: "Equilíbrio"
  },
  {
    id: "exercito2016",
    order: 6,
    title: "Ejército Brasileño",
    dates: "Março 2013 - Fevereiro 2016",
    duties: [
      "Como 3er Sargento de Comunicaciones, trabajé en la planificación y ejecución de operaciones de campo, instalación eléctrica, radio y comunicaciones, así como tareas administrativas.",
      "Planificación y dirección de grupos para trabajar dentro y fuera del cuartel, en campo y situaciones operativas."
    ],
    company: "Ejército"
  }
];

export const courses = [
  {
    id: "universidade",
    title: "Licenciatura en Ciencias Sociales - IFCH",
    field: "Formación",
    institution: "Universidade Federal do Rio Grande do Sul",
    dates: "2018 - actual",
    names: [
      "Licenciatura en Ciencias Sociales en el Instituto de Filosofía y Ciencias Sociales de la Universidad Federal de Rio Grande do Sul"
    ],
    certified: []
  },
  {
    id: "marketing",
    title: "University of Illinois (Coursera)",
    field: "Marketing",
    institution: "Coursera",
    dates: "",
    names: [
      "Marketing in a Digital World",
      "Marketing Analytics in Theory",
      "Marketing Analytics in Practice",
      "Digital Media and Marketing Principles",
      "Digital Media and Marketing Strategies"
    ],
    certified: [
      //same order as names
      "https://coursera.org/share/c156010302242ad0cd36e0154fb12ed4",
      "https://coursera.org/share/1291c4191cd082cf0dd064479b72fff0",
      "https://coursera.org/share/3c1da9b8abcbaa1442861cdc3d8eb42b",
      "https://coursera.org/share/762f10dd316f5acb43ef4e8396dbce13",
      "https://coursera.org/share/61fede060428503ce4cfdcd2d134f58b"
    ]
  },
  {
    id: "development",
    title: "HTML | CSS | JavaScript | MongoDB",
    field: "Desarrollo Web",
    institution: "FreeCodeCamp / MongoDB",
    dates: "",
    names: [
      "JavaScript Algorithms and Data Structures",
      "Back End Development and APIs",
      "MongoDB Basics"
    ],
    certified: [
      //same order as names
      "https://freecodecamp.org/certification/alisson_rodrigues/javascript-algorithms-and-data-structures",
      "https://freecodecamp.org/certification/alisson_rodrigues/back-end-development-and-apis",
      "https://university.mongodb.com/course_completion/9245b609-7621-4f1a-8634-b6df43ec412d"
    ]
  },
  {
    id: "exercito",
    title: "Ejército Brasileño",
    field: "Liderazgo",
    institution: "Ejército Brasileño",
    dates: "Junio 2013 - Noviembre 2014",
    names: ["Curso de Formación de Cabos", "Curso de Formación de Sargentos"],
    certified: []
  }
];

export const skills = [
  {
    subject: "Python",
    nivel: 2,
    fill: "#34a6ed"
  },
  {
    subject: "JavaScript",
    nivel: 3,
    fill: "#34a6ed"
  },
  {
    subject: "React",
    nivel: 3,
    fill: "#34a6ed"
  },
  {
    subject: "NodeJS",
    nivel: 3,
    fill: "#34a6ed"
  },
  {
    subject: "MongoDB",
    nivel: 3,
    fill: "#34a6ed"
  },
  {
    subject: "WordPress",
    nivel: 3,
    fill: "#83a6ed"
  },
  {
    subject: "HTML",
    nivel: 3,
    fill: "#83a6ed"
  },
  {
    subject: "CSS",
    nivel: 3,
    fill: "#83a6ed"
  },
  {
    subject: "Francés",
    nivel: 3,
    fill: "#83a6ed"
  },
  {
    subject: "Español",
    nivel: 5,
    fill: "#8dd1e1"
  },
  {
    subject: "Inglés",
    nivel: 5,
    fill: "#83a6ed"
  },
  {
    subject: "Portugués",
    nivel: 7,
    fill: "#8884d8"
  }
];

export const infos = [
  {
    id: 1,
    name: "Alisson Rodrigues",
    birth: "1994/08/24", //format: yyyy/mm/dd
    photo:
      "https://lh3.googleusercontent.com/pw/ACtC-3fFEeC-7dVdDJVXEqhtUiUbXS3LzzYMT4gkf_uo-JfzKTM9-6VGyAoWQTuE0mXItvnQ0ZXXG_t6Rhrc_E5jLt5IYpswTQqdZ-J7pAomjs7XLa1TjYpq6gsZxG4GQq6ECWxMRvbZnLEv-ZlL9OpEgZlMeQ=w908-h681-no?authuser=0",
    about:
      'Soy brasileño, apasionado por aprender idiomas y descubrir cosas nuevas. Soy autodidacta, hablo cuatro idiomas, desarrolle mis habilidades de programación durante la pandemia y en el último año me he dedicado a trabajar como free-lancer.'
  }
];
