"use client";

import { Roboto_Mono } from "next/font/google";
import Ticker from "./ticker";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const RobotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "400", "500", "600"],
});

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 50) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.div
      variants={{
        visible: { y: 0 },
        hidden: { y: "-200%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="z-50 w-full fixed top-2 right-0 left-0 flex justify-between items-top px-4 text-[rgb(231,229,223)] pointer-events-none mix-blend-exclusion"
    >
      <div className="pointer-events-auto">
        <Ticker className="">TL</Ticker>
      </div>
      <div className="pointer-events-auto">
        <ul className="flex flex-col gap-1 relative">
          {[
            { name: "HOME", href: "/" },
            { name: "PROJECTS", href: "#projects" },
            { name: "TECH-STACK", href: "#tech-stack" },
            { name: "CONTACT", href: "#contact" },
          ].map((item, index) => (
            <li key={index} className="">
              <a href={item.href} className="block w-full">
                <Ticker
                  className={`${RobotoMono.className} font-light text-xs`}
                >
                  {item.name}
                </Ticker>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p
        className={`${RobotoMono.className} font-light text-xs pointer-events-auto`}
      >
        [{new Date().getFullYear()}]
      </p>
    </motion.div>
  );
}
