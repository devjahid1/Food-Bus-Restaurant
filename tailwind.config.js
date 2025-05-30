/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        plusjakarta: ['Plus Jakarta Sans', 'sans-serif'],
        playwrite: ["Playwrite US Trad Guides", 'cursive']

      },
      backgroundImage: {
        'banner': "url('/src/assets/vv.png')",
        'mBanner': "url('/src/assets/mobile-banner.png')",
        'menu': "url('/src/assets/Rectangle 9.png')",
        'test': "url('/src/assets/Group 1.png')",
        'footerImg': "url('/src/assets/Rectangle 31.png')",
        'm1': "url('/src/assets/1.png')",
        'm2': "url('/src/assets/2.png')",
        'm3': "url('/src/assets/3.png')",
        'm4': "url('/src/assets/4.png')",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
