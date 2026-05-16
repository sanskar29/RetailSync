import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  type: "manufacturer" | "distributor" | "retailer" | "hub";
  pulsePhase: number;
  label?: string;
}

interface Particle {
  x: number;
  y: number;
  fromNode: number;
  toNode: number;
  progress: number;
  speed: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = width + "px";
      canvas.style.height = height + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    // Create nodes representing the distribution network
    const nodeCount = Math.min(Math.floor(width / 35), 45);
    const nodes: Node[] = [];
    const types: Node["type"][] = ["manufacturer", "distributor", "retailer", "hub"];

    for (let i = 0; i < nodeCount; i++) {
      const type = types[Math.floor(Math.random() * types.length)];
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: type === "hub" ? 3 : type === "manufacturer" ? 2.5 : type === "distributor" ? 2 : 1.5,
        type,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Flowing data particles along connections
    const particles: Particle[] = [];
    const maxParticles = 20;

    const spawnParticle = () => {
      if (particles.length >= maxParticles) return;
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      if (to === from) to = (to + 1) % nodes.length;
      const dx = nodes[to].x - nodes[from].x;
      const dy = nodes[to].y - nodes[from].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > 250) return;
      particles.push({
        x: nodes[from].x,
        y: nodes[from].y,
        fromNode: from,
        toNode: to,
        progress: 0,
        speed: 0.003 + Math.random() * 0.005,
      });
    };

    let time = 0;

    const draw = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Move nodes gently
      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        node.x = Math.max(0, Math.min(width, node.x));
        node.y = Math.max(0, Math.min(height, node.y));
      }

      // Draw connections
      const connectionDist = 200;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.08;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.3 + 0.7;
        const baseAlpha = node.type === "hub" ? 0.35 : node.type === "manufacturer" ? 0.25 : 0.15;
        const alpha = baseAlpha * pulse;

        // Glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 6
        );
        const glowColor = node.type === "hub"
          ? "100, 200, 180"
          : node.type === "manufacturer"
          ? "180, 200, 220"
          : "200, 200, 200";
        gradient.addColorStop(0, `rgba(${glowColor}, ${alpha * 0.6})`);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${glowColor}, ${alpha * 2})`;
        ctx.fill();
      }

      // Spawn and draw particles
      if (Math.random() < 0.1) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.progress += p.speed;
        if (p.progress >= 1) {
          particles.splice(i, 1);
          continue;
        }
        const from = nodes[p.fromNode];
        const to = nodes[p.toNode];
        p.x = from.x + (to.x - from.x) * p.progress;
        p.y = from.y + (to.y - from.y) * p.progress;

        const pAlpha = Math.sin(p.progress * Math.PI) * 0.6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 200, 180, ${pAlpha})`;
        ctx.fill();

        // Trail
        const trailLen = 0.05;
        const trailX = from.x + (to.x - from.x) * Math.max(0, p.progress - trailLen);
        const trailY = from.y + (to.y - from.y) * Math.max(0, p.progress - trailLen);
        ctx.beginPath();
        ctx.moveTo(trailX, trailY);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(120, 200, 180, ${pAlpha * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
