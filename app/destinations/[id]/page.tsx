import BackButton from "../../components/BackButton/BackButton";

// Expanded 6-destination dataset for Phase 1 requirements
const destinations = {
  goa: {
    title: "Goa",
    budget: "₹15,000",
    description: "Famous for pristine sandy beaches, colonial historic architecture, and vibrant nightlife.",
    bestTime: "November to February",
    tips: "Rent a scooter for budget-friendly local commuting and keep sunscreen handy.",
    attractions: ["Baga Beach", "Calangute Beach", "Dudhsagar Falls"],
    activities: ["Beach Visit", "Water Sports", "Cruise Ride"],
  },
  coorg: {
    title: "Coorg",
    budget: "₹10,000",
    description: "Famous for its sweeping coffee plantations, misty hills, and lush green valleys.",
    bestTime: "October to March",
    tips: "Pack a light sweater or jacket as the evenings can get quite cool.",
    attractions: ["Abbey Falls", "Raja Seat", "Dubare Elephant Camp"],
    activities: ["Coffee Estate Tour", "Trekking", "Nature Walk"],
  },
  manali: {
    title: "Manali",
    budget: "₹18,000",
    description: "A gorgeous Himalayan destination famed for snowcapped peaks and thrilling adventure sports.",
    bestTime: "December to February",
    tips: "Carry heavy winter layers and verify Rohtang Pass permissions in advance.",
    attractions: ["Solang Valley", "Rohtang Pass", "Hadimba Temple"],
    activities: ["Paragliding", "River Rafting", "Snow Activities"],
  },
  mysore: {
    title: "Mysore",
    budget: "₹8,000",
    description: "Rich in royal heritage, grand historic palaces, and cultural silk weaving traditions.",
    bestTime: "October to March",
    tips: "Plan your visit to the main palace for Sunday evening to witness the breathtaking illumination.",
    attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens"],
    activities: ["Heritage Walk", "Sandalwood Shopping", "Palace Tour"],
  },
  hampi: {
    title: "Hampi",
    budget: "₹9,000",
    description: "An ancient UNESCO World Heritage site known for thousands of boulder-strewn temple ruins.",
    bestTime: "October to February",
    tips: "Rent a bicycle to explore the vast archaeological monuments at your own pace.",
    attractions: ["Virupaksha Temple", "Stone Chariot", "Lotus Mahal"],
    activities: ["Coracle Boat Ride", "Bouldering", "Sunset Photography"],
  },
  gokarna: {
    title: "Gokarna",
    budget: "₹7,500",
    description: "A tranquil coastal town offering laid-back beaches alongside historic temple trails.",
    bestTime: "October to March",
    tips: "Take the scenic cliff-side beach trek from Kudle beach over to Om beach.",
    attractions: ["Om Beach", "Kudle Beach", "Mahabaleshwar Temple"],
    activities: ["Beach Trekking", "Stargazing", "Yoga Sessions"],
  },
};

export default async function DestinationDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Use lowercase to seamlessly handle any case variation in the URL path
  const destination = destinations[id.toLowerCase() as keyof typeof destinations];

  if (!destination) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
          Destination Not Found
        </h1>
        <p className="text-slate-600 mb-6">
          The requested spot is currently not part of our travel catalog.
        </p>
        <BackButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-16">
      {/* Dynamic Colored Header Block */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-8 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <BackButton />
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6">
            {destination.title}
          </h1>
          <p className="text-blue-100 mt-3 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            {destination.description}
          </p>
        </div>
      </div>

      {/* Main Breakdown Section */}
      <main className="max-w-4xl mx-auto px-6 -mt-10">
        <div className="bg-white rounded-2xl shadow-md p-6 md:p-10 border border-slate-100">
          
          {/* Insights Metrics Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Estimated Budget
              </span>
              <p className="text-3xl font-extrabold text-blue-600 mt-1">
                {destination.budget}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-xl">
              <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Best Time To Visit
              </span>
              <p className="text-xl font-bold text-slate-800 mt-2">
                {destination.bestTime}
              </p>
            </div>
          </div>

          <hr className="my-8 border-slate-100" />

          {/* Attractions Grid */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-blue-600 rounded-full inline-block"></span>
              Top Attractions
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {destination.attractions.map((place) => (
                <div
                  key={place}
                  className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:border-blue-200 transition-colors flex items-center gap-2 font-medium text-slate-700"
                >
                  <span className="text-blue-500">📍</span> {place}
                </div>
              ))}
            </div>
          </div>

          {/* Activities Grid */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-emerald-500 rounded-full inline-block"></span>
              Things To Do
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {destination.activities.map((activity) => (
                <div
                  key={activity}
                  className="bg-white border border-slate-100 rounded-xl p-4 shadow-sm hover:border-emerald-200 transition-colors flex items-center gap-2 font-medium text-slate-700"
                >
                  <span className="text-emerald-500">🎯</span> {activity}
                </div>
              ))}
            </div>
          </div>

          {/* Travel Tips callout panel */}
          <div className="bg-amber-50/60 border border-amber-100 p-6 rounded-xl mt-10">
            <h2 className="text-lg font-bold text-amber-900 mb-2 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-amber-600">
                <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.28A8.25 8.25 0 0112 13.5a8.25 8.25 0 015.855 2.438A8.225 8.225 0 0112 20.25a8.225 8.225 0 01-5.855-2.433zM12 4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 4.5a3 3 0 110 6 3 3 0 010-6z" clipRule="evenodd" strokeWidth={0.5} />
              </svg>
              Expert Travel Advisory
            </h2>
            <p className="text-amber-800 text-sm leading-relaxed font-medium">
              {destination.tips}
            </p>
          </div>

        </div>
      </main>
    </div>
  );
}