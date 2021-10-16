module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '100': '30rem',
      },

      colors: {
        primary_bg: "#26225E",
        primary_text: "#3A2752",
        text_black: '#2F2F2F',
        white_light: '#fff6',
        black_light: '#0005',
      },
      backgroundImage: {
        'hero-pattern': "url('/assets/video/doc_2021-07-01_13-30-30.mp4')",
      },

      zIndex: {
        '-1': '-1',
       },
       height: {
        '100': '713px'
       }
    },

    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '639px'},
    },

    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },

      
    fontFamily: {
      montserrat: ['Montserrat'],
      muller: ['Muller', 'serif'],
      },

      container: {
        center: true,
        maxWidth: '1920px',
      },
  },

  variants: {
    extend: {
    },
  },
  plugins: [],
}
