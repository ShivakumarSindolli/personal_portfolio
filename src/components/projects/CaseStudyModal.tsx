import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { aqiProject, bookExchangeProject, rideBookingProject } from "@/data/projects";

type ProjectSlug =
  | typeof aqiProject.slug
  | typeof bookExchangeProject.slug
  | typeof rideBookingProject.slug;

export default function CaseStudyModal({
  slug,
  onClose,
}: {
  slug: ProjectSlug | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!slug) return;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [slug, onClose]);

  return (
    <AnimatePresence>
      {slug && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] overflow-y-auto bg-bg/95 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-auto my-10 max-w-2xl px-6"
          >
            <button
              onClick={onClose}
              aria-label="Close case study"
              className="mb-8 flex items-center gap-2 rounded-full border border-stroke px-4 py-2 text-xs text-muted transition-colors hover:border-white/30 hover:text-text-primary"
            >
              <X className="h-3.5 w-3.5" /> Close
            </button>

            {slug === aqiProject.slug && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Machine Learning</p>
                <h2 className="mt-2 font-display text-4xl italic text-text-primary">
                  {aqiProject.title}
                </h2>
                {aqiProject.caseStudy.map((section) => (
                  <div key={section.heading} className="mt-8 border-t border-stroke pt-8">
                    <h3 className="mb-3 text-sm uppercase tracking-widest text-text-primary">
                      {section.heading}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{section.body}</p>
                  </div>
                ))}
              </div>
            )}

            {slug === bookExchangeProject.slug && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Full Stack · MERN</p>
                <h2 className="mt-2 font-display text-4xl italic text-text-primary">
                  {bookExchangeProject.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {bookExchangeProject.description}
                </p>
                <div className="mt-8 border-t border-stroke pt-8">
                  <h3 className="mb-3 text-sm uppercase tracking-widest text-text-primary">
                    Highlights
                  </h3>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {bookExchangeProject.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-primary" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {slug === rideBookingProject.slug && (
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted">Java · OOP</p>
                <h2 className="mt-2 font-display text-4xl italic text-text-primary">
                  {rideBookingProject.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {rideBookingProject.description}
                </p>
                <div className="mt-8 border-t border-stroke pt-8">
                  <h3 className="mb-3 text-sm uppercase tracking-widest text-text-primary">
                    OOP Principles Applied
                  </h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {rideBookingProject.oop.map((p) => (
                      <div key={p.name} className="rounded-xl border border-stroke p-4">
                        <p className="font-display italic text-text-primary">{p.name}</p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">{p.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}