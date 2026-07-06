"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import BackButton from "../../components/BackButton/BackButton";
import WeatherCard from "../../components/WeatherCard/WeatherCard";
import Map from "../../components/Map/Map";
import { toast } from "react-toastify";

const destinations = {
  goa: {
    title: "Goa",
    budget: "₹15,000",
    description: "Famous for pristine sandy beaches, colonial historic architecture, and vibrant nightlife.",
    bestTime: "November to February",
    tips: "Rent a scooter for budget-friendly local commuting and keep sunscreen handy.",
    attractions: ["Baga Beach", "Calangute Beach", "Dudhsagar Falls"],
    activities: ["Beach Visit", "Water Sports", "Cruise Ride"],
    category: "Beach",
    image: "/images/goa.jpg",
    rating: "4.8",
    reviews: "1,240 Reviews",
    duration: "5 Days"
  },
  coorg: {
    title: "Coorg",
    budget: "₹10,000",
    description: "Famous for its sweeping coffee plantations, misty hills, and lush green valleys.",
    bestTime: "October to March",
    tips: "Pack a light sweater or jacket as the evenings can get quite cool.",
    attractions: ["Abbey Falls", "Raja Seat", "Dubare Elephant Camp"],
    activities: ["Coffee Estate Tour", "Trekking", "Nature Walk"],
    category: "Nature",
    image: "/images/coorg.jpg",
    rating: "4.7",
    reviews: "890 Reviews",
    duration: "4 Days"
  },
  manali: {
    title: "Manali",
    budget: "₹18,000",
    description: "A gorgeous Himalayan destination famed for snowcapped peaks and thrilling adventure sports.",
    bestTime: "December to February",
    tips: "Carry heavy winter layers and verify Rohtang Pass permissions in advance.",
    attractions: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
    activities: ["Paragliding", "River Rafting", "Snow Activities"],
    category: "Adventure",
    image: "/images/manali.jpg",
    rating: "4.9",
    reviews: "2,110 Reviews",
    duration: "6 Days"
  },
  mysore: {
    title: "Mysore",
    budget: "₹8,000",
    description: "Rich in royal heritage, grand historic palaces, and cultural silk weaving traditions.",
    bestTime: "October to March",
    tips: "Plan your visit to the main palace for Sunday evening to witness the breathtaking illumination.",
    attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
    activities: ["Heritage Walk", "Sandalwood Shopping", "Palace Tour"],
    category: "Heritage",
    image: "/images/mysore.jpg",
    rating: "4.6",
    reviews: "950 Reviews",
    duration: "3 Days"
  },
  hampi: {
    title: "Hampi",
    budget: "₹9,000",
    description: "An ancient UNESCO World Heritage site known for thousands of boulder-strewn temple ruins.",
    bestTime: "October to February",
    tips: "Rent a bicycle to explore the vast archaeological monuments at your own pace.",
    attractions: ["Virupaksha Temple", "Stone Chariot", "Lotus Mahal"],
    activities: ["Coracle Boat Ride", "Bouldering", "Sunset Photography"],
    category: "Historical",
    image: "/images/hampi.jpg",
    rating: "4.8",
    reviews: "1,420 Reviews",
    duration: "4 Days"
  },
  gokarna: {
    title: "Gokarna",
    budget: "₹7,500",
    description: "A tranquil coastal town offering laid-back beaches alongside historic temple trails.",
    bestTime: "October to March",
    tips: "Take the scenic cliff-side beach trek from Kudle beach over to Om beach.",
    attractions: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple"],
    activities: ["Beach Trekking", "Stargazing", "Yoga Sessions"],
    category: "Beach & Peace",
    image: "/images/gokarna.jpg",
    rating: "4.7",
    reviews: "780 Reviews",
    duration: "3 Days"
  },
};

// Map destinations IDs directly to exact OpenWeather city locations
const weatherCityMap = {
  goa: "Panaji",
  coorg: "Madikeri",
  manali: "Manali",
  mysore: "Mysore",
  hampi: "Hospet",
  gokarna: "Gokarna",
};

