"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 text-white pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 md:px-10">
      {/* Ambient background blur graphics - Hidden from accessibility trees */}
      <div aria-hidden="true" className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 left-1/4 -mb-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT COLUMN: VALUE PROPOSITION ================= */}
          <div className="space-y-6 max-w-xl pl-2 sm:pl-4 md:pl-0 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 backdrop-blur-sm mx-auto md:mx-0">
              <svg className="w-3.5 h-3.5 text-amber-300 fill-current animate-pulse" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Next-Gen Itinerary Engine
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
              Discover Your <br className="hidden lg:inline" />Next Adventure
            </h1>

            <p className="text-base sm:text-lg text-blue-50/90 leading-relaxed font-light max-w-xl mx-auto md:mx-0">
              Plan seamless trips, track custom budgets, monitor real-time weather updates, 
              and build personalized day-by-day itineraries—all from a single, unified platform.
            </p>

            <div className="pt-2">
              <Link 
                href="/destinations" 
                aria-label="Explore global travel destinations and planning options"
                className="inline-block bg-white text-blue-600 hover:text-blue-700 font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                Explore Destinations <span className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ml-1">→</span>
              </Link>
            </div>

            {/* Accessible Interactive Feature Badges Row */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-3">
              <Link 
                href="/destinations"
                aria-label="Navigate to Smart Destinations page"
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <svg className="w-3.5 h-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Smart Destinations
              </Link>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm select-none">
                <svg className="w-3.5 h-3.5 text-cyan-300 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
                Weather Updates
              </div>
              <Link 
                href="/itinerary"
                aria-label="Navigate to Itinerary Builder layout view"
                className="flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                <svg className="w-3.5 h-3.5 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Itinerary Builder
              </Link>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: LIVE IMAGE ASSET CANVAS ================= */}
          <div className="hidden md:block relative w-full h-[400px] lg:h-[450px] px-4" aria-hidden="true">
            
            {/* Native Next.js Responsive Image Wrapper Frame Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
              <Image
                src="/images/travel-hero.jpg"
                alt="Travel planning dashboard showing destinations and itineraries"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700 will-change-transform"
              />
              {/* Soft overlay gradient to preserve text readability contrast layout values */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Element 1: Live Flight Ticker */}
            <div className="absolute -top-4 -left-4 z-20 bg-slate-900 border border-slate-800 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
              <div className="bg-blue-600 text-white p-2 rounded-xl flex items-center justify-center shadow-md w-8 h-8">
                <svg className="w-4 h-4 text-white transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white tracking-tight">Mumbai (BOM) ➔ Goa (GOI)</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Flight Track • Confirmed</p>
              </div>
            </div>

            {/* Floating Element 2: Context Trip Widget Row */}
            <div className="absolute -bottom-6 -right-2 z-20 bg-white p-4 rounded-2xl shadow-2xl text-slate-800 border border-slate-100 flex items-center gap-4 max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-inner text-white">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div>
                <span className="px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 border border-amber-100 rounded">
                  Active
                </span>
                <h4 className="text-base font-black text-slate-900 mt-1 tracking-tight">Anjuna Beach</h4>
                <p className="text-xs text-slate-500 font-medium">3 Destinations Saved</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}