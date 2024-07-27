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
      colors: {
        tableGray:'#313131',
        codePurple:'#861DCE',
        abledPurple:'#3f0369',
        
        
      },
      borderColor: {
        purpleCode: '#291141', 
      },
      screens: {
        'tableOverFlow': '854px',
        'custom': '1542px',
        'socialMediaAdjust': '900px',
        'eventLogo': '1116px',
        'table-responsive': '892px',
        
        
      },
      fontFamily:{
        'inter': ['Inter', 'sans-serif'],
        'viga': ['Viga', 'sans-serif'],
        'quicksand':['Quicksand', 'sans-serif']
      },
      borderWidth: {
        '1': '1px',
        '10': '10px',
      },
      maxHeight:{
        '607': '607px'
      },
      spacing:{
        'card-width': '360px',
        'card-heihgt': '372px'
      }
    },
  },
  plugins: [],
};
export default config;
