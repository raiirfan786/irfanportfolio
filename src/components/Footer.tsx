"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      Component: Github,
      url: "https://github.com/raiirfan786",
    },
    {
      name: "LinkedIn",
      Component: Linkedin,
      url: "https://www.linkedin.com/in/muhammad-irfan-777476219/",
    },
    {
      name: "Email",
      Component: Mail,
      url: "mailto:irfandhudi.vu@gmail.com",
    }
  ];

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2.5 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-extrabold text-white text-sm shadow-md shadow-purple-500/10">
                MI
              </div>
              <span className="text-white font-bold">Muhammad Irfan</span>
            </Link>
            <p className="text-sm text-white/50">Senior Full Stack WordPress Developer specializing in custom solutions and performance optimization.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 font-display">Quick Links</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/#projects" className="text-xs text-white/50 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/#skills" className="text-xs text-white/50 hover:text-white transition-colors">
                Skills
              </Link>
              <Link href="/#experience" className="text-xs text-white/50 hover:text-white transition-colors">
                Experience
              </Link>
              <Link href="/maintenance" className="text-xs text-white/50 hover:text-white transition-colors">
                Maintenance Services
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 font-display">Services</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/#skills" className="text-xs text-white/50 hover:text-white transition-colors">
                WordPress Development
              </Link>
              <Link href="/#skills" className="text-xs text-white/50 hover:text-white transition-colors">
                Custom Plugins
              </Link>
              <Link href="/#skills" className="text-xs text-white/50 hover:text-white transition-colors">
                API Integrations
              </Link>
              <Link href="/maintenance" className="text-xs text-white/50 hover:text-white transition-colors">
                Site Maintenance
              </Link>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 font-display">Connect</h4>
            <div className="flex items-center space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-purple-500/20 transition-all"
                  title={social.name}
                >
                  <social.Component className="w-4 h-4" />
                </a>
              ))}
            </div>
            </div>
            <Link
              href="/contact"
              className="inline-block px-4 py-2 rounded-full text-xs font-bold uppercase bg-white/10 text-white hover:bg-purple-500 hover:text-white transition-all"
            >
              Let&apos;s Work Together
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5" />

        {/* Bottom Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-medium tracking-wide space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2.5">
            <div className="w-4 h-4 rounded bg-gradient-to-tr from-purple-500 to-cyan-500" />
            <span>&copy; {currentYear} Muhammad Irfan. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="/contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
