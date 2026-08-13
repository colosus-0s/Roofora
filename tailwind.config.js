/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0F172A',
        'accent-blue': '#2563EB',
        'action-orange': '#EA580C',
        'action-gold': '#D97706',
        'neutral-bg': '#F8FAFC',
        'neutral-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
