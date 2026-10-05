/** @type {import('tailwindcss').Config} */
// Colours and fonts point at the tokens in /tokens.css, so any utility class
// stays inside the design system (see design.md). Most styling lives in
// src/styles/global.css; Tailwind mainly supplies the preflight reset.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
      colors: {
        paper: 'var(--color-paper)',
        'paper-2': 'var(--color-paper-2)',
        ink: 'var(--color-ink)',
        'ink-2': 'var(--color-ink-2)',
        muted: 'var(--color-muted)',
        rule: 'var(--color-rule)',
        accent: 'var(--color-accent)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
