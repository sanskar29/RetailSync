import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

export default function RoiSimulator() {
  const [distributors, setDistributors] = useState(50);
  const [invoices, setInvoices] = useState(800);

  // Calculations
  const totalInvoices = distributors * invoices;
  const manualHours = Math.round((totalInvoices * 3) / 60); // 3 mins per invoice
  const manualErrors = Math.round(totalInvoices * 0.08); // 8% error rate
  
  // Cost assumption: 1 data entry person handles 2000 invoices/month, costs ₹15,000
  const ftesNeeded = Math.ceil(totalInvoices / 2000);
  const monthlyCost = ftesNeeded * 15000;

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/10 relative overflow-hidden section-glow-top">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">THE AI IMPACT</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">
            Calculate your autonomous <span className="font-serif italic font-normal text-emerald-400">advantage.</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how much time and capital you are losing to legacy data entry, and how much VyaparAI's agents can reclaim for you instantly.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Controls */}
          <motion.div {...fadeUp(0.1)} className="liquid-glass rounded-2xl p-8 space-y-10">
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-medium text-foreground/80">Number of Distributors</label>
                <span className="text-2xl font-semibold text-accent">{distributors}</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={distributors}
                onChange={(e) => setDistributors(Number(e.target.value))}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <label className="text-sm font-medium text-foreground/80">Avg. Monthly Invoices per Dist.</label>
                <span className="text-2xl font-semibold text-accent">{invoices}</span>
              </div>
              <input
                type="range"
                min="100"
                max="5000"
                step="100"
                value={invoices}
                onChange={(e) => setInvoices(Number(e.target.value))}
                className="w-full h-1.5 bg-secondary rounded-lg appearance-none cursor-pointer accent-accent"
              />
            </div>
            
            <div className="pt-6 border-t border-border/20 text-sm text-muted-foreground text-center">
              Processing <strong className="text-foreground">{totalInvoices.toLocaleString()}</strong> secondary invoices per month.
            </div>
          </motion.div>

          {/* Results */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-2 gap-4">
            <div className="col-span-2 bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 rounded-2xl p-6 text-center">
              <div className="text-emerald-400 text-sm mb-1 uppercase tracking-wider font-medium">Monthly Savings</div>
              <div className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">
                ₹{monthlyCost.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-2">Zero FTEs required for data entry.</div>
            </div>

            <div className="bg-secondary/30 border border-border/10 rounded-2xl p-6 text-center">
              <div className="text-muted-foreground text-xs mb-2 uppercase tracking-wider">Hours Saved</div>
              <div className="text-3xl font-medium text-foreground">
                {manualHours.toLocaleString()}
              </div>
              <div className="text-[10px] text-muted-foreground/70 mt-1">Manual entry hours/month</div>
            </div>

            <div className="bg-secondary/30 border border-border/10 rounded-2xl p-6 text-center">
              <div className="text-muted-foreground text-xs mb-2 uppercase tracking-wider">Errors Prevented</div>
              <div className="text-3xl font-medium text-foreground">
                {manualErrors.toLocaleString()}
              </div>
              <div className="text-[10px] text-muted-foreground/70 mt-1">GST/SKU mismatches</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
