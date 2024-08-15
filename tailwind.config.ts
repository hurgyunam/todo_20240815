import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      bg: {
        black: '#161A1D',
        gray: '#1D2125',
        lightgray: '#22272B',
        red: '#F15B50',
        blue: '#1865FF',
        blue2: '#579DFF',
        skyblue: '#4BADE8',
      },
      font: {
        white: '#B4C0CC',
        gray: '#B5C1CE',
      },
      border: {
        gray: '#374049'
      }
    }
  },
  plugins: [],
};
export default config;
