"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, Clock, Star, Quote } from "lucide-react";
import SurpriseCard from "./SurpriseCard";

const fadeInUp = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
}

export default function Journey() {
  const [showSurprise, setShowSurprise] = useState(false);

  if (showSurprise) {
    return <SurpriseCard />;
  }

  return (
    <div className="min-h-screen bg-transparent text-gray-800 w-full overflow-x-hidden pt-20 pb-32">

      {/* Welcome Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="mb-8"
        >
          <Heart className="w-16 h-16 text-rose-500 fill-rose-500" />
        </motion.div>
        <h2 className="font-script text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Hello Aryan ❤️...<br />Happy Birthday 🎂
        </h2>
        <p className="font-sans text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
          This is a journey through our memories, a testament to what we share. Scroll down to see what you mean to me.
        </p>
      </motion.section>

      {/* Our Story Timeline */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 px-4 max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-center gap-3 mb-16">
          <Clock className="text-pink-500 w-8 h-8" />
          <h3 className="font-script text-4xl font-bold text-gray-900">Our Story</h3>
        </div>

        <div className="relative border-l-4 border-pink-200 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-16">

          <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12 ml-auto md:ml-0 text-left md:text-right">
            <div className="absolute left-[-11px] md:right-[-14px] md:left-auto top-1 w-6 h-6 rounded-full bg-pink-400 border-4 border-[#FFDEE9]" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">How It Started</h4>
            <p className="text-gray-700">We met online, two souls crossing paths in the vast digital space. Late-night texts quickly became the highlight of my day.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative pl-8 md:pl-12 md:w-1/2 ml-auto">
            <div className="absolute left-[-11px] md:left-[-14px] top-1 w-6 h-6 rounded-full bg-pink-400 border-4 border-[#FFDEE9]" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">Two Years of Knowing You</h4>
            <p className="text-gray-700">A bond that grew deeper with every conversation. Time flew by, but every memory we created feels eternal.</p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative pl-8 md:pl-0 md:w-1/2 md:pr-12 ml-auto md:ml-0 text-left md:text-right">
            <div className="absolute left-[-11px] md:right-[-14px] md:left-auto top-1 w-6 h-6 rounded-full bg-pink-400 border-4 border-[#FFDEE9]" />
            <h4 className="text-xl font-bold text-gray-900 mb-2">11th March 2025</h4>
            <p className="text-gray-700 font-medium">The day we officially became 'us'. The beginning of our beautiful forever.</p>
          </motion.div>

        </div>
      </motion.section>

      {/* About Aryan Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="py-20 px-4 bg-white/30 backdrop-blur-sm"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <Star className="text-yellow-500 w-8 h-8 fill-yellow-500" />
            <h3 className="font-script text-4xl font-bold text-gray-900">About the Boy I Love</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -10 }} className="bg-white/60 p-8 rounded-3xl shadow-lg border border-white/50">
              <h4 className="text-2xl font-script font-bold text-rose-500 mb-3">Playful & Funny</h4>
              <p className="text-gray-700 leading-relaxed text-sm">The spark that makes my life bright. Your humor can instantly turn my worst days into beautiful moments.</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-white/60 p-8 rounded-3xl shadow-lg border border-white/50">
              <h4 className="text-2xl font-script font-bold text-rose-500 mb-3">Loving & Calm</h4>
              <p className="text-gray-700 leading-relaxed text-sm">You are the anchor in my storm. Your patience and warmth make me feel incredibly safe.</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="bg-white/60 p-8 rounded-3xl shadow-lg border border-white/50">
              <h4 className="text-2xl font-script font-bold text-rose-500 mb-3">Deep Thinker</h4>
              <p className="text-gray-700 leading-relaxed text-sm">A beautiful mind that sees the world differently. I love getting lost in your deep perspectives.</p>
            </motion.div>
          </div>

          <motion.div variants={fadeInUp} className="mt-16 bg-white/40 p-8 md:p-12 rounded-3xl shadow-lg relative border border-rose-200">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-rose-300 opacity-50" />
            <p className="font-script text-3xl md:text-4xl leading-relaxed text-center text-rose-900 relative z-10 px-8">
              "In you, I found a playful spirit that makes my heart laugh and a calm soul where my thoughts find rest. You are the perfect symphony of joy and depth, a melody I choose to listen to every single day."
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* What You Mean To Me */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
        className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20"
      >
        <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500 mb-8 leading-tight">
          You are comfort,<br />you are peace,
        </h3>
        <p className="text-2xl md:text-4xl font-bold text-gray-800 mb-16 px-4">
          and you feel like home even across the distance.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowSurprise(true)}
          className="px-10 py-5 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full font-bold text-xl shadow-xl hover:shadow-rose-400/50 transition-all flex items-center justify-center gap-3 group"
        >
          <span>A Gift For You 🎁</span>
        </motion.button>
      </motion.section>

    </div>
  );
}
