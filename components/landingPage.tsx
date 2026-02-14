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
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-220 flex justify-center align-center rounded-sm"
      >
        <p className="text-7xl">
          COMPUTER SCIENCE STUDENT AT{" "}
          <span className={`bg-[#6B7C63] inline-block px-2`}>
            UNIVERSITY OF ALBERTA
          </span>
        </p>
      </motion.div>

      <div className="flex justify-end mt-30">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-180 rounded-sm"
        >
          <p className="text-7xl text-right">
            BUILDING SOFTWARE THAT FEELS{" "}
            <span className={`${DancingScript.className} text-[#FCF7C0]`}>
              SIMPLE
            </span>{" "}
            BECAUSE IT IS WELL ENGINEERED
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-180 flex justiy-center items-center w-full text-center px-40 mt-30"
      >
        <p className={`${RobotoMono.className} font-light text-sm leading-8`}>
          I <span className="font-bold text-[#FCF7C0]">love</span> building
          distributed systems and pushing myself beyond the limits to grow my
          knowledge. Simplicity is what carries me as aspired by Steve Jobs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: true }}
        className={`${RobotoMono.className} flex w-full justify-between items-center mt-30 text-sm font-light`}
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
