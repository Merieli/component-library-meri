/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
    screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
    },
    theme: {
        extend: {},
        colors: {},
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['winter', 'night'],
        darkTheme: 'night',
        prefix: 'dy-',
    },
};
