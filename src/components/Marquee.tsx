"use client";

import React from "react";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: { name: string; category: string }[];
  direction?: "left" | "right";
}

export default function Marquee({ items, direction = "left" }: MarqueeProps) {
  // Duplicate items to ensure seamless loop
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Fade Gradients at Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex space-x-6 w-max"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 35,
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-2.5 px-5 py-3 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-purple-500/20 transition-all cursor-default"
          >
            {/* Styled category dot */}
            <span 
              className={`w-1.5 h-1.5 rounded-full ${
                item.category === "cms" 
                  ? "bg-blue-400" 
                  : item.category === "backend" 
                  ? "bg-purple-400" 
                  : item.category === "frontend" 
                  ? "bg-cyan-400" 
                  : "bg-emerald-400"
              }`} 
            />
            <span className="text-xs font-semibold text-white/80 tracking-wide font-mono">
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
