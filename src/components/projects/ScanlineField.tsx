export default function ScanlineField() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
            <div
                className="absolute inset-x-0 h-24 opacity-[0.06]"
                style={{
                    background: "linear-gradient(180deg, transparent, #89aacc, transparent)",
                    animation: "scan-sweep 5s ease-in-out infinite",
                }}
            />
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage:
                        "repeating-linear-gradient(180deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 3px)",
                }}
            />
            <style>{`
        @keyframes scan-sweep {
          0% { transform: translateY(-10%); }
          50% { transform: translateY(320%); }
          100% { transform: translateY(-10%); }
        }
      `}</style>
        </div>
    );
}