import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const LINKS = [
  { label: "Home", href: "#top" },
  { label: "Work", href: "#work" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 100);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 640) setMobileOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  function handleNavClick(label: string) {
    setActive(label);
    setMobileOpen(false);
  }

  return (
    <>
      <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
        <nav
          className={cn(
            "inline-flex items-center rounded-full border border-white/10 bg-surface/90 px-2 py-2 backdrop-blur-md transition-shadow duration-300",
            scrolled && "shadow-md shadow-black/10"
          )}
        >
          {/* Logo */}
          <a
            href="#top"
            onClick={() => handleNavClick("Home")}
            className="group relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300 hover:scale-110"
          >
            <span className="accent-gradient absolute inset-0 rounded-full transition-[background-position] duration-500 [background-size:200%_200%] group-hover:[background-position:100%_0]" />
            <span className="absolute inset-[1.5px] flex items-center justify-center rounded-full bg-bg">
              <span className="font-display text-[13px] italic text-text-primary">SS</span>
            </span>
          </a>

          <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

          {/* Desktop links */}
          <ul className="hidden items-center sm:flex">
            {LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => handleNavClick(link.label)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    active === link.label
                      ? "bg-stroke/50 text-text-primary"
                      : "text-muted hover:bg-stroke/50 hover:text-text-primary"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" />

          {/* Desktop CTA */}
          <a href="#contact" className="group relative hidden rounded-full px-4 py-2 text-sm sm:block">
            <span className="absolute inset-[-2px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 accent-gradient" />
            <span className="relative flex items-center gap-1 rounded-full bg-surface px-4 py-2 text-muted backdrop-blur-md transition-colors group-hover:text-text-primary">
              Say hi <span aria-hidden>↗</span>
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="ml-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-stroke/50 sm:hidden"
            aria-label="Toggle menu"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="14" y2="14" />
                  <line x1="14" y1="4" x2="4" y2="14" />
                </>
              ) : (
                <>
                  <line x1="3" y1="5" x2="15" y2="5" />
                  <line x1="3" y1="9" x2="15" y2="9" />
                  <line x1="3" y1="13" x2="15" y2="13" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-6 bg-bg/95 backdrop-blur-xl sm:hidden"
          >
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.label)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={cn(
                  "font-display text-3xl italic transition-colors",
                  active === link.label ? "text-text-primary" : "text-muted hover:text-text-primary"
                )}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, delay: LINKS.length * 0.06 }}
              className="mt-4 rounded-full px-8 py-3 text-sm"
            >
              <span className="accent-gradient rounded-full px-8 py-3 text-bg font-medium">
                Say hi ↗
              </span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
