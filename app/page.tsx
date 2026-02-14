import Hero from "@/components/hero";
import LandingPage from "@/components/landingPage";
import Noise from "@/components/noise";
import Particles from "@/components/particles";
import Projects from "@/components/projects";
import TechStack from "@/components/techstack";
import Contact from "@/components/contact";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-[#332E2A]">
      <div>
        <Particles
          className="fixed inset-0 z-1000 pointer-events-none"
          quantity={100}
          ease={80}
          color="#ffffff"
          refresh
        />
        <Noise />
        <Header />

        <Hero />
        <LandingPage />
        <Projects />
        <TechStack />
        <Contact />
      </div>
    </div>
  );
}
