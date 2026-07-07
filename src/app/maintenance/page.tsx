"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Check, 
  Shield, 
  Clock, 
  Database, 
  Zap, 

  Mail,
  HelpCircle,
  AlertCircle
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const packages = [
  {
    name: "Essential Care",
    price: "$99",
    billing: "/ month",
    description: "Ideal for small business websites, blogs, and standard corporate pages.",
    badge: "Basic",
    features: [
      "Weekly Core, Theme & Plugin Updates",
      "Daily Cloud Backups (Off-site secure storage)",
      "24/7 Security & Malware Scanning",
      "Spam Filter & Database Optimization",
      "Uptime Monitoring (5-min intervals)",
      "Email Support (24-hour response SLA)"
    ],
    cta: "Select Basic Care",
    popular: false,
    color: "from-gray-500/10 to-gray-500/20 border-white/5 text-white/90"
  },
  {
    name: "Growth Support",
    price: "$249",
    billing: "/ month",
    description: "Best for high-traffic sites, professional blogs, and standard WooCommerce stores.",
    badge: "Recommended",
    features: [
      "Daily Core, Theme & Plugin Updates",
      "Hourly Database Backups",
      "24/7 Uptime Monitoring (1-min intervals)",
      "Advanced Security & WAF Integration",
      "Core Web Vitals & Speed Audits",
      "2 Hours Included Developer Time / mo",
      "Priority Slack & Chat Support (2-hr SLA)"
    ],
    cta: "Select Growth Support",
    popular: true,
    color: "from-purple-500/10 to-purple-500/20 border-purple-500/30 text-white"
  },
  {
    name: "Enterprise SLA",
    price: "$599",
    billing: "/ month",
    description: "Designed for mission-critical e-commerce stores, complex WooCommerce layouts, or custom PHP integrations.",
    badge: "Enterprise",
    features: [
      "Real-time Backups & Cloud Replication",
      "Dedicated Dev Staging Environment Setup",
      "Uptime Monitoring (30-sec intervals)",
      "Vulnerability Hardening & DDoS Shield",
      "Continuous Core Web Vitals Optimization",
      "6 Hours Included Developer Time / mo",
      "Direct Developer SMS & Call Support (15-min SLA)"
    ],
    cta: "Select Enterprise Care",
    popular: false,
    color: "from-cyan-500/10 to-cyan-500/20 border-cyan-500/30 text-white"
  }
];

const pillars = [
  {
    icon: Shield,
    title: "Security Hardening & WAF",
    description: "We configure robust firewalls, restrict access to critical directories, monitor login limits, and scan database tables daily to block malicious code."
  },
  {
    icon: Database,
    title: "AWS S3 Offsite Backups",
    description: "Never lose a byte of data. Your website databases and assets are replicated automatically to remote AWS S3 buckets with 1-click restore protocols."
  },
  {
    icon: Zap,
    title: "Core Web Vitals Monitoring",
    description: "Speed directly influences conversions. We regularly optimize database transients, minify assets, clear bloat, and track PageSpeed ratings."
  },
  {
    icon: Clock,
    title: "Instant Response Support",
    description: "If something goes down, we know immediately. Our servers test your routes up to every 30 seconds, automatically flagging our team to investigate."
  }
];

const faqs = [
  {
    q: "Why do I need a website maintenance package?",
    a: "Software updates release constantly to fix security patches and improve performance. Skipping updates leads to plugin conflicts, compatibility errors, or vulnerabilities. Maintenance ensures your site remains secure, updated, and fast without you risking breaking it."
  },
  {
    q: "What is included in the 'Included Developer Time'?",
    a: "Included developer hours can be used for any improvements: editing layouts, installing new features, adding tracking pixels, posting content, styling WooCommerce pages, or troubleshooting server errors. Hours do not roll over month-to-month."
  },
  {
    q: "Is there a long-term contract or setup fee?",
    a: "No contract. All plans are billed month-to-month, and you can cancel or change plans at any time. There are no setup fees or hidden charges."
  },
  {
    q: "Do you support Laravel and Next.js integrations?",
    a: "Yes! While our primary focus is WordPress and WooCommerce, we support and maintain custom PHP/Laravel integrations and headless Next.js frontends connected to your WordPress backends."
  }
];

export default function MaintenancePage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveFaq(activeFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full bg-purple-900/15 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[65%] w-[65%] rounded-full bg-cyan-900/15 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      <Header />

      {/* Main Section */}
      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider inline-flex items-center space-x-2">
              <Shield className="w-3.5 h-3.5" />
              <span>Ongoing Maintenance & Support</span>
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-6 mb-4 font-display">
              Professional Care for Your Web Systems
            </h1>
            <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal">
              Skip updates, database bloat, and security concerns. Let an expert manage backups, optimization audits, security enforcement, and custom code integrations 24/7.
            </p>
          </motion.div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl border p-8 flex flex-col justify-between relative bg-gradient-to-br ${pkg.color} ${
                pkg.popular ? "shadow-xl shadow-purple-500/5 ring-1 ring-purple-500/40" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-8 -translate-y-1/2 px-3 py-1 rounded-full bg-purple-500 text-[10px] font-black uppercase tracking-wider">
                  Popular
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">
                    {pkg.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-display">{pkg.name}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-6 font-normal min-h-[40px]">
                  {pkg.description}
                </p>

                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-extrabold text-white tracking-tight">{pkg.price}</span>
                  <span className="text-xs text-white/40 ml-1 font-semibold">{pkg.billing}</span>
                </div>

                <div className="border-t border-white/5 pt-6 mb-8">
                  <ul className="space-y-3.5">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-3 text-xs text-white/70">
                        <span className="w-4 h-4 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-purple-400" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <MagneticButton className="w-full">
                  <Link
                    href={`/contact?subject=Sign up for ${pkg.name}`}
                    className={`block w-full text-center py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border ${
                      pkg.popular
                        ? "bg-white text-black hover:bg-purple-500 hover:text-white border-white"
                        : "bg-white/5 text-white hover:bg-white/10 border-white/10"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Support Pillars Section */}
        <div className="border-t border-white/5 pt-24 mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">Our Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-display">
              Enterprise Support Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40 flex space-x-4"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20 shrink-0">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-2 font-display">{pillar.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs */}
        <div className="border-t border-white/5 pt-24 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <HelpCircle className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-display">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="border-b border-white/5 pb-4 transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex justify-between items-center py-4 text-sm font-bold text-white hover:text-purple-400 transition-colors font-display"
                >
                  <span>{faq.q}</span>
                  <span className="text-lg font-mono text-purple-400">{activeFaq === idx ? "−" : "+"}</span>
                </button>
                {activeFaq === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="text-xs text-white/50 leading-relaxed pr-8"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Support Alert Box */}
        <div className="mt-20 p-8 rounded-3xl border border-white/5 bg-[#0b0b0b]/40 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 text-cyan-400 shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white font-display">Need Custom Support SLA?</h4>
              <p className="text-xs text-white/50 leading-relaxed font-normal">
                Have custom servers, specialized setups, or need dedicated weekly hours? Let&apos;s curate a bespoke plan.
              </p>
            </div>
          </div>
          <MagneticButton>
            <Link 
              href="/contact?subject=Custom Maintenance SLA Request"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-xs font-bold uppercase bg-white text-[#050505] hover:bg-purple-500 hover:text-white transition-all shadow-lg shrink-0"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Us</span>
            </Link>
          </MagneticButton>
        </div>

      </main>

      <Footer />
    </div>
  );
}
