/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'seismic-bg': '#0b0e14',
        'seismic-surface-1': '#161b22',
        'seismic-surface-2': '#21262d',
        'seismic-danger': '#f43f5e',
        'seismic-danger-light': '#fda4af',
        'seismic-warning': '#f59e0b',
        'seismic-cyan': '#06b6d4',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'data': ['"JetBrains Mono"', 'monospace'],
        'label': ['Inter', 'sans-serif'],
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}
