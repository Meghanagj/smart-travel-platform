"use client";

interface MapProps {
  city: string;
}

const coordinates: Record<string, { lat: number; lng: number }> = {
  Goa: { lat: 15.2993, lng: 74.1240 },
  Coorg: { lat: 12.3375, lng: 75.8069 },
  Manali: { lat: 32.2432, lng: 77.1892 },
  Mysore: { lat: 12.2958, lng: 76.6394 },
  Hampi: { lat: 15.3350, lng: 76.4600 },
  Gokarna: { lat: 14.5479, lng: 74.3188 },
};

export default function Map({ city }: MapProps) {
  const location = coordinates[city];

  if (!location) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-slate-100 mt-10">
      <h2 className="text-2xl font-bold mb-4">
        📍 Location Map
      </h2>

      <div className="overflow-hidden rounded-xl border">
        <iframe
          title={city}
          width="100%"
          height="350"
          loading="lazy"
          allowFullScreen
          src={`https://maps.google.com/maps?q=${location.lat},${location.lng}&z=13&output=embed`}
        />
      </div>

      <div className="mt-4">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${location.lat},${location.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}