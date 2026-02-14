"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-end w-[100vw] h-[100vh] overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center text-white p-4 md:p-0 mb-20">
        <motion.div
          initial={{
            translateY: "20%",
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            translateY: "0%",
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{ duration: 1.75, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18vw] md:text-[12vw] leading-none font-bold"
        >
          TUSHAR
        </motion.div>

        <motion.div
          initial={{
            translateX: "100%",
            opacity: 0,
            filter: "blur(2px)",
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            translateX: "0%",
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{ duration: 1.75 }}
          className="rotate-0 md:rotate-270 text-xs md:text-sm text-[#FCF7C0] tracking-[0.2em] my-4 md:my-0 mx-0 md:mx-6 whitespace-nowrap"
        >
          [PORTFOLIO/CREATIVE]
        </motion.div>

        <motion.div
          initial={{
            translateY: "20%",
            opacity: 0,
            filter: "blur(10px)",
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            translateY: "0%",
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{ duration: 1.75, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-[18vw] md:text-[12vw] leading-none font-bold"
        >
          LANGHNODA
        </motion.div>
      </div>
    </div>
  );
}
