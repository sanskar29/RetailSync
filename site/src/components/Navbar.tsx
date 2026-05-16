import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Platform", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Compare", href: "#compare" },
  { label: "Results", href: "#impact" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 lg:px-28 py-4 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/10" : ""
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="relative w-7 h-7 rounded-full border-2 border-foreground/60 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full border border-foreground/60" />
          </div>
          <span className="text-lg font-bold tracking-tight">
            Retail<span className="text-muted-foreground">Sync</span>
          </span>
        </a>

        {/* Center nav links */}
        <div className="hidden lg:flex items-center gap-1 text-sm">
          {navLinks.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && <span className="text-muted-foreground/30 mx-3">•</span>}
              <a
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mr-4"
          >
            Login
          </a>
          <a
            href="#contact"
            className="bg-foreground text-background rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-foreground/90 transition-colors"
          >
            Book a Demo
          </a>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden mt-4 pb-6 flex flex-col gap-4 border-b border-border/30"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-foreground text-background rounded-full px-6 py-2.5 text-sm font-semibold text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Book a Demo
          </a>
        </motion.div>
      )}
    </nav>
  );
}
