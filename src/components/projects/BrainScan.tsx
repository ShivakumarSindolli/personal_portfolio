import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Brain } from "lucide-react";

// The real loading sequence from NewConsultation.jsx's handleAnalyse():
//   setLoadingStep("Analysing image with Llama 4 Scout Vision…")
//   ...then...
//   setLoadingStep("Processing voice with Whisper STT…")
// with "Processing..." as the JSX fallback (loadingStep || "Processing...").
const LOADING_STEPS = [
  "Processing...",
  "Analysing image with Llama 4 Scout Vision…",
  "Processing voice with Whisper STT…",
];

// Exact tokens from the real app's :root in base.css
const INDIGO = "#4f46e5";
const VIOLET = "#7c3aed";
const EMERALD = "#059669";

export default function BrainScan() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((i) => (i + 1) % LOADING_STEPS.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full flex-col items-center gap-6 py-2 text-center">
      {/* .ai-brain-pulse */}
      <div className="relative grid h-[100px] w-[100px] place-items-center">
        {/* .ai-pulse-ring x3, staggered 0 / 0.6s / 1.2s */}
        {[0, 0.6, 1.2].map((delay) => (
          <span
            key={delay}
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${INDIGO}`,
              opacity: 0,
              animation: "pulseOut 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
              animationDelay: `${delay}s`,
            }}
          />
        ))}

        {/* .ai-scan-line */}
        <span
          className="absolute z-10"
          style={{
            left: "-10%",
            right: "-10%",
            height: 3,
            background: `linear-gradient(90deg, transparent, ${EMERALD}, transparent)`,
            boxShadow: `0 0 12px ${EMERALD}`,
            animation: "scanUpDown 2s linear infinite",
          }}
        />

        {/* .ai-brain-icon */}
        <Brain
          size={48}
          style={{ color: INDIGO, animation: "floatBrain 3s ease-in-out infinite" }}
          className="relative z-[5]"
        />
      </div>

      {/* .ai-loading-text */}
      <div>
        <h3
          className="font-display text-xl italic"
          style={{
            backgroundImage: `linear-gradient(135deg, ${INDIGO}, ${VIOLET})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          AI is analyzing patient data
        </h3>
        <div className="mt-2 h-5">
          <AnimatePresence mode="wait">
            <motion.p
              key={stepIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-muted"
            >
              {LOADING_STEPS[stepIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @keyframes floatBrain {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulseOut {
          0% { transform: scale(0.6); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }
        @keyframes scanUpDown {
          0%, 100% { top: -10px; opacity: 0; }
          10%, 90% { opacity: 1; }
          50% { top: 110%; }
        }
      `}</style>
    </div>
  );
}