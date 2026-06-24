"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  techStack: string[];
  businessOutcome: string;
  website: string;
  features?: string[];
  index: number;
}

export default function ProjectCard({
  title,
  description,
  image,
  techStack,
  businessOutcome,
  website,
  features = [],
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/60 hover:bg-[#0f0f0f]/80 p-5 h-full transition-all duration-500 hover:border-purple-500/25"
    >
      <div>
        {/* Project Preview Image */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 bg-[#141414] border border-white/5">
          {image ? (
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-w-7xl) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            /* Premium Abstract Tech Grid Placeholder */
            <div className="absolute inset-0 grid-bg opacity-30 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute w-[120px] h-[120px] rounded-full bg-gradient-to-tr from-purple-500/10 to-cyan-500/10 blur-xl group-hover:scale-125 transition-transform duration-700" />
              <div className="z-10 font-mono text-[9px] text-white/20 select-none uppercase tracking-widest text-center px-4 leading-relaxed">
                [ enterprise framework ]
                <br />
                <span className="text-[8px] text-purple-400/40">Secure API Sync Node // Live</span>
              </div>
            </div>
          )}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Title and External Link */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors tracking-tight font-display">
            {title}
          </h3>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all"
            title={`Visit ${title}`}
          >
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-sm text-white/60 mb-4 font-normal leading-relaxed">
          {description}
        </p>

        {/* Features Checklist */}
        {features.length > 0 && (
          <div className="mb-5 space-y-2">
            <span className="text-[10px] font-bold tracking-wider text-white/30 uppercase block mb-1">
              Key Architecture
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-center space-x-2 text-xs text-white/70">
                  <span className="flex-shrink-0 w-3.5 h-3.5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 text-purple-400" />
                  </span>
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        {/* Business Outcome badge */}
        <div className="mb-4 flex items-center space-x-2 px-3 py-2 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-400">
          <Check className="w-3.5 h-3.5 flex-shrink-0" />
          <span className="text-[11px] font-medium tracking-wide">
            {businessOutcome}
          </span>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium font-mono px-2 py-1 rounded bg-white/5 border border-white/[0.03] text-white/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
