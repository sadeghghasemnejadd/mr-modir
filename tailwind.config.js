/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                box: '0 0 0px 1px rgba(0,0,0,0.2)',
                'box-light': '0 0 0px 1px rgba(255,255,255,0.2)',
            },
            keyframes: {
                show: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
                'show-height': {
                    '0%': { maxHeight: 0 },
                    '100%': { maxHeight: '500px' },
                },
            },
            animation: {
                show: 'show 0.1s ease-in-out',
                'show-height': 'show-height 1s ease-in-out forwards',
            },
            fontFamily: {
                sans: 'iransansfa',
            },
            colors: {
                primary: {
                    50: 'var(--color-primary-50)',
                    100: 'var(--color-primary-100)',
                    200: 'var(--color-primary-200)',
                    300: 'var(--color-primary-300)',
                    400: 'var(--color-primary-400)',
                    500: 'var(--color-primary-500)',
                    600: 'var(--color-primary-600)',
                    700: 'var(--color-primary-700)',
                    800: 'var(--color-primary-800)',
                    900: 'var(--color-primary-900)',
                    950: 'var(--color-primary-950)',
                },
            },
        },
    },
    darkMode: ['class'],
    plugins: [],
}
