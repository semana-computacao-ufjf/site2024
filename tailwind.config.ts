import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        tableGray: "#313131",
        codePurple: "#861DCE",
        abledPurple: "#3f0369",
        darkerPurple: "#291141",
      },
      borderColor: {
        purpleCode: "#291141",
      },
      screens: {
        sectionBreak: "875px",
        custom: "1542px",
        socialMediaAdjust: "900px",
        eventLogo: "1116px",
        "card-responsive": "1063px",
        "card-responsive2": "978px",
        "card-responsive3": "875px",
        "table-responsive": "892px",
      },
      borderWidth: {
        "1": "1px",
        "10": "10px",
      },
      maxHeight: {
        "607": "607px",
      },
      spacing: {
        "card-width": "360px",
        "card-heihgt": "372px",
      },
    },
  },
  plugins: [],
};
export default config;
