export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-28 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-muted-foreground text-sm">
          © 2026 VyaparAI. All rights reserved. Made with ❤️ in India.
        </span>
        <div className="flex items-center gap-6">
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a key={l} href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
