const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            container: {
                center: true,
                padding: '2rem',
            },
            colors: {
                'ov-white': '#eef1f7',
                'main': '#f23276',
                'second': '#195cc5',
                'x-blue': '#273044',
            }
        },
    },

    plugins: [],
};
