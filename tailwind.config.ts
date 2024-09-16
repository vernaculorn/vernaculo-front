import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carrossel: "rgb(202 138 4 / 0.3)",
        box_video: '#0a162b'
      },
      listStyleImage: {
        checkmark: 'url("/icons/listicon.png")',
      },
      width:{
        '100': '30rem',
      },
      height: {
        '100': '30rem',
        '120': '42rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      brightness: {
        35: '.35',
      },
    },
  },
  plugins: [],
};
export default config;
