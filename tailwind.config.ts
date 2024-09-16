import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        primary: "var(--primary)",
        blue: "var(--blue1)",
        bgdblue: "var(--blue2)",
      },
      backgroundImage: {
        "living-room": "url('/assets/hero.png')",
      },
      fontFamily: {
        customVarible: ["var(--font-clash-display-variable)"],
        customRegular: ["var(--font-clash-display-regular)"],
        customMedium: ["var(--font-clash-display-medium)"],
        customSemibold: ["var(--font-clash-display-semi-bold)"],
        customBold: ["var(--font-clash-display-bold)"],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
