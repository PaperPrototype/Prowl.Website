import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],

    theme: {
        extend: {
            animation: {
                "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
                "grid": "grid 40s linear infinite",
            },
            keyframes: {
                "border-beam": {
                  "100%": {
                    "offset-distance": "100%",
                  },
                },
                "grid": {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(-40%)" },
                },
            },
        }
    },

    plugins: []
} satisfies Config;
