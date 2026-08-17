import { motion } from "framer-motion";
import { bookExchangeProject } from "@/data/projects";

export default function BookExchangeCard({ onOpenCaseStudy }: { onOpenCaseStudy: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="col-span-1 flex flex-col overflow-hidden rounded-3xl border border-stroke bg-surface p-6 md:col-span-6"
        >
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Full Stack · MERN</p>
            <h3 className="mt-2 font-display text-2xl italic text-text-primary">
                {bookExchangeProject.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{bookExchangeProject.description}</p>

            {/* Floating bookshelf */}
            <div
                className="relative mt-8 flex h-40 items-end justify-center gap-3 rounded-2xl border border-stroke bg-bg/40 px-4"
                style={{ perspective: "600px" }}
            >
                <div className="absolute inset-x-4 bottom-4 h-px bg-stroke" />
                {bookExchangeProject.books.map((book, i) => (
                    <div
                        key={book.title}
                        className="group relative flex h-24 w-8 cursor-default items-end justify-center rounded-sm shadow-lg transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-105"
                        style={{
                            backgroundColor: book.color,
                            transformStyle: "preserve-3d",
                            transform: `rotateZ(${(i % 2 === 0 ? -1 : 1) * 1.5}deg)`,
                        }}
                    >
                        <span className="mb-2 h-16 w-px bg-white/10" />
                        <span className="pointer-events-none absolute -top-8 left-1/2 w-max max-w-[110px] -translate-x-1/2 rounded-md bg-bg px-2 py-1 text-center text-[10px] text-text-primary opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                            {book.title}
                        </span>
                        <span className="absolute inset-0 rounded-sm bg-gradient-to-t from-black/30 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
                {bookExchangeProject.tech.map((t) => (
                    <span
                        key={t}
                        className="rounded-full border border-stroke px-3 py-1 text-[11px] uppercase tracking-wider text-muted"
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-[11px] text-muted">
                {bookExchangeProject.architecture.map((step, i) => (
                    <span key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-stroke px-2.5 py-1 text-text-primary">{step}</span>
                        {i < bookExchangeProject.architecture.length - 1 && <span>↓</span>}
                    </span>
                ))}
            </div>

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-muted">
                {bookExchangeProject.flow.map((step, i) => (
                    <span key={step}>
                        {step}
                        {i < bookExchangeProject.flow.length - 1 && <span className="ml-4">→</span>}
                    </span>
                ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
                <button
                    onClick={onOpenCaseStudy}
                    className="rounded-full bg-text-primary px-6 py-3 text-sm text-bg transition-transform duration-300 hover:scale-105"
                >
                    Live Demo
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