import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { GraduationCap, Zap, Users, Trophy } from "lucide-react";
import { timelineItems, hackathons, achievementStats, type TimelineItem } from "@/data/experience";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

const ICONS: Record<TimelineItem["category"], typeof GraduationCap> = {
    education: GraduationCap,
    hackathons: Zap,
    leadership: Users,
    certifications: Trophy,
};

function AnimatedStat({ value, label, delay }: { value: string; label: string; delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay }}
            className="text-center md:text-left"
        >
            <p className="font-display text-3xl italic text-text-primary md:text-5xl">{value}</p>
            <p className="mt-1 text-xs text-muted md:text-sm">{label}</p>
        </motion.div>
    );
}

function TimelineCard({ item, side }: { item: TimelineItem; side: "left" | "right" }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const Icon = ICONS[item.category];

    return (
        <div ref={ref} className="relative pl-14 md:grid md:grid-cols-2 md:gap-10 md:pl-0">
            {/* node */}
            <span
                className={cn(
                    "absolute left-0 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border transition-all duration-500 md:left-1/2",
                    inView
                        ? "border-transparent bg-text-primary text-bg shadow-[0_0_16px_rgba(137,170,204,0.5)]"
                        : "border-stroke text-muted"
                )}
            >
                <Icon className="h-4 w-4" />
            </span>

            <div className={cn("md:col-span-1", side === "left" ? "md:pr-14 md:text-right" : "md:order-2 md:pl-14")}>
                <motion.div
                    initial={{ opacity: 0, x: side === "left" ? -24 : 24 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-stroke bg-surface/70 p-6 backdrop-blur-md"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">{item.org}</p>
                    <h3 className="mt-2 font-display text-xl italic text-text-primary">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>

                    {item.meta && (
                        <div
                            className={cn(
                                "mt-4 flex flex-wrap gap-2",
                                side === "left" && "md:justify-end"
                            )}
                        >
                            {item.meta.map((m) => (
                                <span
                                    key={m}
                                    className="rounded-full border border-stroke px-3 py-1 text-[10px] uppercase tracking-wider text-muted"
                                >
                                    {m}
                                </span>
                            ))}
                        </div>
                    )}

                    {item.category === "certifications" && (
                        <button className="mt-5 rounded-full border border-stroke px-5 py-2 text-xs text-muted transition-colors hover:border-white/30 hover:text-text-primary">
                            View Certificate
                        </button>
                    )}
                </motion.div>
            </div>
        </div>
    );
}

export default function Experience() {
    const [lineProgress, setLineProgress] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onScroll() {
            const el = sectionRef.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const total = rect.height - window.innerHeight * 0.5;
            const scrolled = Math.min(Math.max(-rect.top + window.innerHeight * 0.3, 0), total);
            setLineProgress(total > 0 ? scrolled / total : 0);
        }
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <section id="experience" className="bg-bg py-16 md:py-20">
            <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Experience"
                    heading="Journey &"
                    italicWord="Achievements"
                    subtext="Learning, building, competing, and taking initiative."
                />

                {/* Achievement stats row */}
                <div className="mt-14 grid grid-cols-2 gap-8 border-y border-stroke py-10 md:grid-cols-4">
                    {achievementStats.map((s, i) => (
                        <AnimatedStat key={s.label} value={s.value} label={s.label} delay={i * 0.1} />
                    ))}
                </div>

                {/* Timeline */}
                <div ref={sectionRef} className="relative mt-20">
                    <div className="absolute left-4 top-0 h-full w-px bg-stroke md:left-1/2 md:-translate-x-1/2" />
                    <div
                        className="absolute left-4 top-0 w-px bg-gradient-to-b from-[#89aacc] to-[#4e85bf] transition-[height] duration-150 md:left-1/2 md:-translate-x-1/2"
                        style={{
                            height: `${lineProgress * 100}%`,
                            boxShadow: "0 0 10px rgba(137,170,204,0.6)",
                        }}
                    />

                    <div className="space-y-16">
                        {timelineItems.map((item, i) => (
                            <TimelineCard key={item.id} item={item} side={i % 2 === 0 ? "left" : "right"} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}