export interface Education {
  id: number;
  degree: string;
  institution: string;
  board?: string;
  location: string;
  duration: string;
  score?: string;
  description: string;
  icon: string;
}

export const educationData: Education[] = [
  {
    id: 1,
    degree: "DevOps Training",
    institution: "Besant Technologies",
    board: "Professional Training",
    location: "Bengaluru, India",
    duration: "Jun 2026 - Present",
    description:
      "Currently pursuing professional DevOps training with hands-on experience in Linux, Git, Shell Scripting, Docker, Kubernetes, Jenkins, AWS, Terraform, CI/CD pipelines, Infrastructure as Code, and Cloud Computing.",
    icon: "💻",
  },
  {
    id: 2,
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Chaudhary Charan Singh University (CCSU)",
    board: "CCSU",
    location: "Meerut, Uttar Pradesh",
    duration: "2019",
    description:
      "Completed Bachelor of Technology with a strong foundation in software engineering, programming, databases, networking, and computer science fundamentals.",
    icon: "🎓",
  },
  {
    id: 3,
    degree: "Higher Secondary (Class XII)",
    institution: "Intermediate School",
    board: "English Medium",
    location: "India",
    duration: "2013",
    description:
      "Completed Higher Secondary education with focus on academic excellence and analytical problem-solving.",
    icon: "📘",
  },
  {
    id: 4,
    degree: "Secondary School (Class X)",
    institution: "High School",
    board: "English Medium",
    location: "India",
    duration: "2011",
    description:
      "Completed Secondary School education and built a strong academic foundation for higher studies.",
    icon: "📗",
  },
];

export default educationData;