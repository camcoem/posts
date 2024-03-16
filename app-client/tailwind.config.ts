import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        light: ['Inter', 'sans-serif'],
        serif: ['Inter', 'sans-serif'],
        bold: ['inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
        mono: ['monospaced'],
      },
      colors: {
        primary: {
          DEFAULT: '#1f1235',
        },
        main: {
          DEFAULT: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#67568c',
        },
        tertiary: {
          DEFAULT: '#ff6e6c',
        },
        highlight: {
          DEFAULT: '#fbdd74',
        },
        cardBackground: {
          DEFAULT: '#e2daeb',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
