import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        brand: "#845EC2",
        primary: "#D3ECF7",
        secondary: "#1D87A4"
      },
      spacing:{
        xPadding: "5.17%"
      }
    },
  },
  plugins: [],
};
export default config;
