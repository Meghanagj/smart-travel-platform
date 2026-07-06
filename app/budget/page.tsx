"use client";

import { useState } from "react";
import BackButton from "../components/BackButton/BackButton";
import { toast } from "react-toastify"; 

type HotelTier = "budget" | "standard" | "luxury";
type TransportMode = "bus" | "train" | "flight" | "personal";

export default function BudgetPlanner() {
  // Core Parameters
  const [destination, setDestination] = useState<string>("goa");
  const [budget, setBudget] = useState<number | "">("");
  const [travelers, setTravelers] = useState<number>(1);
  const [days, setDays] = useState<number>(3);
  
  // Logistics selections
  const [hotelTier, setHotelTier] = useState<HotelTier>("standard");
  const [transportMode, setTransportMode] = useState<TransportMode>("train");

  // Discretionary Expenses 
  const [food, setFood] = useState<number | "">("");
  const [activities, setActivities] = useState<number | "">("");

  // Base pricing configurations
  const hotelCosts: Record<HotelTier, number> = { budget: 1000, standard: 2500, luxury: 7000 };
  const transportCosts: Record<TransportMode, number> = { bus: 800, train: 1500, flight: 6000, personal: 2000 };

  // Calculate live configurations
  const calculatedHotelCost = hotelCosts[hotelTier] * days * travelers;
  const calculatedTransportCost = transportCosts[transportMode] * travelers;
  const normalizedFood = Number(food) || 0;
  const normalizedActivities = Number(activities) || 0;

  // Safely evaluate dynamic costs
  const numBudget = Number(budget) || 0;
  const totalExpense = calculatedHotelCost + calculatedTransportCost + normalizedFood + normalizedActivities;
  const remaining = numBudget - totalExpense;
  const isOverBudget = remaining < 0;

  // Percentage Calculations
  const percentUsed = numBudget > 0 ? Math.min(Math.round((totalExpense / numBudget) * 100), 100) : 0;
  const percentRemaining = numBudget > 0 ? Math.max(100 - percentUsed, 0) : 100;

  // Trigger Notification with corrected validation logic
  const handleCalculate = () => {
    // 1. Guard check for base allocation budget pool
    if (numBudget <= 0) {
      toast.error("Please allocate an initial Total Trip Budget first!");
      return;
    }

    // 2. Optional validation: Warn if no optional overhead expenses are provided
    if (food === "" && activities === "") {
      toast.info("Calculating baseline logistics without custom food/activity values.");
    }

    // 3. Status compilation evaluation alerts
    if (isOverBudget) {
      toast.error(`⚠️ Budget Limit Exceeded by ₹${Math.abs(remaining).toLocaleString("en-IN")}! Please cut expenses.`);
    } else {
      toast.success(
        `Trip Budget Calculated Successfully! Remaining Budget: ₹${remaining.toLocaleString("en-IN")}`
      );
    }
  };

  const handleReset = () => {
    setDestination("goa");
    setBudget("");
    setTravelers(1);
    setDays(3);
    setHotelTier("standard");
    setTransportMode("train");
    setFood("");
    setActivities("");
    
    // Trigger React-Toastify successful reset notification
    toast.success("Ledger values cleared successfully.");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/70 to-blue-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Decorative Blur Accent */}
        <div className="absolute top-[-5%] right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Navigation Row */}
        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-200/60 relative z-10">
          <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 hover:scale-[1.02] transition-transform">
            <BackButton />
          </div>
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Financial Engine</span>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mt-0.5">
              Trip Budget Planner
            </h1>
          </div>
        </div>

        {/* Master Two-Column Grid Setup */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
          
          {/* ================= LEFT SIDE: CONFIGURATION INPUTS ================= */}
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/40 border border-slate-100 p-6 sm:p-8 space-y-6">
            
            {/* Core Destinations Dropdown and Budget Pool Input */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="space-y-2">
                <label htmlFor="destination" className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  📍 Target Destination
                </label>
                <select
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm focus:ring-4 focus:ring-blue-100/80"
                >
                  <option value="goa">Goa</option>
                  <option value="coorg">Coorg</option>
                  <option value="mysore">Mysore</option>
                  <option value="hampi">Hampi</option>
                  <option value="manali">Manali</option>
                  <option value="gokarna">Gokarna</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget" className="text-xs font-bold text-blue-600 uppercase tracking-wide flex items-center gap-1.5">
                  💰 Total Trip Allocation
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-base">₹</span>
                  <input
                    id="budget"
                    type="number"
                    min={0}
                    placeholder="Maximum budget (e.g. 50000)"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                    className="w-full pl-9 pr-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm placeholder:text-slate-400 focus:ring-4 focus:ring-blue-100/80"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="travelers" className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  👥 Number of Travelers
                </label>
                <input
                  id="travelers"
                  type="number"
                  min={1}
                  value={travelers}
                  onChange={(e) => setTravelers(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm focus:ring-4 focus:ring-blue-100/80"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="days" className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  📅 Number of Days
                </label>
                <input
                  id="days"
                  type="number"
                  min={1}
                  value={days}
                  onChange={(e) => setDays(Math.max(1, Number(e.target.value)))}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm focus:ring-4 focus:ring-blue-100/80"
                />
              </div>

            </div>

            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-4 border-t border-slate-100">
              Logistics & Dynamic Allowances
            </h3>

            {/* Logistics Breakdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="space-y-2">
                <label htmlFor="hotelTier" className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  🏨 Hotel Stay Category
                </label>
                <select
                  id="hotelTier"
                  value={hotelTier}
                  onChange={(e) => setHotelTier(e.target.value as HotelTier)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm focus:ring-4 focus:ring-blue-100/80"
                >
                  <option value="budget">Budget Stay (~₹1,000/night)</option>
                  <option value="standard">Standard Hotel (~₹2,500/night)</option>
                  <option value="luxury">Luxury Resort (~₹7,000/night)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="transportMode" className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  🚕 Transport Type
                </label>
                <select
                  id="transportMode"
                  value={transportMode}
                  onChange={(e) => setTransportMode(e.target.value as TransportMode)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm focus:ring-4 focus:ring-blue-100/80"
                >
                  <option value="bus">Bus Route (~₹800/person)</option>
                  <option value="train">Express Train (~₹1,500/person)</option>
                  <option value="flight">Flight Trip (~₹6,000/person)</option>
                  <option value="personal">Own Vehicle (~₹2,000 fixed)</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="food" className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  🍔 Food & Dining (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">₹</span>
                  <input
                    id="food"
                    type="number"
                    min={0}
                    placeholder="Enter dining overhead"
                    value={food}
                    onChange={(e) => setFood(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-3 bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm focus:ring-4 focus:ring-blue-100/80"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="activities" className="text-xs font-bold text-slate-600 uppercase tracking-wide flex items-center gap-1.5">
                  🎟 Activities & Tickets (₹)
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm">₹</span>
                  <input
                    id="activities"
                    type="number"
                    min={0}
                    placeholder="Enter activity expenses"
                    value={activities}
                    onChange={(e) => setActivities(e.target.value === "" ? "" : Math.max(0, Number(e.target.value)))}
                    className="w-full pl-8 pr-4 py-3 bg-slate-50/50 border border-slate-200 focus:border-blue-500 focus:bg-white text-slate-800 rounded-xl outline-none transition-all font-medium text-sm focus:ring-4 focus:ring-blue-100/80"
                  />
                </div>
              </div>

            </div>

            {/* Control Interaction Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-3 border border-slate-200 hover:bg-slate-50 hover:text-slate-800 text-slate-600 text-xs font-black uppercase tracking-wider rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-slate-100"
                aria-label="Reset forms configuration to default specifications"
              >
                🔄 Reset Ledger
              </button>
              <button
                type="button"
                onClick={handleCalculate}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/20 transition-all focus:outline-none focus:ring-4 focus:ring-blue-200"
                aria-label="Explicitly recalculate fields metrics configurations"
              >
                ⚡ Calculate Budget
              </button>
            </div>

          </div>

          {/* ================= RIGHT SIDE: LIVE STATUS SHEET CONTAINER ================= */}
          <div className="space-y-6 lg:sticky lg:top-8">
            
            <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                <span>📊</span> Live Balance Summary
              </h3>

              <div className="space-y-5">
                
                {/* Dynamic Budget Allocation Bar Metrics */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-slate-300">
                    <span>Budget Capacity Allocation</span>
                    <span>{percentUsed}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow={percentUsed} aria-valuemin={0} aria-valuemax={100}>
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${isOverBudget ? "bg-red-500" : percentUsed > 85 ? "bg-amber-500" : "bg-emerald-400"}`}
                      style={{ width: `${percentUsed}%` }}
                    />
                  </div>
                </div>

                {/* Statistics Cards Grid Matrix */}
                <div className="grid grid-cols-1 gap-3.5 pt-2">
                  
                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Target Base Budget</p>
                      <p className="text-xl font-black mt-1 text-slate-200">
                        ₹{numBudget.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <span className="text-xl opacity-70" aria-hidden="true">🏛️</span>
                  </div>

                  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex justify-between items-center">
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Accumulated Expenses</p>
                      <p className="text-xl font-black mt-1 text-blue-400">
                        ₹{totalExpense.toLocaleString("en-IN")}
                      </p>
                    </div>
                    <span className="text-xl opacity-70" aria-hidden="true">📉</span>
                  </div>

                  <div className={`border rounded-2xl p-4 flex justify-between items-center transition-all duration-300 ${
                    isOverBudget ? "bg-red-500/10 border-red-500/20" : "bg-emerald-500/10 border-emerald-500/20"
                  }`}>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">Remaining Balance</p>
                      <p className={`text-xl font-black mt-1 ${isOverBudget ? "text-red-400" : "text-emerald-400"}`}>
                        {isOverBudget ? "-" : ""}₹{Math.abs(remaining).toLocaleString("en-IN")}
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 font-semibold">
                        {percentRemaining}% Remaining Margin
                      </p>
                    </div>
                    <span className="text-xl" aria-hidden="true">{isOverBudget ? "⚠️" : "💰"}</span>
                  </div>

                </div>

                {/* Financial Index Proactive Alert Tag Flag */}
                <div className={`rounded-xl p-3.5 flex items-center gap-2.5 text-xs font-semibold border transition-colors duration-300 ${
                  isOverBudget 
                    ? "bg-red-950/40 text-red-300 border-red-900/50" 
                    : "bg-slate-800/60 text-slate-300 border-slate-800"
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOverBudget ? "bg-red-500 animate-pulse" : "bg-emerald-400"}`} />
                  <span>
                    {isOverBudget 
                      ? "Over Budget Deficit: Reduce costs." 
                      : numBudget === 0 
                        ? "Awaiting pool distribution configurations" 
                        : "Status: Within Budget Safety Net"}
                  </span>
                </div>

              </div>
            </div>

            {/* Calculations Breakdown Metrics */}
            <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-md text-xs space-y-2.5">
              <h4 className="font-bold text-slate-500 uppercase tracking-wider">📐 Automatic Core Cost Baseline</h4>
              <div className="flex justify-between font-medium text-slate-600 border-b border-slate-50 pb-1.5">
                <span>Accommodation Stack Config:</span>
                <span className="text-slate-800 font-bold">₹{calculatedHotelCost.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex justify-between font-medium text-slate-600">
                <span>Transit Route Pipeline Stack:</span>
                <span className="text-slate-800 font-bold">₹{calculatedTransportCost.toLocaleString("en-IN")}</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}