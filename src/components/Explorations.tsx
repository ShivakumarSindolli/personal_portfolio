import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { explorations } from "@/data/explorations";
import SectionHeader from "@/components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only apply parallax on larger screens to avoid jank on mobile
    const mm = gsap.matchMedia();

    mm.add("(min-width: 640px)", () => {
      const ctx = gsap.context(() => {
        tileRefs.current.forEach((tile, i) => {
          if (!tile) return;
          const depth = (i % 3) - 1; // -1, 0, 1 -> different parallax speeds
          gsap.fromTo(
            tile,
            { y: 60 * (depth === 0 ? 1 : depth) },
            {
              y: -60 * (depth === 0 ? 1 : depth),
              ease: "none",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top bottom",
                end: "bottom top",
                scrub: 0.6,
              },
            }
          );
        });
      }, sectionRef);
      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="explorations" ref={sectionRef} className="overflow-hidden bg-bg py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Explorations"
          heading="The visual"
          italicWord="playground"
          subtext="Tools, techniques, and ideas I keep coming back to."
        />
      </div>

      <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-2 gap-3 px-4 sm:mt-14 sm:grid-cols-3 sm:gap-4 sm:px-6 md:px-10 lg:grid-cols-6 lg:px-16">
        {explorations.map((item, i) => (
          <div
            key={item.label}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            className="flex aspect-square flex-col items-center justify-center rounded-xl border border-stroke bg-surface p-3 text-center sm:aspect-[3/4] sm:rounded-2xl sm:p-4"
            style={{ transform: `rotate(${item.rotate}deg)` }}
          >
            <p className="font-display text-base italic text-text-primary sm:text-lg">{item.label}</p>
            <p className="mt-1 text-[10px] text-muted sm:mt-2 sm:text-xs">{item.sublabel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
