import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "../lib/animations";

export default function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const problems = [
    {
      icon: "📋",
      title: "Double Data Entry",
      desc: "Your distributors manually enter invoices into Tally, then re-type the same data into your DMS. Every night. 8-12% error rate.",
      stat: "60% still on spreadsheets",
    },
    {
      icon: "💬",
      title: "Retailer Ordering Friction",
      desc: "Kirana owners refuse to download B2B apps. They send messy WhatsApp texts in Hindi — \"5 box ketchup bhejo.\" Nobody can parse this at scale.",
      stat: "< 10% retailer app adoption",
    },
    {
      icon: "📡",
      title: "Rural Connectivity Dead Zones",
      desc: "Your reps lose signal in Tier-3 towns. Cloud-dependent SFA goes blank. Beat compliance drops. Secondary sales data goes missing.",
      stat: "85% of volume from rural",
    },
    {
      icon: "💰",
      title: "Scheme & Claims Delay",
      desc: "Trade promotion claims take 3-6 weeks to settle. Distributors lose working capital and trust. 40% churn within 3 years.",
      stat: "₹4.2L avg. pending claims",
    },
    {
      icon: "🔌",
      title: "Brittle ERP Integration",
      desc: "Your SAP/Oracle doesn't talk to the distributor's TallyPrime. Data reconciliation is a monthly war between your finance team and theirs.",
      stat: "23 GST mismatches/month avg.",
    },
    {
      icon: "🗺️",
      title: "No Real-Time Visibility",
      desc: "You find out about stockouts days after they happen. No live secondary sales feed. Beat plans are based on last month's stale data.",
      stat: "3-5 day data lag",
    },
  ];

  // Word reveal paragraph for distribution managers
  const paragraph =
    "Your distributors hate your software. Your retailers won't download your app. Your field reps go dark every time they leave the highway. And your finance team spends weekends reconciling Tally mismatches. This is the reality of Indian FMCG distribution today.";
  const words = paragraph.split(" ");
  const highlighted = ["hate", "won't", "dark", "weekends", "reconciling", "reality"];

  return (
    <section ref={ref} className="pt-32 md:pt-44 pb-32 md:pb-44 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section label */}
        <motion.div {...fadeUp(0)} className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
          THE PROBLEM
        </motion.div>

        {/* Big heading */}
        <motion.h2
          {...fadeUp(0.05)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] leading-[1.05] mb-6"
        >
          Your RTM is{" "}
          <span className="font-serif italic font-normal">leaking.</span>
        </motion.h2>

        <motion.p {...fadeUp(0.1)} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-20">
          Every node in your distribution chain — from manufacturer to kirana shelf — has friction that
          current DMS platforms can't solve. Here's what's really happening.
        </motion.p>

        {/* Word-by-word scroll reveal */}
        <div className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-snug max-w-4xl mx-auto mb-28">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                word={word}
                isHighlighted={highlighted.includes(word)}
                range={[start, end]}
                progress={scrollYProgress}
              />
            );
          })}
        </div>

        {/* Problem cards — 3x2 grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.05 * i)}
              className="liquid-glass rounded-2xl p-7 text-left group hover:bg-white/[0.02] transition-colors duration-300"
            >
              <div className="text-3xl mb-4">{p.icon}</div>
              <h3 className="font-semibold text-base mb-2">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/8 border border-red-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-red-400/90 text-xs font-medium">{p.stat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Word({
  word,
  isHighlighted,
  range,
  progress,
}: {
  word: string;
  isHighlighted: boolean;
  range: [number, number];
  progress: any;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.3em] ${isHighlighted ? "text-foreground" : "text-hero-subtitle"}`}
    >
      {word}
    </motion.span>
  );
}
