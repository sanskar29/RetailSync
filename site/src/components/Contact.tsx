import { motion } from "framer-motion";
import { fadeUp } from "../lib/animations";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-32 md:py-44 px-6 overflow-hidden section-glow-top">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
      />
      <div className="absolute inset-0 bg-background/80 z-[1]" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-3xl font-semibold mb-3">Demo Booked!</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our solutions team will reach out within 24 hours to schedule a
              personalized walkthrough with your distribution data.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left info */}
            <div>
              <motion.div {...fadeUp(0)}>
                <div className="text-xs tracking-[3px] uppercase text-muted-foreground mb-4">
                  GET STARTED
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-[-2px] mb-6">
                  See it with{" "}
                  <span className="font-serif italic font-normal">your data.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  We'll connect to your existing Tally setup, map your distributor
                  network, and show you exactly how many hours of manual work
                  RetailSync will eliminate — in a 30-minute live session.
                </p>
              </motion.div>

              <motion.div {...fadeUp(0.2)} className="space-y-5">
                {[
                  { icon: "📊", title: "Live demo with your SKUs", desc: "We'll use your actual product catalog and distributor data" },
                  { icon: "💰", title: "Custom ROI projection", desc: "Exact savings in data entry, claims settlement, and rep productivity" },
                  { icon: "🔗", title: "Tally integration proof", desc: "We'll show the auto-sync working with a sample Tally instance" },
                  { icon: "🚀", title: "2-week go-live guarantee", desc: "WhatsApp bot + Tally agent live within 14 days of sign-off" },
                ].map((b) => (
                  <div key={b.title} className="flex gap-4 items-start">
                    <span className="text-xl flex-shrink-0">{b.icon}</span>
                    <div>
                      <div className="font-semibold text-sm">{b.title}</div>
                      <div className="text-muted-foreground text-sm">{b.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right form */}
            <motion.form
              {...fadeUp(0.1)}
              onSubmit={handleSubmit}
              className="liquid-glass rounded-2xl p-8"
            >
              <h3 className="text-xl font-semibold text-center mb-6">Book Your Demo</h3>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">First Name *</label>
                    <input required type="text" placeholder="Rajesh" className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">Last Name *</label>
                    <input required type="text" placeholder="Kumar" className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">Work Email *</label>
                  <input required type="email" placeholder="rajesh@yourcompany.com" className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">Phone *</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50" />
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">Company *</label>
                    <input required type="text" placeholder="Your Brand" className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground/50" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">Your Role *</label>
                  <select required className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors text-muted-foreground appearance-none">
                    <option value="">Select your role</option>
                    <option>Head of Distribution / Sales</option>
                    <option>VP / Director Operations</option>
                    <option>National / Regional Sales Manager</option>
                    <option>IT / Digital Transformation Lead</option>
                    <option>Founder / CXO</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">Number of Distributors</label>
                    <select className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors text-muted-foreground appearance-none">
                      <option value="">Select</option>
                      <option>1 - 50</option>
                      <option>51 - 200</option>
                      <option>201 - 500</option>
                      <option>501 - 1,000</option>
                      <option>1,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-muted-foreground mb-1.5">Current DMS</label>
                    <select className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors text-muted-foreground appearance-none">
                      <option value="">Select</option>
                      <option>None / Spreadsheets</option>
                      <option>FieldAssist</option>
                      <option>Bizom</option>
                      <option>Botree</option>
                      <option>BeatRoute</option>
                      <option>Custom / In-house</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-muted-foreground mb-1.5">Biggest distribution challenge?</label>
                  <textarea rows={3} placeholder="E.g., Our 800 distributors use Tally but we can't get clean secondary sales data..." className="w-full bg-input border border-border/50 rounded-xl px-4 py-3 text-sm outline-none focus:border-foreground/40 transition-colors resize-none placeholder:text-muted-foreground/50" />
                </div>
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-foreground text-background rounded-xl py-3.5 text-sm font-semibold mt-6 disabled:opacity-70"
              >
                {loading ? "Scheduling..." : "Book My Free Demo"}
              </motion.button>

              <p className="text-center text-muted-foreground/50 text-xs mt-4">
                🔒 Enterprise-grade security. SOC 2 compliant. Your data never leaves India.
              </p>
            </motion.form>
          </div>
        )}
      </div>
    </section>
  );
}
