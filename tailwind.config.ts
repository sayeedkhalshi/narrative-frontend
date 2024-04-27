import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            keyframes: {
                glow: {
                    "0%, 100%": {
                        textShadow:
                            "0 0 10px #2e6a25, 0 0 20px #2e6a25, 0 0 30px #2e6a25, 0 0 40px #2e6a25",
                    },
                    "50%": {
                        textShadow:
                            "0 0 20px #2e6a25, 0 0 30px #2e6a25, 0 0 40px #2e6a25, 0 0 50px #2e6a25, 0 0 60px #2e6a25",
                    },
                },
            },
            animation: {
                glow: "glow 2s infinite",
            },
        },
    },
    plugins: [],
};
export default config;
