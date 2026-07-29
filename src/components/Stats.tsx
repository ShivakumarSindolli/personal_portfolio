import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 4, suffix: "", label: "Full-stack & ML projects shipped" },
  { value: 84, suffix: "%", label: "Honest AQI model accuracy" },
  { value: 20, suffix: "+", label: "Technologies used across projects" },
  { value: 4, suffix: "th", label: "Semester, CS Engineering" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const start = performance.now();
    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      setDisplay(Math.floor(progress * value));
      if (progress < 1) requestAnimationFrame(tick);
      else setDisplay(value);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-stroke bg-bg py-12 sm:py-16 md:py-20">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-4 sm:gap-8 sm:px-6 md:grid-cols-4 md:px-10 lg:px-16">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <p className="font-display text-3xl italic text-text-primary sm:text-4xl md:text-6xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-1 text-[10px] text-muted sm:mt-2 sm:text-xs md:text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
