/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#02030a',
        carbon: '#070b15',
        cyan: {
          neon: '#00f5ff',
        },
        blue: {
          electric: '#1877ff',
        },
        purple: {
          deep: '#7b2cff',
        },
        magenta: {
          hot: '#ff2ef7',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'Rajdhani', 'system-ui', 'sans-serif'],
        body: ['Rajdhani', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 24px rgba(0,245,255,.35), 0 0 64px rgba(123,44,255,.22)',
        panel: 'inset 0 0 0 1px rgba(0,245,255,.2), 0 20px 70px rgba(0,0,0,.5)',
      },
      backgroundImage: {
        grid:
          'linear-gradient(rgba(0,245,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,.08) 1px, transparent 1px)',
      },
      keyframes: {
        glowPulse: {
          '0%,100%': { opacity: '.65', filter: 'drop-shadow(0 0 12px #00f5ff)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 28px #ff2ef7)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        rain: {
          '0%': { backgroundPosition: '0 -100vh' },
          '100%': { backgroundPosition: '0 100vh' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        glowPulse: 'glowPulse 3s ease-in-out infinite',
        scan: 'scan 5s linear infinite',
        rain: 'rain 1.2s linear infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
