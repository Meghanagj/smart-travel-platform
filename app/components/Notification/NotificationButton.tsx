"use client";

import { toast } from "react-toastify";

export default function NotificationButton() {

  const bookingSuccess = () => {
    toast.success("🎉 Trip booked successfully!");
  };

  const weatherAlert = () => {
    toast.warning("🌧 Rain expected tomorrow. Carry an umbrella.");
  };

  const budgetAlert = () => {
    toast.error("💰 Budget exceeded!");
  };

  const reminder = () => {
    toast.info("✈ Your trip starts tomorrow.");
  };

  return (
    <div className="flex flex-wrap gap-4 mt-6">
      <button
        onClick={bookingSuccess}
        className="bg-green-600 text-white px-4 py-2 rounded-lg"
      >
        Booking Success
      </button>

      <button
        onClick={weatherAlert}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg"
      >
        Weather Alert
      </button>

      <button
        onClick={budgetAlert}
        className="bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Budget Warning
      </button>

      <button
        onClick={reminder}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
      >
        Trip Reminder
      </button>
    </div>
  );
}