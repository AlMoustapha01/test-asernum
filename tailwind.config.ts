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
      keyframes: {
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        wave: {
          "0%, 100%": {
            height: "5px",
            transform: "translateY(0px)",
            backgroundColor: "#03a9f4",
          },
          "25%": {
            height: "30px",
            transform: "translateY(15px)",
            backgroundColor: "#81d4fa",
          },
          "50%": {
            height: "5px",
            transform: "translateY(0px)",
            backgroundColor: "#03a9f4",
          },
        },

        "rotate-and-reverse": {
          "0%": { transform: "rotate(0deg)", fill: "black" },
          "20%": { transform: "rotate(360deg)", fill: "#e00000" },
          "50%": { transform: "rotate(360deg)", fill: "#e00000" },
          "70%": { transform: "rotate(360deg)", fill: "#e00000" },
          "90%": { transform: "rotate(0deg)", fill: "#e00000" },
          "100%": { transform: "rotate(0deg)", fill: "black" },
        },
      },
      animation: {
        "spin-2s": "spin 0.2s linear",
        "rotate-reverse-4s": "rotate-and-reverse 4s ease-in-out",
        wave: "wave 1.5s infinite ease-in-out",
      },
      backgroundImage: (theme) => ({
        "login-web-bg-light": "url('../assets/images/White-mode-cover.png')",
        "login-web-bg-dark": "url('../assets/images/dark-mode-cover.png')",
        "card-cover": "url('../assets/images/cover-card-2.png')",
      }),
      textColor: {
        danger: "#e00000",
        "gray-light": "#f0f0f0",
        "gray-medium": "#c1c1c1",
      },
      backgroundColor: {
        danger: "#e00000",
        "gray-light": "#f0f0f0",
        "gray-medium": "#c1c1c1",
        "gray-extralight": "#fbfbfb",
      },
      borderColor: {
        danger: "#e00000",
        "gray-light": "#f0f0f0",
        "gray-medium": "#c1c1c1",
        "gray-light-100":"#efefef"
      },
      ringColor: {
        danger: "#e00000",
        "gray-light": "#f0f0f0",
        "gray-medium": "#c1c1c1",
      },
      fill: {
        danger: "#e00000",
        "gray-light": "#f0f0f0",
        "gray-medium": "#c1c1c1",
      },
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
