"use client";

import { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

gsap.registerPlugin(ScrollTrigger);

  //  Marquee Row 1

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

  //  Marquee Row 2

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

// Skill Cards

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

  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skills-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".marquee-row", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      gsap.from(".skill-card", {
        y: 80,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 68%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <section
      ref={sectionRef}
      id="skills"
      className="bg-white py-32"
    >
      {/* Header */}
      <div className="skills-header mx-auto max-w-7xl px-5 sm:px-8 text-center">

        <h2 className="mt-4 text-5xl font-black text-slate-900 md:text-6xl">
          Keahlian{" "}
          <span className="text-pink-500">
            Teknis.
          </span>
        </h2>

      </div>

      {/* Tech Marquee */}

      <div className="mt-12 space-y-5 overflow-hidden md:mt-16 md:space-y-8">
        <div className="marquee-row">
          <TechMarquee
            items={marqueeRow1}
            direction="left"
            speed={35}
          />
        </div>

        <div className="marquee-row">
          <TechMarquee
            items={marqueeRow2}
            direction="right"
            speed={35}
          />
        </div>
      </div>

      {/* Skill Cards */}

      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-6 lg:px-8 md:mt-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {skills.map((skill) => {

            const Icon = skill.icon;

            return (

              <div
                key={skill.title}
                className="
                  skill-card
                  group
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  sm:p-8
                "
              >

                {/* Header */}

                <div className="flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-pink-100
                      transition
                      group-hover:bg-pink-500
                    "
                  >

                    <Icon
                      size={28}
                      className="
                        text-pink-500
                        transition
                        group-hover:text-white
                      "
                    />

                  </div>

                  <h3
                    className="
                      text-xl
                      font-bold
                      text-slate-900
                      sm:text-2xl
                    "
                  >
                    {skill.title}
                  </h3>

                </div>

                {/* Tags */}

                <div className="mt-8 flex flex-wrap gap-3">

                  {skill.items.map((item) => (

                    <span
                      key={item}
                      className="
                        rounded-full
                        bg-slate-100
                        px-4
                        py-2
                        text-xs
                        font-medium
                        text-slate-700
                        transition-all
                        duration-300
                        hover:bg-pink-100
                        hover:text-pink-600
                        sm:text-sm
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




