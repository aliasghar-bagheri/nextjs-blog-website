import type { Config } from 'tailwindcss';

type WithOpacityType = (variableName: string) => (params: { opacityValue?: number }) => string;

const withOpacity: WithOpacityType =
  (variableName) =>
  ({ opacityValue }) =>
    opacityValue !== undefined
      ? `rgba(var(${variableName}), ${opacityValue})`
      : `rgb(var(${variableName}))`;

const withDefaultOpacity = (variableName: string) => withOpacity(variableName)({ opacityValue: 1 });

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: withDefaultOpacity('--background-app'),
        // Primary color
        'primary-55': withDefaultOpacity('--primary-55'),
        'primary-60': withDefaultOpacity('--primary-60'),
        'primary-70': withDefaultOpacity('--primary-70'),
        'primary-80': withDefaultOpacity('--primary-80'),
        'primary-90': withDefaultOpacity('--primary-90'),
        'primary-95': withDefaultOpacity('--primary-95'),
        'primary-97': withDefaultOpacity('--primary-97'),
        'primary-99': withDefaultOpacity('--primary-99'),
        // Dark color
        'dark-08': withDefaultOpacity('--dark-08'),
        'dark-10': withDefaultOpacity('--dark-10'),
        'dark-15': withDefaultOpacity('--dark-15'),
        'dark-20': withDefaultOpacity('--dark-20'),
        'dark-25': withDefaultOpacity('--dark-25'),
        'dark-30': withDefaultOpacity('--dark-30'),
        'dark-35': withDefaultOpacity('--dark-35'),
        'dark-40': withDefaultOpacity('--dark-40'),
        // Gray color
        'gray-50': withDefaultOpacity('--gray-50'),
        'gray-60': withDefaultOpacity('--gray-60'),
        'gray-70': withDefaultOpacity('--gray-70'),
        'gray-80': withDefaultOpacity('--gray-80'),
        'gray-90': withDefaultOpacity('--gray-90'),
        'gray-95': withDefaultOpacity('--gray-95'),
        'gray-97': withDefaultOpacity('--gray-97'),
        'gray-99': withDefaultOpacity('--gray-99'),

        input: withDefaultOpacity('--input'),
        border: withDefaultOpacity('--border'),
        'shadow-input': withDefaultOpacity('--shadow-input'),
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
