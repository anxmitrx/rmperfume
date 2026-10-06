"use client";

import { useEffect, useState, createContext, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingContextType {
  isLoading: boolean;
  triggerLoading: (duration?: number) => void;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  triggerLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initial page load simulation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const triggerLoading = (duration = 2000) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, duration);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, triggerLoading }}>
      {children}
      <LoadingScreenOverlay isLoading={isLoading} />
    </LoadingContext.Provider>
  );
}

function LoadingScreenOverlay({ isLoading }: { isLoading: boolean }) {
  const pathVariants: any = {
    hidden: { 
      pathLength: 0, 
      fill: "rgba(26, 26, 26, 0)",
      strokeOpacity: 0 
    },
    visible: { 
      pathLength: 1, 
      fill: "rgba(26, 26, 26, 0)",
      strokeOpacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      }
    },
    filled: {
      fill: "rgba(26, 26, 26, 1)",
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
        delay: 0.8 
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#F5F0E6] flex items-center justify-center"
        >
          <div className="flex items-center gap-6 md:gap-10">
            {/* Circle */}
            <motion.svg 
              width="80" height="80" viewBox="0 0 100 100" 
              className="w-12 h-12 md:w-20 md:h-20"
            >
              <motion.circle 
                cx="50" cy="50" r="40" 
                stroke="#1A1A1A" strokeWidth="8"
                variants={pathVariants}
                initial="hidden"
                animate={["visible", "filled"]}
              />
            </motion.svg>

            {/* Rounded Square */}
            <motion.svg 
              width="80" height="80" viewBox="0 0 100 100" 
              className="w-12 h-12 md:w-20 md:h-20"
            >
              <motion.rect 
                x="15" y="15" width="70" height="70" rx="20" 
                stroke="#1A1A1A" strokeWidth="8"
                variants={pathVariants}
                initial="hidden"
                animate={["visible", "filled"]}
              />
            </motion.svg>

            {/* Rounded Hexagon */}
            <motion.svg 
              width="80" height="80" viewBox="0 0 100 100" 
              className="w-12 h-12 md:w-20 md:h-20"
            >
              <motion.path 
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" 
                stroke="#1A1A1A" strokeWidth="8"
                strokeLinejoin="round"
                variants={pathVariants}
                initial="hidden"
                animate={["visible", "filled"]}
              />
            </motion.svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
