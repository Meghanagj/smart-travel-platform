"use client";

import Link from "next/link";
import BackButton from "../components/BackButton/BackButton";    
import { useState } from "react";

// Expanded 6-destination dataset matching your dynamic page details
const allDestinations = [
  {
    id: "goa",
    title: "Goa",
    description: "Famous for pristine sandy beaches, colonial historic architecture, and vibrant nightlife.",
    category: "Beach",
  },
  {
    id: "coorg",
    title: "Coorg",
    description: "Famous for its sweeping coffee plantations, misty hills, and lush green valleys.",
    category: "Nature",
  },
  {
    id: "manali",
    title: "Manali",
    description: "A gorgeous Himalayan destination famed for snowcapped peaks and thrilling adventure sports.",
    category: "Adventure",
  },
  {
    id: "mysore",
    title: "Mysore",
    description: "Rich in royal heritage, grand historic palaces, and cultural silk weaving traditions.",
    category: "Heritage",
  },
  {
    id: "hampi",
    title: "Hampi",
    description: "An ancient UNESCO World Heritage site known for thousands of boulder-strewn temple ruins.",
    category: "Historical",
  },
  {
    id: "gokarna",
    title: "Gokarna",
    description: "A tranquil coastal town offering laid-back beaches alongside historic temple trails.",
    category: "Beach & Peace",
  },
];

export default function DestinationsPage() {
  const [search, setSearch] = useState("");

  const filtered = allDestinations.filter((place) =>
    place.title.toLowerCase().includes(search.toLowerCase()) ||
    place.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16">
      
      {/* Top Professional Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-8 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <BackButton />
          
          <div className="mt-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3">
              Explore Destinations
            </h1>
            <p className="text-blue-100 font-light text-base md:text-lg leading-relaxed">
              Discover stunning locations across India, review estimated budgets, plan your custom activities, and start traveling smarter.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-6 -mt-12">
        
        {/* Modern Search Wrapper with Embedded Search Icon */}
        <div className="relative max-w-2xl bg-white rounded-2xl shadow-md p-2 border border-slate-100 mb-12">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-slate-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by city name or travel category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 pl-11 pr-4 py-3.5 rounded-xl text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm md:text-base"
          />
        </div>

        {/* Empty Search Fallback State */}
        {filtered.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center max-w-md mx-auto shadow-sm">
            <p className="text-4xl mb-3">🔍</p>
            <h3 className="text-lg font-bold text-slate-800">No match found</h3>
            <p className="text-slate-500 text-sm mt-1">Try searching for alternative keywords like 'Beach', 'Nature', or 'Manali'.</p>
          </div>
        ) : (
          /* Cards Grid Display */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((place) => (
              <Link
                key={place.id}
                href={`/destinations/${place.id}`}
                className="group focus:outline-none"
              >
                <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full flex flex-col justify-between shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all duration-200 transform group-hover:-translate-y-0.5">
                  <div>
                    {/* Category Tags Badge */}
                    <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-md mb-4">
                      {place.category}
                    </span>

                    <h2 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
                      {place.title}
                    </h2>

                    <p className="text-slate-500 text-sm leading-relaxed font-normal">
                      {place.description}
                    </p>
                  </div>

                  {/* Clean CTA Link Highlight */}
                  <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-blue-600 font-bold text-sm">
                    <span>Explore Guide</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transform group-hover:translate-x-1 transition-transform">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}