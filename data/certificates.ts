export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  image: string;
  skills: string[];
  description: string;
  featured: boolean;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Cypress - Modern Automation Testing From Scratch + Frameworks",
    issuer: "Udemy",
    issueDate: "2025",
    credentialId: "CY-001",
    credentialUrl: "",
    image: "/images/certificates/cypress-modern.png",
    skills: [
      "Cypress",
      "JavaScript",
      "API Testing",
      "Automation",
      "Regression Testing",
      "UI Testing",
    ],
    description:
      "Comprehensive Cypress automation course covering framework development, end-to-end testing, API automation, fixtures, custom commands, reporting, and CI/CD integration.",
    featured: true,
  },

  {
    id: 2,
    title: "DevOps Training Program",
    issuer: "Besant Technologies",
    issueDate: "2026",
    credentialId: "DEVOPS-001",
    credentialUrl: "",
    image: "/images/certificates/devops.png",
    skills: [
      "Linux",
      "Git",
      "Docker",
      "Jenkins",
      "Kubernetes",
      "Terraform",
      "AWS",
      "CI/CD",
    ],
    description:
      "Hands-on DevOps training including Linux administration, Git, Docker, Jenkins pipelines, Kubernetes orchestration, Terraform, AWS Cloud and Infrastructure as Code.",
    featured: true,
  },

  {
    id: 3,
    title: "Playwright Automation Testing",
    issuer: "Self Learning",
    issueDate: "2025",
    image: "/images/certificates/playwright.png",
    skills: [
      "Playwright",
      "JavaScript",
      "TypeScript",
      "Automation Testing",
      "E2E Testing",
    ],
    description:
      "Advanced browser automation using Playwright with TypeScript including parallel execution, reporting and API validation.",
    featured: false,
  },

  {
    id: 4,
    title: "Postman API Testing",
    issuer: "Self Learning",
    issueDate: "2025",
    image: "/images/certificates/postman.png",
    skills: [
      "Postman",
      "REST API",
      "API Automation",
      "JSON",
      "Collections",
    ],
    description:
      "Designed and automated REST API test collections with assertions, environments and data-driven testing.",
    featured: false,
  },

  {
    id: 5,
    title: "SQL Database Testing",
    issuer: "Self Learning",
    issueDate: "2024",
    image: "/images/certificates/sql.png",
    skills: [
      "SQL",
      "Database Testing",
      "Data Validation",
      "MySQL",
    ],
    description:
      "Database validation, SQL query optimization, joins, stored procedures and backend verification for automation projects.",
    featured: false,
  },

  {
    id: 6,
    title: "AWS Cloud Fundamentals",
    issuer: "Self Learning",
    issueDate: "2026",
    image: "/images/certificates/aws.png",
    skills: [
      "AWS",
      "EC2",
      "IAM",
      "S3",
      "Cloud Computing",
    ],
    description:
      "Learning AWS cloud services including EC2, IAM, S3, networking, monitoring and deployment fundamentals.",
    featured: true,
  },

  {
    id: 7,
    title: "Docker Essentials",
    issuer: "Self Learning",
    issueDate: "2026",
    image: "/images/certificates/docker.png",
    skills: [
      "Docker",
      "Containers",
      "Docker Compose",
      "Images",
    ],
    description:
      "Containerization concepts, Docker images, Docker Compose, networking and deployment best practices.",
    featured: false,
  },

  {
    id: 8,
    title: "Kubernetes Fundamentals",
    issuer: "Self Learning",
    issueDate: "2026",
    image: "/images/certificates/kubernetes.png",
    skills: [
      "Kubernetes",
      "Pods",
      "Deployments",
      "Services",
      "Ingress",
    ],
    description:
      "Container orchestration using Kubernetes including Pods, ReplicaSets, Deployments, Services and ConfigMaps.",
    featured: false,
  },

  {
    id: 9,
    title: "Terraform Infrastructure as Code",
    issuer: "Self Learning",
    issueDate: "2026",
    image: "/images/certificates/terraform.png",
    skills: [
      "Terraform",
      "IaC",
      "AWS",
      "Cloud",
    ],
    description:
      "Infrastructure provisioning with Terraform using reusable modules and AWS resources.",
    featured: false,
  },

  {
    id: 10,
    title: "Jenkins CI/CD Pipeline",
    issuer: "Self Learning",
    issueDate: "2026",
    image: "/images/certificates/jenkins.png",
    skills: [
      "Jenkins",
      "CI/CD",
      "Pipeline",
      "Git",
      "Automation",
    ],
    description:
      "Continuous Integration and Continuous Delivery pipelines using Jenkins with Git and Docker.",
    featured: false,
  },
];

export const featuredCertificates = certificates.filter(
  (certificate) => certificate.featured
);

export const totalCertificates = certificates.length;