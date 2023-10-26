import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    colors: {
        'cyan': '#5FB4A2',
        'dark-blue': '#203A4C',
        'grayish-dark-blue': '#33323D',
        'very-light-gray': '#D7D7D7',
        'light-gray': '#EAEAEB',
        'bright-red': '#F43030',
    },
      fontFamily: {
          sans: ['Public Sans', 'sans-serif'],
          serif: ['Ibarra Real Nova', 'serif'],
      },
    extend: {},
  },
  plugins: [],
} satisfies Config

