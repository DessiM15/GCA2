"use client";
import { motion } from "framer-motion";
import { useTranslation } from "@/i18n";

export default function ClickToCall() {
  const { t } = useTranslation();

  return (
    <motion.a
      href="tel:+18322599102"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300, damping: 20 }}
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-steel shadow-lg shadow-steel/30 flex items-center justify-center hover:bg-steel-light hover:shadow-xl hover:scale-110 transition-all group"
      aria-label={t("clickToCall.label")}
    >
      <svg
        className="h-6 w-6 text-white group-hover:animate-pulse"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
      {/* Tooltip */}
      <span className="absolute right-full mr-3 whitespace-nowrap bg-navy text-white text-xs font-medium px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        {t("clickToCall.tooltip")}
      </span>
    </motion.a>
  );
}
