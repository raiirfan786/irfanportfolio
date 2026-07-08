"use client";

import React from "react";
import { Globe, Mail, Send } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      Component: Globe,
      url: "https://github.com/raiirfan786",
    },
    {
      name: "LinkedIn",
      Component: Send,
      url: "https://www.linkedin.com/in/muhammad-irfan-777476219/",
    },
    {
      name: "Email",
      Component: Mail,
      url: "mailto:raiirfan1999@gmail.com",
    }
  ];

  return (
    <footer className="py-12 border-t border-slate-200/10 bg-white/90 relative z-10 dark:border-white/5 dark:bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-purple-500/10">
                MI
              </div>
              <span className="text-slate-950 font-bold dark:text-white">Muhammad Irfan</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-white/60">Senior Full Stack WordPress Developer specializing in custom solutions and performance optimization.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-950 mb-4 font-display dark:text-white">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/#projects" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                Projects
              </Link>
              <Link href="/#skills" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                Skills
              </Link>
              <Link href="/#experience" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                Experience
              </Link>
              <Link href="/maintenance" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                Maintenance Services
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-slate-950 mb-4 font-display dark:text-white">Services</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/#skills" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                WordPress Development
              </Link>
              <Link href="/#skills" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                Custom Plugins
              </Link>
              <Link href="/#skills" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                API Integrations
              </Link>
              <Link href="/maintenance" className="text-xs text-slate-500 hover:text-slate-950 transition-colors dark:text-white/50 dark:hover:text-white">
                Site Maintenance
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-slate-950 mb-4 font-display dark:text-white">Connect</h4>
            <div className="flex items-center space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-slate-100/70 flex items-center justify-center text-slate-900/70 hover:text-white hover:bg-purple-500/20 transition-all dark:bg-white/5 dark:text-white/60"
                  title={social.name}
                >
                  <social.Component className="w-4 h-4" />
                </a>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase bg-slate-950 text-white hover:bg-slate-800 transition-all dark:bg-white dark:text-[#050505] dark:hover:bg-purple-500 dark:hover:text-white"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200/10 dark:border-white/5" />

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-medium tracking-wide space-y-4 sm:space-y-0 dark:text-white/40">
          <div className="flex items-center space-x-2.5">
            <div className="w-4 h-4 rounded bg-gradient-to-tr from-purple-500 to-cyan-500" />
            <span>&copy; {currentYear} Muhammad Irfan. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/contact" className="hover:text-slate-950 transition-colors dark:hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
