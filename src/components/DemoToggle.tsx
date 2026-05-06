"use client";
import { useDemoMode } from "./DemoModeProvider";
import { motion, AnimatePresence } from "framer-motion";

export default function DemoToggle() {
  const { isDemo, toggle } = useDemoMode();

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed top-1/2 -translate-y-1/2 right-4 z-[60] flex flex-col items-center gap-3"
    >
      {/* Label */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isDemo ? "demo" : "live"}
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          className={`text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full ${
            isDemo
              ? "bg-steel text-white"
              : "bg-emerald-500 text-white"
          }`}
        >
          {isDemo ? "Demo" : "Live"}
        </motion.div>
      </AnimatePresence>

      {/* Toggle switch */}
      <button
        onClick={toggle}
        className={`relative w-14 h-8 rounded-full transition-colors duration-300 shadow-lg border ${
          isDemo
            ? "bg-steel/90 border-steel-light/30"
            : "bg-emerald-500/90 border-emerald-400/30"
        }`}
        aria-label={isDemo ? "Switch to live site view" : "Switch to demo view"}
      >
        <motion.div
          className="absolute top-1 w-6 h-6 rounded-full bg-white shadow-md"
          animate={{ left: isDemo ? 4 : 30 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </button>

      {/* Description */}
      <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 px-3 py-2 max-w-[140px] text-center">
        <p className="text-[9px] text-gray-500 leading-tight">
          {isDemo
            ? "Viewing with marketing demos"
            : "Viewing live site only"}
        </p>
      </div>
    </motion.div>
  );
}
