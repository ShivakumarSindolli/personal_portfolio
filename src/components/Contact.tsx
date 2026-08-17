import HlsVideo from "@/components/HlsVideo";

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/ShivakumarSindolli" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shivakumar-sindolli-7b4b69394/" },
  { label: "Email", href: "mailto:shivakumarshindolli@gmail.com" },
];

const MARQUEE_WORD = "LET'S BUILD SOMETHING · ";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden pt-16 sm:pt-24">
      <div className="relative mx-auto max-w-[1200px] px-4 text-center sm:px-6 md:px-10 lg:px-16">
        <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-muted sm:mb-6 sm:text-xs">Contact</p>
        <h2 className="mx-auto max-w-2xl text-2xl text-text-primary sm:text-3xl md:text-4xl lg:text-5xl">
          Open to internships, collabs, and{" "}
          <span className="font-display italic">interesting problems.</span>
        </h2>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10 sm:gap-4">
          <a
            href="mailto:shivakumarshindolli@gmail.com"
            className="group relative rounded-full px-6 py-3 text-sm transition-transform duration-300 hover:scale-105 sm:px-7 sm:py-3.5"
          >
            <span className="absolute inset-0 rounded-full bg-text-primary" />
            <span className="relative text-bg">Send an email</span>
          </a>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="rounded-full border border-stroke px-5 py-3 text-sm text-muted transition-colors hover:border-white/30 hover:text-text-primary sm:px-6 sm:py-3.5"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="relative mt-14 overflow-hidden border-y border-stroke py-4 sm:mt-20 sm:py-6">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span
              key={i}
              className="shrink-0 whitespace-nowrap px-2 font-display text-2xl italic text-text-primary/20 sm:text-3xl md:text-5xl"
            >
              {MARQUEE_WORD.repeat(6)}
            </span>
          ))}
        </div>
      </div>

      {/* Footer video block, flipped */}
      <div className="relative mt-0 flex h-[35vh] min-h-[240px] items-end overflow-hidden sm:h-[50vh] sm:min-h-[320px] md:h-[60vh]">
        <div className="absolute inset-0">
          <HlsVideo flip />
          <div className="absolute inset-0 bg-bg/60" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bg to-transparent" />
        </div>

        <div className="relative z-10 flex w-full flex-col items-center gap-2 pb-6 text-center sm:gap-3 sm:pb-8">
          <p className="font-display text-base italic text-text-primary sm:text-lg">Shivakumar A Sindolli</p>
          <p className="text-[10px] text-muted sm:text-xs">
            © {new Date().getFullYear()} · Built with Vite, React &amp; GSAP
          </p>
        </div>
      </div>
    </section>
  );
}
