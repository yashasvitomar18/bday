"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Gift, Heart } from "lucide-react";
import Footer from "./Footer";

export default function SurpriseCard() {
  const [flipped, setFlipped] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleFlip = () => {
    if (!flipped) {
      setFlipped(true);
      if (audioRef.current) {
        audioRef.current.volume = 0.5;
        audioRef.current.play().catch(e => console.log("Audio play prevented:", e));
      }
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative bg-gradient-to-br from-[#FFDEE9] to-[#B5FFFC] overflow-hidden">
      
      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="https://assets.mixkit.co/music/preview/mixkit-romantic-piano-and-strings-475.mp3" loop />

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative [perspective:1000px] w-[90%] max-w-sm lg:max-w-md aspect-[3/4] cursor-pointer z-10"
        onClick={handleFlip}
      >
        <motion.div
          className="w-full h-full relative [transform-style:preserve-3d]"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 60, damping: 15 }}
        >
          {/* Card Front */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-2xl flex flex-col items-center justify-center p-8 group">
             <motion.div 
                animate={{ scale: [1, 1.1, 1] }} 
                transition={{ repeat: Infinity, duration: 2 }}
             >
                <div className="w-24 h-24 bg-gradient-to-tr from-rose-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Gift className="w-12 h-12 text-white" />
                </div>
             </motion.div>
             <h3 className="font-script text-4xl font-bold mt-8 text-rose-600">Open Me 🎁</h3>
             <p className="font-sans text-gray-700 mt-4 text-center font-medium opacity-70">Tap to reveal your surprise</p>
          </div>

          {/* Card Back */}
          <div 
            className="absolute inset-0 [backface-visibility:hidden] rounded-3xl bg-white/50 backdrop-blur-xl border border-rose-200 shadow-2xl flex flex-col items-center justify-center p-8 text-center [transform:rotateY(180deg)] overflow-hidden"
          >
             <div className="absolute top-0 right-0 -m-8 w-32 h-32 bg-pink-300/30 rounded-full blur-2xl pointer-events-none" />
             <div className="absolute bottom-0 left-0 -m-8 w-32 h-32 bg-cyan-300/30 rounded-full blur-2xl pointer-events-none" />
             
             <Heart className="w-16 h-16 text-rose-500 fill-rose-500 mb-6 relative z-10" />
             <p className="font-script text-3xl md:text-4xl leading-relaxed text-gray-800 relative z-10">
               My dearest Aryan,<br/><br/>
               Distance means so little when someone means so much. Happy Birthday, my love.
             </p>
             <p className="font-sans font-bold text-rose-600 mt-8 relative z-10">Forever Yours ❤️</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 w-full z-20">
         <Footer visible={flipped} />
      </div>

    </div>
  );
}
