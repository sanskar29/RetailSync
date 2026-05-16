import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { Check, X, Minus } from "lucide-react";

const features = [
  { name: "WhatsApp-native Retailer Ordering", vyapar: "full", field: "no", bizom: "no", botree: "no" },
  { name: "Autonomous Tally Reconciliation", vyapar: "full", field: "partial", bizom: "no", botree: "partial" },
  { name: "Offline Edge AI (SLM on-device)", vyapar: "full", field: "no", bizom: "no", botree: "no" },
  { name: "Agentic Claims Settlement", vyapar: "full", field: "no", bizom: "no", botree: "partial" },
  { name: "Zero App Download for Retailers", vyapar: "full", field: "no", bizom: "no", botree: "no" },
  { name: "AI Product Recommendations", vyapar: "full", field: "full", bizom: "partial", botree: "partial" },
  { name: "Image Recognition (Planogram)", vyapar: "full", field: "full", bizom: "partial", botree: "no" },
  { name: "Embedded Supply Chain Finance", vyapar: "full", field: "no", bizom: "no", botree: "no" },
  { name: "Real-time Secondary Sales", vyapar: "full", field: "full", bizom: "full", botree: "full" },
  { name: "Go-Live Time", vyapar: "2 weeks", field: "4-8 weeks", bizom: "3-6 months", botree: "varies" },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "full") return <Check size={16} className="text-green-400" />;
  if (status === "partial") return <Minus size={16} className="text-yellow-400" />;
  if (status === "no") return <X size={16} className="text-muted-foreground/40" />;
  return <span className="text-xs text-muted-foreground">{status}</span>;
};

export default function Comparison() {
  return (
    <section className="py-32 md:py-44 px-6 ">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
            WHY SWITCH
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px]">
            Not another{" "}
            <span className="font-serif italic font-normal">dashboard.</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Legacy DMS platforms digitize data entry. VyaparAI eliminates it.
            See how we compare to the incumbents your distributors already hate.
          </p>
        </motion.div>

        <motion.div {...fadeUp(0.1)} className="liquid-glass rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-4 px-6 font-normal text-muted-foreground">Capability</th>
                  <th className="py-4 px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/10 border border-foreground/20">
                      <span className="font-semibold text-foreground">VyaparAI</span>
                    </div>
                  </th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-normal">FieldAssist</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-normal">Bizom</th>
                  <th className="py-4 px-4 text-center text-muted-foreground font-normal">Botree</th>
                </tr>
              </thead>
              <tbody>
                {features.map((f, i) => (
                  <tr key={f.name} className="border-b border-border/10 last:border-0 hover:bg-white/[0.01] transition-colors">
                    <td className="py-3.5 px-6 text-muted-foreground">{f.name}</td>
                    <td className="py-3.5 px-4 text-center"><StatusIcon status={f.vyapar} /></td>
                    <td className="py-3.5 px-4 text-center"><StatusIcon status={f.field} /></td>
                    <td className="py-3.5 px-4 text-center"><StatusIcon status={f.bizom} /></td>
                    <td className="py-3.5 px-4 text-center"><StatusIcon status={f.botree} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.p {...fadeUp(0.2)} className="text-center text-muted-foreground/60 text-xs mt-6">
          Based on publicly available feature documentation and user reviews as of Q2 2026.
        </motion.p>
      </div>
    </section>
  );
}
