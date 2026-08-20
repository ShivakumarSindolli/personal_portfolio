import { motion } from "framer-motion";
import { skillGroups, exploringSkills } from "@/data/skills";
import SectionHeader from "@/components/SectionHeader";

export default function Skills() {
    return (
        <section id="skills" className="bg-bg py-16 md:py-20">
            <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-16">
                <SectionHeader
                    eyebrow="Skills"
                    heading="Tools of"
                    italicWord="the trade"
                    subtext="Languages, frameworks, and the CS fundamentals underneath them."
                />

                {/* What I'm Exploring Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-8 rounded-2xl border border-stroke bg-surface/80 p-6 md:p-8"
                >
                    <p className="text-xs uppercase tracking-[0.2em] text-muted">Current Focus</p>
                    <h3 className="mt-1 font-display text-2xl italic text-text-primary">
                        What I'm Exploring
                    </h3>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        {exploringSkills.map((item, i) => (
                            <span
                                key={item}
                                className="flex items-center gap-2 rounded-full border border-stroke bg-bg/60 px-4 py-2 text-xs font-medium text-text-primary transition-colors hover:border-white/30"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                {item}
                                {i < exploringSkills.length - 1 && <span className="ml-1 text-muted">•</span>}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
                            className="rounded-2xl border border-stroke bg-surface p-6 transition-colors hover:border-white/20"
                        >
                            <p className="font-display text-lg italic text-text-primary">{group.category}</p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-stroke px-3 py-1.5 text-[11px] text-muted transition-colors hover:border-white/30 hover:text-text-primary"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}