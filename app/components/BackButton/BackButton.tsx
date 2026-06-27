"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={() => router.back()}
        className="text-4xl font-bold hover:text-blue-600"
      >
        ←
      </button>
    </div>
  );
}