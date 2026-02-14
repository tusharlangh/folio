"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Roboto_Mono, Pinyon_Script } from "next/font/google";

const RobotoMono = Roboto_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const PinyonScript = Pinyon_Script({
  weight: "400",
});

const skills = [
  {
    category: "LANGUAGES",
    items:
      "TypeScript, Python, JavaScript, C, SQL (PostgreSQL, MySQL), HTML/CSS",
  },
  {
    category: "CLOUD & INFRA",
    items:
      "AWS (Lambda, S3, ECR, API Gateway, ALB), Docker, Serverless Framework",
  },
  {
    category: "FRAMEWORKS",
    items: "React, Next.js, Node.js, React Native, Flask, FastAPI",
  },
  {
    category: "AI & DATA",
    items:
      "Qdrant (Vector DB), Redis, PostgreSQL, OpenAI API, LangChain, PyMuPDF",
  },
  {
    category: "TOOLS",
    items: "Grafana, Git, Axiom (Observability), Postman, Linux",
  },
];

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150); // Center the card
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      id="tech-stack"
      className="relative min-h-screen bg-[#575943] flex items-center justify-center py-20 overflow-hidden"
    >
      <div className="max-w-[90vw] w-full grid grid-cols-1 md:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-10"
        >
          <h2 className="text-[#FDFDFD] text-6xl md:text-7xl font-bold">
            QUIETLY{" "}
            <span className={`${PinyonScript.className} italic font-light`}>
              powerful
            </span>{" "}
            <br />
            TECHNICAL <br />
            FOUNDATION
          </h2>

          <div className="max-w-md">
            <p
              className={`${RobotoMono.className} text-[#FCF7C0]/80 text-sm leading-relaxed`}
            >
              My goal is to build software that is robust, scalable, and
              intuitive. Bridging the gap between complex backend logic and
              seamless user experiences.
            </p>
          </div>

          <div className="pt-10">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <span className="bg-[#FCF7C0] text-[#1F1D1B] px-6 py-3 font-bold text-sm tracking-wider cursor-pointer hover:bg-white transition-colors">
                FULL RESUME
              </span>
            </a>
          </div>
        </motion.div>

        <div className="flex flex-col justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative border-t border-white/20 py-8 group cursor-pointer transition-colors duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3
                className={`text-4xl md:text-5xl font-bold transition-colors duration-300 ${
                  hoveredIndex !== null && hoveredIndex !== index
                    ? "text-white/20"
                    : "text-[#FDFDFD]"
                }`}
              >
                {skill.category}
              </h3>
            </motion.div>
          ))}
          <div className="border-t border-white/20" />
        </div>
      </div>

      <motion.div
        style={{ x, y }}
        className="fixed top-0 left-0 w-[300px] h-[300px] pointer-events-none z-50 mix-blend-difference"
      >
        {hoveredIndex !== null && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full bg-[#FCF7C0] text-[#1F1D1B] p-8 flex items-center justify-center text-center"
          >
            <p className={`${RobotoMono.className} font-bold text-lg`}>
              {skills[hoveredIndex].items}
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
