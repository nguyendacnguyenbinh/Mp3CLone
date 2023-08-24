/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                'main-600': '#130c1c',
                'main-500': '#170f23',
                'main-400': '#221a2d',
                'main-300': '#393142',
                'bg-hover': '#3a3344',
                'link-text-hover': '#c273ed',
                'border-player': 'hsla(0,0%,100%,0.1)',
            },
            colors: {
                'main-600': '#130c1c',
                'main-500': '#170f23',
                'main-400': '#221a2d',
                'main-300': '#393142',
                'bg-hover': '#3a3344',
                'link-text-hover': '#c273ed',
                'border-player': 'hsla(0,0%,100%,0.1)',
            },

            keyframes: {
                'slide-left': {
                    '0%': {
                        '-webkit-transform': 'translateX(500px);',
                        transform: 'translateX(500px);',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0);',
                        transform: 'translateX(0);',
                    },
                },
                'slide-left2': {
                    '0%': {
                        '-webkit-transform': 'translateX(500px);',
                        transform: 'translateX(500px);',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0);',
                        transform: 'translateX(0);',
                    },
                },

                'slide-right': {
                    '0%': {
                        '-webkit-transform': ' translateX(-500px);',
                        transform: 'translateX(-500px);',
                    },
                    '100%': {
                        '-webkit-transform': 'translateX(0);',
                        transform: 'translateX(0);',
                    },
                },
            },
            animation: {
                'slide-right': 'slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left': 'slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
                'slide-left2': 'slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;',
            },
            flex: {
                4: '4 4 0%',
            },
        },
    },
    plugins: [],
};
