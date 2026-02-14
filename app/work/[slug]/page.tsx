import { projects } from "../../../lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Roboto_Mono,
  Montserrat,
  Grand_Hotel,
  Bebas_Neue,
} from "next/font/google";
import Ticker from "@/components/ticker";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["900"],
  style: ["italic"],
});

const grandHotel = Grand_Hotel({
  weight: "400",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const fontClassName =
    project.font === "GrandHotel"
      ? grandHotel.className
      : project.font === "Montserrat"
        ? montserrat.className
        : "";

  return (
    <div
      className={`min-h-screen bg-[rgb(227,225,220)] text-[#1A1A1A] font-sans selection:bg-black selection:text-white`}
    >
      <div className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-none">
        <div
          className={`${robotoMono.className} text-xs tracking-widest uppercase pointer-events-auto`}
        >
          Collection of Work
        </div>
        <Ticker
          className={`${robotoMono.className} font-light text-xs bg-black text-white hover:bg-white hover:text-black transition-colors pointer-events-auto cursor-pointer`}
        >
          <Link
            href="/#projects"
            className={`${robotoMono.className} uppercase`}
          >
            Close Project
          </Link>
        </Ticker>
      </div>

      <main className="pt-32 px-6 pb-20 max-w-[1800px] mx-auto">
        <h1
          className={`${bebasNeue.className} text-[15vw] leading-[0.8] text-center uppercase mb-12 break-words`}
        >
          {project.name}
        </h1>

        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-4 ${robotoMono.className}`}
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              [Deliverables]
            </span>
            <span className="text-sm font-medium uppercase">
              {project.deliverables}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              [Studio]
            </span>
            <span className="text-sm font-medium uppercase">
              {project.studio}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              [Role]
            </span>
            <span className="text-sm font-medium uppercase">
              {project.role}
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[10px] uppercase tracking-widest opacity-60">
              [TECH STACK]
            </span>
            <span className="text-sm font-medium uppercase">
              {project.services}
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center gap-12 mb-16 md:mb-32 px-2 md:px-6">
          <div className="w-full max-w-5xl">
            <p
              className={`text-xl md:text-4xl mb-12 md:mb-24 font-sans text-center mt-10 leading-relaxed`}
            >
              {project.overview}
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20">
              {project.metrics.map((metric, i) => (
                <div key={i} className="flex flex-col gap-2 items-center md:items-start text-center md:text-left">
                  <span
                    className={`${bebasNeue.className} text-6xl md:text-8xl tracking-tighter`}
                  >
                    {metric.value}
                  </span>
                  <span
                    className={`${robotoMono.className} text-xs tracking-widest uppercase opacity-60`}
                  >
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
