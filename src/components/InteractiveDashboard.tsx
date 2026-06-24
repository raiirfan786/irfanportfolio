"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  TrendingUp, 
  CreditCard
} from "lucide-react";

export default function InteractiveDashboard() {
  const [activeTab, setActiveTab] = useState<"api" | "sales" | "code">("code");
  const [salesData, setSalesData] = useState<number[]>([120, 240, 180, 390, 310, 480, 520]);
  const [latency, setLatency] = useState(12);

  // Simulate real-time data ticks
  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate WooCommerce sales fluctuating
      setSalesData(prev => [...prev.slice(1), Math.floor(Math.random() * 300) + 300]);
      // Simulate API latency changes
      setLatency(Math.floor(Math.random() * 8) + 8);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[620px] aspect-[4/3] rounded-2xl glass-panel p-6 border-white/10 select-none shadow-2xl shadow-purple-900/10">
      {/* Window Controls */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="text-[11px] text-white/40 ml-2 font-mono">irfan-core-engine v1.5.0</span>
        </div>
        <div className="flex space-x-1 p-0.5 bg-white/5 rounded-lg border border-white/5">
          {(["code", "api", "sales"] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 text-[11px] font-medium rounded-md uppercase tracking-wider transition-all ${
                activeTab === tab 
                  ? "bg-white/10 text-white shadow-sm" 
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Tab Area */}
      <div className="h-[calc(100%-60px)] relative overflow-hidden font-mono text-xs">
        <AnimatePresence mode="wait">
          {activeTab === "code" && (
            <motion.div
              key="code"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col justify-between text-white/80 leading-relaxed text-[11px] sm:text-xs"
            >
              <div>
                <span className="text-purple-400">class</span> <span className="text-cyan-400">WooCommerceHeadlessAdapter</span> {"{"}
                <div className="pl-4 text-white/50">
                  <span className="text-purple-400">private</span> <span className="text-emerald-400">$next_app</span>;
                  <br />
                  <span className="text-purple-400">public function</span> <span className="text-blue-400">__construct</span>() {"{"}
                  <div className="pl-4">
                    <span className="text-white/60">$this-&gt;</span><span className="text-emerald-400">next_app</span> = <span className="text-yellow-400">{"\"https://nextjs.irfan.dev\""}</span>;
                  </div>
                  {"}"}
                  <br />
                  <span className="text-purple-400">public function</span> <span className="text-blue-400">syncInventory</span>(<span className="text-amber-400">$productId</span>) {"{"}
                  <div className="pl-4">
                    <span className="text-purple-400">return</span> <span className="text-cyan-400">StripeConnector</span>::<span className="text-blue-300">syncProduct</span>(<span className="text-amber-400">$productId</span>, [
                    <div className="pl-4">
                      <span className="text-yellow-400">{"'engine'"}</span> =&gt; <span className="text-yellow-400">{"'WP_JSON_API'"}</span>,
                      <br />
                      <span className="text-yellow-400">{"'latency_optimized'"}</span> =&gt; <span className="text-emerald-500">true</span>,
                      <br />
                      <span className="text-yellow-400">{"'edge_runtime'"}</span> =&gt; <span className="text-purple-400">Laravel</span>::<span className="text-blue-200">octane</span>()
                    </div>
                    ]);
                  </div>
                  {"}"}
                </div>
                {"}"}
              </div>
              
              <div className="flex items-center space-x-2 text-[10px] text-white/40 border-t border-white/5 pt-2 mt-2">
                <Terminal className="w-3.5 h-3.5 text-purple-400" />
                <span>WP-CLI: plugin status active, 100% test coverage</span>
              </div>
            </motion.div>
          )}

          {activeTab === "api" && (
            <motion.div
              key="api"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[9px] uppercase font-bold">GET</span>
                    <span className="text-white/80 font-mono text-[11px]">/wp-json/wp/v2/posts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-400 text-[10px]">200 OK</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 text-[9px] uppercase font-bold">POST</span>
                    <span className="text-white/80 font-mono text-[11px]">/api/checkout/stripe</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                    <span className="text-purple-400 text-[10px]">{latency}ms</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2 rounded bg-white/5 border border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[9px] uppercase font-bold">GET</span>
                    <span className="text-white/80 font-mono text-[11px]">/laravel/api/sync</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <span className="text-cyan-400 text-[10px]">Active</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-white/5 pt-3 mt-3 text-[11px]">
                <div className="bg-white/5 p-2 rounded border border-white/5 text-center">
                  <div className="text-white/40 text-[9px]">CACHING RATIO</div>
                  <div className="text-emerald-400 font-bold mt-0.5">99.4% (Redis)</div>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/5 text-center">
                  <div className="text-white/40 text-[9px]">LCP SPEED</div>
                  <div className="text-purple-400 font-bold mt-0.5">0.62s</div>
                </div>
                <div className="bg-white/5 p-2 rounded border border-white/5 text-center">
                  <div className="text-white/40 text-[9px]">EDGE ROUTING</div>
                  <div className="text-cyan-400 font-bold mt-0.5">Cloudflare</div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "sales" && (
            <motion.div
              key="sales"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="h-full flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-white/40 text-[10px] block">WOOCOMMERCE GROSS SALES</span>
                  <span className="text-lg font-bold text-white tracking-tight">$48,290.00</span>
                </div>
                <div className="flex items-center space-x-1.5 text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded text-[11px]">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+18.4%</span>
                </div>
              </div>

              {/* Sparkline Chart */}
              <div className="w-full h-24 my-2 flex items-end justify-between relative px-2">
                {salesData.map((val, idx) => (
                  <motion.div
                    key={idx}
                    layoutId={`bar-${idx}`}
                    className="w-10 rounded-t bg-gradient-to-t from-purple-500/30 to-cyan-500/80 hover:to-white transition-colors"
                    style={{ height: `${(val / 600) * 100}%` }}
                    initial={{ height: 0 }}
                    animate={{ height: `${(val / 600) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  />
                ))}
                
                {/* Horizontal reference gridline */}
                <div className="absolute left-0 right-0 top-1/2 border-t border-white/5 pointer-events-none" />
                <div className="absolute left-0 right-0 top-1/4 border-t border-white/5 pointer-events-none" />
              </div>

              <div className="flex justify-between text-[10px] text-white/40 uppercase">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Floating Subcard 1: Stripe Checkout Glass */}
      <motion.div 
        initial={{ x: 30, y: 30, opacity: 0 }}
        animate={{ x: 20, y: 15, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
        whileHover={{ y: 5, scale: 1.05 }}
        className="absolute bottom-6 -right-12 w-[180px] p-3 rounded-xl glass-panel border-cyan-500/20 backdrop-blur-xl shadow-xl hidden sm:block"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <CreditCard className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">STRIPE API</span>
        </div>
        <div className="text-[10px] text-white/40 uppercase tracking-wider font-mono">Status</div>
        <div className="text-xs font-bold text-white font-mono mt-0.5">Connect Active</div>
        <div className="h-1 bg-white/10 rounded-full mt-2 overflow-hidden">
          <motion.div 
            animate={{ width: ["0%", "100%"] }} 
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }} 
            className="h-full bg-cyan-400" 
          />
        </div>
      </motion.div>

      {/* Floating Subcard 2: Next.js + Core Web Vitals */}
      <motion.div 
        initial={{ x: -30, y: -40, opacity: 0 }}
        animate={{ x: -20, y: -25, opacity: 1 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 60 }}
        whileHover={{ y: -35, scale: 1.05 }}
        className="absolute -top-12 -left-12 w-[170px] p-3 rounded-xl glass-panel border-purple-500/20 backdrop-blur-xl shadow-xl hidden sm:block"
      >
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 font-bold text-[10px]">
            ▲
          </div>
          <span className="text-[10px] text-white/70 font-mono font-bold">Next.js Headless</span>
        </div>
        <div className="flex items-baseline space-x-1.5 mt-1">
          <span className="text-xl font-extrabold text-white tracking-tight">100</span>
          <span className="text-[9px] text-emerald-400 font-semibold font-mono">Performance</span>
        </div>
        <div className="flex space-x-1 mt-2">
          <div className="flex-1 h-1.5 rounded-full bg-emerald-500" title="LCP" />
          <div className="flex-1 h-1.5 rounded-full bg-emerald-500" title="FID" />
          <div className="flex-1 h-1.5 rounded-full bg-emerald-500" title="CLS" />
        </div>
      </motion.div>

      {/* Glow Behind Container */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10 blur-xl opacity-75 -z-10 pointer-events-none" />
    </div>
  );
}
