import type {Config} from 'tailwindcss'
// import tailwind colors
import colors from 'tailwindcss/colors'
export default {
    content: [],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            'cyan': '#5FB4A2',
            'dark-blue': '#203A4C',
            'grayish-dark-blue': '#33323D',
            'very-light-gray': '#FAFAFA',
            'light-gray': '#EAEAEB',
            'bright-red': '#F43030',
            white: colors.white,
            black: colors.black,
            green: colors.green,
        },
        fontFamily: {
            sans: ['Public Sans', 'sans-serif'],
            serif: ['Ibarra Real Nova', 'serif'],
        },
        extend: {},
    },
    plugins: [],
} satisfies Config

