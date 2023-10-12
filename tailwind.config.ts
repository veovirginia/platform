import { type Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        "input-text": "hsl(var(--input-text))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        paragraph: "hsl(var(--paragraph))",
        tag: "hsl(var(--tag))",
        "computer-science": {
          DEFAULT: "hsl(var(--major-computer-science-foreground))",
          muted: "hsl(var(--major-computer-science-muted-foreground))",
          background: "hsl(var(--major-computer-science-background))",
        },
        math: {
          DEFAULT: "hsl(var(--major-math-foreground))",
          muted: "hsl(var(--major-math-muted-foreground))",
          background: "hsl(var(--major-math-background))",
        },
        junior: {
          DEFAULT: "hsl(var(--class-junior-foreground))",
          muted: "hsl(var(--class-junior-muted-foreground))",
          background: "hsl(var(--class-junior-background))",
        },
        senior: {
          DEFAULT: "hsl(var(--class-senior-foreground))",
          muted: "hsl(var(--class-senior-muted-foreground))",
          background: "hsl(var(--class-senior-background))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          border: "hsl(var(--secondary-border))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        body: "60rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
