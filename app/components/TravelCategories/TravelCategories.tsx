"use client";

import React from "react";
import { useRouter } from "next/navigation";

// Explicit TypeScript shape mapping for strong compile-time typing safety
interface Category {
  name: string;
  slug: string;
}

export default function TravelCategories() {
  const router = useRouter();

  const categories: Category[] = [
    { name: "Adventure", slug: "adventure" },
    { name: "Beach", slug: "beach" },
    { name: "Nature", slug: "nature" },
    { name: "Cultural", slug: "cultural" },
    { name: "Wildlife", slug: "wildlife" },
    { name: "Luxury", slug: "luxury" },
  ];

  const handleCategoryClick = (slug: string) => {
    // Natively driving query parameter states via the active client navigation pipeline
    router.push(`/destinations?category=${slug}`);
  };

  return (
    <section 
      aria-labelledby="travel-categories-heading"
      className="py-16 px-4 sm:px-6 md:px-10 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100"
    >
      {/* Unified containerized grid wrapper perfectly matched with Hero, Navbar, and Destination panels */}
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Modern Section Header Layout */}
        <div className="mb-10">
          <h2 
            id="travel-categories-heading"
            className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight"
          >
            Explore by Category
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-3 mb-2" />
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Find trips customized perfectly to your exact choice of travel lifestyle.
          </p>
        </div>

        {/* Minimalist Responsive Pill Layout Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              type="button"
              aria-label={`Browse ${cat.name} travel destinations`}
              onClick={() => handleCategoryClick(cat.slug)}
              className="group flex items-center justify-center py-4 px-5 bg-white border border-slate-200/60 rounded-xl transition-all duration-300 hover:border-blue-500 hover:shadow-md hover:-translate-y-1 active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-200 will-change-transform"
            >
              {/* Dynamic Font Title — Cleaned up with focus centered on minimalist premium typography */}
              <span className="text-sm sm:text-base font-bold text-slate-700 group-hover:text-blue-600 transition-colors tracking-tight text-center">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}