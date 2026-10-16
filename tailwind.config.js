/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1020',
          50: '#1a2138',
          100: '#161d33',
          200: '#131a2e',
          300: '#0f1525',
          400: '#0c1120',
          500: '#0B1020',
          600: '#080d1a',
          700: '#060a15',
        },
        darkbg: '#101827',
        cyan: {
          DEFAULT: '#00D9FF',
          glow: '#00D9FF',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          glow: '#8B5CF6',
        },
        offwhite: '#F8FAFC',
        muted: '#94A3B8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in-delay-1': 'fadeInUp 0.8s ease-out 0.15s forwards',
        'fade-in-delay-2': 'fadeInUp 0.8s ease-out 0.3s forwards',
        'fade-in-delay-3': 'fadeInUp 0.8s ease-out 0.45s forwards',
        'fade-in-delay-4': 'fadeInUp 0.8s ease-out 0.6s forwards',
        'fade-in-delay-5': 'fadeInUp 0.8s ease-out 0.75s forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse': 'spinReverse 25s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
        'scroll-indicator': 'scrollIndicator 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        spinReverse: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scrollIndicator: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(12px)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
