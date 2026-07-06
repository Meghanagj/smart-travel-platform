"use client";

import React from "react";
import Link from "next/link";

// Strongly typed interface structure declared locally
export interface Recommendation {
  id: string;
  title: string;
  reason: string;
  badgeColor: string;
  accentLine: string;
}

// Data array contained locally to eliminate module resolution or path alias errors
const recommendationsList: Recommendation[] = [
  {
    id: "goa",
    title: "Goa",
    reason: "Best for Beaches & Nightlife",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
    accentLine: "bg-amber-500",
  },
  {
    id: "manali",
    title: "Manali",
    reason: "Adventure Destination & Snow Peaks",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    accentLine: "bg-blue-500",
  },
  {
    id: "coorg",
    title: "Coorg",
    reason: "Nature Escape & Coffee Hills",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    accentLine: "bg-emerald-500",
  },
];

export default function FeaturedRecommendations() {
  // Graceful empty-state guard handling
  if (!recommendationsList || recommendationsList.length === 0) {
    return (
      <section 
        aria-labelledby="featured-recommendations-heading"
        className="py-20 px-4 sm:px-6 md:px-10 bg-white border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            No featured recommendations matches found right now.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      aria-labelledby="featured-recommendations-heading"
      className="py-20 px-4 sm:px-6 md:px-10 bg-white border-b border-slate-100"
    >
      {/* Unified containerized wrapper perfectly matched with Hero and Navbar */}
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header Row Layout Split */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 
              id="featured-recommendations-heading"
              className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
            >
              Featured Recommendations
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded mt-3 mb-2" />
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Expert-approved spots specifically curated based on your personalized travel preferences.
            </p>
          </div>

          <Link
            href="/destinations"
            aria-label="View all travel destinations catalog selections"
            className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-lg px-2 py-1 self-start sm:self-auto"
          >
            View All <span className="inline-block transition-transform hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Responsive Recommendation Grid Layout Canvas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendationsList.map((place: Recommendation) => (
            <Link
              href={`/destinations/${place.id}`}
              key={place.id}
              aria-label={`View recommendation details for ${place.title}`}
              className="group block relative bg-slate-50/50 border border-slate-100/80 rounded-2xl p-6 transition-all duration-300 hover:bg-white hover:border-slate-200/60 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-200 will-change-transform"
            >
              {/* Dynamic Origin-Top Scaling Accent Bar */}
              <div 
                className={`absolute top-0 bottom-0 left-0 w-1.5 ${place.accentLine} rounded-l-2xl opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100 origin-top transition-all duration-300 ease-out`} 
                aria-hidden="true"
              />

              <div className="flex flex-col h-full justify-between items-start">
                <div>
                  {/* Title with Heavy Font Scale */}
                  <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {place.title}
                  </h3>
                  
                  {/* Context-Specific Reason Badge */}
                  <span className={`inline-block border px-3 py-1 rounded-lg text-xs font-bold tracking-wide transition-colors ${place.badgeColor}`}>
                    {place.reason}
                  </span>
                </div>

                {/* Micro-Interaction Footer */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                  <span>View Details</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2.5} 
                    stroke="currentColor" 
                    className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}