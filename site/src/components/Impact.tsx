import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

const metrics = [
  { val: "30%", label: "Faster Market Penetration", desc: "via algorithmic beat planning & outlet discovery", icon: "🗺️" },
  { val: "98.7%", label: "Tally Auto-Sync Rate", desc: "zero manual data entry for distributors", icon: "📊" },
  { val: "34%", label: "More Orders via WhatsApp", desc: "without retailers downloading any app", icon: "💬" },
  { val: "91%", label: "Beat Compliance", desc: "up from 62% avg. with offline Edge AI", icon: "📍" },
  { val: "30min", label: "Saved Per Rep Per Day", desc: "21% more productive retail calls", icon: "⏱️" },
  { val: "<3 Days", label: "Claims Settlement", desc: "vs 3-6 weeks with legacy systems", icon: "💰" },
];

export default function Impact() {
  return (
    <section id="impact" className="py-32 md:py-44 px-6 ">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">MEASURED IMPACT</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px]">
            Numbers your{" "}
            <span className="font-serif italic font-normal">CFO</span> will love
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            Real metrics from real deployments across FMCG distribution networks in India.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              {...fadeUp(0.05 * i)}
              className="liquid-glass rounded-2xl p-7 text-left group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="text-2xl mb-3">{m.icon}</div>
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">{m.val}</div>
              <div className="font-medium text-sm mt-2">{m.label}</div>
              <div className="text-muted-foreground text-xs mt-1">{m.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
