import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AQIGauge({ value = 84 }: { value?: number }) {
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const duration = 1400;
        const start = performance.now();
        function tick(now: number) {
            const progress = Math.min((now - start) / duration, 1);
            setDisplay(Math.floor(progress * value));
            if (progress < 1) requestAnimationFrame(tick);
            else setDisplay(value);
        }
        requestAnimationFrame(tick);
    }, [inView, value]);

    const radius = 54;
    const circumference = Math.PI * radius; // half circle
    const offset = circumference - (display / 100) * circumference;

    return (
        <svg ref={ref} viewBox="0 0 140 80" className="w-full max-w-[180px]">
            <path
                d="M 16 74 A 54 54 0 0 1 124 74"
                fill="none"
                stroke="hsl(var(--stroke))"
                strokeWidth="10"
                strokeLinecap="round"
            />
            <path
                d="M 16 74 A 54 54 0 0 1 124 74"
                fill="none"
                stroke="url(#aqi-gradient)"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                style={{ transition: "stroke-dashoffset 100ms linear" }}
            />
            <defs>
                <linearGradient id="aqi-gradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#89aacc" />
                    <stop offset="100%" stopColor="#4e85bf" />
                </linearGradient>
            </defs>
            <text
                x="70"
                y="62"
                textAnchor="middle"
                className="fill-text-primary font-display italic"
                fontSize="26"
            >
                {display}%
            </text>
            <text x="70" y="76" textAnchor="middle" className="fill-muted" fontSize="8">
                ACCURACY
            </text>
        </svg>
    );
}