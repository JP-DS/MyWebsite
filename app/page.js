'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Jiaran 👋
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-slate-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Data scientist, explorer, and builder of beautiful things with code and curiosity.
        </motion.p>
      </div>
    </main>
  );
}