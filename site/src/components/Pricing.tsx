import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For Growing Brands",
    price: "₹49,999",
    period: "/month",
    features: ["WhatsApp AI Ordering Bot", "Up to 100 Distributors", "Basic Analytics Dashboard", "Email Support", "5 Admin Users"],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    desc: "For Scaling Enterprises",
    price: "₹1,49,999",
    period: "/month",
    features: ["Everything in Starter", "Tally Auto-Reconciliation", "Offline Edge AI for Reps", "Up to 500 Distributors", "Priority Support + CSM", "Advanced Analytics Studio"],
    cta: "Book a Demo",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "For Market Leaders",
    price: "Custom",
    period: "",
    features: ["Everything in Growth", "Unlimited Distributors", "Embedded Supply Chain Finance", "Digital Twin Orchestration", "Dedicated AI Engineering Team", "Custom Integrations"],
    cta: "Contact Sales",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 md:py-44 px-6 ">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">PRICING</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px]">
            Simple,{" "}
            <span className="font-serif italic font-normal">transparent</span>{" "}
            pricing
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-xl mx-auto">
            No hidden fees. No long lock-ins. Pay for value, not seats.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              {...fadeUp(0.1 * i)}
              className={`rounded-2xl p-8 relative ${
                p.featured
                  ? "liquid-glass border border-foreground/20"
                  : "liquid-glass"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-foreground text-background text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-xl font-semibold mb-1">{p.name}</div>
              <div className="text-muted-foreground text-sm mb-6">{p.desc}</div>
              <div className="mb-6">
                <span className="text-3xl md:text-4xl font-semibold tracking-tight">{p.price}</span>
                <span className="text-muted-foreground text-sm">{p.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check size={16} className="text-accent mt-0.5 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block text-center rounded-xl py-3 text-sm font-semibold transition-colors ${
                  p.featured
                    ? "bg-foreground text-background"
                    : "liquid-glass text-foreground hover:bg-muted/30"
                }`}
              >
                {p.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
