"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mic, Sparkles, Disc, Users } from "lucide-react";

const categoryIcons: Record<string, React.ReactElement> = {
  Singers: <Mic size={32} className="text-indigo-500 mx-auto mb-2" />,
  Dancers: <Users size={32} className="text-pink-500 mx-auto mb-2" />, // fallback
  Speakers: <Sparkles size={32} className="text-yellow-500 mx-auto mb-2" />,
  DJs: <Disc size={32} className="text-green-500 mx-auto mb-2" />,
};

export default function HomePage() {
  const categories = ["Singers", "Dancers", "Speakers", "DJs"];

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-center mb-10">
        <motion.h1
          className="text-4xl font-extrabold text-gray-900"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome to <span className="text-indigo-600">Artistly.com</span>
        </motion.h1>
        <p className="mt-2 text-gray-600 text-lg">
          Connecting <span className="font-medium text-indigo-500">Event Planners</span> &{" "}
          <span className="font-medium text-pink-500">Artists</span>
        </p>
        <motion.div
          initial={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="inline-block mt-6"
        >
          <Link href="/artists">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold transition hover:bg-indigo-700 shadow">
              🎤 Explore Artists
            </button>
          </Link>
        </motion.div>
      </header>

      <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">Explore Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <motion.div
            key={cat}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="bg-white rounded-xl p-6 text-center shadow-md border hover:shadow-lg transition-all"
          >
            {categoryIcons[cat]}
            <p className="text-lg font-semibold text-gray-800">{cat}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
