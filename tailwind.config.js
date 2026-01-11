/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tier1: '#FFD700',
        tier2a: '#C0C0C0',
        tier2b: '#A8A8A8',
        tier3: '#CD7F32',
        tier4: '#B87333',
        tier5: '#6B7280',
      }
    },
  },
  plugins: [],
}
