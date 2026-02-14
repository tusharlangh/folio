"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative flex justify-center items-end w-[100vw] h-[100vh] overflow-hidden">
      <div className="relative z-10 flex justify-center items-center text-white">
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
          style={{ fontSize: 180 }}
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
          className="rotate-270 text-xl text-[#FCF7C0]"
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
          className={``}
          style={{ fontSize: 200 }}
        >
          LANGHNODA
        </motion.div>
      </div>
    </div>
  );
}
