import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#fea21a', // A slightly deeper brown for a rich base
        secondary: '#d6ad08', // A more vibrant gold for better contrast
        dark: '#1f1f1f', // A slightly darker gray for a deeper base
        accent: '#484848', // A slightly darker gray for a stronger accent
        muted: '#f3f3f3', // A slightly lighter gray for muted elements
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '8rem',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
} satisfies Config;
