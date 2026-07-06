"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Plane, Mail } from "lucide-react";
import { toast } from "react-toastify";

// Strict structural modeling for deep link navigation columns
interface FooterItem {
  name: string;
  href: string;
}

interface FooterGroup {
  title: string;
  items: FooterItem[];
}

export default function Footer() {
  const [email, setEmail] = useState("");

  const footerLinks: FooterGroup[] = [
    {
      title: "Discover",
      items: [
        { name: "Trending Spots", href: "/destinations" },
        { name: "Travel Categories", href: "/categories" },
        { name: "Featured Recommendations", href: "/recommendations" },
        { name: "Budget Estimators", href: "/budget" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Itinerary Builder", href: "/itinerary" },
        { name: "Weather Tracker", href: "/dashboard" },
        { name: "Expense Tracker", href: "/budget" },
        { name: "Route Mapping", href: "/dashboard" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "/about" },
        { name: "Careers Info", href: "/careers" },
        { name: "Community Blog", href: "/blog" },
        { name: "Press Kit", href: "/press" },
      ],
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email address.");
      return;
    }
    
    toast.success("Subscribed successfully! Welcome to the Smart Travel community.");
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-400 border-t border-slate-800/80">
      {/* Containerized grid wrapper aligned with Navbar and Hero elements */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-16 pb-8">
        
        {/* Upper Footer: Branding + Multi-Column Nav Grid + Newsletter Subscription */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 pb-12 border-b border-slate-800/60">
          
          {/* Brand Introduction Block */}
          <div className="md:col-span-3 lg:col-span-2 space-y-5">
            <Link 
              href="/" 
              aria-label="Go to Smart Travel home page"
              className="inline-flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-xl"
            >
              <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-900/40 group-hover:bg-blue-500 transition-colors">
                <Plane className="w-5 h-5 transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <span className="text-xl font-black text-white tracking-tight">
                Smart<span className="text-blue-500">Travel</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
              Build seamless travel schedules, track global expense metrics, monitor weather forecasts, and craft personalized itineraries all in one clean academic workspace.
            </p>
            
            {/* Social Graph Identity Icons (Using inline SVGs to avoid package resolution issues) */}
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Connect with us on LinkedIn" 
                className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-slate-700 p-1.5 rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Review our source code repositories on GitHub" 
                className="hover:text-white focus:outline-none focus:ring-2 focus:ring-slate-700 p-1.5 rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Follow technical platform updates on Twitter" 
                className="hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-slate-700 p-1.5 rounded-md transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Semantic Navigation Link Maps */}
          <nav aria-label="Footer navigation links" className="grid grid-cols-2 gap-8 md:col-span-3 lg:col-span-3">
            {footerLinks.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
                  {group.title}
                </h3>
                <ul className="space-y-3 text-sm font-medium">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-md px-1 py-0.5 -mx-1 transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          {/* Interactive Newsletter Subscription Capture Layout */}
          <div className="md:col-span-3 lg:col-span-1 space-y-4">
            <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-200">
              Stay Updated
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to unlock seasonal guides and algorithm updates.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="name@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-800/60 border border-slate-700/80 rounded-xl px-3.5 py-2 pl-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  aria-label="Email address for travel newsletter subscription"
                />
                <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 active:scale-[0.98] text-white font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Lower Footer: Sub-Meta Attributions and Terms */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} Smart Travel Planning Platform. All rights reserved.</p>
          </div>
          
          <nav aria-label="Legal terms directory navigation" className="flex flex-wrap gap-x-6 gap-y-2 uppercase tracking-wider justify-center sm:justify-end">
            <Link href="/privacy" className="hover:text-slate-400 focus:outline-none focus:underline transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 focus:outline-none focus:underline transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-400 focus:outline-none focus:underline transition-colors">
              Cookie Policy
            </Link>
          </nav>
        </div>

      </div>
    </footer>
  );
}