const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            screens: {
                xs: "375px",
            },
            container: {
                center: true,
                padding: "2rem",
            },
            colors: {
                "ov-white": "#eef1f7",
                main: "#f23276",
                second: "#195cc5",
                "x-blue": "#273044",
                blueblack: {
                    100: "#E0E9F5",
                    200: "#C3D4EC",
                    300: "#94A7C6",
                    400: "#61708E",
                    500: "#273044",
                    600: "#1C243A",
                    700: "#131A30",
                    800: "#0C1227",
                    900: "#070C20",
                },
                pink: {
                    100: "#FDD8D8",
                    200: "#FCB2B9",
                    300: "#F88AA0",
                    400: "#F16B93",
                    500: "#E93D81",
                    600: "#C82C79",
                    700: "#A71E70",
                    800: "#871363",
                    900: "#6F0B5B",
                },
            },
        },
    },

    plugins: [],
};
