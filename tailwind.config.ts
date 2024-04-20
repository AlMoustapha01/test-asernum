import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "login-web-bg-light":
          "url('./src/assets/images/White-mode-cover.png')",
        "login-web-bg-dark":
          "url('./src/assets/images/dark-mode-cover.png')",
      }),
    },
    variants: {
      extend: {
        backgroundImage: ['dark'],
      },
    },
  },
  plugins: [nextui()],
};
export default config;
