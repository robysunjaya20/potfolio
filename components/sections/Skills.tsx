"use client";

import TechMarquee from "@/components/animate/TechMarquee";

import {
  Monitor,
  Network,
  Server,
  Code2,
  Cpu,
  Brain,
} from "lucide-react";

import {
  SiLinux,
  SiCisco,
  SiDocker,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiPython,
  SiGit,
  SiGithub,
  SiArduino,
} from "react-icons/si";

/* ================================
   Marquee Row 1
================================ */

const marqueeRow1 = [
  {
    icon: <SiReact className="text-sky-400 text-3xl" />,
    name: "React",
  },
  {
    icon: <SiNextdotjs className="text-black text-3xl" />,
    name: "Next.js",
  },
  {
    icon: <SiPhp className="text-indigo-500 text-3xl" />,
    name: "PHP",
  },
  {
    icon: <SiTailwindcss className="text-sky-400 text-3xl" />,
    name: "Tailwind CSS",
  },
  {
    icon: <SiJavascript className="text-yellow-400 text-3xl" />,
    name: "JavaScript",
  },
  {
    icon: <SiGit className="text-orange-500 text-3xl" />,
    name: "Git",
  },
  {
    icon: <SiGithub className="text-black text-3xl" />,
    name: "GitHub",
  },
];

/* ================================
   Marquee Row 2
================================ */

const marqueeRow2 = [
  {
    icon: <SiPython className="text-blue-500 text-3xl" />,
    name: "Python",
  },
  {
    icon: <SiMysql className="text-blue-700 text-3xl" />,
    name: "MySQL",
  },
  {
    icon: <SiDocker className="text-sky-500 text-3xl" />,
    name: "Docker",
  },
  {
    icon: <SiLinux className="text-black text-3xl" />,
    name: "Linux",
  },
  {
    icon: <SiCisco className="text-cyan-500 text-3xl" />,
    name: "Cisco",
  },
  {
    icon: <SiArduino className="text-green-600 text-3xl" />,
    name: "Arduino",
  },
];

/* ================================
   Skill Cards
================================ */

const skills = [
  {
    title: "IT Support",
    icon: Monitor,
    items: [
      "Windows",
      "Hardware",
      "Software",
      "Troubleshooting",
      "Active Directory",
    ],
  },
  {
    title: "Networking",
    icon: Network,
    items: [
      "Cisco",
      "Mikrotik",
      "TCP/IP",
      "Routing",
      "Switching",
      "VLAN",
    ],
  },
  {
    title: "Infrastructure",
    icon: Server,
    items: [
      "Windows Server",
      "Linux",
      "VMware",
      "VirtualBox",
    ],
  },
  {
    title: "Web Development",
    icon: Code2,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: Brain,
    items: [
      "Python",
      "OpenAI",
      "TensorFlow",
      "Whisper",
      "Ollama",
    ],
  },
  {
    title: "Internet of Things",
    icon: Cpu,
    items: [
      "ESP32",
      "Arduino",
      "Blynk",
      "MQTT",
      "Telegram Bot",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-32"
    >
      {/* Header */}
      <div className="mx-auto max-w-7xl px-8 text-center">

        <p className="uppercase tracking-[0.3em] text-pink-500 font-semibold">
          KEAHLIAN
        </p>

        <h2 className="mt-4 text-5xl font-black text-slate-900 md:text-6xl">
          Keahlian{" "}
          <span className="text-pink-500">
            Teknis.
          </span>
        </h2>

      </div>

      {/* Tech Marquee */}

      <div className="mt-20 space-y-8 overflow-hidden">

        <TechMarquee
          items={marqueeRow1}
          direction="left"
          speed={35}
        />

        <TechMarquee
          items={marqueeRow2}
          direction="right"
          speed={35}
        />

      </div>

      {/* Skill Cards */}

      <div className="mx-auto mt-24 max-w-7xl px-8">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {skills.map((skill) => {

            const Icon = skill.icon;

            return (

              <div
                key={skill.title}
                className="
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-pink-100 p-3">

                    <Icon
                      size={28}
                      className="text-pink-500"
                    />

                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {skill.title}
                  </h3>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  {skill.items.map((item) => (

                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-slate-100
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-pink-100
                        hover:text-pink-600
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}