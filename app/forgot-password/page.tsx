"use client";

import BackButton from "../components/BackButton/BackButton";

export default function ForgotPasswordPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6">
      <BackButton />

      <h1 className="text-4xl font-bold mb-6">
        Forgot Password
      </h1>

      <p className="mb-4 text-gray-600">
        Enter your email address and we will send you a password reset link.
      </p>

      <input
        type="email"
        placeholder="Enter your email"
        className="border p-3 w-full mb-4 rounded"
      />

      <button
        onClick={() => alert("Password reset link sent!")}
        className="bg-blue-600 text-white px-6 py-3 rounded w-full"
        >
        Send Reset Link
        </button>
    </div>
  );
}