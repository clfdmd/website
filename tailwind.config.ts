import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        gray: {
          dark: '#2D2D2D',
          light: '#F5F5F5',
        },
        pink: {
          rose: '#E8B4B8',
          light: '#FFF5F7',
        },
        black: {
          pure: '#0A0A0A',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
