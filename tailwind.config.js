/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-purple": "#242038",
      "space-cadet": "#3B345B",
      "slate-blue": "#725AC1",
      "tropical-indigo": "#8D86C9",
      "white": "#FDFDFF",
      "aquamarine": "#00FFCD",
    },
  },
  plugins: [],
}
