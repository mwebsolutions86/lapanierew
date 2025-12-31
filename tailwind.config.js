/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          light: '#D4A373',
          DEFAULT: '#8D6E63',
          dark: '#3E2723',
        },
        'cream': '#FAFAF5',
      },
      animation: {
        'typewriter': 'typewriter 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
        'float': 'float 6s ease-in-out infinite',
        'appear': 'appear 0.8s ease-out forwards', // <--- NOUVELLE ANIMATION
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' }, // Déplace tout le bloc vers la gauche
      },
      
        typewriter: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
          
        },
       

        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        appear: { // <--- LES KEYFRAMES QUI ÉTAIENT DANS LE JSX
          '0%': { opacity: '0', transform: 'translateY(10px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        }
      }
    },
  },
  plugins: [],
};