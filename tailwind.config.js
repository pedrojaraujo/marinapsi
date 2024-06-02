/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pcream: "#FFFBF5",
        pgreen: "#53582F",
        pyellow: "#E49806",
        pred: "#B94514",
        ppurple: "#411436",
      },
    },
  },
  plugins: [],
};
