import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Irfan | Senior WordPress Developer | WooCommerce Expert | Full Stack Developer",
  description: "Muhammad Irfan is a Senior Full Stack WordPress Developer with 5+ years of experience in custom WordPress development, WooCommerce, plugin development, API integrations, Laravel, Next.js, and website optimization.",
  keywords: [
    "Muhammad Irfan",
    "WordPress Developer",
    "WooCommerce Expert",
    "Full Stack WordPress",
    "Custom Plugin Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Headless WordPress CMS",
    "PageSpeed Optimization",
  ],
  authors: [{ name: "Muhammad Irfan", url: "https://github.com/irfan" }],
  openGraph: {
    title: "Muhammad Irfan | Senior WordPress Developer | WooCommerce Expert | Full Stack Developer",
    description: "Premium WooCommerce, custom plugins, Laravel/Next.js integrations, and headless WordPress solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Irfan | Senior WordPress Developer | WooCommerce Expert",
    description: "Senior Full Stack WordPress Developer with 5+ years of experience building enterprise-grade, lightning-fast solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-[#050505] text-white selection:bg-purple-500 selection:text-white`}
      >
        <SmoothScroll>
          <div className="relative min-h-screen overflow-hidden">
            {/* Global Aurora Background Effect */}
            <div className="pointer-events-none fixed inset-0 z-0">
              <div className="absolute top-[-20%] left-[-10%] h-[60%] w-[60%] rounded-full bg-purple-900/15 blur-[150px] animate-aurora" />
              <div className="absolute bottom-[-10%] right-[-10%] h-[65%] w-[65%] rounded-full bg-cyan-900/15 blur-[160px] animate-aurora" style={{ animationDelay: "-7s" }} />
              <div className="absolute top-[40%] right-[15%] h-[40%] w-[40%] rounded-full bg-indigo-900/10 blur-[140px] animate-aurora" style={{ animationDelay: "-14s" }} />
            </div>
            {/* Subtle Grid Overlay */}
            <div className="pointer-events-none fixed inset-0 z-0 grid-bg opacity-30 radial-fade" />
            
            {/* Page Content */}
            <div className="relative z-10">{children}</div>
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
