"use client";

import React from "react";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  description: string;
  category: string;
};

export default function DestinationCard({
  id,
  title,
  description,
  category,
}: Props) {
  
  // Mapping categories to strict Tailwind style tokens for professional visual variance
  const badgeStyles: Record<string, string> = {
    Beach: "bg-blue-50 text-blue-600 border-blue-100/50",
    Adventure: "bg-emerald-50 text-emerald-600 border-emerald-100/50",
    Historical: "bg-amber-50 text-amber-600 border-amber-100/50",
    Nature: "bg-green-50 text-green-600 border-green-100/50",
    Culture: "bg-purple-50 text-purple-600 border-purple-100/50",
  };

  // Fallback styling parameters if the precise category string mapping is absent
  const selectedBadgeStyle = badgeStyles[category] || "bg-slate-50 text-slate-600 border-slate-100";

  return (
    <Link 
      href={`/destinations/${id}`} 
      aria-label={`View detailed travel guide and itineraries for ${title}`}
      title={`Explore ${title}`}
      className="group block h-full focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-2xl transition-all"
    >
      <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full flex flex-col justify-between shadow-sm group-hover:shadow-lg group-hover:border-blue-200 group-hover:bg-blue-50/10 transition-all duration-200 transform group-hover:-translate-y-1 will-change-transform">
        <div>
          {/* Categorized Visual Badge Tag */}
          <span className={`inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider border rounded-md mb-4 transition-colors ${selectedBadgeStyle}`}>
            {category}
          </span>
          
          {/* Card Title with dynamic hover color transition */}
          <h3 className="text-2xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          
          {/* Card Body Description text */}
          <p className="text-slate-500 text-sm leading-relaxed font-normal">
            {description}
          </p>
        </div>

        {/* Interactive Call-To-Action (CTA) Footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-sm">
          <span>Explore Destination</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}