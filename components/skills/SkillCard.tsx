"use client";

import { motion } from "framer-motion";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import {
  SiCypress,
  SiJenkins,
  SiJavascript,
  SiKubernetes,
  SiMysql,
  SiPostman,
  SiTerraform,
  SiTypescript,
} from "react-icons/si";

export interface SkillCardProps {
  title: string;
  level: number;
  category: string;
  icon?: string;
  description?: string;
}

const iconMap: Record<string, React.ReactNode> = {
  aws: <FaAws />,
  docker: <FaDocker />,
  kubernetes: <SiKubernetes />,
  terraform: <SiTerraform />,
  jenkins: <SiJenkins />,
  git: <FaGitAlt />,
  linux: <FaLinux />,
  react: <FaReact />,
  node: <FaNodeJs />,
  javascript: <SiJavascript />,
  typescript: <SiTypescript />,
  python: <FaPython />,
  sql: <SiMysql />,
  mysql: <SiMysql />,
  postman: <SiPostman />,
  cypress: <SiCypress />,
};

export default function SkillCard({
  title,
  level,
  category,
  icon,
  description,
}: SkillCardProps) {
  const skillIcon =
    iconMap[icon?.toLowerCase() ?? ""] ?? (
      <div className="text-5xl font-bold">
        {title.charAt(0)}
      </div>
    );

  const progressColor = () => {
    if (level >= 90) return "from-green-500 to-emerald-400";
    if (level >= 75) return "from-blue-500 to-cyan-400";
    if (level >= 60) return "from-yellow-500 to-orange-400";

    return "from-red-500 to-pink-500";
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-700
        bg-slate-900
        p-8
        shadow-xl
        transition-all
        duration-300
        hover:border-blue-500
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-gradient-to-br
          from-blue-600/10
          via-cyan-500/5
          to-transparent
        "
      />

      {/* Icon */}

      <motion.div
        whileHover={{
          rotate: 360,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          mb-6
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          text-4xl
          text-white
        "
      >
        {skillIcon}
      </motion.div>

      {/* Category */}

      <span
        className="
          inline-block
          rounded-full
          bg-blue-600/20
          px-4
          py-1
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-blue-400
        "
      >
        {category}
      </span>

      {/* Title */}

      <h3
        className="
          mt-5
          text-2xl
          font-bold
          text-white
        "
      >
        {title}
      </h3>

      {/* Description */}

      {description && (
        <p
          className="
            mt-4
            leading-7
            text-slate-400
          "
        >
          {description}
        </p>
      )}

      {/* Progress */}

      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-medium text-slate-300">
            Proficiency
          </span>

          <span className="font-bold text-blue-400">
            {level}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-800">
          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${level}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className={`
              h-full
              rounded-full
              bg-gradient-to-r
              ${progressColor()}
            `}
          />
        </div>
      </div>

      {/* Footer */}

      <div
        className="
          mt-8
          flex
          items-center
          justify-between
        "
      >
        <span className="text-sm text-slate-500">
          Skill Level
        </span>

        <motion.span
          whileHover={{
            scale: 1.1,
          }}
          className="
            rounded-full
            border
            border-blue-600
            px-4
            py-2
            text-sm
            font-semibold
            text-blue-400
          "
        >
          {level >= 90
            ? "Expert"
            : level >= 75
            ? "Advanced"
            : level >= 60
            ? "Intermediate"
            : "Beginner"}
        </motion.span>
      </div>
    </motion.div>
  );
}