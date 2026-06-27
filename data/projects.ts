export interface Project {
  id: number;
  title: string;
  slug: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  github: string;
  live: string;
  featured: boolean;
  technologies: string[];
  features: string[];
  challenges: string[];
  achievements: string[];
}

export const projects: Project[] = [
  {
    id: 1,

    title: "Gateway Automation",

    slug: "gateway-automation",

    category: "QA Automation",

    image: "/images/projects/gateway.png",

    github: "https://github.com/yourusername/gateway-automation",

    live: "",

    featured: true,

    description:
      "Enterprise UI Automation framework built using Cypress with API validation, SQL verification and performance testing.",

    longDescription:
      "Developed a scalable automation framework from scratch using Cypress. Automated critical business workflows, validated APIs using Postman, performed backend verification through SQL queries, executed performance testing with JMeter and integrated the automation suite into AWS CI/CD pipelines.",

    technologies: [
      "Cypress",
      "JavaScript",
      "Postman",
      "SQL",
      "JMeter",
      "AWS",
      "Git",
      "CI/CD",
    ],

    features: [
      "UI Automation",
      "API Automation",
      "Database Validation",
      "Performance Testing",
      "Regression Testing",
      "Cross Browser Testing",
      "CI/CD Integration",
      "Reporting Dashboard",
    ],

    challenges: [
      "Maintaining reusable automation framework",
      "Reducing flaky test cases",
      "Parallel execution",
      "Database synchronization",
    ],

    achievements: [
      "Reduced regression execution by 40%",
      "Improved software quality",
      "Reduced manual effort",
      "Stable automation framework",
    ],
  },

  {
    id: 2,

    title: "Customer Portal Automation",

    slug: "customer-portal",

    category: "QA Automation",

    image: "/images/projects/customer.png",

    github: "https://github.com/yourusername/customer-portal",

    live: "",

    featured: true,

    description:
      "Large-scale customer portal automation framework developed using Cypress.",

    longDescription:
      "Created an enterprise-grade Cypress automation framework achieving over 90% UI automation coverage. Integrated API validation, SQL verification and performance testing while supporting Agile development teams.",

    technologies: [
      "Cypress",
      "JavaScript",
      "Postman",
      "SQL",
      "JMeter",
      "Git",
      "GitHub",
      "AWS",
    ],

    features: [
      "Automation Framework",
      "API Automation",
      "UI Testing",
      "Regression Suite",
      "Smoke Testing",
      "Cross Browser Support",
      "Reporting",
      "Git Integration",
    ],

    challenges: [
      "High regression execution time",
      "Complex UI flows",
      "Large test suite maintenance",
    ],

    achievements: [
      "90% UI Automation",
      "70% Faster Testing",
      "50% Better API Validation",
      "Reduced Production Bugs",
    ],
  },

  {
    id: 3,

    title: "Admin Portal Automation",

    slug: "admin-portal",

    category: "Playwright",

    image: "/images/projects/admin.png",

    github: "https://github.com/yourusername/admin-portal",

    live: "",

    featured: true,

    description:
      "Modern Playwright Automation Framework with API validation and CI/CD integration.",

    longDescription:
      "Built an end-to-end Playwright automation framework using TypeScript and JavaScript. Automated critical admin workflows, integrated API testing with Postman and enabled continuous testing through CI/CD pipelines.",

    technologies: [
      "Playwright",
      "TypeScript",
      "JavaScript",
      "Postman",
      "Git",
      "GitHub",
      "CI/CD",
      "Node.js",
    ],

    features: [
      "Playwright Framework",
      "Parallel Execution",
      "API Validation",
      "Screenshots",
      "Video Recording",
      "Retry Logic",
      "CI/CD",
      "Reporting",
    ],

    challenges: [
      "Migration from manual testing",
      "Complex admin workflows",
      "Maintaining stability",
    ],

    achievements: [
      "Improved Release Quality",
      "Reduced Manual Testing",
      "Reliable Automation",
      "Fast Feedback Pipeline",
    ],
  },

  {
    id: 4,

    title: "DevOps Learning Lab",

    slug: "devops-learning",

    category: "DevOps",

    image: "/images/projects/devops.png",

    github: "https://github.com/yourusername/devops-learning",

    live: "",

    featured: true,

    description:
      "Hands-on DevOps project covering Docker, Kubernetes, Jenkins, Terraform and AWS.",

    longDescription:
      "Personal DevOps learning project focusing on Infrastructure as Code, containerization, CI/CD pipelines, cloud deployment and automation. Created multiple practical labs while transitioning from QA Automation to DevOps.",

    technologies: [
      "Linux",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "AWS",
      "Git",
      "Shell Script",
    ],

    features: [
      "Docker Containers",
      "Kubernetes Deployment",
      "Terraform Infrastructure",
      "AWS EC2",
      "Jenkins Pipeline",
      "GitHub Actions",
      "Shell Automation",
      "Monitoring",
    ],

    challenges: [
      "Learning cloud infrastructure",
      "Understanding Kubernetes",
      "Infrastructure automation",
    ],

    achievements: [
      "Built complete DevOps workflow",
      "Automated deployment pipeline",
      "Infrastructure as Code",
      "Cloud-native deployment",
    ],
  },

  {
    id: 5,

    title: "Personal Portfolio",

    slug: "portfolio",

    category: "Next.js",

    image: "/images/projects/portfolio.png",

    github: "https://github.com/yourusername/portfolio",

    live: "https://yourportfolio.vercel.app",

    featured: true,

    description:
      "Modern developer portfolio built using Next.js 15, React 19, TypeScript and Tailwind CSS.",

    longDescription:
      "Responsive portfolio showcasing professional experience, DevOps journey, QA Automation projects, certifications, technical skills and contact information with modern UI animations.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],

    features: [
      "Dark Theme",
      "Responsive Design",
      "Animations",
      "SEO",
      "Contact Form",
      "Project Showcase",
      "Resume Download",
      "Performance Optimized",
    ],

    challenges: [
      "Responsive layout",
      "Performance optimization",
      "Modern UI",
    ],

    achievements: [
      "100% Responsive",
      "SEO Optimized",
      "Fast Loading",
      "Modern Design",
    ],
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const automationProjects = projects.filter(
  (project) => project.category === "QA Automation"
);

export const devopsProjects = projects.filter(
  (project) => project.category === "DevOps"
);

export const portfolioProject = projects.find(
  (project) => project.slug === "portfolio"
);