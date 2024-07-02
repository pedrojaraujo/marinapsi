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
        fita: "url('/fita-bg.png')",
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
  plugins: [],
};
