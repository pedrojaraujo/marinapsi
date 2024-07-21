/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        trebuchet: ["Trebuchet MS", "sans-serif"],
        cormorant: ["Cormorant", "serif"],
      },
      colors: {
        pcream: "#FFFBF5",
        pgreen: "#53582F",
        pyellow: "#E49806",
        pred: "#B94514",
        ppurple: "#411436",
        plightyellow: "#FFDFA3",
      },
      backgroundImage: {
        fita: "url('/fita-bg.svg')",
        fita2: "url('/fita-bg2.svg')",
        fita3: "url('/fita-bg3.svg')",
      },
      screens: {
        'lsm': '320px',
        'sm': '480px',  // Small screens
        'md': '768px',  // Medium screens
        'lg': '1024px', // Large screens
        'xl': '1280px', // Extra large screens
        '2xl': '1440px', // 2X large screens
        '3xl': '1920px', // 3X large screens
      },
      typography: {
        DEFAULT: {
          css: {
            'text-align': 'justify',
            'hyphens': 'none',
          },
        },
      },
    },
  },
  safelist: [
    'bg-pgreen',
    'bg-pyellow',
    'bg-pred',
    'bg-ppurple',
    'bg-plightyellow',
  ],
  plugins: [

  ],
};
