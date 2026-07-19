"use client";

import { useEffect, useState } from "react";
import {
  House,
  User,
  BriefcaseBusiness,
  FolderOpen,
  Mail,
  Globe,
} from "lucide-react";

const menus = [
  {
    title: "Beranda",
    href: "#home",
    icon: House,
  },
  {
    title: "Tentang",
    href: "#about",
    icon: User,
  },
  {
    title: "Pengalaman",
    href: "#experience",
    icon: BriefcaseBusiness,
  },
  {
    title: "Proyek",
    href: "#projects",
    icon: FolderOpen,
  },
  {
    title: "Kontak",
    href: "#contact",
    icon: Mail,
  },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = menus.map((m) =>
      document.querySelector(m.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center rounded-full border border-white/20 bg-white/75 backdrop-blur-xl shadow-xl px-3 py-2">

        {/* Logo */}
        <div className="px-4 text-xl font-extrabold tracking-wide">
          Roby
          <span className="text-blue-500">.</span>
        </div>

        {/* Divider */}
        <div className="mx-2 h-7 w-px bg-slate-300" />

        {/* Menu */}
        <nav className="flex items-center gap-1">
          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <a
                key={menu.href}
                href={menu.href}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  active === menu.href
                    ? "bg-blue-500 text-white shadow-lg"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                <Icon size={16} />
                {menu.title}
              </a>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="mx-2 h-7 w-px bg-slate-300" />

        {/* Language */}
        <button className="flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
          <Globe size={16} />
          ID
        </button>

      </div>
    </header>
  );
}