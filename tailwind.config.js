/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens:{
        sm:{min:"281px",max:"639px"},
        ss:{min:"150px",max:"280px"}
      }
    },
  },
  plugins: [],
}

