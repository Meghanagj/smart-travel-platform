"use client";

import Link from "next/link";

export default function FeaturedRecommendations() {
  const recommendations = [
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

  return (
    <section className="py-20 px-6 md:px-10 bg-white">
      {/* Containerized grid wrapper to prevent widescreen stretching */}
      <div className="max-w-6xl mx-auto">
        
        {/* Header Block Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Featured Recommendations
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-3 mb-2" />
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Expert-approved spots specifically curated based on your personalized travel preferences.
          </p>
        </div>

        {/* Responsive Recommendation Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((place) => (
            <Link
              href={`/destinations/${place.id}`}
              key={place.id}
              className="group block relative bg-slate-50/50 border border-slate-100 rounded-2xl p-6 transition-all duration-200 hover:bg-white hover:border-slate-200 hover:shadow-md focus:outline-none"
            >
              {/* Dynamic Side Accent Bar */}
              <div className={`absolute top-0 bottom-0 left-0 w-1.5 ${place.accentLine} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />

              <div className="flex flex-col h-full justify-between items-start">
                <div>
                  {/* Title with Heavy Font Scale */}
                  <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-blue-600 transition-colors">
                    {place.title}
                  </h3>
                  
                  {/* Context-Specific Reason Badge */}
                  <span className={`inline-block border px-3 py-1 rounded-lg text-xs font-bold tracking-wide ${place.badgeColor}`}>
                    {place.reason}
                  </span>
                </div>

                {/* Micro-Interaction Footer */}
                <div className="mt-6 flex items-center gap-1.5 text-xs font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                  <span>View Details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform">
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