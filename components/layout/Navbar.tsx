"use client";

import { useEffect, useState } from "react";
import {
  House,
  User,
  BriefcaseBusiness,
  FolderOpen,
  Mail,
  Globe,
  Menu,
  X,
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = menus.map((m) => document.querySelector(m.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ================= Desktop ================= */}

      <header className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 lg:block">
        <div className="flex items-center rounded-full border border-white/20 bg-white/75 px-3 py-2 shadow-xl backdrop-blur-xl">

          {/* Logo */}

          <div className="px-4 text-xl font-extrabold">
            Roby
            <span className="text-blue-500">.</span>
          </div>

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

          <div className="mx-2 h-7 w-px bg-slate-300" />

          <button className="flex items-center gap-2 rounded-full border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
            <Globe size={16} />
            ID
          </button>

        </div>
      </header>

      {/* ================= Mobile ================= */}

      <header className="fixed left-0 right-0 top-0 z-50 lg:hidden">
        <div className="mx-4 mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl">

          <div className="text-xl font-extrabold text-white">
            Roby
            <span className="text-blue-500">.</span>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </header>

      {/* ================= Mobile Menu ================= */}

      <div
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-7">

          {menus.map((menu) => {
            const Icon = menu.icon;

            return (
              <a
                key={menu.href}
                href={menu.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-4 text-2xl font-semibold transition ${
                  active === menu.href
                    ? "text-blue-400"
                    : "text-white hover:text-blue-300"
                }`}
              >
                <Icon size={24} />
                {menu.title}
              </a>
            );
          })}

          <button className="mt-10 flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-white">
            <Globe size={18} />
            Bahasa Indonesia
          </button>

        </div>
      </div>
    </>
  );
}