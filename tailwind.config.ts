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
        "login-web-bg-light": "url('../assets/images/White-mode-cover.png')",
        "login-web-bg-dark": "url('../assets/images/dark-mode-cover.png')",
        "card-cover": "url('../assets/images/cover-card-2.png')",
      }),
      textColor: {
        danger: "#e00000",
        "gray-light": "#f0f0f0",
      },
      backgroundColor:{
        danger: "#e00000",
        "gray-light": "#f0f0f0",
      }
    },
    variants: {
      extend: {
        backgroundImage: ["dark"],
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            danger: {
              DEFAULT: "#e00000",
              foreground: "#000",
            },
          },
        },
        dark: {
          layout: {},
          colors: {},
        },
      },
    }),
  ],
};
export default config;
