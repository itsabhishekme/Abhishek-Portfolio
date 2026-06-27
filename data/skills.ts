export interface Skill {
  id: number;
  name: string;
  category: string;
  level: number;
  experience: string;
  icon: string;
  color: string;
}

export const skills: Skill[] = [
  // ==========================
  // DEVOPS
  // ==========================

  {
    id: 1,
    name: "Linux",
    category: "DevOps",
    level: 90,
    experience: "1+ Year",
    icon: "🐧",
    color: "#FCC624",
  },

  {
    id: 2,
    name: "Git",
    category: "DevOps",
    level: 90,
    experience: "2+ Years",
    icon: "🌿",
    color: "#F05032",
  },

  {
    id: 3,
    name: "GitHub",
    category: "DevOps",
    level: 90,
    experience: "2+ Years",
    icon: "🐙",
    color: "#181717",
  },

  {
    id: 4,
    name: "Docker",
    category: "DevOps",
    level: 80,
    experience: "Learning",
    icon: "🐳",
    color: "#2496ED",
  },

  {
    id: 5,
    name: "Kubernetes",
    category: "DevOps",
    level: 75,
    experience: "Learning",
    icon: "☸️",
    color: "#326CE5",
  },

  {
    id: 6,
    name: "Jenkins",
    category: "DevOps",
    level: 75,
    experience: "Learning",
    icon: "🤖",
    color: "#D24939",
  },

  {
    id: 7,
    name: "Terraform",
    category: "DevOps",
    level: 70,
    experience: "Learning",
    icon: "🏗️",
    color: "#844FBA",
  },

  {
    id: 8,
    name: "AWS",
    category: "Cloud",
    level: 80,
    experience: "2+ Years",
    icon: "☁️",
    color: "#FF9900",
  },

  // ==========================
  // AUTOMATION
  // ==========================

  {
    id: 9,
    name: "Cypress",
    category: "Automation",
    level: 95,
    experience: "2.9 Years",
    icon: "🌲",
    color: "#17202C",
  },

  {
    id: 10,
    name: "Playwright",
    category: "Automation",
    level: 90,
    experience: "2+ Years",
    icon: "🎭",
    color: "#45BA63",
  },

  {
    id: 11,
    name: "Postman",
    category: "Automation",
    level: 90,
    experience: "2+ Years",
    icon: "📮",
    color: "#FF6C37",
  },

  {
    id: 12,
    name: "JMeter",
    category: "Automation",
    level: 85,
    experience: "2+ Years",
    icon: "📊",
    color: "#D22128",
  },

  // ==========================
  // PROGRAMMING
  // ==========================

  {
    id: 13,
    name: "JavaScript",
    category: "Programming",
    level: 90,
    experience: "2+ Years",
    icon: "🟨",
    color: "#F7DF1E",
  },

  {
    id: 14,
    name: "TypeScript",
    category: "Programming",
    level: 85,
    experience: "1+ Year",
    icon: "🔷",
    color: "#3178C6",
  },

  {
    id: 15,
    name: "Python",
    category: "Programming",
    level: 80,
    experience: "1+ Year",
    icon: "🐍",
    color: "#3776AB",
  },

  // ==========================
  // DATABASE
  // ==========================

  {
    id: 16,
    name: "SQL",
    category: "Database",
    level: 90,
    experience: "2+ Years",
    icon: "🗄️",
    color: "#336791",
  },

  // ==========================
  // TOOLS
  // ==========================

  {
    id: 17,
    name: "VS Code",
    category: "Tools",
    level: 95,
    experience: "3+ Years",
    icon: "💙",
    color: "#007ACC",
  },

  {
    id: 18,
    name: "Windows",
    category: "Tools",
    level: 95,
    experience: "5+ Years",
    icon: "🪟",
    color: "#0078D6",
  },

  {
    id: 19,
    name: "PowerShell",
    category: "Tools",
    level: 80,
    experience: "1+ Year",
    icon: "💻",
    color: "#5391FE",
  },

  {
    id: 20,
    name: "Shell Scripting",
    category: "DevOps",
    level: 75,
    experience: "Learning",
    icon: "📜",
    color: "#4EAA25",
  },
];

export const skillCategories = [
  "All",
  "DevOps",
  "Cloud",
  "Automation",
  "Programming",
  "Database",
  "Tools",
];

export const getSkillsByCategory = (
  category: string
): Skill[] => {
  if (category === "All") {
    return skills;
  }

  return skills.filter(
    (skill) => skill.category === category
  );
};

export const getTopSkills = (
  count: number = 8
): Skill[] => {
  return [...skills]
    .sort((a, b) => b.level - a.level)
    .slice(0, count);
};