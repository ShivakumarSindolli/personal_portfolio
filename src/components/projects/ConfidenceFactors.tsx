import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const FACTORS = [
    { label: "Symptom clarity", weight: 15 },
    { label: "Diagnosis quality", weight: 40 },
    { label: "Vision confidence*", weight: 25 },
    { label: "Hedging penalty", weight: 25 },
    { label: "Referral-flag penalty", weight: 20 },
];

export default function ConfidenceFactors() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 900;
        const start = performance.now();
        function tick(now: number) {
            const p = Math.min((now - start) / duration, 1);
            setProgress(p);
            if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }, [inView]);

    return (
        <div ref={ref} className="w-full">
            <div className="mb-4 flex items-baseline justify-between">
                <p className="font-display text-2xl italic text-text-primary">0.4</p>
                <p className="text-[10px] uppercase tracking-widest text-muted">Escalation threshold</p>
            </div>

            <div className="space-y-3">
                {FACTORS.map((f, i) => (
                    <div key={f.label}>
                        <div className="mb-1 flex justify-between text-[10px] uppercase tracking-wider text-muted">
                            <span>{f.label}</span>
                            <span>{f.weight}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-stroke">
                            <div
                                className="h-full rounded-full"
                                style={{
                                    width: `${f.weight * progress}%`,
                                    background: "linear-gradient(90deg, #89aacc, #4e85bf)",
                                    transitionDelay: `${i * 60}ms`,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <p className="mt-4 text-[10px] leading-relaxed text-muted">
                *Vision confidence weight redistributes across the remaining factors
                when no image is provided.
            </p>
        </div>
    );
}