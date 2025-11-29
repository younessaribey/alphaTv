/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#7B61FF',
                    dark: '#6344E8',
                    light: '#9680FF',
                },
                dark: {
                    DEFAULT: '#10101A',
                    lighter: '#1A1A2E',
                    card: '#16162A',
                },
                border: 'rgba(255, 255, 255, 0.1)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
