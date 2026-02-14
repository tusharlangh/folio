"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Roboto_Mono, Montserrat, Grand_Hotel } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/data";

const MontserratFont = Montserrat({
  style: ["italic"],
  weight: ["900"],
});

const GrandHotel = Grand_Hotel({
  weight: "400",
});

const RobotoMono = Roboto_Mono({
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.5],
    [0.8, 1, 1, 0.8],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.35, 0.5],
    [0, 1, 1, 0],
  );
  const cardOpacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  return (
    <div
      id="projects"
      ref={containerRef}
      className="relative min-h-[400vh] bg-[rgb(227,225,220)]"
    >
      <div className="sticky top-0 w-full h-screen flex justify-center items-center overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10"
        >
          <div
            className="text-[rgb(46,46,46)] font-bold"
            style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
          >
            FEATURED
          </div>
          <div className="rotate-0 md:rotate-270 text-sm md:text-xl text-[rgb(133,115,62)] tracking-widest whitespace-nowrap">
            [PORTFOLIO/CREATIVE]
          </div>
          <div
            className="text-[rgb(46,46,46)] font-bold"
            style={{ fontSize: "clamp(3rem, 10vw, 12rem)" }}
          >
            PROJECTS
          </div>
        </motion.div>
      </div>

      <motion.div
        style={{ opacity: cardOpacity }}
        className="mt-200 relative z-10 flex flex-col items-center gap-40 -mt-[20vh] pb-60"
      >
        {projects.map((project, i) => {
          const font =
            project.font === "GrandHotel"
              ? GrandHotel.className
              : MontserratFont.className;

          return (
            <Link href={`/work/${project.slug}`} key={i} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-10%" }}
                className="flex flex-col gap-4 w-[90vw] md:w-[70vw] hover:scale-102 transition-transform duration-500 cursor-pointer"
              >
                <div
                  className={`w-full h-[50vh] md:h-[80vh] bg-white rounded-sm shadow-2xl flex items-center justify-center relative overflow-hidden group`}
                >
                  <div className="absolute inset-0 transition-colors duration-500" />
                  <div className="text-white text-5xl md:text-9xl font-bold">
                    {project.symbol !== "" ? (
                      <p
                        className={`${font} ${project.bg} py-6 px-10 md:px-20 flex justify-center items-center`}
                      >
                        {project.symbol}
                      </p>
                    ) : (
                      <Image
                        src={project.image}
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center text-[rgb(46,46,46)] font-mono text-sm tracking-widest">
                  <span
                    className={`${RobotoMono.className} text-xs font-semibold`}
                  >
                    {project.name}
                  </span>
                  <span
                    className={`${RobotoMono.className} text-xs font-light`}
                  >
                    {project.type}
                  </span>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
