import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["Design", "Build", "Ship"];
const DURATION = 2700;

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    function tick(timestamp: number) {
      if (startRef.current === null) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / DURATION, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(onComplete, 400);
      }
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-between bg-bg px-4 py-4 sm:px-6 sm:py-6 md:px-10 md:py-8">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-xs uppercase tracking-[0.3em] text-muted"
      >
        Portfolio
      </motion.p>

      <div className="flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="font-display text-3xl italic text-text-primary/80 sm:text-4xl md:text-6xl lg:text-7xl"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex items-end justify-between">
        <div className="h-[2px] w-1/2 max-w-md rounded-full bg-stroke/50 sm:h-[3px] sm:w-2/3 md:w-3/4">
          <div
            className="h-full rounded-full accent-gradient origin-left transition-transform duration-100 ease-linear"
            style={{
              transform: `scaleX(${count / 100})`,
              boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
            }}
          />
        </div>
        <p className="font-display tabular-nums text-4xl text-text-primary sm:text-6xl md:text-8xl lg:text-9xl">
          {String(count).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
}
