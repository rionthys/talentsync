/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                'main': '#e5e5e5',
                'dk-gray': '#505458',
                'accent': '#ee6e73',
                'second': '#787787',
            },
        },
        container: {
            padding: '1rem',
        },
        fontFamily: {
            'sans': ['Josefin Sans'],
            'arimo': 'Arimo',
        }
    },
    plugins: [],
}

