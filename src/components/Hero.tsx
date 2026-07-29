import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import HlsVideo from "@/components/HlsVideo";

const ROLES = ["Full-Stack Developer", "ML Engineer", "CS Student", "Builder"];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".photo-reveal",
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.05 }
      )
        .fromTo(
          ".name-reveal",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2 },
          0.15
        )
        .fromTo(
          ".blur-in",
          { opacity: 0, filter: "blur(10px)", y: 20 },
          { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 },
          0.3
        );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pt-20 pb-24 sm:px-6"
    >
      {/* Background video */}
      <div className="absolute inset-0 overflow-hidden">
        <HlsVideo />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="blur-in mb-6 text-[10px] uppercase tracking-[0.3em] text-muted sm:mb-8 sm:text-xs">
          Portfolio &apos;26
        </p>

        {/* Profile photo */}
        <div className="photo-reveal group relative mb-6 sm:mb-8">
          {/* Animated gradient ring */}
          <div className="absolute -inset-[3px] rounded-full gradient-border-anim opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
          {/* Soft glow behind the photo */}
          <div className="absolute -inset-4 rounded-full bg-[#4e85bf]/15 blur-2xl transition-all duration-500 group-hover:bg-[#4e85bf]/25 group-hover:-inset-6" />
          {/* Photo container */}
          <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-bg sm:h-44 sm:w-44 md:h-52 md:w-52">
            <img
              src="/shivu.jpeg"
              alt="Shivakumar A Sindolli"
              className="h-full w-full scale-[1.35] object-cover transition-transform duration-700 group-hover:scale-150"
            />
          </div>
          {/* Status dot */}
          <span className="absolute bottom-1 right-1 flex h-4 w-4 sm:h-5 sm:w-5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-bg bg-emerald-400" />
          </span>
        </div>

        <h1 className="name-reveal mb-4 font-display text-[2.75rem] italic leading-[0.9] tracking-tight text-text-primary sm:mb-6 sm:text-6xl md:text-8xl lg:text-9xl">
          Shivakumar A
          <br />
          Sindolli
        </h1>

        <p className="blur-in mb-8 max-w-sm text-sm text-muted sm:mb-12 sm:max-w-lg md:text-base">
          A{" "}
          <span key={roleIndex} className="inline-block animate-role-fade-in font-display italic text-text-primary">
            {ROLES[roleIndex]}
          </span>{" "}
          studying in Belagavi, India.
        </p>

        <p className="blur-in mb-8 max-w-xs text-sm text-muted sm:mb-12 sm:max-w-md md:text-base">
          Building scalable software, AI-powered applications, and immersive
          web experiences with modern technologies.
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <a
            href="#work"
            className="group relative rounded-full px-6 py-3 text-sm transition-transform duration-300 hover:scale-105 sm:px-7 sm:py-3.5"
          >
            <span className="absolute inset-0 rounded-full bg-text-primary transition-opacity duration-300 group-hover:opacity-0" />
            <span className="accent-gradient absolute inset-0 rounded-full opacity-0 p-[2px] transition-opacity duration-300 group-hover:opacity-100">
              <span className="block h-full w-full rounded-full bg-bg" />
            </span>
            <span className="relative text-bg transition-colors duration-300 group-hover:text-text-primary">
              See Works
            </span>
          </a>

          <a
            href="#contact"
            className="group relative rounded-full border-2 border-stroke bg-bg px-6 py-3 text-sm text-text-primary transition-all duration-300 hover:scale-105 hover:border-transparent sm:px-7 sm:py-3.5"
          >
            <span className="accent-gradient absolute inset-0 -z-10 rounded-full p-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            Reach out&hellip;
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 sm:bottom-8">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">Scroll</span>
        <span className="relative h-8 w-px overflow-hidden bg-stroke sm:h-10">
          <span className="absolute inset-x-0 top-0 h-1/3 animate-scroll-down bg-text-primary" />
        </span>
      </div>
    </section>
  );
}
