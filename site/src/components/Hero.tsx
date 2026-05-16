import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { ArrowRight } from "lucide-react";
import NetworkBackground from "./NetworkBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated distribution network */}
      <NetworkBackground />

      {/* Layered gradients for depth */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(30,70,60,0.15) 0%, transparent 70%)"
      }} />
      <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-background via-background/90 to-transparent z-[2]" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent z-[2]" />

      <div className="relative z-10 text-center px-6 pt-28 md:pt-32 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-2 mb-8">
          <div className="liquid-glass rounded-full px-5 py-2 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            <span className="text-muted-foreground text-sm">
              Autonomous Distribution Platform
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium tracking-[-2px] leading-[1.05]"
        >
          The End of the DMS.
          <br />
          <span className="font-serif italic font-normal text-hero-subtitle">The Era of Autonomous Distribution.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg text-hero-subtitle mt-6 max-w-2xl mx-auto leading-relaxed"
        >
          RetailSync is the world's first autonomous workforce for FMCG distribution.
          Stop buying legacy software your team hates, and start hiring AI Agents
          that run your supply chain natively on WhatsApp.
        </motion.p>

        {/* CTA row */}
        <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-foreground text-background rounded-full px-8 py-3.5 text-sm font-semibold flex items-center gap-2"
          >
            Book a Demo <ArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#how-it-works"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-full px-8 py-3.5 text-sm font-semibold"
          >
            See How It Works
          </motion.a>
        </motion.div>

        {/* Dashboard preview mock */}
        <motion.div {...fadeUp(0.4)} className="mt-16 max-w-4xl mx-auto">
          <div className="liquid-glass rounded-2xl overflow-hidden shadow-[0_0_80px_-20px_rgba(100,200,180,0.08)]">
            {/* Dashboard top bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs text-muted-foreground ml-2">RetailSync — Autonomous Agents Live</span>
              <div className="ml-auto flex items-center gap-2">
                <span className="text-[10px] text-emerald-400/80">● Active</span>
                <span className="text-xs text-muted-foreground/50">Today, 11:45 AM IST</span>
              </div>
            </div>
            {/* Dashboard body */}
            <div className="p-4 grid grid-cols-4 gap-3">
              {[
                { label: "Orders Taken by AI", value: "2,481", change: "+42% via Voice", color: "text-emerald-400" },
                { label: "Tally Reconciliations", value: "14.2K", change: "Zero Human Input", color: "text-emerald-400" },
                { label: "Schemes Auto-Applied", value: "₹4.1L", change: "100% Accurate", color: "text-accent" },
                { label: "Field Anomalies Flagged", value: "12", change: "Immediate Action", color: "text-[#ff5f57]" },
              ].map((m) => (
                <div key={m.label} className="bg-secondary/40 rounded-xl p-3.5 text-left border border-border/10">
                  <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{m.label}</div>
                  <div className="text-xl font-semibold mt-1 tracking-tight">{m.value}</div>
                  <div className={`text-[11px] mt-0.5 ${m.color}`}>{m.change}</div>
                </div>
              ))}
            </div>
            {/* Bottom section */}
            <div className="px-4 pb-4 grid grid-cols-3 gap-3">
              {/* Distribution heatmap */}
              <div className="col-span-2 bg-secondary/20 rounded-xl p-4 border border-border/10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-muted-foreground">Distribution Network — Live Activity</span>
                  <span className="text-[10px] text-muted-foreground/50">Pan-India</span>
                </div>
                <div className="grid grid-cols-8 gap-1">
                  {Array.from({ length: 40 }).map((_, i) => {
                    const intensity = Math.random();
                    const isActive = intensity > 0.6;
                    return (
                      <div
                        key={i}
                        className="aspect-square rounded-sm transition-all duration-1000"
                        style={{
                          background: isActive
                            ? `rgba(100, 200, 180, ${0.08 + intensity * 0.2})`
                            : `rgba(255, 255, 255, ${0.02 + intensity * 0.04})`,
                        }}
                      />
                    );
                  })}
                </div>
                <div className="flex justify-between text-[9px] text-muted-foreground/40 mt-2">
                  <span>North</span>
                  <span>West</span>
                  <span>Central</span>
                  <span>East</span>
                  <span>South</span>
                </div>
              </div>
              {/* Agent Activity feed */}
              <div className="bg-secondary/20 rounded-xl p-4 border border-border/10">
                <div className="text-xs text-muted-foreground mb-3">Agent Activity Stream</div>
                {[
                  { agent: "KiranaAgent", action: "Secured ₹14k order via Voice", tag: "WhatsApp", time: "Just now" },
                  { agent: "TallyAgent", action: "Resolved GST mismatch for Ali Prov", tag: "Finance", time: "2m ago" },
                  { agent: "CreditAgent", action: "Auto-approved ₹2.5L limit", tag: "Fintech", time: "5m ago" },
                  { agent: "KiranaAgent", action: "Applied Diwali scheme discount", tag: "Sales", time: "8m ago" },
                ].map((o, i) => (
                  <div key={i} className="py-1.5 border-b border-border/10 last:border-0">
                    <div className="flex justify-between items-start">
                      <span className="text-[11px] text-foreground/80 truncate max-w-[70%] font-medium">{o.agent}</span>
                      <span className="text-[9px] text-muted-foreground/50">{o.time}</span>
                    </div>
                    <div className="flex justify-between items-center mt-0.5">
                      <span className="text-[10px] text-muted-foreground">{o.action}</span>
                      <span className={`text-[8px] px-1.5 py-0.5 rounded-sm ${
                        o.tag === "WhatsApp" ? "bg-emerald-500/10 text-emerald-400" :
                        o.tag === "Finance" ? "bg-blue-500/10 text-blue-400" :
                        "bg-accent/10 text-accent"
                      }`}>{o.tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust stats */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {[
            { val: "12M+", label: "Kirana Stores Addressable" },
            { val: "₹615B", label: "FMCG Market by 2027" },
            { val: "<2 Weeks", label: "Go-Live Time" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">{s.val}</div>
              <div className="text-muted-foreground text-xs mt-1 uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full border border-muted-foreground/40 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-muted-foreground rounded-full"
          />
        </div>
        <span className="text-muted-foreground text-[10px] uppercase tracking-[3px]">Scroll</span>
      </motion.div>
    </section>
  );
}
