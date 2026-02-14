"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface TickerProps {
  children: ReactNode;
  className?: string;
}

export default function Ticker({ children, className = "" }: TickerProps) {
  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={`relative overflow-hidden cursor-pointer h-[1.5em] ${className}`}
    >
      <span className="invisible opacity-0" aria-hidden="true">
        {children}
      </span>
      <motion.p
        variants={{
          initial: { y: "0%" },
          hover: { y: "-100%" },
        }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 w-full"
      >
        {children}
      </motion.p>
      <motion.p
        variants={{
          initial: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="absolute top-0 left-0 w-full"
      >
        {children}
      </motion.p>
    </motion.div>
  );
}
