import {
  FaJs,
  FaPython,
  FaReact,
  FaLaravel,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa6";

import {
  SiTypescript,
  SiPhp,
  SiNextdotjs,
  SiMysql,
  SiPostman,
} from "react-icons/si";

import {
  Monitor,
  Network,
  FolderOpen,
  Server,
} from "lucide-react";

export const languages = [
  {
    icon: <FaJs className="text-yellow-400 text-3xl" />,
    name: "JavaScript",
  },
  {
    icon: <SiTypescript className="text-blue-600 text-3xl" />,
    name: "TypeScript",
  },
  {
    icon: <SiPhp className="text-indigo-500 text-3xl" />,
    name: "PHP",
  },
  {
    icon: <FaPython className="text-sky-500 text-3xl" />,
    name: "Python",
  },
];

export const frameworks = [
  {
    icon: <FaReact className="text-sky-400 text-3xl" />,
    name: "React",
  },
  {
    icon: <SiNextdotjs className="text-black text-3xl" />,
    name: "Next.js",
  },
  {
    icon: <FaLaravel className="text-red-500 text-3xl" />,
    name: "Laravel",
  },
  {
    icon: <FolderOpen className="text-orange-500" size={30} />,
    name: "CodeIgniter 4",
  },
];

export const databases = [
  {
    icon: <SiMysql className="text-blue-700 text-3xl" />,
    name: "MySQL",
  },
];

export const tools = [
  {
    icon: <FaGitAlt className="text-orange-500 text-3xl" />,
    name: "Git",
  },
  {
    icon: <FaGithub className="text-slate-900 text-3xl" />,
    name: "GitHub",
  },
  {
    icon: <Monitor className="text-blue-500" size={30} />,
    name: "VS Code",
  },
  {
    icon: <SiPostman className="text-orange-500 text-3xl" />,
    name: "Postman",
  },
  {
    icon: <Server className="text-yellow-500" size={30} />,
    name: "XAMPP",
  },
  {
    icon: <Network className="text-cyan-500" size={30} />,
    name: "Cisco Packet Tracer",
  },
  {
    icon: <Monitor className="text-green-600" size={30} />,
    name: "Arduino IDE",
  },
  {
    icon: <FaFigma className="text-pink-500 text-3xl" />,
    name: "Figma",
  },
];