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
        "input-placeholder": "hsl(var(--input-placeholder))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        paragraph: "hsl(var(--paragraph))",
        tag: "hsl(var(--tag))",
        "computer-science": {
          DEFAULT: "hsl(var(--major-computer-science-foreground))",
          muted: "hsl(var(--major-computer-science-muted-foreground))",
          background: "hsl(var(--major-computer-science-background))",
        },
        text: {
          DEFAULT: "hsl(var(--text-primary))",
          secondary: "hsla(var(--text-secondary))",
          tertiary: "hsla(var(--text-tertiary))",
          quaternary: "hsla(var(--text-quaternary))",
        },
        fill: {
          DEFAULT: "hsl(var(--fill-primary))",
          secondary: "hsl(var(--fill-secondary))",
          tertiary: "hsl(var(--fill-tertiary))",
          quaternary: "hsl(var(--fill-quaternary))",
        },
        gray: {
          DEFAULT: "hsl(var(--gray-1))",
          2: "hsl(var(--gray-2))",
          3: "hsl(var(--gray-3))",
          4: "hsl(var(--gray-4))",
          5: "hsl(var(--gray-5))",
          6: "hsl(var(--gray-6))",
        },
        math: {
          DEFAULT: "hsl(var(--major-math-foreground))",
          background: "hsl(var(--major-math-background))",
        },
        statistics: {
          DEFAULT: "hsl(var(--major-statistics-foreground))",
          background: "hsl(var(--major-statistics-background))",
        },
        english: {
          DEFAULT: "hsl(var(--major-english-foreground))",
          background: "hsl(var(--major-english-background))",
        },
        commerce: {
          DEFAULT: "hsl(var(--major-commerce-foreground))",
          background: "hsl(var(--major-commerce-background))",
        },
        economics: {
          DEFAULT: "hsl(var(--major-economics-foreground))",
          background: "hsl(var(--major-economics-background))",
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
