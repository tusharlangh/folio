"use client";

import { motion } from "framer-motion";

import { Dancing_Script, Roboto_Mono } from "next/font/google";

const DancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
});

const RobotoMono = Roboto_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function LandingPage() {
  return (
    <div className="text-white mt-50 px-4 pb-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-4xl mx-auto flex justify-center lg:justify-start align-center rounded-sm"
      >
        <p className="text-4xl md:text-7xl text-center lg:text-left">
          COMPUTER SCIENCE STUDENT AT{" "}
          <span className={`bg-[#6B7C63] inline-block px-2`}>
            UNIVERSITY OF ALBERTA
          </span>
        </p>
      </motion.div>

      <div className="flex justify-center lg:justify-end mt-20 lg:mt-30 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: 100, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-3xl rounded-sm"
        >
          <p className="text-4xl md:text-7xl text-center lg:text-right">
            BUILDING SOFTWARE THAT FEELS{" "}
            <span className={`${DancingScript.className} text-[#FCF7C0]`}>
              SIMPLE
            </span>{" "}
            BECAUSE IT IS WELL ENGINEERED
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex justify-center items-center w-full text-center px-4 md:px-40 mt-20 lg:mt-30 mx-auto max-w-6xl"
      >
        <p
          className={`${RobotoMono.className} font-light text-sm md:text-base leading-6 md:leading-8`}
        >
          I <span className="font-bold text-[#FCF7C0]">love</span> building
          distributed systems and pushing myself beyond the limits to grow my
          knowledge. Simplicity is what carries me as aspired by Steve Jobs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className={`${RobotoMono.className} flex w-full flex-col md:flex-row justify-between items-center mt-20 lg:mt-30 gap-4 text-sm font-light`}
      >
        {["[NICE TO MEET YOU]", "[SCROLL DOWN]", "[GOOD TO SEE YOU]"].map(
          (text, i) => (
            <motion.p key={i} className="text-xs">
              {text}
            </motion.p>
          ),
        )}
      </motion.div>
    </div>
  );
}
