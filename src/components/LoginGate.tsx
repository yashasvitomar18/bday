"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { Lock, Heart } from "lucide-react";

export default function LoginGate({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = login(username, password);
    if (!success) {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC] relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-300/40 rounded-full blur-3xl pointer-events-none mix-blend-multiply" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-sm p-8 mx-4 overflow-hidden rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
      >
        <div className="relative z-20 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center mb-6 shadow-inner relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
             <Lock className="w-7 h-7 text-pink-500 relative z-10" />
          </div>
          
          <h1 className="font-script text-4xl text-gray-800 mb-2 font-bold text-center tracking-wide">For Aryan's Eyes Only</h1>
          <p className="font-sans text-sm text-gray-700 mb-8 text-center text-balance font-medium">
            Enter the details to unlock your digital love letter.
          </p>

          <form onSubmit={handleSubmit} className="w-full space-y-5">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your Name"
                className="w-full px-5 py-3.5 bg-white/40 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-gray-500/80 text-gray-800 placeholder:select-none transition-all shadow-sm"
                required
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="The Special Date (DDMM)"
                className="w-full px-5 py-3.5 bg-white/40 border border-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-gray-500/80 text-gray-800 placeholder:select-none transition-all shadow-sm"
                required
              />
            </div>
            
            <div className="h-4 flex items-center justify-center pt-2">
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500/90 text-sm font-semibold text-center"
                >
                  Incorrect details. Try again. ❤️
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-4 mt-2 bg-gradient-to-r from-pink-400 to-rose-400 hover:from-pink-500 hover:to-rose-500 text-white rounded-xl font-bold shadow-lg shadow-pink-200 hover:shadow-pink-300 transition-all flex items-center justify-center gap-2 group transform active:scale-[0.98]"
            >
              <span>Unlock Message</span>
              <Heart className="w-4 h-4 group-hover:scale-110 group-hover:fill-current transition-all" />
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
