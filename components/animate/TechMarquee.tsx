"use client";

import Marquee from "react-fast-marquee";
import { ReactNode } from "react";

interface TechItem {
  icon: ReactNode;
  name: string;
}

interface TechMarqueeProps {
  items: TechItem[];
  direction?: "left" | "right";
  speed?: number;
}

export default function TechMarquee({
  items,
  direction = "left",
  speed = 35,
}: TechMarqueeProps) {
  return (
    <Marquee
      autoFill
      gradient={false}
      direction={direction}
      speed={speed}
      pauseOnHover
      pauseOnClick
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="
            mx-4
            flex
            h-24
            min-w-[260px]
            items-center
            gap-5
            rounded-3xl
            border
            border-slate-200
            bg-white
            px-8
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-xl
          "
        >
          <div className="flex h-12 w-12 items-center justify-center text-4xl">
            {item.icon}
          </div>

          <span className="text-2xl font-semibold text-slate-800">
            {item.name}
          </span>
        </div>
      ))}
    </Marquee>
  );
}