"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import BackButton from "../components/BackButton/BackButton";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setError(""); // Clear previous structural validation messages

    // 1. Strict Email Regex Validation Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      const emailMsg = "Please enter a valid email address (e.g., name@domain.com).";
      setError(emailMsg);
      toast.error(emailMsg);
      return;
    }

    try {
      setLoading(true);

      // Simulating downstream asynchronous password reset API pipeline context
      await new Promise((resolve) => setTimeout(resolve, 1200));

      toast.success("Password reset link sent successfully!");
      setIsSent(true);
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative structural background blurs matching Login and Register contexts */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Premium Floating Back Action Button Wrapper */}
      <div className="absolute top-6 left-6 z-10 rounded-xl focus-within:ring-4 focus-within:ring-blue-300">
        <BackButton />
      </div>

      <div className="sm:mx-auto w-full max-w-md relative z-10">
        {/* Modern Section Header Semantic Layout */}
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Forgot Password
          </h1>
          <p className="mt-2.5 text-sm text-slate-500 font-medium px-2">
            Enter the email associated with your SmartTravel account. We'll send you a secure password reset link.
          </p>
        </header>

        {/* Form Content Core Canvas Box */}
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl shadow-md border border-slate-100">
          
          {/* Conditional Success Context Presentation Rendering */}
          {isSent ? (
            <div className="text-center py-4 animate-fadeIn" role="status">
              <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-100">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Reset Link Sent
              </h2>
              <p className="text-sm text-slate-500 font-medium mb-4 leading-relaxed">
                Please check your inbox at <span className="font-semibold text-slate-700">{email}</span>. If you don't receive it within a few minutes, check your spam folder.
              </p>
              <button
                type="button"
                onClick={() => setIsSent(false)}
                className="text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors focus:outline-none focus:underline"
              >
                Resend to another email address
              </button>
            </div>
          ) : (
            <>
              {/* Active Error Feedback Alert Block */}
              {error && (
                <div 
                  role="alert"
                  className="mb-5 p-3 bg-red-50 border border-red-100 rounded-xl flex items-start gap-2 text-red-600 text-xs sm:text-sm font-semibold animate-fadeIn"
                >
                  <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <p>{error}</p>
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                {/* Email Address Input Block */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    disabled={loading}
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-slate-200 p-3 rounded-xl text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all text-sm md:text-base bg-slate-50/50 disabled:opacity-60 disabled:cursor-not-allowed"
                  />
                </div>

                {/* Core Form CTA Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {loading ? "Sending Link..." : "Send Reset Link"}
                  </button>
                </div>
              </form>
            </>
          )}

        </div>
      </div>
    </main>
  );
}