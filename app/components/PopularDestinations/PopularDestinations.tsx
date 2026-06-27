import DestinationCard from "../DestinationCard/DestinationCard";

export default function PopularDestinations() {
  const places = [
    {
      id: "goa",
      title: "Goa",
      description: "Famous for pristine sandy beaches, colonial historic architecture, and vibrant nightlife.",
      category: "Beach",
    },
    {
      id: "coorg",
      title: "Coorg",
      description: "Famous for its sweeping coffee plantations, misty hills, and lush green valleys.",
      category: "Nature",
    },
    {
      id: "manali",
      title: "Manali",
      description: "A gorgeous Himalayan destination famed for snowcapped peaks and adventure sports.",
      category: "Adventure",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-slate-50">
      {/* Containerized wrapper to align layout structure perfectly with your Navbar and Hero */}
      <div className="max-w-6xl mx-auto">
        
        {/* Modern Section Header Design */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Popular Destinations
          </h2>
          <div className="w-12 h-1 bg-blue-600 rounded mt-3 mb-2" />
          <p className="text-slate-500 text-sm md:text-base font-medium">
            Handpicked trending spots perfect for your next vacation getaway.
          </p>
        </div>

        {/* Responsive Flex/Grid Canvas Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
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