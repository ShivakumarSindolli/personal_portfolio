import { motion } from "framer-motion";

export default function SectionHeader({
  eyebrow,
  heading,
  italicWord,
  subtext,
  action,
}: {
  eyebrow: string;
  heading: string;
  italicWord: string;
  subtext: string;
  action?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-start justify-between gap-4 sm:gap-6 md:flex-row md:items-end"
    >
      <div>
        <div className="mb-3 flex items-center gap-3 sm:mb-4">
          <span className="h-px w-6 bg-stroke sm:w-8" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted sm:text-xs">{eyebrow}</span>
        </div>
        <h2 className="text-2xl text-text-primary sm:text-3xl md:text-4xl lg:text-5xl">
          {heading} <span className="font-display italic">{italicWord}</span>
        </h2>
        <p className="mt-3 max-w-md text-sm text-muted sm:mt-4 md:text-base">{subtext}</p>
      </div>
      {action}
    </motion.div>
  );
}
