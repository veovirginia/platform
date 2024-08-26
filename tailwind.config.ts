import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-instrument-sans)", ...fontFamily.sans],
        serif: ["var(--font-libre-baskerville)", ...fontFamily.serif],
      },
    },
  },
  plugins: [],
} satisfies Config;
