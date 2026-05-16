# VyaparAI — AI-First Distribution Intelligence 🚀

VyaparAI is a specialized, high-converting B2B distribution platform designed specifically for the Indian FMCG sector. It acts as an AI-first Distribution Management System (DMS) that eliminates double data entry, auto-reconciles Tally, and enables kirana retailers to order natively via WhatsApp.

![VyaparAI Overview](./site/public/favicon.svg)

## 🎯 Target Audience
Built to appeal directly to FMCG brand managers, VP of Operations, Distribution Heads, and CFOs who are frustrated with legacy DMS platforms.

## ✨ Key Features & Highlights

- **Command Center Dashboard**: A live-looking hero visual representing real-time secondary sales, WhatsApp orders, Tally auto-sync rates, and beat compliance.
- **Animated Network Canvas**: An immersive, custom-built animated background symbolizing a living supply chain network with glowing nodes and data particles.
- **RTM Leakage Targeting**: Directly addresses pain points like manual Tally data entry, poor retailer app adoption, rural connectivity dead zones, and delayed claims settlement.
- **Competitor Comparison**: Direct head-to-head feature breakdown against industry incumbents (FieldAssist, Bizom, Botree) showcasing VyaparAI's unique AI-first proposition.
- **Social Proof**: Testimonial section featuring outcomes from distribution leaders (e.g., ₹36L/yr saved in data entry).
- **Premium B2B Aesthetic**: Dark-monochrome "liquid-glass" design language with subtle teal accents, scroll-driven typography reveals, and thematic depth styling.

## 🛠 Tech Stack

- **Framework**: React 18 with Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom HSL design system)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter (Sans-serif) & Instrument Serif (Italic accents)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js (v18 or higher) installed.

### Installation

1. Navigate to the React application directory:
   ```bash
   cd site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

### Building for Production

To create a production-ready build, run:
```bash
npm run build
```
This will generate optimized static assets in the `dist/` directory, ready to be deployed to Vercel, Netlify, or any static hosting provider.

## 📂 Project Structure

```text
├── site/
│   ├── src/
│   │   ├── components/       # UI Sections (Hero, Features, Impact, Contact, etc.)
│   │   ├── lib/              # Utility functions (e.g., animation configurations)
│   │   ├── assets/           # Images and SVG assets
│   │   ├── App.tsx           # Main application routing and section assembly
│   │   └── index.css         # Global design system & liquid-glass styles
│   ├── public/               # Static public assets
│   ├── tailwind.config.js    # Tailwind configuration
│   └── package.json          # Project dependencies
```

## 🤝 Next Steps for Production

1. **Backend Integration**: Connect the lead capture form (`Contact.tsx`) to your CRM webhook (e.g., HubSpot, Salesforce, Zapier).
2. **Analytics**: Implement Google Analytics / Microsoft Clarity to track conversion intent.
3. **Dynamic Content**: As you onboard pilot customers, replace the mock dashboard data with real anonymized KPIs.

---
*Built with precision for the future of Indian retail distribution.*