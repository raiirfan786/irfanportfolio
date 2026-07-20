"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Layers, 
  Globe, 
  Code2, 
  Database, 
  Sparkles, 
  Smartphone, 
  Mail, 
  MessageSquare, 
  Calendar, 
  MapPin, 
  Briefcase, 
  Check, 
  Zap,
  LayoutGrid
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import InteractiveDashboard from "@/components/InteractiveDashboard";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import TestimonialSlider from "@/components/TestimonialSlider";
import MagneticButton from "@/components/MagneticButton";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Technologies Data for Marquee Ticker
const technologies = [
  { name: "WordPress", category: "cms" },
  { name: "WooCommerce", category: "cms" },
  { name: "Elementor", category: "cms" },
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "Next.js", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Stripe Connect", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Cloudflare Workers", category: "backend" },
  { name: "GitHub", category: "frontend" },
];

// Project Cases Data
const projects = [
  {
    title: "Cycle Laundry",
    description: "A headless WordPress architecture developed for laundry service operations, implementing custom marketplace infrastructure and commission flows.",
    image: "/cycle-laundry.png",
    techStack: ["WordPress", "REST API", "Stripe Connect", "PHP", "JavaScript"],
    businessOutcome: "Boosted payment processing speed by 40% & automated provider payouts",
    website: "https://cyclelaundry.com",
    features: ["Custom REST APIs", "Stripe Connect", "Provider Dashboard", "Order Manager"]
  },
  {
    title: "Raging Waves Waterpark",
    description: "Waterpark website with modern UI, event calendar integration, and online ticketing system. Built with optimized performance for high seasonal traffic.",
    image: "/raging.png",
    techStack: ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript"],
    businessOutcome: "Increased online ticket sales by 35% during peak season",
    website: "https://ragingwaves.com",
    features: ["Event Calendar", "Online Booking", "Season Pass Management", "Mobile Responsive"]
  },
  {
    title: "MG White Chartered Accountants",
    description: "Professional accounting firm website with service portfolio, team showcase, and client resources. Built with enterprise-grade security and SEO optimization.",
    image: "/mg.png",
    techStack: ["WordPress", "Custom Theme", "Elementor", "PHP", "ACF"],
    businessOutcome: "Improved SEO rankings by 65% and generated 40+ qualified leads monthly",
    website: "https://mgwhiteaccountants.com",
    features: ["Service Portfolio", "Team Directory", "Client Login", "Resource Library"]
  },
  {
    title: "CAP America Donation Platform",
    description: "Secure donation platform for nonprofit organization providing financial counseling. Features tiered giving options and donor management system.",
    image: "/cap.png",
    techStack: ["WordPress", "WooCommerce", "PayPal Integration", "PHP"],
    businessOutcome: "Facilitated $250K+ annual donations with secure, user-friendly checkout",
    website: "https://donate.capamerica.org",
    features: ["Tiered Giving", "Donor Dashboard", "Payment Processing", "Impact Metrics"]
  },
  {
    title: "Eveli Fine Jewellery",
    description: "Premium e-commerce jewelry store with high-resolution product imagery, custom checkout flow, and inventory management system.",
    image: "/eve.png",
    techStack: ["WordPress", "WooCommerce", "Tailwind CSS", "PHP", "Custom Theme"],
    businessOutcome: "Achieved 98/100 Core Web Vitals score with 45% increase in conversion rate",
    website: "https://eveli.co.uk",
    features: ["Product Gallery", "Advanced Filtering", "Wishlist System", "Optimized Checkout"]
  },
  {
    title: "Centric Consulting",
    description: "Enterprise consulting firm website showcasing AI-driven solutions. Built with advanced animations, service showcase, and lead capture systems.",
    image: "/center.png",
    techStack: ["WordPress", "Custom Theme", "Elementor", "JavaScript", "Framer Motion"],
    businessOutcome: "Generated 200+ qualified B2B leads in first 6 months post-launch",
    website: "https://centricconsulting.com",
    features: ["Service Showcase", "Case Studies", "Contact Forms", "Dynamic Animations"]
  },
  {
    title: "Institute for Community",
    description: "Community nonprofit website featuring youth programs, friendship centers, and event management. Built with responsive design for diverse audience.",
    image: "/insti.png",
    techStack: ["WordPress", "Custom Theme", "Elementor", "PHP"],
    businessOutcome: "Increased program registrations by 55% and community engagement by 60%",
    website: "https://instituteforcommunity.org",
    features: ["Program Directory", "Event Calendar", "Donation System", "Member Portal"]
  },
  {
    title: "Wild Waves Theme Park",
    description: "Theme and water park website with interactive calendar, season passes, group booking system, and real-time operating hours.",
    image: "/wild.png",
    techStack: ["WordPress", "WooCommerce", "Elementor", "PHP", "JavaScript"],
    businessOutcome: "Increased online ticket pre-sales by 42% and reduced support inquiries",
    website: "https://wildwaves.com",
    features: ["Interactive Calendar", "Group Bookings", "Season Passes", "Mobile App Integration"]
  },
  {
    title: "Catalyst Houston",
    description: "Premium residential community website with virtual tours, amenities showcase, floor plan gallery, and lease application system.",
    image: "/catlist.png",
    techStack: ["WordPress", "Custom Theme", "Elementor", "JavaScript"],
    businessOutcome: "Increased apartment leasing inquiries by 48% with virtual tour feature",
    website: "https://catalyst.live",
    features: ["Virtual Tours", "Floor Plans", "Amenities Gallery", "Online Application"]
  },
  {
    title: "City Museum St. Louis",
    description: "Interactive museum website featuring exhibit information, ticketing system, group booking, and event management with engaging UI.",
    image: "/city.png",
    techStack: ["WordPress", "WooCommerce", "Elementor", "PHP"],
    businessOutcome: "Boosted annual visitors by 30% through improved online visibility",
    website: "https://citymuseum.org",
    features: ["Exhibit Gallery", "Ticket Booking", "Group Rates", "Event Calendar"]
  },
  {
    title: "Marquette Companies",
    description: "Corporate website for real estate and development company. Features project portfolio, team directory, and business resource center.",
    image: "/mar.png",
    techStack: ["WordPress", "Custom Theme", "ACF", "PHP"],
    businessOutcome: "Improved corporate credibility resulting in 35% more partnership inquiries",
    website: "https://www.marquettecompanies.com",
    features: ["Project Portfolio", "Team Directory", "News Section", "Contact System"]
  }
];

