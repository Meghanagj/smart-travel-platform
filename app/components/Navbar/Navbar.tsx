"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Destinations", href: "/destinations" },
    { name: "Itinerary", href: "/itinerary" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all">
      {/* 
        ✅ ADJUSTMENT 1: Added px-4 sm:px-6 md:px-10 for smooth, continuous fluid 
        padding compression on varying smaller screens. Changed max-w-6xl to max-w-7xl.
      */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 h-16 flex justify-between items-center">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0 focus:outline-none">
          <span className="bg-blue-600 text-white p-2 rounded-xl text-lg font-bold shadow-md shadow-blue-200 group-hover:bg-blue-700 transition-colors">
            ✈
          </span>
          <h1 className="text-xl font-black text-slate-800 tracking-tight">
            Smart<span className="text-blue-600">Travel</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        {/* 
          ✅ ADJUSTMENT 2: Changed gap-2 to md:gap-1 lg:gap-2 so text links 
          shrink elegantly without overlapping or breaking layouts on smaller tablets.
        */}
        <ul className="hidden md:flex items-center md:gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 lg:px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Auth Group */}
        {/* 
          ✅ ADJUSTMENT 3: Optimized responsive spacing (md:gap-2 lg:gap-4) and 
          added shrink-0 to prevent button titles from truncating or getting cropped.
        */}
        <div className="hidden md:flex items-center md:gap-2 lg:gap-4 shrink-0">
          <Link
            href="/login"
            className="text-sm font-bold text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold px-4 lg:px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile / Tablet Menu Trigger Button */}
        <button
          className="md:hidden p-2 rounded-xl hover:bg-slate-50 text-slate-600 transition-colors focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile / Tablet Drawer Layout Panel */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
          isOpen ? "max-h-80 opacity-100 p-4" : "max-h-0 opacity-0 p-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-all ${
                  isActive(link.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-50">
            <Link href="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-sm font-bold text-slate-600 border border-slate-200 rounded-xl hover:bg-slate-50 active:scale-95 transition-all">Sign In</Link>
            <Link href="/register" onClick={() => setIsOpen(false)} className="w-full text-center py-3 text-sm font-bold bg-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 active:scale-95 transition-all">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}