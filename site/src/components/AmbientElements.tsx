import { useEffect, useRef } from "react";

/**
 * A subtle floating icon/shape layer that drifts across the page.
 * Shows distribution-related symbols: packages, routes, connections.
 * Fades to near-invisible as you scroll deep — keeps it clean.
 */
export default function AmbientElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const pageHeight = document.body.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollY / pageHeight, 1);
      // Fade ambient elements as user scrolls deeper
      el.style.opacity = String(Math.max(0.15, 1 - progress * 1.5));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-opacity duration-500">
      {/* Subtle radial gradient — distribution command center glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] opacity-40"
        style={{
          background: "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(40,80,70,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Grid dots — data infrastructure feel */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating supply chain shapes */}
      {[
        { top: "12%", left: "8%", size: 180, delay: 0, blur: 80 },
        { top: "35%", left: "85%", size: 120, delay: 2, blur: 60 },
        { top: "60%", left: "5%", size: 100, delay: 4, blur: 50 },
        { top: "80%", left: "90%", size: 140, delay: 1, blur: 70 },
        { top: "45%", left: "50%", size: 200, delay: 3, blur: 100 },
      ].map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: orb.top,
            left: orb.left,
            width: orb.size,
            height: orb.size,
            background: i % 2 === 0
              ? "radial-gradient(circle, rgba(60,140,120,0.06) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(80,120,160,0.04) 0%, transparent 70%)",
            filter: `blur(${orb.blur}px)`,
            animation: `ambientFloat ${15 + i * 3}s ease-in-out infinite`,
            animationDelay: `${orb.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