function EmbeddedRecommendationCard({ category }: { category: string }) {
  const dataMap: Record<string, { name: string; slug: string; tag: string; rating: string; budget: string; season: string }[]> = {
    Beach: [
      { name: "Andaman Islands", slug: "goa", tag: "Beach", rating: "4.9", budget: "₹25,000", season: "Oct-May" },
      { name: "Gokarna Coast", slug: "gokarna", tag: "Beach & Luxury", rating: "4.7", budget: "₹7,500", season: "Oct-Mar" },
      { name: "Pondicherry Beach", slug: "goa", tag: "French Heritage", rating: "4.5", budget: "₹11,000", season: "Oct-Mar" },
    ],
    Nature: [
      { name: "Munnar Hills", slug: "coorg", tag: "Nature", rating: "4.8", budget: "₹12,000", season: "Sep-May" },
      { name: "Wayanad Wilds", slug: "coorg", tag: "Forest", rating: "4.6", budget: "₹9,500", season: "Oct-May" },
      { name: "Ooty Meadows", slug: "coorg", tag: "Hills", rating: "4.5", budget: "₹11,000", season: "Oct-Jun" },
    ],
    Adventure: [
      { name: "Leh Ladakh", slug: "manali", tag: "High Altitude", rating: "4.9", budget: "₹35,000", season: "Jun-Sep" },
      { name: "Rishikesh", slug: "manali", tag: "Rafting", rating: "4.7", budget: "₹8,500", season: "Sep-Nov" },
      { name: "Spiti Valley", slug: "manali", tag: "Trek", rating: "4.8", budget: "₹22,000", season: "Jun-Oct" },
    ],
    Heritage: [
      { name: "Jaipur City", slug: "mysore", tag: "Royal Heritage", rating: "4.8", budget: "₹14,000", season: "Oct-Mar" },
      { name: "Agra Fort", slug: "mysore", tag: "Mughal Arch", rating: "4.7", budget: "₹6,000", season: "Nov-Feb" },
      { name: "Udaipur Lakes", slug: "mysore", tag: "Palaces", rating: "4.9", budget: "₹20,000", season: "Sep-Mar" },
    ],
    Historical: [
      { name: "Ajanta Caves", slug: "hampi", tag: "Historical", rating: "4.6", budget: "₹7,000", season: "Nov-Feb" },
      { name: "Khajuraho", slug: "hampi", tag: "Temples", rating: "4.5", budget: "₹10,500", season: "Oct-Mar" },
      { name: "Mahabalipuram", slug: "hampi", tag: "Carvings", rating: "4.7", budget: "₹8,000", season: "Jan-Mar" },
    ],
    "Beach & Peace": [
      { name: "Varkala Cliff", slug: "gokarna", tag: "Beach & Peace", rating: "4.8", budget: "₹9,000", season: "Oct-Mar" },
      { name: "Marari Hidden Eco", slug: "gokarna", tag: "Tranquil", rating: "4.6", budget: "₹13,000", season: "Sep-Mar" },
      { name: "Lakshadweep Atolls", slug: "goa", tag: "Coral Reefs", rating: "4.9", budget: "₹40,000", season: "Oct-May" },
    ],
  };

  const items = dataMap[category] || dataMap["Beach"];

  return (
    <section aria-label="Related Suggestions" className="py-5">
      <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider px-5 mb-4 flex items-center gap-2">
        <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
        Recommended Destinations
      </h3>
      
      <div className="flex flex-col">
        {items.map((dest) => (
          <Link 
            key={dest.name} 
            href={`/destinations/${dest.slug}`}
            className="border-t border-slate-100 first:border-t-0 block focus:outline-none focus:bg-blue-50/40 focus:ring-2 focus:ring-blue-400 focus:ring-inset"
            aria-label={`View details for recommended destination: ${dest.name}, rated ${dest.rating} stars, budget ${dest.budget}`}
          >
            <div className="p-4 px-5 hover:bg-blue-50/50 transition-colors flex items-center justify-between group">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <p className="font-extrabold text-sm text-slate-800 group-hover:text-blue-600 transition-colors tracking-tight">
                    {dest.name}
                  </p>
                  <div className="flex items-center text-amber-500 font-bold text-[11px] gap-0.5">
                    <span className="text-xs">★</span>
                    <span>{dest.rating}</span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-bold text-slate-400">
                  <span className="bg-slate-100 group-hover:bg-blue-100 text-slate-500 group-hover:text-blue-600 px-1.5 py-0.5 rounded transition-colors">
                    {dest.tag}
                  </span>
                  <span>•</span>
                  <span>{dest.budget}</span>
                  <span>•</span>
                  <span>{dest.season}</span>
                </div>
              </div>
              <span className="text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0" aria-hidden="true">
                View Details →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default function DestinationDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const id = unwrappedParams?.id || "";
  const normalizedId = id.toLowerCase();
  
  const destination = destinations[normalizedId as keyof typeof destinations];
  const [isSaved, setIsSaved] = useState(false);

  if (!destination) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-3xl shadow-xl max-w-md border border-slate-200">
          <div className="w-12 h-12 bg-slate-100 text-slate-400 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-slate-800 mb-2">Destination Not Found</h1>
          <p className="text-slate-500 text-sm mb-6 leading-relaxed">
            The requested travel spot is not part of our travel catalog index.
          </p>
          <BackButton />
        </div>
      </div>
    );
  }

  // Map the clean weather API city logic across your collection
  const validApiCity = weatherCityMap[normalizedId as keyof typeof weatherCityMap] || destination.title;

  const handleSave = () => {
    setIsSaved((prev) => {
      const nextState = !prev;
      if (nextState) {
        toast.success("Destination saved successfully!");
      } else {
        toast.info("Destination removed from saved list.");
      }
      return nextState;
    });
  };

  const handleNavigationNotification = (e: React.MouseEvent<HTMLAnchorElement>, href: string, msg: string) => {
    e.preventDefault();
    toast.success(msg);
    setTimeout(() => {
      router.push(href);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-20">
      
      {/* ================= HERO BLOCK ================= */}
      <header className="bg-[#1a62ff] text-white pt-8 pb-36 px-6 sm:px-8 lg:px-12 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="flex items-center justify-between mb-6">
            <div className="bg-white/10 rounded-xl focus-within:ring-4 focus-within:ring-white/40">
              <BackButton />
            </div>
            
            <button 
              onClick={handleSave}
              aria-pressed={isSaved}
              aria-label={isSaved ? "Remove from saved travel destinations" : "Save this destination to your dashboard"}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all shadow-md active:scale-95 focus:outline-none focus:ring-4 ${
                isSaved 
                ? "bg-rose-500 text-white shadow-rose-200 focus:ring-rose-300" 
                : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm focus:ring-white/40"
              }`}
            >
              <svg className={`w-3.5 h-3.5 ${isSaved ? "fill-current" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{isSaved ? "Saved" : "Save Destination"}</span>
            </button>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-white/20 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-sm">
                {destination.category} Category
              </span>
              <div className="flex items-center gap-1 text-amber-300 font-extrabold text-sm" aria-label={`Rating: ${destination.rating} out of 5 stars based on ${destination.reviews}`}>
                <svg className="w-4 h-4 text-amber-300 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>{destination.rating}</span>
                <span className="text-white/60 text-xs font-semibold ml-1">({destination.reviews})</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mt-1">
              {destination.title}
            </h1>
            <p className="text-white/90 mt-4 text-base sm:text-lg max-w-3xl font-medium leading-relaxed">
              {destination.description}
            </p>
          </div>
        </div>
      </header>

      {/* ================= MAIN CONTENT HUB ================= */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            
            <section aria-label="Live Weather Forecast" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              <WeatherCard city={validApiCity} />
            </section>

            {/* INTEGRATED TRAVEL SYSTEM ALERT FOR HEAVY RAIN SPECIFICATION */}
            <section aria-label="Regional Safety Advisory Banner" className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3 text-amber-800 text-xs sm:text-sm font-semibold shadow-sm">
              <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <div>
                <span className="font-bold uppercase tracking-wider text-amber-700 text-[11px] block mb-0.5">Live Weather Advisory</span>
                Heavy rain expected tomorrow. Carry an umbrella and expect short logistical delays across open-air coastal activities.
              </div>
            </section>

            {/* PERFORMANCE OPTIMIZED COMPONENT WITH NEXT/IMAGE */}
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                <Image 
                  src={destination.image} 
                  alt={`Scenic landscape overview of ${destination.title}`}
                  width={800}
                  height={450}
                  priority={normalizedId === "goa"}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 rounded-2xl"
                />
                <div className="absolute top-4 left-4 bg-slate-900/60 backdrop-blur-md text-white font-black text-xs px-3 py-1.5 rounded-xl uppercase tracking-wider" aria-hidden="true">
                  Verified Spot View
                </div>
              </div>
            </div>

            <section aria-label="Key Specifications" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
              <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 tracking-tight">
                <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m3.243-4.243a4.5 4.5 0 011.057 1.057m0 0L14 14m-2.243-4.243a4.5 4.5 0 00-1.057 1.057M14 14h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Quick Facts & Core Insights
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { 
                    title: "Category", desc: destination.category, cls: "text-blue-600 bg-blue-50/50",
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  },
                  { 
                    title: "Budget Scale", desc: destination.budget, cls: "text-emerald-600 bg-emerald-50/50",
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  },
                  { 
                    title: "Best Season", desc: destination.bestTime, cls: "text-amber-600 bg-amber-50/50",
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  },
                  { 
                    title: "Ideal Duration", desc: destination.duration, cls: "text-purple-600 bg-purple-50/50",
                    svg: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  }
                ].map((fact, idx) => (
                  <div key={idx} className={`p-4 rounded-2xl border border-slate-100/70 flex flex-col justify-between ${fact.cls}`}>
                    <svg className="w-5 h-5 mb-3 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      {fact.svg}
                    </svg>
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{fact.title}</span>
                      <p className="text-xs font-black text-slate-700 mt-0.5 tracking-tight">{fact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section aria-label="Points of Interest" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
              <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 tracking-tight">
                <span className="w-1.5 h-6 bg-[#1a62ff] rounded-full inline-block" aria-hidden="true" />
                Top Attractions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {destination.attractions.map((place) => (
                  <div
                    key={place}
                    className="bg-slate-50/60 border border-slate-100 rounded-xl p-4 shadow-sm hover:border-blue-200 hover:bg-white transition-all duration-200 flex items-center gap-2.5 font-bold text-xs text-slate-700"
                  >
                    <svg className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {place}
                  </div>
                ))}
              </div>
            </section>  

            <section aria-label="Activities Guide" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
              <h2 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-2 tracking-tight">
                <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block" aria-hidden="true" />
                Things To Do
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {destination.activities.map((activity) => (
                  <div
                    key={activity}
                    className="bg-slate-50/60 border border-slate-100 rounded-xl p-4 shadow-sm hover:border-emerald-200 hover:bg-white transition-all duration-200 flex items-center gap-2.5 font-bold text-xs text-slate-700"
                  >
                    <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {activity}
                  </div>
                ))}
              </div>
            </section>

            <section aria-label="Geographic Map Location" className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-4">
              <Map city={validApiCity} />
            </section>

          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-6">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 space-y-4">
              <div className="bg-slate-50/80 border border-slate-100 p-5 rounded-2xl">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase block">
                  Estimated Pricing Index
                </span>
                <p className="text-3xl font-black text-[#1a62ff] mt-1 tracking-tight">
                  {destination.budget}
                </p>
              </div>

              <div className="space-y-3 pt-2">
                {/* Fixed Dynamic Booking Link */}
                <Link
                  href={`/booking?destination=${normalizedId}`}
                  aria-label={`Book your vouchers now for ${destination.title}`}
                  onClick={(e) => handleNavigationNotification(e, `/booking?destination=${normalizedId}`, `Opening booking for ${destination.title}...`)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-blue-500/20 active:scale-[0.98] transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  ⚡ Book Now Vouchers
                </Link>

                {/* Fixed Dynamic Itinerary Link */}
                <Link
                  href={`/itinerary?destination=${normalizedId}`}
                  aria-label={`Plan your custom itinerary trip for ${destination.title}`}
                  onClick={(e) => handleNavigationNotification(e, `/itinerary?destination=${normalizedId}`, `Opening itinerary for ${destination.title}...`)}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-slate-900/10 active:scale-[0.98] transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-slate-400"
                >
                  🗺️ Plan Trip Itinerary
                </Link>
              </div>
            </div>

            <section aria-label="Safety Advice" className="bg-amber-50/60 border border-amber-100 p-5 rounded-3xl shadow-md">
              <h3 className="text-xs font-bold text-amber-900 mb-2 flex items-center gap-2 uppercase tracking-wider">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4 text-amber-600" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Expert Travel Advisory
              </h3>
              <p className="text-amber-800 text-xs leading-relaxed font-semibold">
                {destination.tips}
              </p>
            </section>

            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
              <EmbeddedRecommendationCard category={destination.category} />
            </div>

          </aside>

        </div>
      </main>
    </div>
  );
}