export default function Home() {
  const [activeSkillTab, setActiveSkillTab] = useState<"frontend" | "backend" | "cms" | "modern">("cms");
  
  const [expertiseIndex, setExpertiseIndex] = useState(0);
  const expertises = [
    "WordPress Development",
    "WooCommerce Development",
    "Custom Theme Coding",
    "Custom Plugin Coding",
    "Elementor and Elementor Pro",
    "ACF (Advanced Custom Fields)",
    "Gravity Forms and contact forms",
    "3rd party API Integrations",
    "Headless WordPress with Next.js",
    "Laravel"
  ];
  
  React.useEffect(() => {
    const timer = setInterval(() => {
      setExpertiseIndex((prev) => (prev + 1) % expertises.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const skillTabs = {
    frontend: ["Front-end Coding", "CSS Coding", "HTML", "Responsive Web Design", "Tailwind CSS", "Bootstrap", "React", "Next.js", "UI Development"],
    backend: ["PHP Programming", "PHP Web Development", "Laravel", "MySQL", "Custom API Integration", "REST APIs", "Stripe Connect", "Database Design"],
    cms: ["Custom WordPress Development", "WooCommerce", "Custom Theme Development", "Custom Plugins", "WordPress Multisite", "Product Customization", "PSD to WordPress", "Elementor", "Gutenberg"],
    modern: ["Web Performance", "Web Content Optimization", "Google Workspace Services", "Multilingual Websites", "GitHub", "Core Web Vitals", "Search Engine Optimization"]
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-center items-center overflow-hidden">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8">
            {/* Glowing Accent Cap */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 self-start px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider"
            >
              <Zap className="w-3.5 h-3.5 fill-purple-400" />
              <span>Available for Freelance & Contract</span>
            </motion.div>

            {/* Main Headline with Animated Rotating Expertise */}
            <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                I am an expert in <br />
                <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 select-none">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={expertiseIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.4 }}
                    >
                      {expertises[expertiseIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-white/60 font-normal leading-relaxed max-w-xl"
            >
              Passionate Full Stack WordPress Developer with 6 years of experience specializing in front-end development, custom themes, WooCommerce stores, and performance optimization. I build responsive, fast, and user-friendly sites tailored to business goals.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton>
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full text-xs font-extrabold uppercase bg-white text-[#050505] hover:bg-purple-500 hover:text-white transition-all shadow-lg hover:shadow-purple-500/20"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4.5 h-4.5" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a
                  href="#work"
                  className="inline-flex items-center px-7 py-3.5 rounded-full text-xs font-extrabold uppercase bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  View My Work
                </a>
              </MagneticButton>
            </motion.div>

            {/* Statistics Row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5"
            >
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">6 +</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block mt-1">Years Experience</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">100+</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block mt-1">Projects Delivered</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Global</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block mt-1">Clients Served</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan tracking-tight">Expert</span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-white/40 block mt-1">WooCommerce Specialist</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column Visual Profile Photo */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-8 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/10 group"
            >
              <Image 
                src="/profile.jpg" 
                alt="Muhammad Irfan" 
                fill 
                sizes="(max-w-7xl) 33vw, 100vw" 
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-cyan-500/10" />
              <div className="absolute inset-4 border border-white/10 rounded-2xl pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border-white/10 flex items-center space-x-3 backdrop-blur-md">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <div className="text-left">
                  <p className="text-xs font-bold text-white tracking-wider font-display">MUHAMMAD IRFAN</p>
                  <p className="text-[10px] text-white/50 font-mono">Senior Full Stack Engineer</p>
                </div>
              </div>
            </motion.div>
            
            <div className="absolute w-72 h-72 rounded-full bg-purple-500/10 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>

        </div>
      </section>

      {/* Trusted Technologies Section */}
      <section className="py-12 border-y border-white/5 bg-[#070707]/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-center text-[10px] font-extrabold uppercase tracking-widest text-white/30 mb-8">
            Technologies I Work With
          </h2>
          <Marquee items={technologies} direction="left" />
        </div>
      </section>

      {/* Interactive Architecture Playground */}
      <section className="py-24 px-6 md:px-12 bg-[#060606]/40 border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">Dev Playground</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Interactive Full-Stack Architecture Console
            </h2>
            <p className="text-sm text-white/60 leading-relaxed font-normal">
              Inspect components of my tech stack in real-time. Toggle custom WooCommerce adapters, database query metrics, API routes, and payment nodes below to simulate load capacity and routing logic.
            </p>
            <div className="flex items-center space-x-4 text-xs text-white/40">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Real-time response simulation</span>
              <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Interactive triggers</span>
            </div>
          </div>
          <div className="lg:col-span-7 flex justify-center items-center relative">
            <InteractiveDashboard />
          </div>
        </div>
      </section>

      {/* About Section - Bento Grid */}
      <section id="about" className="py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 font-display">
              Passionate WordPress Developer Who Builds High-Impact Digital Products
            </h2>
            <p className="text-sm sm:text-base text-white/60 leading-relaxed font-normal">
              I am a passionate Full Stack WordPress Developer with 6+ years of experience specializing in front-end development, custom WordPress themes, WooCommerce, Laravel, and REST API integrations. He focuses on performance optimization, responsive UI, and business-driven websites that convert.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* Box 1: Core Focus (Big Box) */}
            <motion.div 
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
              className="md:col-span-7 md:row-span-2 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <Briefcase className="w-7 h-7 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3 font-display">
                  Enterprise-Grade Focus
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  I architect robust infrastructures that help companies migrate old monolith architectures into lightweight, secure setups. By utilizing WordPress REST APIs, Custom PHP hook routines, and decoupling frontends with Next.js, my projects run sub-second without database overhead.
                </p>
              </div>
              <div className="flex items-center space-x-3 text-xs text-white/40 border-t border-white/5 pt-4">
                <MapPin className="w-4 h-4 text-purple-400" />
                <span>Remote / Worldwide Consultations</span>
              </div>
            </motion.div>

            {/* Box 2: Specialization checklist */}
            <motion.div 
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
              className="md:col-span-5 md:row-span-2 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <LayoutGrid className="w-7 h-7 text-cyan-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-4 font-display">
                  Deep Technical Specialization
                </h3>
                <ul className="space-y-2.5 text-xs text-white/70">
                  {[
                    "Custom WordPress Development",
                    "WooCommerce Solutions",
                    "Custom Plugin Development",
                    "Elementor Development",
                    "Headless WordPress & Next.js",
                    "Laravel Web Applications",
                    "Payment Gateway Integrations",
                    "Website Speed & Core Web Vitals"
                  ].map((spec, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="w-4 h-4 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                        <Check className="w-2.5 h-2.5 text-cyan-400" />
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Box 3: Profile Photo */}
            <motion.div 
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-2xl glass-panel relative overflow-hidden group border-white/5"
            >
              <Image 
                src="/profile.jpg" 
                alt="Muhammad Irfan" 
                fill 
                sizes="(max-w-7xl) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 font-display">
                <div className="text-sm font-bold text-white tracking-wide">Muhammad Irfan</div>
                <div className="text-[10px] text-white/50 uppercase tracking-wider font-mono">Senior WordPress Engineer</div>
              </div>
            </motion.div>

            {/* Box 4: Architecture mindset */}
            <motion.div 
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              viewport={{ once: true }}
              className="md:col-span-8 rounded-2xl glass-panel p-6 flex flex-col justify-center"
            >
              <h4 className="text-sm font-bold text-white mb-1">
                Optimized Database & Core Security
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                By hardening core files, sanitizing DB inputs, limiting plugin bloat, and setting custom cache invalidation pipelines, websites achieve premium loading performance and remain highly resilient against malicious scripts.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="work" className="py-24 px-6 md:px-12 bg-[#080808]/20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">Showcase</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-display">
                Featured Projects
              </h2>
            </div>
            <p className="text-sm text-white/40 max-w-md mt-2 md:mt-0">
              A curated selection of custom WordPress themes, WooCommerce stores, and Headless architectures built for rapid growth and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <ProjectCard
                key={idx}
                index={idx}
                title={proj.title}
                description={proj.description}
                image={proj.image}
                techStack={proj.techStack}
                businessOutcome={proj.businessOutcome}
                website={proj.website}
                features={proj.features}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 md:px-12 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">My Services</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 font-display">
              Enterprise Solutions Engineered for Conversion & Security
            </h2>
            <p className="text-sm text-white/50">
              Technical excellence applied directly to core WooCommerce systems, headless WordPress platforms, and tailor-made PHP plugins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Custom WP */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">Custom WordPress</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Tailored WordPress solutions built from scratch. Zero unnecessary plugins, custom themes, ACF structures, and lightweight Gutenberg blocks.
                </p>
              </div>
            </div>

            {/* WooCommerce */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">WooCommerce Development</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  High-converting, optimized eCommerce experiences. Custom checkout routes, express pay integrations, subscription setups, and performance tuning.
                </p>
              </div>
            </div>

            {/* Laravel */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">Laravel Integration</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Integrating WordPress backends with auxiliary Laravel APIs. Setting up custom routing nodes, database syncs, and microservice connections.
                </p>
              </div>
            </div>

            {/* Next.js */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">Next.js Frontends</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Decoupled headless configurations using Next.js. Building lightweight, lightning-fast frontend interfaces connected directly to WordPress REST APIs.
                </p>
              </div>
            </div>

            {/* Custom Plugins */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">Custom Plugins</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Business-specific functionality development. Custom widgets, metadata synchronization engines, bulk admin utilities, and database-safe code.
                </p>
              </div>
            </div>

            {/* API Integrations */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">API Integrations</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Stripe billing nodes, PayPal SDKs, CRM gateways, Hubspot webhooks, ERP synchronization pipelines, and automated enrollments.
                </p>
              </div>
            </div>

            {/* Speed Optimizations */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">Speed Optimization</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Core Web Vitals and PageSpeed improvements. Image compression, asset minification, critical CSS extraction, and database query tuning.
                </p>
              </div>
            </div>

            {/* Headless WP */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 flex flex-col justify-between h-[240px]">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-4 border border-cyan-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display">Headless WordPress</h3>
                <p className="text-[11px] text-white/60 leading-relaxed">
                  Next.js + WordPress decoupled setups. Benefit from WordPress content management along with a blazing-fast React frontend.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-white/40">
              <span>Looking for ongoing site maintenance?</span>
              <Link href="/maintenance" className="text-purple-400 hover:text-white underline font-semibold">
                View Maintenance Packages & Support &rarr;
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-24 px-6 md:px-12 bg-[#080808]/20 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto z-10 relative">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">My Timeline</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-display">
              Work Experience
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-12">
            
            {/* Work Item 1 */}
            <motion.div 
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#050505] border-2 border-purple-500 flex items-center justify-center shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white font-display">LaraArtisan</h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 self-start sm:self-auto mt-1 sm:mt-0">
                  Jun 2025 – Present
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white/70 mb-4">PHP | WordPress | WooCommerce & Laravel Developer (Hybrid)</h4>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Experienced Full Stack Developer specializing in WordPress, WooCommerce, and Laravel-based web applications. Skilled in building scalable websites, custom applications, and REST API integrations with robust security.
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {['WordPress', 'WooCommerce', 'Laravel', 'REST APIs', 'PHP theme development'].map((resp, i) => (
                  <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/60">
                    {resp}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Work Item 2 */}
            <motion.div 
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#050505] border-2 border-cyan-500 flex items-center justify-center shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-white font-display">CODLOO</h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 self-start sm:self-auto mt-1 sm:mt-0">
                  Aug 2024 – Aug 2025 (1 yr 1 mo)
                </span>
              </div>
              
              <div className="space-y-6 mt-4 pl-4 border-l border-white/5">
                {/* Role 1 */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-cyan-500/50" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-sm font-semibold text-white/90">Wordpress Developer</h4>
                    <span className="text-[10px] font-mono text-white/40">Aug 2024 – Aug 2025</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed mt-2">
                    Responsible for designing, developing, and maintaining custom WordPress websites tailored to client requirements. Blended strong front-end skills with deep back-end logic to build seamless user experiences.
                  </p>
                </div>
                
                {/* Role 2 */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-sm font-semibold text-white/90">Senior WordPress & Laravel Developer</h4>
                    <span className="text-[10px] font-mono text-white/40">Aug 2024 – Jun 2025</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed mt-2">
                    Led on-site backend architecture, custom theme coding, database structures, and Laravel web application development. Delivered custom plugins and solved complex third-party system integrations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Work Item 3 */}
            <motion.div 
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#050505] border-2 border-emerald-500 flex items-center justify-center shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h3 className="text-lg font-bold text-white font-display">Code Upscale</h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 self-start sm:self-auto mt-1 sm:mt-0">
                  Jul 2021 – Aug 2024 (3 yrs 2 mos)
                </span>
              </div>

              <div className="space-y-6 mt-4 pl-4 border-l border-white/5">
                {/* Role 1 */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-emerald-500/50" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-sm font-semibold text-white/90">Full Stack Engineer</h4>
                    <span className="text-[10px] font-mono text-white/40">Aug 2021 – Aug 2024</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed mt-2">
                    Specialized in custom WordPress development and modern front-end frameworks. Built high-performance, scalable web applications, and optimized asset delivery pipelines.
                  </p>
                </div>
                
                {/* Role 2 */}
                <div className="relative">
                  <span className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-white/20" />
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <h4 className="text-sm font-semibold text-white/90">WordPress & Frontend Developer | Next.js | UI Development</h4>
                    <span className="text-[10px] font-mono text-white/40">Jul 2021 – Aug 2024</span>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed mt-2">
                    Built Full Stack-oriented web solutions with WordPress, WooCommerce, and Next.js, focusing on eCommerce optimization, complex API configurations, and custom payment integrations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Work Item 4 */}
            <motion.div 
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#050505] border-2 border-violet-500 flex items-center justify-center shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white font-display">Artisan Solutions</h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-violet-500/10 text-violet-400 border border-violet-500/20 self-start sm:self-auto mt-1 sm:mt-0">
                  Dec 2020 – Jul 2021
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white/70 mb-4">WordPress Developer</h4>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Joined Artisan Solutions as a WordPress Developer after completing my internship. Worked on real-world client projects, building custom themes, and strengthening practical development skills in a professional environment.
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {['WordPress Design', 'Front-end Coding', 'Theme customization'].map((resp, i) => (
                  <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/60">
                    {resp}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Work Item 5 */}
            <motion.div 
              whileInView={{ opacity: [0, 1], x: [-20, 0] }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline marker */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#050505] border-2 border-teal-500 flex items-center justify-center shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              </span>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                <h3 className="text-lg font-bold text-white font-display">Rehman Soft</h3>
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 border border-teal-500/20 self-start sm:self-auto mt-1 sm:mt-0">
                  Jun 2020 – Oct 2020
                </span>
              </div>
              <h4 className="text-sm font-semibold text-white/70 mb-4">WordPress Developer Intern</h4>
              <p className="text-xs text-white/50 leading-relaxed mb-4">
                Gained hands-on experience in WordPress development by working on real-world client projects under the guidance of senior developers. Focused on PSD-to-WordPress conversions and built a strong HTML/CSS foundation.
              </p>
              
              <div className="flex flex-wrap gap-1.5">
                {['PSD to WordPress', 'HTML & CSS', 'WordPress basics'].map((resp, i) => (
                  <span key={i} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/60">
                    {resp}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 px-6 md:px-12 border-t border-white/5 relative bg-[#080808]/20">
        <div className="max-w-5xl mx-auto z-10 relative">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-display">
              Education & Academic Background
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-lg font-bold text-white mb-3 font-display">Virtual University of Pakistan</h3>
              <p className="text-sm text-white/60 mb-2">Bachelor&apos;s degree, Computer Software Engineering</p>
              <p className="text-xs text-white/50">Aug 2017 – Aug 2021</p>
              <div className="mt-4 text-[11px] text-white/50 space-y-2">
                <p>Focused on software development lifecycle, database management, and web application architecture.</p>
                <p>Built a strong engineering mindset which translates into structured themes and clean plugins.</p>
              </div>
            </div>
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-lg font-bold text-white mb-3 font-display">Government High School Samundri</h3>
              <p className="text-sm text-white/60 mb-2">Matriculation, Computer Science</p>
              <p className="text-xs text-white/50">2014 – 2016</p>
              <div className="mt-4 text-[11px] text-white/50 space-y-2">
                <p>Early introduction to computer logic, programming structures, and computer science basics.</p>
                <p>Graduated with a strong academic foundation, inspiring a career in web engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Tabbed Section */}
      <section id="skills" className="py-24 px-6 md:px-12 border-t border-white/5 relative">
        <div className="max-w-5xl mx-auto z-10 relative">
          
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Competencies</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-display">
              Technical Skills Grid
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Tabs Selector */}
            <div className="md:col-span-4 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 no-scrollbar">
              {(Object.keys(skillTabs) as Array<keyof typeof skillTabs>).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSkillTab(tab)}
                  className={`w-full text-left px-5 py-3.5 rounded-xl border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-between min-w-[150px] md:min-w-0 ${
                    activeSkillTab === tab
                      ? "bg-white/10 text-white border-purple-500/30"
                      : "text-white/40 border-white/5 hover:text-white/70 hover:bg-white/5"
                  }`}
                >
                  <span className="capitalize">{tab === "cms" ? "WordPress & CMS" : tab}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                </button>
              ))}
            </div>

            {/* Tabs Content */}
            <div className="md:col-span-8 rounded-2xl glass-panel p-6 sm:p-8 border-white/5 min-h-[200px]">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillTabs[activeSkillTab].map((skill, idx) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center flex items-center justify-center flex-col hover:border-purple-500/20 hover:bg-white/[0.04] transition-all group"
                  >
                    <span className="text-xs font-bold text-white/80 group-hover:text-white transition-colors font-mono">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Clients Hire Me Bento Grid */}
      <section className="py-24 px-6 md:px-12 bg-[#080808]/20 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Work Values</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 mb-4 font-display">
              Why Clients Hire Me
            </h2>
            <p className="text-sm text-white/50">
              I align technical decisions with business conversions, delivering high-performance, robust websites that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Card 1 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Clean & Scalable Code</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Strict adherence to WordPress VIP coding standards, custom PHP structure rules, clean database queries, and modular JavaScript architectures designed to support long-term growth.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Fast Turnaround</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Streamlined developer workflow, automated deployment pipelines, and agile delivery iterations that guarantee fast launches without ever cutting corners on code quality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">SEO-Friendly Development</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Structured JSON-LD schema integration, clean HTML semantic hierarchy, lightning-fast Core Web Vitals, and optimal XML sitemaps configuration that boost search engine indexing.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Performance First</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Sub-second page loading speeds, minimal CSS blocks, deferred JavaScript parsing, object caching configs, and edge computing cache architectures designed to pass audits.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Agency-Level Quality</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Attention to micro-interactions, flawless responsive rendering across breakpoints, robust edge-case validation, and modern luxurious layouts.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Reliable Communication</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Direct client collaboration, transparent technical reports, clean tracking dashboards, and responsiveness. No developer jargon, just business solutions.
              </p>
            </div>

            {/* Card 7 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Long-Term Partnership</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                Post-launch optimization support, hourly debug security monitoring, core CMS upgrades, and constant expansion advisory as the business grows.
              </p>
            </div>

            {/* Card 8 */}
            <div className="p-6 rounded-2xl glass-panel border-white/5 bg-[#0b0b0b]/40">
              <h3 className="text-sm font-bold text-white mb-2 font-display">Business-Focused</h3>
              <p className="text-[11px] text-white/50 leading-relaxed font-normal">
                I study business metrics, sales funnels, and customer journeys to build interfaces that maximize revenue. Technical design directly supports growth.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 md:px-12 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto z-10 relative">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2 font-display">
              Trusted by Technical Leaders
            </h2>
          </div>

          <TestimonialSlider />

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 md:px-12 border-t border-white/5 relative bg-gradient-to-t from-purple-900/10 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto text-center z-10 relative">
          
          <span className="text-xs font-bold uppercase tracking-widest text-purple-400 font-mono block mb-4">
            Get In Touch
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6 font-display">
            Let&apos;s Build Something <br />
            Exceptional Together
          </h2>
          
          <p className="text-sm sm:text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-12">
            Whether you need a custom WordPress website, WooCommerce platform, plugin development, or a complete digital solution, I can help transform your ideas into scalable and high-performing products.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <MagneticButton>
              <a
                href="mailto:raiirfan1999@gmail.com"
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full text-xs font-extrabold uppercase bg-white text-[#050505] hover:bg-purple-500 hover:text-white transition-all shadow-lg hover:shadow-purple-500/20"
              >
                <Calendar className="w-4.5 h-4.5" />
                <span>Schedule a Call</span>
              </a>
            </MagneticButton>

            <MagneticButton>
              <a
                href="mailto:raiirfan1999@gmail.com"
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-full text-xs font-extrabold uppercase bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>Start a Project</span>
              </a>
            </MagneticButton>
          </div>

          {/* Socials & Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-white/5 text-xs text-white/50 font-semibold uppercase tracking-wider">
            <a 
              href="https://www.linkedin.com/in/muhammad-irfan-777476219/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 hover:text-white transition-colors py-2"
            >
              <svg className="w-4 h-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 hover:text-white transition-colors py-2"
            >
              <svg className="w-4 h-4 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:raiirfan1999@gmail.com" 
              className="flex items-center justify-center space-x-2 hover:text-white transition-colors py-2"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>raiirfan1999@gmail.com</span>
            </a>
            <a 
              href="https://wa.me/923037976657" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 hover:text-white transition-colors py-2"
            >
              <span className="text-[13px] text-green-400 font-bold font-mono">WA</span>
              <span>+92 (303) 797-6657</span>
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}
