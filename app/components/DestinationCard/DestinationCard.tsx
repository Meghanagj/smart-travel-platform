import Link from "next/link";

// Added id for routing, and category for the visual tag badge
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
  return (
    <Link href={`/destinations/${id}`} className="group block h-full focus:outline-none">
      <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full flex flex-col justify-between shadow-sm group-hover:shadow-md group-hover:border-blue-200 transition-all duration-200 transform group-hover:-translate-y-1">
        <div>
          {/* Categorized Visual Badge Tag */}
          <span className="inline-block px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-md mb-4">
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

        {/* Interactive Call-To-Action (CTA) Footer with smooth right-sliding arrow */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-blue-600 font-bold text-sm">
          <span>Explore Guide</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2.5} 
            stroke="currentColor" 
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}