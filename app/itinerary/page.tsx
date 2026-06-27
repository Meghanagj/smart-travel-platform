"use client";

import { useState } from "react";
import BackButton from "../components/BackButton/BackButton";

export default function ItineraryPage() {
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [budget, setBudget] = useState("");
  const [activity, setActivity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1️⃣ FIXED: Moved declaration to the top so variables below can safely evaluate it
  const today = new Date().toISOString().split("T")[0];

  // 2️⃣ FIXED: Correct date instance parsing for real-time validity flags
  const areDatesValid =
  !!startDate &&
  !!endDate &&
  new Date(endDate) >= new Date(startDate) &&
  new Date(startDate) >= new Date(today);

  // ✅ Rules Constraint: Duration displays "—" for invalid offsets
  const calculateDays = () => {
    if (!areDatesValid) return null;

    const start = new Date(startDate);
    const end = new Date(endDate);

    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

    return isNaN(diffDays) ? null : diffDays;
  };

  // ✅ Rules Constraint: Instant validation alert if an invalid end date is chosen
  const handleEndDateChange = (value: string) => {
    if (startDate && value && new Date(value) < new Date(startDate)) {
      alert("❌ End date cannot be earlier than your selected start date!");
      setEndDate(""); 
      return;
    }
    setEndDate(value);
  };

  // ✅ Rules Constraint: Submit triggers comprehensive alert verification handling
  const handleSubmit = () => {
    if (!destination || !startDate || !endDate) {
      alert("⚠️ Please fill in all required fields (Destination, Start Date, and End Date).");
      return;
    }

    if (new Date(startDate) < new Date(today)) {
      alert("❌ Past dates are not allowed! Please pick today or a future date.");
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      alert("❌ End date cannot be earlier than your start date.");
      return;
    }

    setIsSubmitting(true);

    // Simulate database write sync sequence
    setTimeout(() => {
      setIsSubmitting(false);
      alert("🎉 Itinerary Generated and Synchronized Successfully!");
    }, 1000);
  };

  const totalDays = calculateDays();

  return (
    <div className="w-full min-h-screen bg-slate-50/50 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      
      {/* Main Split Framework */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        
        {/* ================= LEFT SIDE: FORM BUILDER ================= */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 p-6 sm:p-10 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl pointer-events-none" />

          {/* Header Layout Component */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100 relative z-10">
            <div className="flex items-center gap-4">
              <BackButton />
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Smart Travel Engine</span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mt-0.5">
                  Plan Your Journey
                </h1>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6 relative z-10">
            
            {/* Input 1: Destination */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                <span>📍</span> Target Destination <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Anjuna Beach, Goa"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-400"
              />
            </div>

            {/* Input 2: Dates Row Grid split */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  <span>📅</span> Start Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  min={today} /* ✅ Constraint: Past dates cannot be natively selected */
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    if (endDate && new Date(endDate) < new Date(e.target.value)) {
                      setEndDate(""); // Flush mismatching dates out
                    }
                  }}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm text-slate-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  <span>📅</span> End Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  min={startDate || today}
                  value={endDate}
                  onChange={(e) => handleEndDateChange(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm text-slate-700"
                />
              </div>
            </div>

            {/* Input 3: Budget */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                <span>💰</span> Trip Budget <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                <input
                  type="number"
                  placeholder="15000"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full pl-8 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Input 4: Plan Schedules Description Text area */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                <span>📋</span> Activities & Day Schedules
              </label>
              <textarea
                placeholder="Day 1: Arrive and explore local attractions..."
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-400 resize-none leading-relaxed"
                rows={5}
              />
            </div>

            {/* Generation Action button */}
            <div className="pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 hover:shadow-xl transition-all duration-150 active:scale-[0.99] flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer ${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? "Building Itinerary..." : "✈️ Generate Smart Itinerary"}
              </button>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: LIVE SUMMARY PREVIEW ================= */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden lg:sticky lg:top-8">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-xl pointer-events-none" />
          
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
            <span>📊</span> Live Preview Summary
          </h3>
          
          <div className="space-y-6">
            <div className="border-b border-slate-800 pb-4">
              <p className="text-xs text-slate-400 font-semibold uppercase">Destination</p>
              <p className="text-lg font-black mt-1 text-slate-100 truncate">
                {destination || "Not Specified Yet"}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-b border-slate-800 pb-4">
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Duration</p>
                <p className="text-base font-bold mt-1 text-cyan-300">
                  {totalDays ? `${totalDays} Days` : "—"}
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-semibold uppercase">Allocated Budget</p>
                <p className="text-base font-bold mt-1 text-emerald-400 truncate">
                  {budget ? `₹${Number(budget).toLocaleString("en-IN")}` : "—"}
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs text-slate-400 font-semibold uppercase mb-2">Saved Track Notes</p>
              <div className="bg-white/5 border border-white/5 rounded-xl p-3 h-24 overflow-y-auto text-xs text-slate-300 font-medium leading-relaxed scrollbar-thin">
                {activity || "No daily schedules added yet..."}
              </div>
            </div>

            {/* Validation Indicator Tag */}
            <div className="bg-slate-800/60 rounded-xl p-3 flex items-center gap-2 text-xs font-semibold text-slate-300 border border-slate-800">
              {/* ✅ Constraint: Dynamic green indicator only hits when destination AND dates are solid */}
              <span className={destination && areDatesValid ? "text-emerald-400" : "text-amber-400"}>
                ●
              </span>
              <span>
                {destination && areDatesValid 
                  ? "Ready to build route coordinates" 
                  : "Awaiting required form parameters"}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}