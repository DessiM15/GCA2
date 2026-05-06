"use client";
import { useDemoMode } from "./DemoModeProvider";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

export default function DemoSection({ children }: { children: ReactNode }) {
  const { isDemo } = useDemoMode();

  return (
    <AnimatePresence>
      {isDemo && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
