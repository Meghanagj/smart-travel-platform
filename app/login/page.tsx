"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import BackButton from "../components/BackButton/BackButton";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    // 1. Strict Email Regex Validation Check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address (e.g., name@domain.com).");
      return;
    }

    // 2. Password Length Validation Check (Min 6 Characters)
    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    // Process Login Logic Here
    console.log("Logging in with:", { email, password });
    
    // Redirect user to the home panel dashboard after authentication passes
    router.push("/");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative structural background blurs to mirror the registration canvas */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Premium Floating Back Action Button */}
      <div className="absolute top-6 left-6 z-10">
        <BackButton />
      </div>

      <div className="sm:mx-auto w-full max-w-md relative z-10">
        {/* Modern Section Header Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="mt-2.5 text-sm text-slate-500 font-medium">
            Sign in to access your saved itineraries and personalized trips.
          </p>
        </div>

        {/* Login Form Core Container */}
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl shadow-md border border-slate-100">
          
          {/* Active Error Feedback Block */}
          {error && (
            <div className="mb-5 p-3 bg-red-50 border border-red-100 rounded-xl flex items-center gap-2 text-red-600 text-sm font-semibold animate-fadeIn">
              <span>⚠️</span>
              <p>{error}</p>
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            
            {/* Email Address Input Block */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                id="email"
                type="text" // Keeps standard checking focused through our custom error string logic
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-slate-200 p-3 rounded-xl text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base bg-slate-50/50"
              />
            </div>

            {/* Password Input Block */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-slate-200 p-3 pr-12 rounded-xl text-slate-800 placeholder-slate-400 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm md:text-base bg-slate-50/50"
                />
                
                {/* Embedded Toggle View Icon Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.822 7.822L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Core Form CTA Submit Action */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm sm:text-base"
              >
                Sign In
              </button>
            </div>
          </form>

          {/* Secondary Transfer Action Pathway */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center text-sm">
            <span className="text-slate-500 font-medium">Don't have an account? </span>
            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-700 font-bold transition-colors"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}