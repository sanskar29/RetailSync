import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { MessageSquare, RefreshCw, Wifi, CreditCard } from "lucide-react";

const features = [
  {
    icon: <MessageSquare size={24} />,
    title: "Zero-UI WhatsApp Ordering",
    desc: "Retailers order in Hindi via text or voice notes. AI parses everything, matches SKUs, checks inventory, confirms instantly. No app download ever.",
    details: [
      "Multimodal: text, voice, images",
      "12+ Indian languages supported",
      "Auto UPI payment links",
      "Smart upsell suggestions",
    ],
    mock: (
      <div className="liquid-glass rounded-2xl p-6 space-y-4 text-sm">
        <div className="bg-secondary/50 rounded-xl p-4 max-w-[85%]">
          <p className="text-muted-foreground">🎤 <em>"Bhai 5 box ketchup aur 2 chilli sauce bhej do"</em></p>
          <span className="text-muted-foreground/50 text-xs">10:23 AM</span>
        </div>
        <div className="bg-muted/30 rounded-xl p-4 max-w-[85%] ml-auto border border-border/20">
          <p>✅ Order confirmed!</p>
          <p className="text-muted-foreground mt-1">• 9am Tomato Ketchup ×5<br/>• 9am Green Chilli Sauce ×2</p>
          <p className="text-muted-foreground mt-1">Total: ₹2,450 | Delivery: Tomorrow 9AM</p>
          <p className="text-accent mt-1">💳 Pay via UPI →</p>
          <span className="text-muted-foreground/50 text-xs">10:23 AM ✓✓</span>
        </div>
      </div>
    ),
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Autonomous Tally Reconciliation",
    desc: "Agentic AI sits between the distributor's Tally and your ERP. It reads invoices, validates GST, applies trade schemes, and syncs everything — zero human input.",
    details: [
      "Zero manual data entry",
      "Auto GST mismatch resolution",
      "Instant claim settlements",
      "Works with TallyPrime & Busy",
    ],
    mock: (
      <div className="liquid-glass rounded-2xl p-6">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="text-center p-4 bg-secondary/50 rounded-xl flex-1">
            <div className="text-2xl mb-1">📊</div>
            <div className="text-xs text-muted-foreground">Tally ERP</div>
          </div>
          <div className="flex-1 relative">
            <div className="h-px bg-gradient-to-r from-muted-foreground/20 via-foreground/60 to-muted-foreground/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="bg-background px-2 text-xs text-accent">AI Agent</span>
            </div>
          </div>
          <div className="text-center p-4 bg-secondary/50 rounded-xl flex-1">
            <div className="text-2xl mb-1">🏢</div>
            <div className="text-xs text-muted-foreground">Brand ERP</div>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-accent"><span>✓</span> 847 invoices auto-synced</div>
          <div className="flex items-center gap-2 text-muted-foreground"><span>🔧</span> 23 GST mismatches resolved</div>
          <div className="flex items-center gap-2 text-muted-foreground"><span>💰</span> ₹4.2L claims settled instantly</div>
        </div>
      </div>
    ),
  },
  {
    icon: <Wifi size={24} />,
    title: "Offline-First Edge AI",
    desc: "Small Language Models run directly on your reps' phones. Full AI intelligence — product recommendations, scheme lookups, store history — with zero internet.",
    details: [
      "Works 100% offline",
      "Natural language queries",
      "0.3s response time on-device",
      "Runs on budget smartphones",
    ],
    mock: (
      <div className="liquid-glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4 text-xs">
          <span className="text-red-400">✕ No Signal</span>
          <span className="text-accent">🧠 Edge AI Active</span>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 mb-4 text-sm italic text-muted-foreground">
          "What sold best here last monsoon?"
        </div>
        <div className="bg-muted/20 border border-border/20 rounded-xl p-4 text-sm">
          <p><strong>📊 Top 3 SKUs (Jun-Aug):</strong></p>
          <p className="text-muted-foreground mt-1">1. Tomato Ketchup 1kg — 42 units<br/>2. Mixed Pickle 500g — 38 units<br/>3. Soya Sauce 200ml — 29 units</p>
          <p className="text-accent mt-2">💡 Suggest: Monsoon combo @ 15% off</p>
          <div className="text-muted-foreground/50 text-xs mt-2 italic">Processed on-device • 0.3s</div>
        </div>
      </div>
    ),
  },
  {
    icon: <CreditCard size={24} />,
    title: "Embedded Supply Chain Finance",
    desc: "AI-driven credit scoring uses operational data to underwrite distributors. Instant working capital loans right inside the DMS.",
    details: [
      "Alternative credit scoring via AI",
      "Partner with NBFCs",
      "Single-click working capital",
      "Revenue share on financing",
    ],
    mock: (
      <div className="liquid-glass rounded-2xl p-6 text-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-lg">₹</div>
          <div>
            <div className="font-semibold">Credit Score: 847/900</div>
            <div className="text-muted-foreground text-xs">Based on 24 months ops data</div>
          </div>
        </div>
        <div className="bg-secondary/50 rounded-xl p-4 mb-3">
          <div className="text-muted-foreground text-xs mb-1">Pre-approved Limit</div>
          <div className="text-2xl font-semibold">₹8,50,000</div>
        </div>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>Rate: 12.5% p.a.</span>
          <span className="text-accent">Apply in 1 click →</span>
        </div>
      </div>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="py-32 md:py-44 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">SOLUTION</div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-[-2px]">
            The platform for{" "}
            <span className="font-serif italic font-normal">autonomous</span>{" "}
            distribution
          </h2>
        </motion.div>

        {/* Feature blocks */}
        <div className="space-y-32">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              {...fadeUp(0.1)}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                <div className="flex items-center gap-3 mb-4 text-muted-foreground">
                  {f.icon}
                  <span className="text-xs uppercase tracking-[3px]">0{i + 1}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{f.desc}</p>
                <ul className="space-y-3">
                  {f.details.map((d) => (
                    <li key={d} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="text-accent text-xs">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                {f.mock}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
