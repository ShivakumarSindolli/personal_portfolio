import { journalEntries } from "@/data/journal";
import SectionHeader from "@/components/SectionHeader";
import GradientRingButton from "@/components/GradientRingButton";
import { motion } from "framer-motion";

export default function Journal() {
  return (
    <section id="journal" className="bg-bg py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Journal"
          heading="Notes from"
          italicWord="the build"
          subtext="Short write-ups on decisions, bugs, and the fixes behind each project."
          action={<GradientRingButton href="#journal">Read all notes</GradientRingButton>}
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {journalEntries.map((entry, i) => (
            <motion.article
              key={entry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className="group flex flex-col justify-between rounded-2xl border border-stroke bg-surface p-5 transition-colors hover:border-white/20 sm:p-6"
            >
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">
                  {entry.date} · {entry.readTime} read
                </p>
                <h3 className="mt-2 font-display text-lg italic leading-snug text-text-primary sm:mt-3 sm:text-xl">
                  {entry.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">{entry.excerpt}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1 text-sm text-text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:mt-6">
                Read note <span aria-hidden>→</span>
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
