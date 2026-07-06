"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Better sub-route detection: Highlighting stays active on nested pages like /destinations/goa
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  // Updated navigation array representing the complete user trip lifecycle workflow
  const navLinks = [
    { name: "Home", href: "/", label: "Go to Home page" },
    { name: "Dashboard", href: "/dashboard", label: "Go to User Dashboard center" },
    { name: "Destinations", href: "/destinations", label: "Go to Destinations page" },
    { name: "Itinerary", href: "/itinerary", label: "Go to Itinerary Planner page" },
    { name: "Budget", href: "/budget", label: "Go to Trip Budget Planning ledger" },
    { name: "Booking", href: "/booking", label: "Go to Booking Management control panel" },
  ];

  // Automatically close mobile layout drawer upon a successful application route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Accessibility: Gracefully handle structural physical keyboard 'Escape' events to dismiss drawer panel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* Main Container Wrapper - Expanded to max-w-screen-xl for high density layout support */}
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        
        {/* Brand Logo Layout Block */}
        <Link 
          href="/" 
          aria-label="SmartTravel platform home layout console hub"
          className="flex items-center gap-2 group shrink-0 focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-xl transition-all"
        >
          <span className="bg-blue-600 text-white p-2 rounded-xl text-lg font-bold shadow-md shadow-blue-200 group-hover:bg-blue-700 transition-colors flex items-center justify-center w-9 h-9">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-200" aria-hidden="true">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
          </span>
          <h1 className="text-xl font-black text-slate-800 tracking-tight">
            Smart<span className="text-blue-600">Travel</span>
          </h1>
        </Link>

        {/* Desktop Menu Layout Items - Adjusted gap configurations to preserve horizontal real estate */}
        <ul className="hidden md:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label}
                className={`px-2.5 lg:px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-4 focus:ring-blue-300 block ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600 border border-blue-100/50 shadow-sm"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Group CTA Pathway Block */}
        <div className="hidden md:flex items-center md:gap-1 lg:gap-3 shrink-0">
          <Link
            href="/login"
            aria-label="Go to login screen view panel"
            className="text-sm font-bold text-slate-600 hover:text-slate-900 px-2.5 py-2 transition-colors rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            aria-label="Go to client account registration signup view screen"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-3.5 lg:px-4 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile / Tablet Menu Trigger Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close responsive system navigation menu drawer" : "Open responsive system navigation menu drawer"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-drawer"
          className="md:hidden p-2 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile / Tablet Responsive Floating Drawer Layout Panel - Max height bumped slightly for new elements */}
      <div
        id="mobile-navigation-drawer"
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
          isOpen ? "max-h-[28rem] opacity-100 p-4 shadow-inner" : "max-h-0 opacity-0 p-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-1.5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-label={link.label}
                className={`block px-4 py-2.5 rounded-xl text-base font-bold transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600 border border-blue-100"
                    : "text-slate-600 hover:bg-slate-50 border border-transparent"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 mt-2">
            <Link 
              href="/login" 
              aria-label="Go to login screen view panel"
              className="w-full text-center py-3 text-sm font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Sign In
            </Link>
            <Link 
              href="/register" 
              aria-label="Go to client account registration signup view screen"
              className="w-full text-center py-3 text-sm font-bold bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}