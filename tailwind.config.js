// prettier-ignore
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      'white': "#ffffff",
      'black': {
        100: '#1F1F1F',
        400: '#141414',
        900: '#000000',
      },
      'cyan': {
        100: '#00CBF1',
        200: '#0598B6',
        300: '#008098',
      },
      'gray': {
        100: '#A0A0A0',
        200: '#858585',
        300: '#656565',
        400: '#434343',
        500: '#353535',
      },
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif'],
        'arimo': ['Arimo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
