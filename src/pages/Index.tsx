import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWorks from "@/components/SelectedWorks";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div
        className={
          isLoading
            ? "pointer-events-none opacity-0"
            : "pointer-events-auto opacity-100 transition-opacity duration-700"
        }
      >
        <Navbar />
        <main className="bg-bg">
          <Hero />
          <Skills />
          <SelectedWorks />
          <Experience />
          <Stats />
          <Contact />
        </main>
      </div>
    </>
  );
}
