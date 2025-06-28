type Technologies = {
  name: string
  icon: string // URL to the icon image
  link: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  detail: string[]
  id: string
}

type Education = {
  institution: string
  degree: string
  fieldOfStudy: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const TECHNOLOGIES: Technologies[] = [
  {
    name: 'Python',
    icon: '/logos/python.svg',
    link: 'https://www.python.org/',
    id: 'tech1',
  },
  {
    name: 'React',
    icon: '/logos/react.svg',
    link: 'https://reactjs.org/',
    id: 'tech6',
  },
  {
    name: 'Typescript',
    icon: '/logos/typescript.svg',
    link: 'https://www.typescriptlang.org/',
    id: 'tech7',
  },
  {
    name: 'Node.js',
    icon: '/logos/nodejs.svg',
    link: 'https://nodejs.org/',
    id: 'tech3',
  },
  {
    name: 'Snowflake',
    icon: '/logos/snowflake.svg',
    link: 'https://www.snowflake.com/',
    id: 'tech2',
  },
  {
    name: 'PostgreSQL',
    icon: '/logos/postgresql.svg',
    link: 'https://www.postgresql.org/',
    id: 'tech4',
  },
  {
    name: 'DBT',
    icon: '/logos/dbt.png',
    link: 'https://www.getdbt.com/',
    id: 'tech9',
  },
  {
    name: 'AWS',
    icon: '/logos/aws.svg',
    link: 'https://aws.amazon.com/',
    id: 'tech5',
  },
  {
    name: 'Azure',
    icon: '/logos/azure.svg',
    link: 'https://azure.microsoft.com/',
    id: 'tech8',
  }
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Liberty Mutual Insurance',
    title: 'Sr. Data Engineer',
    start: '2020',
    end: 'Present',
    link: 'https://www.libertymutual.com/',
    detail: [
      'Lead multiple system migration initiatives, modernizing legacy infrastructure by transitioning to scalable cloud-based architectures using diverse tech stacks.',
      'Develop and manage database objects across PostgreSQL, Synapse Analytics, and Snowflake to support scalable data delivery pipelines and stakeholder reporting.',
      'Build new features for internal web applications using React, Node.js, and TypeScript to support business operations.',
    ],    id: 'work1',
  },
  {
    company: 'University of New Hampshire',
    title: 'Data Engineer',
    start: '2017',
    end: '2020',
    link: 'https://www.unh.edu/',
    detail: [
      'Designed and implemented Python-based processes for ingesting and transforming educational data.',
      'Leveraged Rundeck to orchestrate automated jobs processing educational data.',
      'Managed schema changes, performance tuning, and data integrity for a MariaDB database used in educational data workflows.',
    ],    id: 'work2',
  },
]

export const EDUCATION: Education[] = [
  {
    institution: 'University of New Hampshire',
    degree: 'Bachelor of Science',
    fieldOfStudy: 'Computer Science',
    link: 'https://www.unh.edu/',
    id: 'edu1',
  },
  {
    institution: 'University of New Hampshire',
    degree: 'Master of Science',
    fieldOfStudy: 'Cybersecurity',
    link: 'https://www.unh.edu/',
    id: 'edu2',
  },
]


export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Teaching HTML Made Me Miss the 90s',
    description: 'Reflections on creativity in web design',
    link: '/blog/teaching-html-made-me-miss-the-90s',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/pattiestrada',
  },
  {
    label: 'X (Twitter)',
    link: 'https://x.com/p_lesstrada',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/patricia-estrada-a9819865/',
  },
]

export const EMAIL = 'estrada.patti@gmail.com'
