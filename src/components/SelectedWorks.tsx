import { works } from "@/data/works";
import SectionHeader from "@/components/SectionHeader";
import GradientRingButton from "@/components/GradientRingButton";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function SelectedWorks() {
  return (
    <section id="work" className="bg-bg py-10 sm:py-12 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16">
        <SectionHeader
          eyebrow="Selected Work"
          heading="Featured"
          italicWord="projects"
          subtext="A selection of projects I've worked on, from concept to launch."
          action={<GradientRingButton href="#work">View all work</GradientRingButton>}
        />

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 md:grid-cols-12 md:gap-6">
          {works.map((work, i) => (
            <motion.a
              href={`#${work.slug}`}
              key={work.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
              className={cn(
                "group relative aspect-[16/10] overflow-hidden rounded-2xl border border-stroke bg-surface sm:aspect-[4/3] sm:rounded-3xl md:aspect-auto",
                work.span === "wide" ? "md:col-span-7" : "md:col-span-5"
              )}
            >
              {/* Gradient placeholder "cover" */}
              <div
                className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${work.gradient[0]}, ${work.gradient[1]})`,
                }}
              />
              {/* Halftone texture */}
              <div
                className="absolute inset-0 opacity-20 mix-blend-multiply"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, #000 1px, transparent 1px)",
                  backgroundSize: "4px 4px",
                }}
              />

              {/* Base label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">{work.category}</p>
                <h3 className="mt-1 font-display text-xl italic text-text-primary sm:text-2xl">{work.title}</h3>
              </div>

              {/* Hover overlay — hidden on touch */}
              <div className="absolute inset-0 hidden items-center justify-center bg-bg/70 opacity-0 backdrop-blur-lg transition-opacity duration-300 group-hover:opacity-100 sm:flex">
                <span className="gradient-border-anim rounded-full p-[1.5px]">
                  <span className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm text-bg">
                    View — <span className="font-display italic">{work.title}</span>
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
