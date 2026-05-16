import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Comparison from "./components/Comparison";
import Impact from "./components/Impact";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AmbientElements from "./components/AmbientElements";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Ambient background layer — fades on scroll */}
      <AmbientElements />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <div className="section-dark section-glow-top">
          <Problem />
        </div>
        <div className="section-deep section-glow-top">
          <Features />
        </div>
        <div className="section-glow-top">
          <HowItWorks />
        </div>
        <div id="compare" className="section-dark section-glow-top">
          <Comparison />
        </div>
        <div className="section-glow-top">
          <Impact />
        </div>
        <div className="section-deep section-glow-top">
          <Testimonials />
        </div>
        <div className="section-glow-top">
          <Pricing />
        </div>
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
