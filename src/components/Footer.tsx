"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function Footer({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: 1 }}
          className="w-full py-8 text-center bg-gradient-to-t from-white/30 to-transparent"
        >
          <p className="font-script text-2xl md:text-3xl text-gray-800 drop-shadow-sm font-bold px-4">
            I may not have met you yet, but my heart already belongs to you ❤️
          </p>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
