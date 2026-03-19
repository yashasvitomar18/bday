"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";
import Journey from "./Journey"; // We will add Journey next

function FloatingParticles() {
  const particles = Array.from({ length: 30 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((_, i) => {
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;

        return (
          <motion.div
            key={i}
            initial={{ y: "110vh", x: `${left}vw`, opacity: 0 }}
            animate={{ y: "-10vh", opacity: [0, 0.7, 0] }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear" as any,
            }}
            className="absolute drop-shadow-md"
            style={{ width: size, height: size }}
          >
            <Heart className="text-pink-400/50 w-full h-full fill-current" />
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Landing() {
  const [showJourney, setShowJourney] = useState(false);

  return (
    <AnimatePresence mode="wait">
      {!showJourney ? (
        <motion.section
          key="landing"
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" as any }}
          className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC] overflow-hidden"
        >
          <FloatingParticles />

          {/* Soft Bokeh glowing spots */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" as any }}
            className="absolute top-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" as any, delay: 2 }}
            className="absolute bottom-1/4 right-1/3 w-[30rem] h-[30rem] bg-cyan-300 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" as any, delay: 0.5 }}
            className="relative z-10 flex flex-col items-center text-center p-6"
          >
            <h1 className="font-script text-5xl md:text-7xl text-gray-800 drop-shadow-sm mb-8 font-bold">
              A Letter To The Heart ❤️
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-700/90 mb-12 max-w-lg leading-relaxed font-medium">
              Every detail, every gradient, every word here was crafted just for you.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ boxShadow: ["0px 0px 0px rgba(236,72,153,0)", "0px 0px 30px rgba(236,72,153,0.5)", "0px 0px 0px rgba(236,72,153,0)"] }}
              transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
              onClick={() => setShowJourney(true)}
              className="px-8 py-4 bg-white/40 backdrop-blur-md border border-white/60 rounded-full text-pink-600 font-semibold text-lg shadow-xl hover:bg-white/60 transition-colors flex items-center justify-center gap-3 group"
            >
              <span>Click to Open Your Surprise 💌</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                &rarr;
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.section>
      ) : (
        <Journey key="journey" />
      )}
    </AnimatePresence>
  );
}
