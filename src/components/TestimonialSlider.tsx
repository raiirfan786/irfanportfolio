"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface Testimonial {
  feedback: string;
  clientName: string;
  role: string;
  company: string;
  rating: number;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    feedback: "Muhammad is a rare find in WordPress development. He didn't just build our WooCommerce site; he engineered it from the ground up to handle massive sales spikes. Our loading times dropped by 65% and checkout conversions increased by 22%. Outstanding communicator and technical partner.",
    clientName: "David Henderson",
    role: "VP of Engineering",
    company: "Apex Retail Group",
    rating: 5,
    initials: "DH"
  },
  {
    feedback: "We hired Muhammad to build a headless WordPress platform using Next.js for our laundry service marketplace. The implementation of custom REST APIs and Stripe Connect marketplace commissions was flawless. His work looks incredibly clean and is built to scale.",
    clientName: "Amara Okoye",
    role: "Founder & CEO",
    company: "Cycle Laundry",
    rating: 5,
    initials: "AO"
  },
  {
    feedback: "Muhammad rebuilt our core WordPress corporate website, replacing an outdated framework with a lightweight custom theme and Elementor setup that is extremely fast. His performance tuning and speed optimization is enterprise-grade.",
    clientName: "Julian Vance",
    role: "Marketing Director",
    company: "Forge Parks",
    rating: 5,
    initials: "JV"
  }
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const slideVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -100 : 100,
      opacity: 0
    })
  };

  const handleNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTestimonial = testimonials[current];

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-2xl glass-panel p-6 sm:p-10 border-white/5 bg-[#0b0b0b]/40 backdrop-blur-xl shadow-2xl">
      {/* Quote Icon */}
      <div className="absolute top-6 left-6 text-white/5 pointer-events-none">
        <Quote className="w-16 h-16 sm:w-24 sm:h-24 fill-white/5" />
      </div>

      <div className="relative z-10 min-h-[200px] flex flex-col justify-between">
        <div className="overflow-hidden relative w-full">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-5">
                {[...Array(activeTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Feedback text */}
              <p className="text-base sm:text-lg text-white/80 leading-relaxed italic font-normal mb-8">
                &ldquo;{activeTestimonial.feedback}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-purple-500/10">
                  {activeTestimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-wide">
                    {activeTestimonial.clientName}
                  </h4>
                  <p className="text-xs text-white/40">
                    {activeTestimonial.role} at <span className="text-purple-400 font-medium">{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-6">
          <div className="flex space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? "right" : "left");
                  setCurrent(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === idx ? "w-8 bg-purple-500" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <div className="flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 rounded-lg bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all"
            >
              <ChevronLeft className="w-4.5 h-4.5" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg bg-white/5 border border-white/5 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all"
            >
              <ChevronRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
