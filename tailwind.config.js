/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'millionaire-gold': '#FFD700',
        'millionaire-blue': '#1E3A8A',
        'millionaire-dark': '#0F172A',
        'millionaire-green': '#10B981',
        'millionaire-red': '#EF4444',
      },
      fontFamily: {
        'game': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 1s ease-in-out infinite',
        'slideInUp': 'slideInUp 0.6s ease-out',
        'fadeIn': 'fadeIn 0.8s ease-out',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulseGlow': 'pulseGlow 2s ease-in-out infinite',
        'gradientShift': 'gradientShift 15s ease infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(255, 215, 0, 0.3)',
        'glow-lg': '0 0 40px rgba(255, 215, 0, 0.6), 0 0 60px rgba(255, 215, 0, 0.3)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'glass-hover': '0 12px 40px rgba(0, 0, 0, 0.4)',
      },
      scale: {
        '102': '1.02',
      },
      maxWidth: {
        'mobile': '28rem',
      },
    },
  },
  plugins: [],
} 