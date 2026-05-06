"use client";
import { createContext, useContext, useState, type ReactNode } from "react";

interface DemoModeContextType {
  isDemo: boolean;
  toggle: () => void;
}

const DemoModeContext = createContext<DemoModeContextType>({
  isDemo: true,
  toggle: () => {},
});

export function useDemoMode() {
  return useContext(DemoModeContext);
}

export default function DemoModeProvider({ children }: { children: ReactNode }) {
  const [isDemo, setIsDemo] = useState(true);
  return (
    <DemoModeContext.Provider value={{ isDemo, toggle: () => setIsDemo((v) => !v) }}>
      {children}
    </DemoModeContext.Provider>
  );
}
