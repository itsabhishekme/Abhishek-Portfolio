import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDocker,
  FaAws,
  FaLinux,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiKubernetes,
  SiTerraform,
  SiJenkins,
  SiCypress,
  SiPlaywright,
  SiPostman,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiMysql,
} from "react-icons/si";

/* ==========================================================
   Personal Information
========================================================== */

export const PERSONAL_INFO = {
  name: "Abhishek Kumar",

  title: "DevOps Engineer",

  subtitle: "QA Automation Engineer",

  email: "abhishekkumardipu@gmail.com",

  phone: "+91 9142628227",

  location: "Bengaluru, Karnataka, India",

  website: "https://your-domain.com",

  github: "https://github.com/yourusername",

  linkedin: "https://linkedin.com/in/yourusername",

  resume: "/resume/Abhishek-Kumar-Resume.pdf",

  profileImage: "/images/profile.png",

  heroImage: "/images/profile.png",
};

/* ==========================================================
   Navigation
========================================================== */

export const NAV_LINKS = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Skills",
    href: "/skills",
  },
  {
    title: "Experience",
    href: "/experience",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Certifications",
    href: "/certifications",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

/* ==========================================================
   Hero Typing Animation
========================================================== */

export const HERO_TEXTS = [
  "DevOps Engineer",
  "QA Automation Engineer",
  "AWS Cloud Enthusiast",
  "Docker & Kubernetes Learner",
  "Automation Test Engineer",
  "Playwright Automation Expert",
  "Cypress Automation Engineer",
  "Linux Enthusiast",
  "CI/CD Pipeline Builder",
  "Infrastructure as Code Learner",
];

/* ==========================================================
   Social Links
========================================================== */

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: PERSONAL_INFO.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    url: PERSONAL_INFO.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Email",
    url: `mailto:${PERSONAL_INFO.email}`,
    icon: FaEnvelope,
  },
  {
    name: "Phone",
    url: `tel:${PERSONAL_INFO.phone}`,
    icon: FaPhone,
  },
];

/* ==========================================================
   Contact Information
========================================================== */

export const CONTACT_INFO = [
  {
    title: "Email",
    value: PERSONAL_INFO.email,
    icon: FaEnvelope,
  },
  {
    title: "Phone",
    value: PERSONAL_INFO.phone,
    icon: FaPhone,
  },
  {
    title: "Location",
    value: PERSONAL_INFO.location,
    icon: FaMapMarkerAlt,
  },
];

/* ==========================================================
   Tech Stack
========================================================== */

export const TECH_STACK = [
  {
    name: "Docker",
    icon: FaDocker,
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
  },
  {
    name: "AWS",
    icon: FaAws,
    color: "#FF9900",
  },
  {
    name: "Terraform",
    icon: SiTerraform,
    color: "#844FBA",
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
    color: "#D24939",
  },
  {
    name: "Linux",
    icon: FaLinux,
    color: "#FCC624",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F05032",
  },
];

/* ==========================================================
   Skills
========================================================== */

export const SKILLS = [
  {
    name: "Cypress",
    icon: SiCypress,
  },
  {
    name: "Playwright",
    icon: SiPlaywright,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
  },
  {
    name: "Python",
    icon: SiPython,
  },
  {
    name: "SQL",
    icon: SiMysql,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
  },
  {
    name: "Terraform",
    icon: SiTerraform,
  },
  {
    name: "Jenkins",
    icon: SiJenkins,
  },
  {
    name: "AWS",
    icon: FaAws,
  },
  {
    name: "Linux",
    icon: FaLinux,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
];

/* ==========================================================
   Statistics
========================================================== */

export const STATS = [
  {
    value: "2.9+",
    label: "Years Experience",
  },
  {
    value: "25+",
    label: "Automation Suites",
  },
  {
    value: "50+",
    label: "API Test Cases",
  },
  {
    value: "15+",
    label: "Technologies",
  },
];

/* ==========================================================
   Theme Colors
========================================================== */

export const COLORS = {
  primary: "#2563EB",

  secondary: "#0F172A",

  accent: "#38BDF8",

  success: "#22C55E",

  warning: "#F59E0B",

  danger: "#EF4444",

  white: "#FFFFFF",

  black: "#000000",

  background: "#020617",
};

/* ==========================================================
   Animation
========================================================== */

export const ANIMATION_DURATION = {
  fast: 0.3,

  normal: 0.5,

  slow: 0.8,
};

export const TRANSITION = {
  duration: 0.6,
  ease: "easeOut",
};

/* ==========================================================
   SEO
========================================================== */

export const SEO = {
  title: "Abhishek Kumar | DevOps Engineer",

  description:
    "Professional Portfolio of Abhishek Kumar. DevOps Engineer, QA Automation Engineer, AWS, Docker, Kubernetes, Terraform, Jenkins, Cypress, Playwright, Linux, SQL, CI/CD.",

  keywords: [
    "Abhishek Kumar",
    "DevOps",
    "Portfolio",
    "Next.js",
    "React",
    "TypeScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Linux",
    "Playwright",
    "Cypress",
    "Automation Testing",
  ],
};