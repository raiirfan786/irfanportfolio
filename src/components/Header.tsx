"use client";

import React, { useState } from "react";
import { Menu, X, Globe, Send } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      Component: Globe,
      url: "https://github.com/raiirfan786",
      color: "hover:text-white",
    },
    {
      name: "LinkedIn",
      Component: Send,
      url: "https://www.linkedin.com/in/muhammad-irfan-777476219/",
      color: "hover:text-blue-400",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-4 sm:px-6 md:px-10 lg:px-12 flex items-center justify-between border-b border-white/10 bg-[#050505]/95 backdrop-blur-xl">
      <Link href="/" className="flex items-center space-x-2.5">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-purple-500/10">
          MI
        </div>
        <span className="text-white font-bold hidden sm:inline">Muhammad Irfan</span>
      </Link>

      <div className="hidden md:flex flex-wrap items-center gap-4 lg:gap-6">
        <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/#about" className="text-sm text-white/70 hover:text-white transition-colors">
          About
        </Link>
        <Link href="/#work" className="text-sm text-white/70 hover:text-white transition-colors">
          Projects
        </Link>
        <Link href="/#services" className="text-sm text-white/70 hover:text-white transition-colors">
          Services
        </Link>
        <Link href="/#skills" className="text-sm text-white/70 hover:text-white transition-colors">
          Skills
        </Link>
        <Link href="/maintenance" className="text-sm text-white/70 hover:text-white transition-colors">
          Maintenance
        </Link>
        <Link href="/#experience" className="text-sm text-white/70 hover:text-white transition-colors">
          Experience
        </Link>
        <div className="flex items-center gap-3 pl-3 border-l border-white/10">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white/60 ${social.color} transition-colors`}
              title={social.name}
            >
              <social.Component className="w-5 h-5" />
            </a>
          ))}
        </div>
        <a
          href="/Muhammad_Irfan - Full stack developer.pdf"
          download
          className="ml-4 px-4 py-2 rounded-full text-xs font-semibold border border-white/10 text-white/80 hover:text-white transition-all"
        >
          Download CV
        </a>
        <Link
          href="/contact"
          className="ml-2 px-5 py-2 rounded-full text-xs font-bold uppercase bg-white text-[#050505] hover:bg-purple-500 hover:text-white transition-all shadow-lg"
        >
          Get In Touch
        </Link>
      </div>

      <div className="md:hidden flex items-center gap-3">
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-white/70 ${social.color} transition-colors`}
            >
              <social.Component className="w-4 h-4" />
            </a>
          ))}
        </div>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-[#050505]/98 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="flex flex-col gap-4 p-5">
              <Link
                href="/"
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#work"
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/#services"
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#skills"
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="/maintenance"
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Maintenance
              </Link>
              <Link
                href="/#experience"
                className="text-sm text-white/80 hover:text-white transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </Link>
                <a
                href="/Muhammad_Irfan - Full stack developer.pdf"
                download
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                Download CV
              </a>
     
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-white/70 ${social.color} transition-colors`}
                    title={social.name}
                  >
                    <social.Component className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-2 inline-flex w-fit rounded-full bg-white px-5 py-2 text-xs font-bold uppercase text-[#050505] transition hover:bg-purple-500 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
