"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import BackButton from "../components/BackButton/BackButton";
import { toast } from "react-toastify";
import { 
  Plane, 
  Hotel, 
  FileText, 
  Briefcase, 
  Download, 
  XCircle, 
  CheckCircle, 
  PhoneCall, 
  ShieldAlert, 
  HelpCircle, 
  Star, 
  QrCode,
  Share2,
  Coffee,
  Waves,
  Wifi,
  Car,
  Compass,
  Flame,
  Trees,
  Snowflake
} from "lucide-react";

// Robust configuration object containing target-specific logistics metadata schemas
const bookingData = {
  goa: {
    city: "Goa",
    airport: "GOI",
    hotel: "Taj Heritage Beach Resort",
    rating: "4.8",
    airline: "Air India",
    flightNumber: "AI-203",
    departureDate: "10 July 2026",
    returnDate: "15 July 2026",
    seat: "12A (Window)",
    weather: "Heavy rain expected tomorrow at your destination. Keep travel documents waterproof.",
    amenities: [
      { label: "Beach View Access", icon: Compass },
      { label: "Swimming Pool", icon: Waves },
      { label: "Complimentary Breakfast", icon: Coffee },
      { label: "High-Speed Wi-Fi", icon: Wifi }
    ]
  },
  gokarna: {
    city: "Gokarna",
    airport: "GOK",
    hotel: "Kahani Paradise Resort",
    rating: "4.9",
    airline: "IndiGo",
    flightNumber: "6E-541",
    departureDate: "14 August 2026",
    returnDate: "19 August 2026",
    seat: "08C (Aisle)",
    weather: "Clear skies overhead. Optimal beach trekking and stargazing weather forecast.",
    amenities: [
      { label: "Ocean Clifftop View", icon: Compass },
      { label: "Private Infinity Pool", icon: Waves },
      { label: "High-Speed Wi-Fi", icon: Wifi },
      { label: "Complimentary Parking", icon: Car }
    ]
  },
  coorg: {
    city: "Coorg",
    airport: "MYS",
    hotel: "Coorg Wilderness Resort",
    rating: "4.7",
    airline: "Star Air",
    flightNumber: "S5-122",
    departureDate: "05 September 2026",
    returnDate: "09 September 2026",
    seat: "14D (Standard)",
    weather: "Light showers expected across coffee plantations. Carry light umbrellas or rainwear.",
    amenities: [
      { label: "Coffee Estate Walk", icon: Trees },
      { label: "Evening Campfire", icon: Flame },
      { label: "Organic Breakfast", icon: Coffee },
      { label: "High-Speed Wi-Fi", icon: Wifi }
    ]
  },
  manali: {
    city: "Manali",
    airport: "KUU",
    hotel: "The Himalayan Resort",
    rating: "4.8",
    airline: "Vistara",
    flightNumber: "UK-809",
    departureDate: "20 December 2026",
    returnDate: "27 December 2026",
    seat: "03F (Window View)",
    weather: "Fresh snowfall expected overnight. Mountain road networks might notice temporary delays.",
    amenities: [
      { label: "Panoramas Snowy View", icon: Snowflake },
      { label: "Night Bonfire Activity", icon: Flame },
      { label: "Guided Mountain Trek", icon: Trees },
      { label: "Complimentary Parking", icon: Car }
    ]
  },
  hampi: {
    city: "Hampi",
    airport: "VDY",
    hotel: "Evolve Back Kamalapura Palace",
    rating: "4.9",
    airline: "Alliance Air",
    flightNumber: "9I-402",
    departureDate: "12 October 2026",
    returnDate: "16 October 2026",
    seat: "07B (Middle Row)",
    weather: "Warm and bright days ahead. Perfect conditions for exploration of historic architectural complexes.",
    amenities: [
      { label: "Heritage Walk Tour", icon: Compass },
      { label: "Luxury Palace Pool", icon: Waves },
      { label: "Traditional Breakfast", icon: Coffee },
      { label: "High-Speed Wi-Fi", icon: Wifi }
    ]
  },
  mysore: {
    city: "Mysore",
    airport: "MYQ",
    hotel: "Radisson Blu Plaza",
    rating: "4.6",
    airline: "Air India Express",
    flightNumber: "I5-742",
    departureDate: "02 October 2026",
    returnDate: "06 October 2026",
    seat: "18A (Window)",
    weather: "Pleasant evening breezes expected during festive schedule hours.",
    amenities: [
      { label: "Palace City Views", icon: Compass },
      { label: "Premium Swimming Pool", icon: Waves },
      { label: "Complimentary Breakfast", icon: Coffee },
      { label: "High-Speed Wi-Fi", icon: Wifi }
    ]
  }
};

