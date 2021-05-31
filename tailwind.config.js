const { trueGray } = require('tailwindcss/colors');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    darkMode: 'class',
    mode: 'jit',
    plugins: [],
    purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
    theme: {
        colors: {
            ...colors,
            gray: trueGray,
        },
        extend: {
            colors: {
                'brewtime-red': '#ff1744',
            },
        },
    },
    variants: {},
};
