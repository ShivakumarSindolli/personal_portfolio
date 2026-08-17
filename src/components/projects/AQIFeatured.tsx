import { useState } from "react";
import { motion } from "framer-motion";
import { aqiProject } from "@/data/projects";
import AQIGauge from "./AQIGauge";
import ParticleField from "./ParticleField";
import { cn } from "@/lib/utils";

export default function AQIFeatured({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
    const [activeStage, setActiveStage] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative col-span-1 overflow-hidden rounded-3xl border border-stroke bg-surface p-6 md:col-span-12 md:p-10"
        >
            <ParticleField />

            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">Machine Learning · Featured</p>
                    <h3 className="mt-2 font-display text-3xl italic text-text-primary md:text-4xl">
                        {aqiProject.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                        {aqiProject.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {aqiProject.tech.map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-stroke px-3 py-1 text-[11px] uppercase tracking-wider text-muted"
                            >
                                {t}
                            </span>
                        ))}
                    </div>

                    {/* Animated pipeline */}
                    <div className="mt-10 flex flex-col gap-2">
                        {aqiProject.pipeline.map((stage, i) => (
                            <div key={stage.label}>
                                <button
                                    onMouseEnter={() => setActiveStage(i)}
                                    onMouseLeave={() => setActiveStage(null)}
                                    onFocus={() => setActiveStage(i)}
                                    onBlur={() => setActiveStage(null)}
                                    className="group flex w-full items-center gap-3 text-left"
                                >
                                    <span
                                        className={cn(
                                            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[11px] transition-colors",
                                            activeStage === i
                                                ? "border-transparent bg-text-primary text-bg"
                                                : "border-stroke text-muted"
                                        )}
                                    >
                                        {i + 1}
                                    </span>
                                    <span
                                        className={cn(
                                            "font-display text-lg italic transition-colors",
                                            activeStage === i ? "text-text-primary" : "text-muted"
                                        )}
                                    >
                                        {stage.label}
                                    </span>
                                </button>
                                {i < aqiProject.pipeline.length - 1 && (
                                    <div className="ml-[13px] h-4 w-px bg-stroke" />
                                )}
                                {activeStage === i && (
                                    <motion.p
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="ml-10 mt-1 max-w-md pb-2 text-xs leading-relaxed text-muted"
                                    >
                                        {stage.detail}
                                    </motion.p>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <button
                            onClick={onOpenCaseStudy}
                            className="rounded-full bg-text-primary px-6 py-3 text-sm text-bg transition-transform duration-300 hover:scale-105"
                        >
                            View Case Study
                        </button>

                        <a
                            href="#"
                            className="rounded-full border border-stroke px-6 py-3 text-sm text-muted transition-colors hover:border-white/30 hover:text-text-primary"
                        >
                            GitHub
                        </a>
                    </div>
            </div>

            {/* Gauge */}
            <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-stroke bg-bg/40 p-8">
                <AQIGauge value={84} />
                <p className="max-w-[220px] text-center text-xs text-muted">
                    Test accuracy after removing a data-leakage feature that had
                    inflated an earlier version to ~99%.
                </p>
            </div>
        </div>
    </motion.div >
  );
}