export default function BookingPage() {
  const searchParams = useSearchParams();
  
  // Extract search matching payload criteria fallback gracefully to goa if absent
  const rawQuery = searchParams.get("destination") || "goa";
  const destinationKey = rawQuery.toLowerCase() as keyof typeof bookingData;
  const trip = bookingData[destinationKey] || bookingData.goa;

  // Track dynamic state parameters
  const [bookingId, setBookingId] = useState("BK20260001");
  const [paymentStatus, setPaymentStatus] = useState("Paid In Full");

  // Prevent Next.js hydration issues by generating dynamic keys post mount safely
  useEffect(() => {
    const randomizedId = "BK" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomizedId);
  }, []);

  const [checklist, setChecklist] = useState([
    { id: "item-0", name: "Passport / National ID Card Documents", checked: true },
    { id: "item-1", name: "Boarding Passes / Travel Tickets", checked: true },
    { id: "item-2", name: "Resort Smart Wardrobe Clothes", checked: false },
    { id: "item-3", name: "DSLR Camera System Equipment", checked: false },
    { id: "item-4", name: "First-Aid Kit Box & Medicines", checked: false },
    { id: "item-5", name: "Universal Multi-Device Travel Charger", checked: false }
  ]);

  const toggleChecklist = (id: string) => {
    setChecklist(prev =>
      prev.map(item => (item.id === id ? { ...item, checked: !item.checked } : item))
    );
  };

  const handleConfirmBooking = () => {
    setPaymentStatus("Paid In Full");
    toast.success(`Booking ${bookingId} verified and locked into travel manifests!`);
  };

  const handleCancelBooking = () => {
    setPaymentStatus("Cancelled");
    toast.error(`Booking ${bookingId} marked as Cancelled.`);
  };

  const handleDownloadTicket = () => {
    toast.info("Initializing background ticket engine build sequence...");
    
    // Programmatic mockup modeling an asynchronous micro-service file pipeline download
    setTimeout(() => {
      try {
        const textData = `
        ==================================================
        SMART TRAVEL ENGINE - E-TICKET RECEIPT
        ==================================================
        BOOKING ID: ${bookingId}
        STATUS: ${paymentStatus.toUpperCase()}
        
        [FLIGHT DETAILS]
        Carrier: ${trip.airline} (${trip.flightNumber})
        Route: Bengaluru (BLR) ➔ ${trip.city} (${trip.airport})
        Departure: ${trip.departureDate}
        Seat Assignment: ${trip.seat}
        
        [ACCOMMODATION DETAILS]
        Hotel Luxury Property: ${trip.hotel}
        Check-In Date: ${trip.departureDate}
        Check-Out Date: ${trip.returnDate}
        
        Thank you for booking with the Smart Travel Planning Platform!
        ==================================================
        `;
        const blob = new Blob([textData], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `Ticket_${bookingId}_${trip.city}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        toast.success("E-Ticket documentation text receipt saved locally!");
      } catch {
        toast.error("Failed to generate ticket stream download asset link mapping.");
      }
    }, 1000);
  };

  const handleShareBooking = async () => {
    const shareText = `Check out my travel schedule to ${trip.city}! Staying at ${trip.hotel}. Booking ID: ${bookingId}`;
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    if (navigator.share) {
      try {
        await navigator.share({
          title: `SmartTravel: ${trip.city} Trip Manifest`,
          text: shareText,
          url: shareUrl,
        });
        toast.success("Shared successfully via external device portal!");
      } catch {
        // Fallback context validation when user exits window native tray manually
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText} - Details at: ${shareUrl}`);
        toast.success("Booking reference link string saved to your clipboard system tray!");
      } catch {
        toast.error("System clipboard operations are restricted or unavailable.");
      }
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100/70 to-blue-50/30 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Decorative Background Accent */}
        <div className="absolute top-[-10%] right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* Header Action Row Section Layout */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200/60 relative z-10">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-xl shadow-sm border border-slate-100 hover:scale-[1.02] transition-transform">
              <BackButton />
            </div>
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Sync Dashboard</span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight mt-0.5">
                Booking Management
              </h1>
            </div>
          </div>
          
          {/* Real-time Status Badge */}
          <div className="self-start sm:self-auto bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl text-xs font-bold border border-emerald-100 flex items-center gap-2 shadow-sm shadow-emerald-500/5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Dynamic Manifest Synchronized
          </div>
        </header>

        {/* Dynamic Weather Alert Bar notification banner standard layout */}
        <section className="mb-8 bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-3 text-amber-800 text-sm font-semibold shadow-sm relative z-10" aria-label="Live Destination Weather Notification Warning">
          <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0" />
          <p>⚠️ Weather Advisory ({trip.city}): {trip.weather}</p>
        </section>

        {/* Master Responsive Configuration Grid Matrix Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative z-10">
          
          {/* ================= LEFT / MAIN TWO-COLUMN STACK CONTENT ================= */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Flight Segment Logistics Card Box */}
            <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2.5">
                  <span className="p-2.5 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    <Plane className="w-5 h-5" />
                  </span> 
                  Flight Route Logistics
                </h2>
                <span className="text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Confirmed Outbound
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-sm border-t border-slate-50 pt-5">
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Airline Operating Carrier</p>
                  <p className="font-bold text-slate-700">{trip.airline}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Flight Identifier Code</p>
                  <p className="font-mono font-bold text-blue-600 bg-blue-50/50 px-2 py-0.5 rounded-md inline-block">{trip.flightNumber}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Scheduled Departure</p>
                  <p className="font-bold text-slate-700">{trip.departureDate}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Class Configuration tier</p>
                  <p className="font-bold text-slate-700">Economy Classic Workspace</p>
                </div>
              </div>

              {/* Flight Route Line Timeline Alignment */}
              <div className="mt-6 bg-slate-50/80 rounded-2xl p-4 flex items-center justify-between border border-slate-100">
                <div className="text-center sm:text-left">
                  <p className="text-xs font-bold text-slate-400 uppercase">BLR</p>
                  <p className="font-black text-slate-800 text-base">Bengaluru</p>
                </div>
                
                <div className="flex-1 flex flex-col items-center px-4 relative justify-center">
                  <span className="text-xs text-slate-400 bg-slate-50 px-2 z-10 font-bold mb-1">Direct Flight</span>
                  <div className="flex-1 w-full border-t-2 border-dashed border-slate-300" />
                </div>

                <div className="text-center sm:text-right">
                  <p className="text-xs font-bold text-slate-400 uppercase">{trip.airport}</p>
                  <p className="font-black text-slate-800 text-base">{trip.city}</p>
                </div>
              </div>
            </section>

            {/* Accommodation Venue Hotel Configuration Structure Card */}
            <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-slate-800 tracking-tight flex items-center gap-2.5">
                  <span className="p-2.5 bg-cyan-50 text-cyan-600 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    <Hotel className="w-5 h-5" />
                  </span> 
                  Hotel Accommodations
                </h2>
                <span className="text-[11px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Voucher Reserved
                </span>
              </div>

              <div className="space-y-2 border-t border-slate-50 pt-5 mb-5">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Selected Luxury Property</p>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <p className="text-lg font-extrabold text-slate-800">{trip.hotel}</p>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-lg self-start sm:self-auto">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{trip.rating} Verified Rating</span>
                  </div>
                </div>
              </div>

              {/* Logistics Grid Metrics Block */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm bg-slate-50/80 border border-slate-100 p-4 rounded-2xl">
                <div className="space-y-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">📅 Standard Check-In</p>
                  <p className="font-extrabold text-slate-700">{trip.departureDate}</p>
                </div>
                <div className="space-y-1 sm:border-l border-slate-200 sm:pl-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">📅 Scheduled Check-Out</p>
                  <p className="font-extrabold text-slate-700">{trip.returnDate}</p>
                </div>
              </div>

              {/* Dynamic Amenity Pill Badges Integration Matrix based on route queries */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Included Resort Perks & Amenities</p>
                <div className="flex flex-wrap gap-2">
                  {trip.amenities.map((amenity, idx) => {
                    const AmenityIcon = amenity.icon;
                    return (
                      <div key={idx} className="flex items-center gap-1.5 bg-slate-50 text-slate-600 border border-slate-200/60 rounded-xl px-3 py-1.5 text-xs font-medium shadow-sm">
                        <AmenityIcon className="w-3.5 h-3.5 text-slate-400" />
                        <span>{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-sm pt-2">
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Assigned Room Unit</p>
                  <p className="font-bold text-slate-700 mt-0.5">Deluxe Executive Suite Premium</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Package Inclusions</p>
                  <p className="font-bold text-cyan-600 mt-0.5">All-Inclusive Tier Pass</p>
                </div>
              </div>
            </section>

            {/* Travel Checklist Management Dynamic Area Layout */}
            <section className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-8">
              <h2 className="text-xl font-black text-slate-800 tracking-tight mb-6 flex items-center gap-2.5">
                <span className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                  <Briefcase className="w-5 h-5" />
                </span> 
                Luggage Verification Checklist
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-slate-50 pt-5">
                {checklist.map((item) => (
                  <div 
                    key={item.id} 
                    className={`flex items-center gap-3 p-3 rounded-xl border text-xs font-semibold transition-all ${
                      item.checked 
                        ? "bg-slate-50/60 border-slate-200 text-slate-400 line-through" 
                        : "bg-white border-slate-100 text-slate-700 hover:border-slate-300 shadow-sm"
                    }`}
                  >
                    <input 
                      type="checkbox" 
                      id={item.id}
                      checked={item.checked}
                      onChange={() => toggleChecklist(item.id)}
                      className="w-4 h-4 rounded text-blue-600 border-slate-300 focus:ring-blue-500/40 focus:ring-offset-0 accent-blue-600 transition-all cursor-pointer"
                    />
                    <label htmlFor={item.id} className="cursor-pointer flex-1 select-none leading-tight">
                      {item.name}
                    </label>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ================= RIGHT SIDE: STICKY METRICS SUMMARY CONTAINER ================= */}
          <aside className="space-y-6 lg:sticky lg:top-6">
            
            {/* Live Reservation Summary Progress Module Box Card */}
            <section 
              className="bg-slate-900 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden" 
              role="status" 
              aria-live="polite"
              aria-label="Reservation Lifecycle Metrics Monitor"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
              
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-400" />
                Live Allocation Pipeline
              </h3>

              {/* Progress Tracking Metric Segment */}
              <div className="space-y-2 mb-6 bg-white/5 border border-white/5 rounded-2xl p-4">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Manifest Sync Integrity</span>
                  <span className={`${paymentStatus === "Cancelled" ? "text-red-400" : "text-emerald-400"} font-extrabold`}>
                    {paymentStatus === "Cancelled" ? "0% Suspended" : "100% Core Lock"}
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden" role="progressbar" aria-valuenow={paymentStatus === "Cancelled" ? 0 : 100} aria-valuemin={0} aria-valuemax={100}>
                  <div className={`h-full rounded-full transition-all duration-500 ${paymentStatus === "Cancelled" ? "bg-red-500 w-0" : "bg-emerald-400 w-full"}`} />
                </div>
              </div>

              {/* Meta Data Booking IDs Status Matrix Rows */}
              <div className="space-y-3.5 text-xs font-medium border-t border-slate-800 pt-4">
                <div className="flex justify-between items-center text-slate-400">
                  <span>Booking Reference Token:</span>
                  <span className="font-mono text-slate-200 font-bold bg-slate-800 px-2 py-0.5 rounded border border-slate-700/60">{bookingId}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Payment Ledger Status:</span>
                  <span className={`font-bold flex items-center gap-1 ${
                    paymentStatus === "Paid In Full" ? "text-emerald-400" : paymentStatus === "Cancelled" ? "text-red-400" : "text-amber-400"
                  }`}>
                    <CheckCircle className="w-3.5 h-3.5" /> {paymentStatus}
                  </span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Assigned Aircraft Seat:</span>
                  <span className="text-slate-200 font-bold">{trip.seat}</span>
                </div>
                <div className="flex justify-between items-center text-slate-400">
                  <span>Terminal Departure Gate:</span>
                  <span className="text-slate-200 font-bold">Terminal T1 (BLR)</span>
                </div>
              </div>

              {/* Action Button Workflow Interface Block */}
              <div className="mt-6 pt-5 border-t border-slate-800 space-y-2.5">
                <button
                  type="button"
                  onClick={handleConfirmBooking}
                  disabled={paymentStatus === "Paid In Full"}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-800 disabled:text-slate-500 text-white text-xs font-black uppercase tracking-wider rounded-xl shadow-lg shadow-blue-500/20 transition-all focus:outline-none focus:ring-4 focus:ring-blue-200 flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
                >
                  <CheckCircle className="w-4 h-4" /> Reset / Reconfirm Order
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleDownloadTicket}
                    className="py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-slate-700/50 flex items-center justify-center gap-1.5 cursor-pointer"
                    aria-label="Download generated trip manifest plain data voucher"
                  >
                    <Download className="w-3.5 h-3.5" /> Save Ticket
                  </button>
                  <button
                    type="button"
                    onClick={handleShareBooking}
                    className="py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-slate-700/50 flex items-center justify-center gap-1.5 cursor-pointer"
                    aria-label="Share reservation logs link target payload"
                  >
                    <Share2 className="w-3.5 h-3.5" /> Share Trip
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleCancelBooking}
                  disabled={paymentStatus === "Cancelled"}
                  className="w-full py-2.5 border border-red-900/30 hover:border-red-900/60 hover:bg-red-950/20 text-red-400 disabled:opacity-40 text-[10px] font-black uppercase tracking-widest rounded-xl transition-all focus:outline-none focus:ring-4 focus:ring-red-950 flex items-center justify-center gap-1.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  <XCircle className="w-3.5 h-3.5" /> Void Booking Manifests
                </button>
              </div>
            </section>

            {/* Quick Utility Access Support Context Column Card Area Block */}
            <section className="bg-white rounded-3xl border border-slate-100 p-5 shadow-md text-xs space-y-3.5" aria-label="Support Infrastructure Information">
              <h4 className="font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-blue-500" /> Need Assistance?
              </h4>
              
              <div className="space-y-2.5 font-medium text-slate-600">
                <div className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <PhoneCall className="w-4 h-4 text-emerald-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">Emergency Concierge Support</p>
                    <p className="text-slate-500 mt-0.5 font-mono">+91 1800-425-SYNC</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <QrCode className="w-4 h-4 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-800 text-[11px]">Digital Boarding Voucher Pass</p>
                    <p className="text-slate-500 mt-0.5">Scan checkout barcode instantly at gate terminals.</p>
                  </div>
                </div>
              </div>
            </section>

          </aside>

        </div>
      </div>
    </main>
  );
}