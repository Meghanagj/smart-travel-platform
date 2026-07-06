export default function Loading() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

      <h2 className="text-lg font-bold text-slate-700">
        Smart Travel Platform
      </h2>

      <p className="text-sm text-slate-500 animate-pulse">
        Loading your travel experience...
      </p>
    </main>
  );
}