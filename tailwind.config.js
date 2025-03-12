/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0a192f',
          light: '#112240',
          dark: '#020c1b',
        },
        slate: {
          DEFAULT: '#8892b0',
          light: '#a8b2d1',
          lighter: '#ccd6f6',
          lightest: '#e6f1ff',
        },
        mint: {
          DEFAULT: '#64ffda',
          tint: 'rgba(100, 255, 218, 0.1)',
        },
        background: {
          DEFAULT: '#0a192f',
          secondary: '#112240',
        },
        text: {
          primary: '#e6f1ff',
          secondary: '#8892b0',
        },
        accent: {
          DEFAULT: '#64ffda',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        playfair: ['var(--font-playfair)', 'serif'],
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-sm': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-lg': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['1.875rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}
