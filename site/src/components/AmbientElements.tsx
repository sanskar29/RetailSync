import { useEffect, useRef } from "react";

export default function AmbientElements() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    const spacing = 35; 
    
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    let time = 0;
    let animationId: number;

    const draw = () => {
      time += 0.015;
      
      mouseX += (targetMouseX - mouseX) * 0.1;
      mouseY += (targetMouseY - mouseY) * 0.1;

      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      const cols = Math.floor(w / spacing) + 2;
      const rows = Math.floor(h / spacing) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const basePathX = i * spacing;
          const basePathY = j * spacing;
          
          const waveX = Math.sin(time + j * 0.15) * 8;
          const waveY = Math.cos(time + i * 0.15) * 8;
          
          const x = basePathX + waveX;
          const y = basePathY + waveY;

          const dx = mouseX - x;
          const dy = mouseY - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          const maxDist = 300;
          let intensity = 0;
          if (dist < maxDist) {
            intensity = Math.pow(1 - dist / maxDist, 2);
          }

          const radius = 1 + intensity * 2.5;
          
          const r = Math.floor(60 + intensity * 40);
          const g = Math.floor(100 + intensity * 100);
          const b = Math.floor(80 + intensity * 100);
          const alpha = 0.15 + intensity * 0.85;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    const handleScroll = () => {
      // Fade in as we scroll down past the hero section
      const progress = Math.min(window.scrollY / (window.innerHeight * 0.8), 1);
      container.style.opacity = String(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none opacity-0 transition-opacity duration-300">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(100,200,180,0.05)_0%,transparent_80%)] mix-blend-screen" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
    </div>
  );
}
