import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        kumbh: ['var(--font-kumbh-sans)'],
      },
    },
  },
  plugins: [],
};
export default config;
