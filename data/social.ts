import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaXTwitter,
  FaFacebook,
  FaYoutube,
  FaMedium,
  FaDev,
} from "react-icons/fa6";

import { IconType } from "react-icons";

export interface SocialLink {
  id: number;
  name: string;
  username: string;
  url: string;
  icon: IconType;
  color: string;
  bgColor: string;
  hoverColor: string;
  description: string;
  showInHero: boolean;
  showInFooter: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    username: "abhishekkumar",
    url: "https://github.com/your-github-username",
    icon: FaGithub,
    color: "#ffffff",
    bgColor: "bg-slate-900",
    hoverColor: "hover:bg-gray-800",
    description: "View my open-source projects",
    showInHero: true,
    showInFooter: true,
  },

  {
    id: 2,
    name: "LinkedIn",
    username: "Abhishek Kumar",
    url: "https://www.linkedin.com/in/your-linkedin-profile",
    icon: FaLinkedin,
    color: "#0A66C2",
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
    description: "Let's connect professionally",
    showInHero: true,
    showInFooter: true,
  },

  {
    id: 3,
    name: "Email",
    username: "abhishekkumardipu@gmail.com",
    url: "mailto:abhishekkumardipu@gmail.com",
    icon: FaEnvelope,
    color: "#EA4335",
    bgColor: "bg-red-600",
    hoverColor: "hover:bg-red-700",
    description: "Send me an email",
    showInHero: true,
    showInFooter: true,
  },

  {
    id: 4,
    name: "Instagram",
    username: "@your_instagram",
    url: "https://instagram.com/your_instagram",
    icon: FaInstagram,
    color: "#E4405F",
    bgColor: "bg-pink-600",
    hoverColor: "hover:bg-pink-700",
    description: "Follow me on Instagram",
    showInHero: false,
    showInFooter: true,
  },

  {
    id: 5,
    name: "X (Twitter)",
    username: "@your_twitter",
    url: "https://x.com/your_twitter",
    icon: FaXTwitter,
    color: "#ffffff",
    bgColor: "bg-black",
    hoverColor: "hover:bg-gray-900",
    description: "Follow me on X",
    showInHero: false,
    showInFooter: true,
  },

  {
    id: 6,
    name: "Facebook",
    username: "Abhishek Kumar",
    url: "https://facebook.com/your-facebook",
    icon: FaFacebook,
    color: "#1877F2",
    bgColor: "bg-blue-700",
    hoverColor: "hover:bg-blue-800",
    description: "Facebook Profile",
    showInHero: false,
    showInFooter: false,
  },

  {
    id: 7,
    name: "YouTube",
    username: "@your_channel",
    url: "https://youtube.com/@your_channel",
    icon: FaYoutube,
    color: "#FF0000",
    bgColor: "bg-red-700",
    hoverColor: "hover:bg-red-800",
    description: "Watch my videos",
    showInHero: false,
    showInFooter: false,
  },

  {
    id: 8,
    name: "Medium",
    username: "@your_medium",
    url: "https://medium.com/@your_medium",
    icon: FaMedium,
    color: "#ffffff",
    bgColor: "bg-slate-800",
    hoverColor: "hover:bg-slate-700",
    description: "Read my articles",
    showInHero: false,
    showInFooter: true,
  },

  {
    id: 9,
    name: "Dev.to",
    username: "@your_devto",
    url: "https://dev.to/your_devto",
    icon: FaDev,
    color: "#ffffff",
    bgColor: "bg-black",
    hoverColor: "hover:bg-gray-900",
    description: "Technical Blogs",
    showInHero: false,
    showInFooter: true,
  },
];

export const heroSocialLinks = socialLinks.filter(
  (item) => item.showInHero
);

export const footerSocialLinks = socialLinks.filter(
  (item) => item.showInFooter
);

export const contactInfo = {
  name: "Abhishek Kumar",
  designation: "DevOps Engineer | QA Automation Engineer",
  email: "abhishekkumardipu@gmail.com",
  phone: "+91 9142628227",
  location: "Bengaluru, Karnataka, India",
  website: "https://your-portfolio.vercel.app",
};

export default socialLinks;