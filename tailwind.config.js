/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        scaleup:{
          '0%': { width: '90%', height: '90%'},
          '50%': { width: '105%', height: '105%'},
          '100%': { width: '100%', height: '100%'}
        },

        spreadcenter:{
          '0%': {padding: '20px'},
          '100%': {padding: '40px'}
        }
      },
      animation:{
        'scale-up': 'scaleup 0.5s linear 1 both',
        'spread-center': 'spreadcenter 1s linear both'
      }
    },
  },
  plugins: [],
}