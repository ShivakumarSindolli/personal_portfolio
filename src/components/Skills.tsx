import { motion } from "framer-motion";
import { skillGroups } from "@/data/skills";
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

                <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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