"use client";

import { useState } from "react";

export default function TravelCategories() {
  // Emojis removed; kept clean names and slugs for dynamic interactions
  const categories = [
    { name: "Adventure", slug: "adventure" },
    { name: "Beach", slug: "beach" },
    { name: "Nature", slug: "nature" },
    { name: "Cultural", slug: "cultural" },
    { name: "Wildlife", slug: "wildlife" },
    { name: "Luxury", slug: "luxury" },
  ];

  const handleCategoryClick = (slug: string) => {
    console.log(`Filtering dashboard by category link: ${slug}`);
    // Hook this up to router.push(`/destinations?category=${slug}`) when ready!
  };

  return (
    <section className="py-16 px-6 md:px-10 bg-white">
      {/* Containerized grid wrapper to prevent widescreen stretching */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block Section */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
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
              onClick={() => handleCategoryClick(cat.slug)}
              className="group flex items-center justify-center py-4 px-5 bg-slate-50 border border-slate-100/80 rounded-xl transition-all duration-200 hover:bg-white hover:border-blue-500 hover:shadow-sm active:scale-95 focus:outline-none"
            >
              {/* Dynamic Font Title — Cleaned up with emphasis centered on typography */}
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