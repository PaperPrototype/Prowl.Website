import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            animation: {
                grid: "grid 40s linear infinite",
            },
            keyframes: {
                grid: {
                "0%": { transform: "translateY(-50%)" },
                "100%": { transform: "translateY(-40%)" },
                },
            },
        }
    },

    plugins: []
} satisfies Config;
