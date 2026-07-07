"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  Check,
  AlertCircle,
  Loader2,
  ArrowLeft,
  Calendar,
  Briefcase,
  Code2,
  Globe,
} from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

const services = [
  { icon: Code2, label: "Custom WordPress Development" },
  { icon: Globe, label: "WooCommerce / eCommerce" },
  { icon: Briefcase, label: "Plugin Development" },
  { icon: Calendar, label: "Website Optimization" },
];

const budgetOptions = [
  "$500 – $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,000",
  "$7,000 – $15,000",
  "$15,000+",
  "Let's discuss",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "7bebb29e-fc53-4c62-8714-f8206c06df0a";
      
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: form.subject || `Portfolio Contact Form: ${form.name}`,
          message: `Subject Interest: ${form.subject}\nBudget Selection: ${form.budget}\n\nMessage Body:\n${form.message}`,
          from_name: "Muhammad Irfan Portfolio",
        }),
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please check your Access Key.");
      }

      setFormState("success");
      setForm({ name: "", email: "", subject: "", budget: "", message: "" });
    } catch (err: unknown) {
      setFormState("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      {/* Background effects */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full bg-purple-900/15 blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[65%] w-[65%] rounded-full bg-cyan-900/15 blur-[160px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 flex justify-between items-center bg-[#050505]/60 backdrop-blur-xl border-b border-white/5">
        <Link href="/" className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-extrabold text-white text-sm">
            MI
          </div>
          <span className="text-sm font-bold tracking-widest text-white uppercase">
            MUHAMMAD IRFAN<span className="text-purple-500">.</span>
          </span>
        </Link>

        <div className="flex items-center space-x-3">
          <Link
            href="/"
            className="flex items-center space-x-2 text-xs font-semibold text-white/50 hover:text-white transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>
          {/* Profile Photo */}
          <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-lg shadow-purple-500/10">
            <Image src="/profile.jpg" alt="Muhammad Irfan" fill sizes="32px" className="object-cover" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-purple-400 font-mono block mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Exceptional
              </span>
            </h1>
            <p className="text-base text-white/60 leading-relaxed">
              Have a WordPress project, WooCommerce store, or custom plugin in mind? Fill in the form below and I&apos;ll get back to you within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* LEFT: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-8"
            >
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 sm:p-10">
                <h2 className="text-2xl font-extrabold text-white mb-2">Send a Message</h2>
                <p className="text-sm text-white/50 mb-8">Fill in your details and I&apos;ll respond personally within 24 hours.</p>

                <AnimatePresence mode="wait">
                  {formState === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-extrabold text-white mb-3">Message Sent! 🎉</h3>
                      <p className="text-white/60 mb-2">Thank you for reaching out. I&apos;ve received your message and sent a confirmation to your email.</p>
                      <p className="text-sm text-purple-400 font-semibold mb-8">I&apos;ll get back to you within 24 hours.</p>
                      <button
                        onClick={() => setFormState("idle")}
                        className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-white hover:bg-white/10 transition-all"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {/* Name + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                            Full Name <span className="text-purple-400">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.06] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                            Email Address <span className="text-purple-400">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.06] transition-all"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          placeholder="e.g. WooCommerce Store Development"
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.06] transition-all"
                        />
                      </div>

                      {/* Budget */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-3">
                          Project Budget
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {budgetOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, budget: option }))}
                              className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                                form.budget === option
                                  ? "bg-purple-500/20 border-purple-500/60 text-purple-300"
                                  : "bg-white/[0.03] border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/80"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-white/40 mb-2">
                          Message <span className="text-purple-400">*</span>
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          placeholder="Tell me about your project — what are you building, what problems need solving, and what results you're looking for..."
                          className="w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white placeholder-white/25 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/[0.06] transition-all resize-none"
                        />
                      </div>

                      {/* Error Message */}
                      {formState === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400"
                        >
                          <AlertCircle className="w-4 h-4 flex-shrink-0" />
                          <span>{errorMsg}</span>
                        </motion.div>
                      )}

                      {/* Submit */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <MagneticButton>
                          <button
                            type="submit"
                            disabled={formState === "loading"}
                            className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full text-sm font-extrabold uppercase bg-white text-[#050505] hover:bg-purple-500 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-purple-500/20"
                          >
                            {formState === "loading" ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4" />
                                <span>Send Message</span>
                              </>
                            )}
                          </button>
                        </MagneticButton>

                        <a
                          href="https://wa.me/923037976657"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-full text-sm font-extrabold uppercase bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/40 transition-all"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>

                      <p className="text-[11px] text-white/25 pt-1">
                        By submitting, you agree that I may use your contact details to respond to your inquiry. No spam — ever.
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT: Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 space-y-5"
            >
              {/* Profile Card */}
              <div className="rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.06]">
                <div className="h-24 bg-gradient-to-r from-purple-600/30 to-cyan-600/30 relative">
                  <div className="absolute -bottom-10 left-6">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#050505] shadow-xl">
                      <Image src="/profile.jpg" alt="Muhammad Irfan" fill sizes="80px" className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="pt-14 pb-6 px-6">
                  <h2 className="text-lg font-bold text-white">Muhammad Irfan</h2>
                  <p className="text-sm text-purple-400 font-semibold mt-0.5">Senior Full Stack WordPress Developer</p>
                  <div className="flex items-center space-x-1.5 mt-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-white/50">Available for new projects</span>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6 space-y-5">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 font-mono">Direct Contact</h3>

                <a href="mailto:irfandhudi.vu@gmail.com" className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-500/20 transition-all">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">Email</div>
                    <div className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">irfandhudi.vu@gmail.com</div>
                  </div>
                </a>

                <a href="https://wa.me/923037976657" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-all">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">WhatsApp</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">+92 (303) 797-6657</div>
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/muhammad-irfan-777476219/" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-4 group">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-all">
                    <svg className="w-4 h-4 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">LinkedIn</div>
                    <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">Muhammad Irfan</div>
                  </div>
                </a>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider mb-0.5">Location</div>
                    <div className="text-sm font-semibold text-white">Pakistan — Remote Worldwide</div>
                  </div>
                </div>
              </div>

              {/* Services offered */}
              <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 font-mono mb-4">I Can Help With</h3>
                <div className="space-y-3">
                  {services.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center space-x-3 text-sm text-white/70">
                      <span className="w-6 h-6 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3 h-3 text-purple-400" />
                      </span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="rounded-2xl bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border border-purple-500/10 p-5 text-center">
                <div className="text-2xl font-extrabold text-white mb-1">24h</div>
                <div className="text-xs text-white/50 uppercase tracking-wider font-mono">Average Response Time</div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between text-xs text-white/30">
          <div className="flex items-center space-x-2.5 mb-3 sm:mb-0">
            <div className="w-6 h-6 rounded bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-[10px]">
              MI
            </div>
            <span className="font-bold text-white uppercase tracking-widest font-mono">Muhammad Irfan</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Muhammad Irfan. Senior WordPress Developer.</p>
        </div>
      </footer>
    </div>
  );
}
