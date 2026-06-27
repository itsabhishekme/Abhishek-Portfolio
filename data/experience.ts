export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  employmentType: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
  achievements: string[];
  companyUrl?: string;
  current: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,

    company: "Besant Technologies",

    role: "DevOps Trainee",

    duration: "Jun 2026 - Present",

    location: "Bengaluru, Karnataka, India",

    employmentType: "Training",

    current: true,

    companyUrl: "https://www.besanttechnologies.com",

    description:
      "Currently undergoing structured DevOps training with hands-on experience in Linux, Git, Shell Scripting, Docker, Jenkins, Kubernetes, AWS, Terraform and CI/CD. Building cloud-native projects while learning Infrastructure as Code and automation best practices.",

    technologies: [
      "Linux",
      "Git",
      "Shell Scripting",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "AWS",
      "Terraform",
      "GitHub",
      "CI/CD",
      "YAML",
      "Bash",
    ],

    responsibilities: [
      "Learn Linux administration and command line operations.",
      "Practice Git workflows and GitHub collaboration.",
      "Build Docker images and manage containers.",
      "Create Jenkins CI/CD pipelines.",
      "Deploy applications on Kubernetes clusters.",
      "Provision cloud infrastructure using Terraform.",
      "Work with AWS core services.",
      "Automate deployments using Infrastructure as Code.",
      "Develop real-world DevOps projects.",
      "Follow DevOps best practices and Agile workflow.",
    ],

    achievements: [
      "Successfully completed Linux fundamentals.",
      "Created Docker containerized applications.",
      "Built Jenkins CI/CD pipelines.",
      "Learning Kubernetes deployments.",
      "Developing Infrastructure as Code using Terraform.",
      "Building AWS cloud deployment projects.",
    ],
  },

  {
    id: 2,

    company: "Career Transition",

    role: "Professional Development",

    duration: "May 2025 - May 2026",

    location: "India",

    employmentType: "Career Break",

    current: false,

    description:
      "Took a planned career transition to move from QA Automation into DevOps. Strengthened technical fundamentals through self-learning, hands-on labs and continuous practice while preparing for cloud and DevOps engineering roles.",

    technologies: [
      "Linux",
      "Git",
      "Networking",
      "Docker",
      "AWS",
      "Shell Script",
      "Terraform",
      "Jenkins",
      "Kubernetes",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
    ],

    responsibilities: [
      "Studied Linux administration.",
      "Practiced Git version control.",
      "Improved networking fundamentals.",
      "Learned Docker and containerization.",
      "Explored Kubernetes architecture.",
      "Studied Terraform Infrastructure as Code.",
      "Learned Jenkins CI/CD pipelines.",
      "Built personal portfolio projects.",
      "Practiced AI Prompt Engineering.",
      "Strengthened frontend development skills.",
    ],

    achievements: [
      "Completed DevOps roadmap preparation.",
      "Built personal portfolio website.",
      "Started multiple DevOps projects.",
      "Created Vihaan Writes personal initiative.",
      "Improved cloud computing knowledge.",
    ],
  },

  {
    id: 3,

    company: "Datman",

    role: "QA Automation Engineer",

    duration: "Aug 2022 - Apr 2025",

    location: "Bengaluru, Karnataka, India",

    employmentType: "Full Time",

    current: false,

    companyUrl: "https://www.datman.je",

    description:
      "Worked as a QA Automation Engineer developing scalable automation frameworks using Cypress and Playwright. Automated APIs using Postman, validated backend data using SQL, performed performance testing with JMeter and integrated automation into AWS CI/CD pipelines.",

    technologies: [
      "JavaScript",
      "TypeScript",
      "Cypress",
      "Playwright",
      "Postman",
      "SQL",
      "Python",
      "AWS",
      "JMeter",
      "Git",
      "GitHub",
      "CI/CD",
      "REST API",
      "JSON",
      "Agile",
      "JIRA",
    ],

    responsibilities: [
      "Developed Cypress automation framework from scratch.",
      "Created Playwright end-to-end automation framework.",
      "Automated UI regression testing.",
      "Performed API testing using Postman.",
      "Validated backend databases using SQL.",
      "Executed performance testing using JMeter.",
      "Integrated automation into AWS CI/CD pipeline.",
      "Created reusable automation utilities.",
      "Collaborated with developers in Agile sprints.",
      "Performed root cause analysis of defects.",
      "Prepared automation reports.",
      "Maintained automation framework.",
    ],

    achievements: [
      "Reduced regression testing time by 40%.",
      "Achieved over 90% UI automation coverage.",
      "Improved API defect detection by 50%.",
      "Built automation frameworks from scratch.",
      "Improved software quality and release confidence.",
      "Reduced manual testing effort significantly.",
      "Optimized regression execution time.",
      "Successfully delivered multiple enterprise projects.",
    ],
  },
];

export default experiences;