"use client";

import React from "react";
import Link from "next/link";
import DestinationCard from "../DestinationCard/DestinationCard";
import { popularDestinationsList, Destination } from "@/data/destinations";

export default function PopularDestinations() {
  // Empty-state layout fallback safety guard
  if (!popularDestinationsList || popularDestinationsList.length === 0) {
    return (
      <section 
        aria-labelledby="popular-destinations-heading"
        className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto text-center py-12">
          <p className="text-slate-500 font-medium text-sm sm:text-base">
            No trending destinations available at this time. Please check back later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section 
      aria-labelledby="popular-destinations-heading"
      className="py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100"
    >
      {/* Containerized wrapper aligned with Navbar and Hero dimensions */}
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Header Row Layout Split */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 
              id="popular-destinations-heading"
              className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
            >
              Popular Destinations
            </h2>
            <div className="w-12 h-1 bg-blue-600 rounded mt-3 mb-2" />
            <p className="text-slate-500 text-sm md:text-base font-medium">
              Handpicked trending spots perfect for your next vacation getaway.
            </p>
          </div>

          <Link
            href="/destinations"
            aria-label="View all accessible travel destination catalogs"
            className="inline-flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-100 rounded-lg px-2 py-1 self-start sm:self-auto"
          >
            View All <span className="inline-block transition-transform hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Responsive Matrix Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300">
          {popularDestinationsList.map((place: Destination) => (
            <DestinationCard
              key={place.id}
              id={place.id}
              title={place.title}
              description={place.description}
              category={place.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}