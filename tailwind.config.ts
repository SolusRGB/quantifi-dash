import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        gunmetal: "#1F2933",
        charcoal: "#344250",
        englishViolet: "#544667",
        teal: "#138085",
        maxBlueGreen: "#2DBBC6",
        sunray: "#EEB462",
        battleshipGrey: "#888888",
        platinum: "#E6E6E6",
        cultured: "#F3F3F3",
        lightGrey: "#41505F",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
} satisfies Config;
