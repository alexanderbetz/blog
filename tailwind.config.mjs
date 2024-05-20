import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        fontSize: {
            base: ['var(--font-size)', 'var(--line-height)']
        },
        extend: {
            colors: {
                primary: 'hsl(var(--color) / <alpha-value>)'
            },
            fontFamily: {
                'serif': ['"Times New Roman"', ...defaultTheme.fontFamily.serif]
            }
        }
    },
    plugins: []
}
