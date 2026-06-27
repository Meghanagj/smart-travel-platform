"use client";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-500 text-white pt-20 pb-24 md:pt-28 md:pb-32 px-4 sm:px-6 md:px-10">
      {/* Ambient background blur graphics */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -mb-24 w-80 h-80 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* ================= LEFT COLUMN: VALUE PROPOSITION ================= */}
          <div className="space-y-6 max-w-2xl pl-2 sm:pl-4 md:pl-0 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/20 backdrop-blur-sm mx-auto md:mx-0">
              ✨ Next-Gen Itinerary Engine
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
                className="inline-block bg-white text-blue-600 hover:text-blue-700 font-bold px-7 py-4 rounded-xl shadow-md hover:shadow-xl hover:bg-blue-50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                Explore Destinations
              </Link>
            </div>

            {/* Feature Badges Row */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-center md:justify-start gap-3">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm">
                <span className="text-blue-300 text-sm">📍</span> Smart Destinations
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm">
                <span className="text-cyan-300 text-sm">☁</span> Weather Updates
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2 rounded-xl text-xs font-semibold backdrop-blur-sm">
                <span className="text-emerald-300 text-sm">📅</span> Itinerary Builder
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: LIVE IMAGE ASSET CANVAS ================= */}
          <div className="hidden md:block relative w-full h-[400px] lg:h-[450px] px-4">
            
            {/* Native Next.js Responsive Image Wrapper Frame Container */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/10 backdrop-blur-sm">
           <Image
              /* ✅ CHANGE THIS LINE TO INCLUDE THE SUBFOLDER PATH */
              src="/images/travel-hero.jpg"
              alt="Smart Travel Planner Dashboard Visualization Illustration"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
            />
              {/* Soft overlay gradient to keep brand contrast consistent */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Element 1: Live Flight Ticker */}
            <div className="absolute -top-4 -left-4 z-20 bg-slate-900 border border-slate-800 p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
              <div className="bg-blue-600 text-white p-2 rounded-xl text-sm font-bold shadow-md">
                ✈
              </div>
              <div>
                <p className="text-xs font-bold text-white tracking-tight">Mumbai (BOM) ➔ Goa (GOI)</p>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Flight Track • Confirmed</p>
              </div>
            </div>

            {/* Floating Element 2: Context Trip Widget Row */}
            <div className="absolute -bottom-6 -right-2 z-20 bg-white p-4 rounded-2xl shadow-2xl text-slate-800 border border-slate-100 flex items-center gap-4 max-w-xs transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gradient-to-tr from-amber-400 to-orange-500 rounded-xl flex items-center justify-center text-3xl shadow-inner shadow-black/10">
                🏖
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
