/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                almostWhite: 'hsl(0, 0%, 98%)',
                mediumGray: 'hsl(0, 0%, 41%)',
                almostBlack: 'hsl(0, 0%, 8%)',
                linkColor: 'hsl(228, 45%, 44%)',
            },
            keyframes: {
                slide: {
                    0: {
                        right: '100%',
                    },
                    100: {
                        right: 0,
                    },
                },
            },
        },
    },
    plugins: [],
}
