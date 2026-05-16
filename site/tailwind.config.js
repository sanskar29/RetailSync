/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Instrument Serif", "Georgia", "serif"],
      },
      colors: {
        background: "hsl(0 0% 0%)",
        foreground: "hsl(0 0% 100%)",
        card: "hsl(0 0% 5%)",
        "card-foreground": "hsl(0 0% 100%)",
        primary: "hsl(0 0% 100%)",
        "primary-foreground": "hsl(0 0% 0%)",
        secondary: "hsl(0 0% 12%)",
        "secondary-foreground": "hsl(0 0% 85%)",
        muted: "hsl(0 0% 15%)",
        "muted-foreground": "hsl(0 0% 65%)",
        accent: "hsl(170 15% 45%)",
        "accent-foreground": "hsl(0 0% 100%)",
        border: "hsl(0 0% 20%)",
        input: "hsl(0 0% 18%)",
        ring: "hsl(0 0% 40%)",
        "hero-subtitle": "hsl(210 17% 95%)",
      },
    },
  },
  plugins: [],
};
