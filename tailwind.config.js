module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      minWidth: {
        '1/5': '20%'
      },
      colors: {
        theme: {
          link: {
            DEFAULT: 'rgb(96, 165, 250)',
            hover: 'rgb(96, 165, 250)',
          },
          button: {
            DEFAULT: 'rgb(59, 130, 246)',
            hover: 'rgb(68 107 171)'
          },
          focus: 'rgb(199, 210, 254)',
          grey: 'rgb(107, 107, 107)',
          border: 'rgb(209, 213, 219)',
          sidebar: 'rgb(245, 245, 245)'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
