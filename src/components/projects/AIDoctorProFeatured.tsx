import { useState } from "react";
import { motion } from "framer-motion";
import { aiDoctorProProject } from "@/data/projects";
import ScanlineField from "./ScanlineField";
import BrainScan from "./BrainScan";
import { cn } from "@/lib/utils";

export default function AIDoctorProFeatured({
    onOpenCaseStudy,
}: {
    onOpenCaseStudy: () => void;
}) {
    const [activeStage, setActiveStage] = useState<number | null>(null);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative col-span-1 overflow-hidden rounded-3xl border border-stroke bg-surface p-6 md:col-span-12 md:p-10"
        >
            <ScanlineField />

            <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
                <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">Full Stack · AI/ML · Featured</p>
                    <h3 className="mt-2 font-display text-3xl italic text-text-primary md:text-4xl">
                        {aiDoctorProProject.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted md:text-base">
                        {aiDoctorProProject.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {aiDoctorProProject.tech.map((t) => (
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
                        {aiDoctorProProject.pipeline.map((stage, i) => (
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
                                {i < aiDoctorProProject.pipeline.length - 1 && (
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

                    {/* Specialty triage chips */}
                    <div className="mt-8">
                        <p className="mb-2 text-[10px] uppercase tracking-widest text-muted">
                            Routes across {aiDoctorProProject.specialties.length}+ specialties
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                            {aiDoctorProProject.specialties.map((s) => (
                                <span
                                    key={s}
                                    className="rounded-full border border-stroke px-2.5 py-1 text-[10px] text-muted transition-colors hover:border-white/30 hover:text-text-primary"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
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

            {/* Live consultation loading / Brain scan panel */}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-stroke bg-bg/40 p-8">
                <p className="mb-1 text-[10px] uppercase tracking-widest text-muted">
                    Consultation in progress
                </p>
                <p className="mb-6 max-w-[220px] text-center text-sm text-muted">
                    A recreation of the real loading state shown during a live consultation.
                </p>
                <br />
                <BrainScan />
            </div>
        </div>
    </motion.div >
  );
}