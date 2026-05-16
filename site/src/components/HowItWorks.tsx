import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

const steps = [
  { phase: "Month 1-2", title: "WhatsApp Bot Goes Live", desc: "Give retailers a WhatsApp number. They text orders. AI handles the rest. Zero training. Instant ROI." },
  { phase: "Month 3-4", title: "Tally Integration Rolls Out", desc: "Connect AI agents to your distributors' Tally. Automatic reconciliation begins. Distributors become fans." },
  { phase: "Month 5-8", title: "Field Force AI Deployed", desc: "Equip reps with offline AI. Smart route planning, product recommendations, and anomaly detection." },
  { phase: "Month 9-12", title: "Predictive Command Center", desc: "Full 360° visibility. Demand forecasting, embedded finance, and autonomous orchestration." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 md:py-44 px-6 ">
      <div className="max-w-4xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">HOW IT WORKS</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px]">
            Deploy in four{" "}
            <span className="font-serif italic font-normal">phases.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            A proven rollout strategy that delivers ROI from day one.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-foreground/20 via-foreground/10 to-transparent" />

          <div className="space-y-16">
            {steps.map((s, i) => (
              <motion.div key={s.title} {...fadeUp(0.1 * i)} className="flex gap-6 md:gap-10 items-start">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full liquid-glass flex items-center justify-center text-lg md:text-xl font-semibold z-10 relative">
                    {i + 1}
                  </div>
                </div>
                <div className="pt-2 md:pt-3">
                  <span className="text-xs tracking-[2px] uppercase text-muted-foreground">{s.phase}</span>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight mt-1 mb-2">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
