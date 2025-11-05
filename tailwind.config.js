/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stake-dark': '#1A242D',
        'stake-dark-secondary': '#212E3B',
        'stake-dark-tertiary': '#2C3A4B',
        'stake-green': '#39FF14',
        'stake-blue': '#3B82F6',
        'stake-text-primary': '#FFFFFF',
        'stake-text-secondary': '#A0AEC0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #39FF14, 0 0 10px #39FF14, 0 0 15px #39FF14' },
          '100%': { boxShadow: '0 0 10px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14' },
        }
      }
    },
  },
  plugins: [],
}
