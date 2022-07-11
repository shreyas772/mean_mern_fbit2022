/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [
    require('tw-elements/dist/plugin')
  ],

  theme: {
    extend: {
      height: {
        'h120': '20rem',
      },

     
      width:{
        '500':'500px'
      },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'fbox':'#F8F7F5',
      'uicolor':'#8D3DAF',
      'navitem':'#7faac9'
    },

    transformOrigin: {
      'torigin': '50% 75%',
    },
  },
},
}
