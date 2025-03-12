import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        background: '#0a192f',
      },
      colors: {
        text: {
          primary: '#e6f1ff',
          secondary: '#8892b0'
        },
        accent: '#64ffda',
        primary: {
          DEFAULT: '#0070f3',
          dark: '#0051a8',
          light: '#3291ff',
        },
        foreground: {
          DEFAULT: '#000000',
          dark: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        'playfair': ['var(--font-playfair)', 'serif'],
        'jakarta': ['var(--font-jakarta)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
