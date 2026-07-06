type Props = {
  category: string;
};

const recommendations = {
  Beach: [
    "Andaman Islands",
    "Kerala",
    "Pondicherry",
  ],
  Nature: [
    "Munnar",
    "Ooty",
    "Wayanad",
  ],
  Adventure: [
    "Leh Ladakh",
    "Rishikesh",
    "Auli",
  ],
  Heritage: [
    "Jaipur",
    "Udaipur",
    "Hampi",
  ],
  Historical: [
    "Delhi",
    "Ajanta Caves",
    "Khajuraho",
  ],
  "Beach & Peace": [
    "Varkala",
    "Kovalam",
    "Pondicherry",
  ],
};

export default function RecommendationCard({ category }: Props) {
  const places =
    recommendations[category as keyof typeof recommendations] || [];

  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md border border-slate-100 p-6">
      <h2 className="text-2xl font-bold text-slate-900 mb-5">
        🌍 Recommended Destinations
      </h2>

      <div className="grid md:grid-cols-3 gap-4">
        {places.map((place) => (
          <div
            key={place}
            className="rounded-xl border border-blue-100 bg-blue-50 p-5 hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg">{place}</h3>

            <p className="text-sm text-slate-600 mt-2">
              Similar destination based on your interests.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}