import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "1rem",

      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#0F172A",
        accent: "#38BDF8",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        background: "#020617",
        foreground: "#F8FAFC",

        card: "#0F172A",
      },

      fontFamily: {
        sans: [
          "Inter",
          "sans-serif",
        ],

        heading: [
          "Poppins",
          "sans-serif",
        ],
      },

      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },

      boxShadow: {
        glow: "0 0 30px rgba(37,99,235,.35)",

        card: "0 10px 40px rgba(0,0,0,.25)",
      },

      animation: {
        float: "float 4s ease-in-out infinite",

        fade: "fade .8s ease forwards",

        slideUp: "slideUp .8s ease forwards",

        pulseSlow: "pulse 4s infinite",
      },

      keyframes: {
        float: {
          "0%,100%": {
            transform: "translateY(0px)",
          },

          "50%": {
            transform: "translateY(-12px)",
          },
        },

        fade: {
          from: {
            opacity: "0",
          },

          to: {
            opacity: "1",
          },
        },

        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(40px)",
          },

          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg,#0f172a 0%,#1e3a8a 50%,#0ea5e9 100%)",

        grid:
          "radial-gradient(circle at center,rgba(255,255,255,.08) 1px,transparent 1px)",
      },

      backgroundSize: {
        grid: "30px 30px",
      },
    },
  },

  plugins: [],
};

export default config;