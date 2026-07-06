"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import BackButton from "../components/BackButton/BackButton";
import WeatherCard from "../components/WeatherCard/WeatherCard";
import { toast } from "react-toastify";

export default function Dashboard() {
  const router = useRouter();

  // Helper handler for smooth notifications prior to route changes
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string, standardMessage: string) => {
    e.preventDefault();
    toast.info(standardMessage);
    setTimeout(() => {
      router.push(href);
    }, 450); // Small duration delay allowing notification toast visual retention
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/70 to-blue-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Decorative Blur Backing */}
        <div className="absolute top-[-5%] right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-5%] left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Navigation Row */}
        <div className="mb-4 relative z-10">
          <div className="inline-block bg-white p-1 rounded-xl shadow-sm border border-slate-100/80 focus-within:ring-4 focus-within:ring-blue-300">
            <BackButton />
          </div>
        </div>

        {/* Welcome Header Hero Row */}
        <header className="mb-10 pb-6 border-b border-slate-200/60 relative z-10">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">User Console</span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight mt-0.5">
            Travel Dashboard
          </h1>
          <p className="text-sm font-medium text-slate-500 mt-1">
            Welcome back! Here's a live administrative overview of your ongoing travel plans.
          </p>
        </header>

        {/* ================= DYNAMIC CRITICAL WEATHER ALERT BANNER ================= */}
        <section aria-label="Travel Notification Alert" className="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-amber-800 text-xs sm:text-sm font-semibold shadow-sm relative z-10 animate-fade-in">
          <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <span className="font-bold uppercase tracking-wider text-amber-700 text-[11px] block mb-0.5">Travel Weather Alert</span>
            Heavy rain tomorrow. Carry an umbrella and keep your travel documentation waterproof.
          </div>
        </section>

        {/* ================= SECTION 1: MASTER HERO SPLIT (TRIP & WEATHER) ================= */}
        <section aria-label="Primary Travel Summary" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch relative z-10 mb-8">
          
          {/* Enhanced Upcoming Trip Card */}
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-black text-slate-800 text-lg tracking-tight flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Upcoming Trip
                </h2>
                <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Active
                </span>
              </div>
              
              <div className="border-t border-slate-100 pt-4 space-y-4">
                <Link 
                  href="/destinations/goa" 
                  aria-label="View details for upcoming trip to Goa"
                  onClick={(e) => handleNavigation(e, "/destinations/goa", "Opening details for Goa...")}
                  className="text-xl font-extrabold text-slate-700 hover:text-blue-600 transition-colors inline-flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg px-1"
                >
                  <svg className="w-4 h-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Goa, India
                </Link>
                
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 pt-1">
                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-2">
                    <span className="text-slate-400">📅</span> 10 July 2026
                  </p>
                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-2">
                    <span className="text-slate-400">🕒</span> 5 Days Trip
                  </p>
                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-2">
                    <span className="text-slate-400">👥</span> 2 Travelers
                  </p>
                  <p className="text-xs font-semibold text-slate-500 flex items-center gap-2 truncate">
                    <span className="text-slate-400">🏨</span> Taj Heritage Resort
                  </p>
                </div>
              </div>
            </div>

            {/* Micro Progress Metrics Framework Tracker */}
            <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                <span className="uppercase tracking-wide">Trip Completion</span>
                <span className="text-blue-600">70%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden" role="progressbar" aria-valuenow={70} aria-valuemin={0} aria-valuemax={100}>
                <div className="h-full bg-blue-600 rounded-full w-[70%] transition-all" />
              </div>
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">Target Allocation</span>
                <p className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 inline-block px-3 py-1 rounded-xl">
                  Budget: ₹15,000
                </p>
              </div>
            </div>
          </div>

          {/* Dynamic Weather Card Integration */}
          <div className="flex flex-col items-stretch justify-start">
            <WeatherCard city="Goa" />
          </div>

        </section>

        {/* ================= SECTION 2: WORKSPACE CONTROL SYSTEM GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-8 items-start">
          
          {/* COLUMN 1: SAVED DESTINATIONS CATALOG */}
          <div className="md:col-span-2 space-y-8">
            <section aria-label="Bookmarked Destinations Catalog" className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-black text-slate-800 text-base tracking-tight flex items-center gap-2">
                  <svg className="w-4 h-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Saved Destinations
                </h2>
                <Link 
                  href="/destinations" 
                  onClick={(e) => handleNavigation(e, "/destinations", "Loading Full Destinations Catalog...")}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded px-1 transition-colors"
                >
                  View All Catalog →
                </Link>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-100 pt-4">
                {["Goa", "Coorg", "Manali", "Mysore", "Hampi", "Gokarna"].map((place) => (
                  <Link 
                    key={place} 
                    href={`/destinations/${place.toLowerCase()}`}
                    aria-label={`Explore profile for ${place}`}
                    onClick={(e) => handleNavigation(e, `/destinations/${place.toLowerCase()}`, `Navigating to ${place} profile...`)}
                    className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100/80 text-xs font-bold text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-600 transition-all shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <svg className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <span className="truncate">{place}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* NEW MODULE ADDITION: RECENT ACTIVITY STREAM FEED */}
            <section aria-label="Recent Operational Activity Logs" className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6">
              <h2 className="font-black text-slate-800 text-base tracking-tight flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recent Activity
              </h2>
              <div className="border-t border-slate-100 pt-3 space-y-2.5 text-xs font-semibold text-slate-600">
                {[
                  { text: "Budget Updated", highlight: "₹59,500 grand total allocation tracked" },
                  { text: "Booking Confirmed", highlight: "Taj Heritage Sea view suite pipeline verified" },
                  { text: "Viewed Goa Profile", highlight: "Investigated dynamic high rain conditions index" },
                  { text: "Planned Manali Trip", highlight: "Initialized fallback routing schedules matrices" }
                ].map((act, i) => (
                  <div key={i} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <span className="text-emerald-500 bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center text-[10px] border border-emerald-100">✓</span>
                    <p className="flex-1">
                      <span className="text-slate-800 font-extrabold">{act.text}:</span>{" "}
                      <span className="text-slate-500 font-medium">{act.highlight}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* COLUMN 2: NOTIFICATIONS CENTER & TASKS OVERLAYS */}
          <div className="space-y-6">
            
            {/* NEW DELIVERABLE MODULE: INTERACTIVE NOTIFICATION CARD CENTER */}
            <section aria-label="System Live Logs Notification Center" className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-5">
              <h2 className="font-black text-slate-800 text-base tracking-tight flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-amber-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                Notifications
              </h2>
              <div className="border-t border-slate-100 pt-3.5 space-y-2">
                {[
                  { badge: "Success", bg: "bg-emerald-50 text-emerald-700 border-emerald-100", txt: "Booking Confirmed" },
                  { badge: "Alert", bg: "bg-amber-50 text-amber-700 border-amber-100", txt: "Rain expected in Goa" },
                  { badge: "Update", bg: "bg-blue-50 text-blue-700 border-blue-100", txt: "Budget updated successfully" },
                  { badge: "Schedule", bg: "bg-purple-50 text-purple-700 border-purple-100", txt: "Trip starts in 5 days" }
                ].map((notif, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl bg-slate-50/50 border border-slate-100">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border uppercase tracking-wider ${notif.bg}`}>
                      {notif.badge}
                    </span>
                    <span className="text-xs font-bold text-slate-700 truncate">{notif.txt}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* NEW MODULE DELIVERABLE: REQUISITE UPCOMING TASKS LEDGER */}
            <section aria-label="Required Upcoming Agenda Tasks" className="bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-5">
              <h3 className="font-black text-slate-800 text-sm tracking-tight uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Today's Tasks
              </h3>
              <div className="border-t border-slate-100 pt-3 space-y-2 font-semibold text-xs text-slate-600">
                {["Pack travel luggage gear", "Confirm Taj beach hotel suite", "Download flight gate ticket", "Check dynamic real weather"].map((task, i) => (
                  <div key={i} className="flex items-center gap-2.5 p-2 rounded-xl border border-dashed border-slate-200 bg-slate-50/20">
                    <input 
                      type="checkbox" 
                      readOnly 
                      checked={i === 0} 
                      className="w-3.5 h-3.5 accent-blue-600 rounded text-blue-600 border-slate-300" 
                      aria-label={task} 
                    />
                    <span className={i === 0 ? "line-through text-slate-400" : "text-slate-700"}>{task}</span>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* ================= SECTION 3: CORE DATA ANALYTICS TRACKERS ================= */}
        <section aria-label="Travel Platform Metrics" className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10 mb-8">
          {[
            { 
              label: "Trips Planned", val: "6", color: "text-blue-600", bg: "bg-blue-500/5", border: "border-blue-100/50",
              svg: <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            },
            { 
              label: "Total Budget", val: "₹59,500", color: "text-emerald-600", bg: "bg-emerald-500/5", border: "border-emerald-100/50",
              svg: <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            },
            { 
              label: "Saved Places", val: "6", color: "text-purple-600", bg: "bg-purple-500/5", border: "border-purple-100/50",
              svg: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl shadow-slate-200/30 border border-slate-100/80 p-5 flex items-center justify-between hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{stat.label}</p>
                <p className={`text-2xl sm:text-3xl font-black mt-1 tracking-tight ${stat.color}`}>
                  {stat.val}
                </p>
              </div>
              <div className={`w-11 h-11 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center font-bold text-lg ${stat.color} group-hover:scale-110 transition-transform`} aria-hidden="true">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  {stat.svg}
                </svg>
              </div>
            </div>
          ))}
        </section>

        {/* ================= SECTION 4: ACTIONS SWITCHYARD PANEL ================= */}
        <section aria-label="Quick Actions Console" className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden z-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="mb-6">
            <h2 className="font-black text-xl tracking-tight flex items-center gap-2">
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Quick Control Console
            </h2>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Instantly transition across module parameters</p>
          </div>

          <div className="flex flex-wrap gap-4 border-t border-white/5 pt-6">
            <Link
              href="/destinations"
              aria-label="Explore Destinations Catalogue"
              onClick={(e) => handleNavigation(e, "/destinations", "Opening Explorer Destination Maps...")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3.5 rounded-xl shadow-lg shadow-blue-900/20 active:scale-[0.99] transition-all text-xs uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-blue-500"
            >
              Explore Destinations
            </Link>

            <Link
              href="/itinerary"
              aria-label="Plan Travel Itinerary Form"
              onClick={(e) => handleNavigation(e, "/itinerary", "Opening interactive Trip Planner form...")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-900/20 active:scale-[0.99] transition-all text-xs uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-emerald-500"
            >
              Plan Trip
            </Link>

            <Link
              href="/budget"
              aria-label="Access Financial Budget Planner"
              onClick={(e) => handleNavigation(e, "/budget", "Opening Budget Planner calculations ledger...")}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-3.5 rounded-xl shadow-lg shadow-purple-900/20 active:scale-[0.99] transition-all text-xs uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-purple-500"
            >
              Budget Planner
            </Link>

            <Link
              href="/booking"
              aria-label="Manage Sync Bookings Vouchers"
              onClick={(e) => handleNavigation(e, "/booking", "Opening Vouchers Verification Center...")}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-3.5 rounded-xl shadow-lg shadow-orange-900/20 active:scale-[0.99] transition-all text-xs uppercase tracking-wider focus:outline-none focus:ring-4 focus:ring-orange-500"
            >
              Manage Bookings
            </Link>
          </div>
        </section>

      </div>
    </main>
  );
}