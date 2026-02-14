"use client";

import { motion } from "framer-motion";
import { Roboto_Mono, Pinyon_Script } from "next/font/google";

const RobotoMono = Roboto_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const PinyonScript = Pinyon_Script({
  weight: "400",
});

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-[#1F1D1B] flex flex-col justify-between p-10 md:p-20 text-[#FDFDFD]">
      {/* Main Content */}
      <div className="flex-grow flex flex-col justify-center items-start gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className={`${RobotoMono.className} text-[#FCF7C0] mb-4 text-sm`}>
            [WHATS NEXT?]
          </p>
          <h2 className="text-6xl md:text-9xl font-bold">
            LET'S WORK <br />
            <span
              className={`${PinyonScript.className} italic font-light text-[#FCF7C0]`}
            >
              Together
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 mt-10"
        >
          <a
            href="mailto:tusharlanghnoda@gmail.com"
            className={`${RobotoMono.className} text-xl md:text-3xl hover:text-[#FCF7C0] transition-colors border-b border-white/20 pb-2 inline-block`}
          >
            tusharlanghnoda@gmail.com
          </a>

          <div
            className={`${RobotoMono.className} flex gap-8 text-sm md:text-base text-white/60 mt-4`}
          >
            {[
              {
                key: "LINKEDIN",
                link: "https://www.linkedin.com/in/tushar-langhnoda-7681aa385/",
              },
              { key: "GITHUB", link: "https://github.com/tusharlangh" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="hover:text-white transition-colors relative group"
              >
                {item.key}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FCF7C0] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="flex justify-between items-end border-t border-white/10 pt-10"
      >
        <div className={`${RobotoMono.className} text-xs text-white/40 `}>
          © 2026 TUSHAR LANGHNODA. BUILT WITH LOVE
        </div>
      </motion.div>
    </div>
  );
}
