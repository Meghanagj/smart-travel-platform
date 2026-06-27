"use client";

import Link from "next/link";

export default function Footer() {
  const footerLinks = [
    {
      title: "Discover",
      items: [
        { name: "Trending Spots", href: "/destinations" },
        { name: "Travel Categories", href: "#" },
        { name: "Featured Recommendations", href: "#" },
        { name: "Budget Estimators", href: "#" },
      ],
    },
    {
      title: "Services",
      items: [
        { name: "Itinerary Builder", href: "/itinerary" },
        { name: "Weather Tracker", href: "#" },
        { name: "Expense Tracker", href: "#" },
        { name: "Route Mapping", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Careers Info", href: "#" },
        { name: "Community Blog", href: "#" },
        { name: "Press Kit", href: "#" },
      ],
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription logged!");
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      {/* Containerized grid wrapper to prevent widescreen stretching */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-8">
        
        {/* Upper Footer: Branding + Multi-Column Grid + Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Introduction Block */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group focus:outline-none">
              <span className="bg-blue-600 text-white p-2 rounded-xl text-md font-bold shadow-md shadow-blue-900/50">
                ✈
              </span>
              <span className="text-xl font-black text-white tracking-tight">
                Smart<span className="text-blue-500">Travel</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-sm">
              Build seamless travel schedules, track global expense metrics, monitor weather forecasts, and craft personalized itineraries all in one workspace.
            </p>
          </div>

          {/* Dynamic Map Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {group.title}
              </h3>
              <ul className="space-y-2.5 text-sm font-medium">
                {group.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="hover:text-blue-400 transition-colors duration-150"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Lower Footer: Sub-Meta Attributions and Privacy */}
        <div className="mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-slate-500">
          <div>
            <p>© {new Date().getFullYear()} SmartTravel Inc. All rights reserved.</p>
          </div>
          
          <div className="flex gap-6 uppercase tracking-wider">
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-slate-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}