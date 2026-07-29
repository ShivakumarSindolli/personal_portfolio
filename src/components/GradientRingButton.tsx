import { cn } from "@/lib/utils";

export default function GradientRingButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group relative hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm text-text-primary md:inline-flex",
        className
      )}
    >
      <span className="accent-gradient absolute inset-0 rounded-full p-[1.5px] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="block h-full w-full rounded-full bg-bg" />
      </span>
      <span className="absolute inset-0 rounded-full border border-stroke transition-opacity duration-300 group-hover:opacity-0" />
      <span className="relative flex items-center gap-2">
        {children}
        <span
          aria-hidden
          className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        >
          →
        </span>
      </span>
    </a>
  );
}
