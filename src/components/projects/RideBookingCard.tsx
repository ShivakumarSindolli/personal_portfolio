import { motion } from "framer-motion";
import { rideBookingProject } from "@/data/projects";

export default function RideBookingCard({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="col-span-1 flex flex-col overflow-hidden rounded-3xl border border-stroke bg-surface p-6 md:col-span-6"
        >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Java · OOP</p>
            <h3 className="mt-2 font-display text-2xl italic text-text-primary">
                {rideBookingProject.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{rideBookingProject.description}</p>

            {/* Animated map / route */}
            <div className="relative mt-8 h-40 overflow-hidden rounded-2xl border border-stroke bg-bg/40">
                <div
                    className="absolute inset-0 opacity-[0.15]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                        backgroundSize: "18px 18px",
                    }}
                />

                <svg viewBox="0 0 300 160" className="absolute inset-0 h-full w-full">
                    <path
                        id="ride-route"
                        d="M 30 130 C 90 40, 160 150, 270 40"
                        fill="none"
                        stroke="url(#route-gradient)"
                        strokeWidth="2.5"
                        strokeDasharray="6 6"
                    />
                    <defs>
                        <linearGradient id="route-gradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#89aacc" />
                            <stop offset="100%" stopColor="#4e85bf" />
                        </linearGradient>
                    </defs>
                    <circle cx="30" cy="130" r="5" fill="#89aacc" />
                    <circle cx="270" cy="40" r="5" fill="#4e85bf" />

                    {/* animated car moving along the path */}
                    <circle r="4.5" fill="#fff">
                        <animateMotion dur="4s" repeatCount="indefinite" rotate="auto">
                            <mpath href="#ride-route" />
                        </animateMotion>
                    </circle>
                </svg>

                <span className="absolute bottom-3 left-4 text-[10px] uppercase tracking-widest text-muted">
                    {rideBookingProject.route.pickup}
                </span>
                <span className="absolute right-4 top-3 text-[10px] uppercase tracking-widest text-muted">
                    {rideBookingProject.route.destination}
                </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {rideBookingProject.tech.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-stroke px-3 py-1 text-[11px] uppercase tracking-wider text-muted"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-muted">
                {rideBookingProject.architecture.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-stroke px-2.5 py-1 text-text-primary">{step}</span>
                        {i < rideBookingProject.architecture.length - 1 && <span>↓</span>}
                    </span>
                ))}
            </div>

            {/* OOP visualization */}
            <div className="mt-6 grid grid-cols-2 gap-3">
                {rideBookingProject.oop.map((p) => (
                    <div key={p.name} className="rounded-xl border border-stroke p-3">
                        <p className="font-display text-sm italic text-text-primary">{p.name}</p>
                        <p className="mt-1 text-[11px] leading-relaxed text-muted">{p.explanation}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
                <button
                    onClick={onOpenCaseStudy}
                    className="rounded-full bg-text-primary px-6 py-3 text-sm text-bg transition-transform duration-300 hover:scale-105"
                >
                    View Project
                </button>

                <a
                    href="#"
                    className="rounded-full border border-stroke px-6 py-3 text-sm text-muted transition-colors hover:border-white/30 hover:text-text-primary"
                >
                    GitHub
                </a>
            </div>
    </motion.div >
  );
}