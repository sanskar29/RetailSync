import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";

const testimonials = [
  {
    quote: "We were spending ₹3L/month on data entry clerks just to keep Tally and our brand's DMS in sync. RetailSync's agentic reconciliation eliminated that overnight. Our distributors actually thank us now.",
    name: "Arun Mehta",
    role: "Head of Distribution",
    company: "Leading North India FMCG Brand",
    metric: "₹36L/yr saved in data entry costs",
  },
  {
    quote: "Our kirana retailers in UP and Bihar were ordering via WhatsApp anyway — just nobody could parse 500 messages a day. Now our WhatsApp orders are auto-structured and flowing into the DMS in real-time.",
    name: "Priya Sharma",
    role: "VP Operations",
    company: "Regional Packaged Food Company",
    metric: "34% increase in order volume",
  },
  {
    quote: "FieldAssist worked well in metros, but our reps in rural Rajasthan had zero signal. RetailSync's offline AI gives them product recommendations and store history even without connectivity.",
    name: "Vikram Singh",
    role: "National Sales Manager",
    company: "Multi-category FMCG Manufacturer",
    metric: "91% beat compliance, up from 62%",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 md:py-44 px-6 ">
      <div className="max-w-6xl mx-auto">
        <motion.div {...fadeUp(0)} className="text-center mb-16">
          <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
            FROM THE FIELD
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px]">
            What distribution{" "}
            <span className="font-serif italic font-normal">leaders</span> say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp(0.1 * i)}
              className="liquid-glass rounded-2xl p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="text-accent text-sm mb-4">★★★★★</div>

              {/* Quote */}
              <p className="text-hero-subtitle text-sm leading-relaxed flex-1 mb-6">
                "{t.quote}"
              </p>

              {/* Metric tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/8 border border-green-500/10 self-start mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-green-400/90 text-xs font-medium">{t.metric}</span>
              </div>

              {/* Author */}
              <div className="border-t border-border/20 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-sm font-semibold text-muted-foreground">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-muted-foreground text-xs">{t.role}</div>
                    <div className="text-muted-foreground/60 text-xs">{t.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
