module.exports = {
    darkMode: 'media',
    mode: 'jit',
    plugins: [
        require('tailwindcss-only-child'),
        require('@tailwindcss/typography'),
    ],
    purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                // Red theme:
                brand: '#ff1744',
                coffee: '#8a0020',
                // Green theme:
                // brand: emerald['800'],
                // coffee: '#4e342e',
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'currentColor',
                        lineHeight: '1.5',
                        a: {
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'none',
                            },
                        },
                        'h1,h2,h3,h4,h5,i,strong': {
                            color: 'currentColor',
                        },
                    },
                },
            },
        },
    },
    variants: {
        borderRadius: ['responsive', 'only'],
    },
};
